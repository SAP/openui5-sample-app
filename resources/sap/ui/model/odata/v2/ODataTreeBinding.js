/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/Log","sap/base/util/deepExtend","sap/base/util/each","sap/base/util/isEmptyObject","sap/ui/model/ChangeReason","sap/ui/model/Context","sap/ui/model/Filter","sap/ui/model/FilterProcessor","sap/ui/model/FilterType","sap/ui/model/Sorter","sap/ui/model/SorterProcessor","sap/ui/model/TreeBinding","sap/ui/model/TreeBindingUtils","sap/ui/model/odata/CountMode","sap/ui/model/odata/ODataUtils","sap/ui/model/odata/OperationMode"],function(e,t,i,s,r,o,a,n,h,l,d,f,u,p,g,c,y){"use strict";var v=u.extend("sap.ui.model.odata.v2.ODataTreeBinding",{constructor:function(e,i,s,r,o,a){u.apply(this,arguments);this.mParameters=this.mParameters||o||{};this.sGroupId=undefined;this.sRefreshGroupId=undefined;this.oFinalLengths={};this.oLengths={};this.oKeys={};this.bNeedsUpdate=false;this._bRootMissing=false;this.bSkipDataEvents=false;if(a instanceof d){a=[a]}this.aSorters=a||[];this.sFilterParams="";this.mNormalizeCache={};r=r||[];if(r instanceof n){r=[r]}if(r.length>1){r=[h.groupFilters(r)]}this.aApplicationFilters=r;this.oModel.checkFilter(this.aApplicationFilters);this.mRequestHandles={};this.oRootContext=null;this.iNumberOfExpandedLevels=o&&o.numberOfExpandedLevels||0;this.iRootLevel=o&&o.rootLevel||0;this.sCountMode=o&&o.countMode||this.oModel.sDefaultCountMode;if(this.sCountMode==g.None){t.fatal("To use an ODataTreeBinding at least one CountMode must be supported by the service!")}if(o){this.sGroupId=o.groupId||o.batchGroupId}this.bInitial=true;this._mLoadedSections={};this._iPageSize=0;this.sOperationMode=o&&o.operationMode||this.oModel.sDefaultOperationMode;if(this.sOperationMode===y.Default){this.sOperationMode=y.Server}this.bClientOperation=this.sOperationMode===y.Client;this.iThreshold=o&&o.threshold||0;this.bThresholdRejected=false;this.iTotalCollectionCount=null;this.bUseServersideApplicationFilters=o&&o.useServersideApplicationFilters||false;this.bUsePreliminaryContext=this.mParameters.usePreliminaryContext||e.bPreliminaryContext;this.oAllKeys=null;this.oAllLengths=null;this.oAllFinalLengths=null;this.bTransitionMessagesOnly=!!this.mParameters.transitionMessagesOnly;this.bRefresh=false;this.iMaximumTopValue=5e3}});v.DRILLSTATES={Collapsed:"collapsed",Expanded:"expanded",Leaf:"leaf"};v.prototype._getHeaders=function(){return this.bTransitionMessagesOnly?{"sap-messages":"transientOnly"}:undefined};v.prototype._getNodeFilterParams=function(e){var t=e.isRoot?this.oTreeProperties["hierarchy-node-for"]:this.oTreeProperties["hierarchy-parent-node-for"];var i=this._getEntityType();return c._createFilterParams(new n(t,"EQ",e.id),this.oModel.oMetadata,i)};v.prototype._getLevelFilterParams=function(e,t){var i=this._getEntityType();return c._createFilterParams(new n(this.oTreeProperties["hierarchy-level-for"],e,t),this.oModel.oMetadata,i)};v.prototype._loadSingleRootNodeByNavigationProperties=function(e,t){var i=this,s;if(this.mRequestHandles[t]){this.mRequestHandles[t].abort()}s=this.sRefreshGroupId?this.sRefreshGroupId:this.sGroupId;var r=this.getResolvedPath();if(r){this.mRequestHandles[t]=this.oModel.read(r,{groupId:s,headers:this._getHeaders(),success:function(s){var r=i._getNavPath(i.getPath());if(s){var o=s;var a=i.oModel._getKey(o);var n=i.oModel.getContext("/"+a);i.oRootContext=n;i._processODataObject(n.getObject(),e,r)}else{i._bRootMissing=true}i.bNeedsUpdate=true;delete i.mRequestHandles[t];i.oModel.callAfterUpdate(function(){i.fireDataReceived({data:s})})},error:function(e){if(e&&e.statusCode!=0&&e.statusText!="abort"){i.bNeedsUpdate=true;i._bRootMissing=true;delete i.mRequestHandles[t];i.fireDataReceived()}}})}};v.prototype.getRootContexts=function(e,t,i){var s=null,r={numberOfExpandedLevels:this.iNumberOfExpandedLevels},o=[];if(this.isInitial()){return o}e=e||0;t=t||this.oModel.sizeLimit;i=i||0;var a=""+s+"-"+e+"-"+this._iPageSize+"-"+i;if(this.bHasTreeAnnotations){this.bDisplayRootNode=true;o=this._getContextsForNodeId(null,e,t,i)}else{s=this.getResolvedPath();var n=this.oModel.isList(this.sPath,this.getContext());if(n){this.bDisplayRootNode=true}if(this.bDisplayRootNode&&!n){if(this.oRootContext){return[this.oRootContext]}else if(this._bRootMissing){return[]}else{this._loadSingleRootNodeByNavigationProperties(s,a)}}else{r.navPath=this._getNavPath(this.getPath());if(!this.bDisplayRootNode){s+="/"+r.navPath}o=this._getContextsForNodeId(s,e,t,i,r)}}return o};v.prototype.getNodeContexts=function(e,t,i,s){var r,o={};if(this.isInitial()){return[]}if(this.bHasTreeAnnotations){r=this.oModel.getKey(e);o.level=parseInt(e.getProperty(this.oTreeProperties["hierarchy-level-for"]))+1}else{var a=this._getNavPath(e.getPath());if(!a){return[]}r=this.oModel.resolve(a,e);o.navPath=this.oNavigationPaths[a]}return this._getContextsForNodeId(r,t,i,s,o)};v.prototype.hasChildren=function(e){var i;if(this.bHasTreeAnnotations){if(!e){return false}var s=e.getProperty(this.oTreeProperties["hierarchy-drill-state-for"]);var r=this.oModel.getKey(e);i=this.oLengths[r];if(i===0&&this.oFinalLengths[r]){return false}if(s==="expanded"||s==="collapsed"){return true}else if(s==="leaf"){return false}else{t.warning("The entity '"+e.getPath()+"' has not specified Drilldown State property value.");if(s===undefined||s===""){return true}return false}}else{if(!e){return this.oLengths[this.getPath()]>0}i=this.oLengths[e.getPath()+"/"+this._getNavPath(e.getPath())];return i!==0}};v.prototype.getChildCount=function(e){if(this.bHasTreeAnnotations){var t;if(!e){t=null}else{t=this.oModel.getKey(e)}return this.oLengths[t]}else{if(!e){if(!this.bDisplayRootNode){return this.oLengths[this.getPath()+"/"+this._getNavPath(this.getPath())]}else{return this.oLengths[this.getPath()]}}return this.oLengths[e.getPath()+"/"+this._getNavPath(e.getPath())]}};v.prototype._getContextsForNodeId=function(e,t,i,s,r){var o=[],a;if(this.sOperationMode==y.Auto){if(this.iTotalCollectionCount==null){if(!this.bCollectionCountRequested){this._getCountForCollection();this.bCollectionCountRequested=true}return[]}}t=t||0;i=i||this.oModel.iSizeLimit;s=s||0;if(this.sOperationMode==y.Auto){if(this.iThreshold>=0){s=Math.max(this.iThreshold,s)}}if(!this._mLoadedSections[e]){this._mLoadedSections[e]=[]}if(this.oFinalLengths[e]&&this.oLengths[e]<t+i){i=Math.max(this.oLengths[e]-t,0)}var n=this;var h=function(t){for(var i=0;i<n._mLoadedSections[e].length;i++){var s=n._mLoadedSections[e][i];if(t>=s.startIndex&&t<s.startIndex+s.length){return true}}return false};var l=[];var d=Math.max(t-s-this._iPageSize,0);if(this.oKeys[e]){var f=t+i+s;if(this.oLengths[e]){f=Math.min(f,this.oLengths[e])}for(d;d<f;d++){a=this.oKeys[e][d];if(!a){if(!this.bClientOperation&&!h(d)){l=p.mergeSections(l,{startIndex:d,length:1})}}if(d>=t&&d<t+i){if(a){const e=this.oModel.resolveDeep(this.sPath,this.oContext)+a.slice(a.indexOf("("));o.push(this.oModel.getContext("/"+a,e))}else{o.push(undefined)}}}var u=Math.max(t-s-this._iPageSize,0);var g=t+i+s;var c=l[0]&&l[0].startIndex===u&&l[0].startIndex+l[0].length===g;if(l.length>0&&!c){d=Math.max(l[0].startIndex-s-this._iPageSize,0);var m=l[0].startIndex;for(d;d<m;d++){a=this.oKeys[e][d];if(!a){if(!h(d)){l=p.mergeSections(l,{startIndex:d,length:1})}}}d=l[l.length-1].startIndex+l[l.length-1].length;var P=d+s+this._iPageSize;if(this.oLengths[e]){P=Math.min(P,this.oLengths[e])}for(d;d<P;d++){a=this.oKeys[e][d];if(!a){if(!h(d)){l=p.mergeSections(l,{startIndex:d,length:1})}}}}}else if(!h(t)){var C=t-d;l=p.mergeSections(l,{startIndex:d,length:i+C+s})}if(this.oModel.getServiceMetadata()){if(l.length>0){var _=[];var R="";if(this.bHasTreeAnnotations){if(this.sOperationMode=="Server"||this.bUseServersideApplicationFilters){R=this.getFilterParams()}if(e){R=R?"%20and%20"+R:"";var b=this.oModel.getContext("/"+e);var T=b.getProperty(this.oTreeProperties["hierarchy-node-for"]);var M=this._getNodeFilterParams({id:T});_.push("$filter="+M+R)}else if(e==null){var L="";if(!this.bClientOperation||this.iRootLevel>0){var x=this.bClientOperation?"GE":"EQ";L=this._getLevelFilterParams(x,this.iRootLevel)}if(L||R){if(R&&L){R="%20and%20"+R}_.push("$filter="+L+R)}}}else{R=this.getFilterParams();if(R){_.push("$filter="+R)}}if(this.sCustomParams){_.push(this.sCustomParams)}if(!this.bClientOperation){for(d=0;d<l.length;d++){var F=l[d];this._mLoadedSections[e]=p.mergeSections(this._mLoadedSections[e],{startIndex:F.startIndex,length:F.length});this._loadSubNodes(e,F.startIndex,F.length,0,_,r,F)}}else if(!this.oAllKeys&&!this.mRequestHandles[v.REQUEST_KEY_CLIENT]){this._loadCompleteTreeWithAnnotations(_)}}}return o};v.prototype._getCountForCollection=function(){if(!this.bHasTreeAnnotations||this.sOperationMode!=y.Auto){t.error("The Count for the collection can only be retrieved with Hierarchy Annotations and in OperationMode.Auto.");return}var e=[];function i(e){var t=e.__count?parseInt(e.__count):parseInt(e);this.iTotalCollectionCount=t;if(this.sOperationMode==y.Auto){if(this.iTotalCollectionCount<=this.iThreshold){this.bClientOperation=true;this.bThresholdRejected=false}else{this.bClientOperation=false;this.bThresholdRejected=true}this._fireChange({reason:o.Change})}}function s(e){if(e&&e.statusCode===0&&e.statusText==="abort"){return}var i="Request for $count failed: "+e.message;if(e.response){i+=", "+e.response.statusCode+", "+e.response.statusText+", "+e.response.body}t.warning(i)}var r=this.getResolvedPath();var a="";if(this.iRootLevel>0){a=this._getLevelFilterParams("GE",this.getRootLevel())}var n="";if(this.bUseServersideApplicationFilters){n=this.getFilterParams()}if(a||n){if(n&&a){n="%20and%20"+n}e.push("$filter="+a+n)}var h="";let l;if(this.sCountMode==g.Request||this.sCountMode==g.Both){h="/$count"}else if(this.sCountMode==g.Inline||this.sCountMode==g.InlineRepeat){e.push("$top=0");e.push("$inlinecount=allpages");l=this._getHeaders()}if(r){this.oModel.read(r+h,{headers:l,urlParameters:e,success:i.bind(this),error:s.bind(this),groupId:this.sRefreshGroupId?this.sRefreshGroupId:this.sGroupId})}};v.prototype._getCountForNodeId=function(e){var i=this,s;var r=[];function o(t){i.oFinalLengths[e]=true;i.oLengths[e]=parseInt(t)}function a(e){if(e&&e.statusCode===0&&e.statusText==="abort"){return}var i="Request for $count failed: "+e.message;if(e.response){i+=", "+e.response.statusCode+", "+e.response.statusText+", "+e.response.body}t.warning(i)}var n;var h=this.getFilterParams()||"";var l="";if(this.bHasTreeAnnotations){n=this.getResolvedPath();if(e!=null){const t=this.oModel.getContext("/"+e);const i=t.getProperty(this.oTreeProperties["hierarchy-node-for"]);l=this._getNodeFilterParams({id:i})}else{l=this._getLevelFilterParams("EQ",this.getRootLevel())}}else{n=e}if(l||h){var d="";if(l&&h){d="%20and%20"}h="$filter="+h+d+l;r.push(h)}if(n){s=this.sRefreshGroupId?this.sRefreshGroupId:this.sGroupId;this.oModel.read(n+"/$count",{urlParameters:r,success:o,error:a,sorters:this.aSorters,groupId:s})}};v.prototype._getParentMap=function(e){var i={};for(var s=0;s<e.length;s++){var r=e[s][this.oTreeProperties["hierarchy-node-for"]];if(i[r]){t.warning("ODataTreeBinding: Duplicate key: "+r+"!")}i[r]=this.oModel._getKey(e[s])}return i};v.prototype._createKeyMap=function(e,t){if(e&&e.length>0){var i=this._getParentMap(e),s={};for(var r=t?1:0;r<e.length;r++){var o=e[r][this.oTreeProperties["hierarchy-parent-node-for"]],a=i[o];if(parseInt(e[r][this.oTreeProperties["hierarchy-level-for"]])===this.iRootLevel){a="null"}if(!s[a]){s[a]=[]}s[a].push(this.oModel._getKey(e[r]))}return s}return undefined};v.prototype._importCompleteKeysHierarchy=function(e){var t,i;for(i in e){t=e[i].length||0;this.oKeys[i]=e[i];this.oLengths[i]=t;this.oFinalLengths[i]=true;this._mLoadedSections[i]=[{startIndex:0,length:t}]}};v.prototype._updateNodeKey=function(e,t){var i=this.oModel.getKey(e.context),s,r;if(parseInt(e.context.getProperty(this.oTreeProperties["hierarchy-level-for"]))===this.iRootLevel){s="null"}else{s=this.oModel.getKey(e.parent.context)}r=this.oKeys[s].indexOf(i);if(r!==-1){this.oKeys[s][r]=t}else{this.oKeys[s].push(t)}};v.prototype._loadSubTree=function(e,t){return new Promise(function(i,s){var r,o,a;if(!this.bHasTreeAnnotations){s(new Error("_loadSubTree: doesn't support hierarchies without tree annotations"));return}r="loadSubTree-"+t.join("-");if(this.mRequestHandles[r]){this.mRequestHandles[r].abort()}var n=function(t){if(t.results.length>0){var s=this.oModel.getKey(t.results[0]);this._updateNodeKey(e,s);var o=this._createKeyMap(t.results,true);this._importCompleteKeysHierarchy(o)}delete this.mRequestHandles[r];this.bNeedsUpdate=true;this.oModel.callAfterUpdate(function(){this.fireDataReceived({data:t})}.bind(this));i(t)}.bind(this);var h=function(e){delete this.mRequestHandles[r];if(e&&e.statusCode===0&&e.statusText==="abort"){return}this.fireDataReceived();s()}.bind(this);if(!this.bSkipDataEvents){this.fireDataRequested()}this.bSkipDataEvents=false;a=this.getResolvedPath();if(a){o=this.sRefreshGroupId?this.sRefreshGroupId:this.sGroupId;this.mRequestHandles[r]=this.oModel.read(a,{headers:this._getHeaders(),urlParameters:t,success:n,error:h,sorters:this.aSorters,groupId:o})}}.bind(this))};v.prototype._loadSubNodes=function(e,t,i,s,r,o,a){var n=this,h,l=false;if((t||i)&&!this.bClientOperation){r.push("$skip="+t+"&$top="+(i+s))}if(!this.oFinalLengths[e]||this.sCountMode==g.InlineRepeat){if(this.sCountMode==g.Inline||this.sCountMode==g.InlineRepeat||this.sCountMode==g.Both){r.push("$inlinecount=allpages");l=true}else if(this.sCountMode==g.Request){n._getCountForNodeId(e)}}var d=""+e+"-"+t+"-"+this._iPageSize+"-"+s;function f(i){var s,r;if(i){n.oKeys[e]=n.oKeys[e]||[];if(l&&i.__count>=0){n.oLengths[e]=parseInt(i.__count);n.oFinalLengths[e]=true}}if(Array.isArray(i.results)&&i.results.length>0){if(n.bHasTreeAnnotations){var a={};for(r=0;r<i.results.length;r++){s=i.results[r];if(r==0){a[e]=t}else if(a[e]==undefined){a[e]=0}n.oKeys[e][a[e]]=n.oModel._getKey(s);a[e]++}}else{for(r=0;r<i.results.length;r++){s=i.results[r];var h=n.oModel._getKey(s);n._processODataObject(s,"/"+h,o.navPath);n.oKeys[e][r+t]=h}}}else if(i&&!Array.isArray(i.results)){n.oKeys[null]=n.oModel._getKey(i);if(!n.bHasTreeAnnotations){n._processODataObject(i,e,o.navPath)}}delete n.mRequestHandles[d];n.bNeedsUpdate=true;n.oModel.callAfterUpdate(function(){n.fireDataReceived({data:i})})}function u(t){if(t&&t.statusCode===0&&t.statusText==="abort"){return}n.fireDataReceived();delete n.mRequestHandles[d];if(a){var i=[];for(var s=0;s<n._mLoadedSections[e].length;s++){var r=n._mLoadedSections[e][s];if(a.startIndex>=r.startIndex&&a.startIndex+a.length<=r.startIndex+r.length){if(a.startIndex!==r.startIndex&&a.length!==r.length){i=p.mergeSections(i,{startIndex:r.startIndex,length:a.startIndex-r.startIndex});i=p.mergeSections(i,{startIndex:a.startIndex+a.length,length:r.startIndex+r.length-(a.startIndex+a.length)})}}else{i.push(r)}}n._mLoadedSections[e]=i}}if(e!==undefined){if(!this.bSkipDataEvents){this.fireDataRequested()}this.bSkipDataEvents=false;var c;if(this.bHasTreeAnnotations){c=this.getResolvedPath()}else{c=e}if(this.mRequestHandles[d]){this.mRequestHandles[d].abort()}if(c){h=this.sRefreshGroupId?this.sRefreshGroupId:this.sGroupId;this.mRequestHandles[d]=this.oModel.read(c,{headers:this._getHeaders(),urlParameters:r,success:f,error:u,sorters:this.aSorters,groupId:h})}}};v.REQUEST_KEY_CLIENT="_OPERATIONMODE_CLIENT_TREE_LOADING";v.prototype._loadCompleteTreeWithAnnotations=function(e,s=[],r=0){var a=this;var n=v.REQUEST_KEY_CLIENT;const h=e.slice();var l=function(e){if(e.results&&e.results.length>0){r+=e.results.length;s.push(e.results);if(e.__next||e.results.length===a.iMaximumTopValue){delete a.mRequestHandles[n];a._loadCompleteTreeWithAnnotations(h,s,r);return}}let o;if(r>0){o=Array.prototype.concat.apply([],s);var l={};var d;for(var f=0;f<o.length;f++){d=o[f];var u=d[a.oTreeProperties["hierarchy-node-for"]];if(l[u]){t.warning("ODataTreeBinding - Duplicate data entry for key: "+u+"!")}l[u]=a.oModel._getKey(d)}for(var p=0;p<o.length;p++){d=o[p];var g=d[a.oTreeProperties["hierarchy-parent-node-for"]];var c=l[g];if(parseInt(d[a.oTreeProperties["hierarchy-level-for"]])===a.iRootLevel){c="null"}a.oKeys[c]=a.oKeys[c]||[];var y=a.oModel._getKey(d);a.oKeys[c].push(y);a.oLengths[c]=a.oLengths[c]||0;a.oLengths[c]++;a.oFinalLengths[c]=true;a._mLoadedSections[c]=a._mLoadedSections[c]||[];a._mLoadedSections[c][0]=a._mLoadedSections[c][0]||{startIndex:0,length:0};a._mLoadedSections[c][0].length++}}else{o=[];a.oKeys["null"]=[];a.oLengths["null"]=0;a.oFinalLengths["null"]=true}a.oAllKeys=i({},a.oKeys);a.oAllLengths=i({},a.oLengths);a.oAllFinalLengths=i({},a.oFinalLengths);delete a.mRequestHandles[n];a.bNeedsUpdate=true;if(a.aApplicationFilters&&a.aApplicationFilters.length>0||a.aFilters&&a.aFilters.length>0){a._applyFilter()}if(a.aSorters&&a.aSorters.length>0){a._applySort()}a.oModel.callAfterUpdate(function(){a.fireDataReceived({data:{results:o}})})};var d=function(e){delete a.mRequestHandles[n];var t=e.statusCode==0;if(!t){a.oKeys={};a.oLengths={};a.oFinalLengths={};a.oAllKeys={};a.oAllLengths={};a.oAllFinalLengths={};a._fireChange({reason:o.Change});a.fireDataReceived()}};if(!this.bSkipDataEvents&&r===0){this.fireDataRequested()}this.bSkipDataEvents=false;if(this.mRequestHandles[n]){this.mRequestHandles[n].abort()}var f=this.getResolvedPath();if(f){if(this.iTotalCollectionCount){e.push("$top="+this.iTotalCollectionCount)}this.mRequestHandles[n]=this.oModel.read(f,{headers:this._getHeaders(),urlParameters:r?["$skip="+r+"&$top="+a.iMaximumTopValue,...h]:e,success:l,error:d,sorters:this.aSorters,groupId:this.sRefreshGroupId?this.sRefreshGroupId:this.sGroupId})}};v.prototype.resetData=function(e){var t,i=false;if(typeof e==="boolean"){i=e}else{t=e}if(t){var s=t.getPath();delete this.oKeys[s];delete this.oLengths[s];delete this.oFinalLengths[s];delete this._mLoadedSections[s]}else{this.oKeys={};this.bClientOperation=this.sOperationMode===y.Client;this.bThresholdRejected=false;this.iTotalCollectionCount=null;this.bCollectionCountRequested=false;this.oAllKeys=null;this.oAllLengths=null;this.oAllFinalLengths=null;this.oLengths={};this.oFinalLengths={};this.oRootContext=null;this._bRootMissing=false;if(!i){this._abortPendingRequest()}this._mLoadedSections={};this._iPageSize=0;this.sFilterParams=""}};v.prototype.refresh=function(e,t){if(typeof e==="string"){t=e}this.sRefreshGroupId=t;this._refresh(e);this.sRefreshGroupId=undefined};v.prototype._refresh=function(e,t,i){var s=false;if(!e){if(i){var r=this.getResolvedPath();if(r){if(r.indexOf("?")!==-1){r=r.split("?")[0]}var a=this.oModel.oMetadata._getEntityTypeByPath(r);if(a&&a.entityType in i){s=true}}}if(t&&!s){s=this._isRefreshAfterChangeAllowed()&&this._hasChangedEntity(t)}if(!t&&!i){s=true}}if(e||s){this.resetData();this.bNeedsUpdate=false;this.bRefresh=true;this._fireRefresh({reason:o.Refresh})}};v.prototype._isRefreshAfterChangeAllowed=function(){return true};v.prototype._hasChangedEntity=function(e){var t,i;for(i in this.oKeys){for(t in e){if(this.oKeys[i].includes(t)){return true}}}return false};v.prototype.filter=function(e,s,r){var a=false;s=s||l.Control;this.oModel.checkFilter(e);if(s==l.Control&&(!this.bClientOperation||this.sOperationMode==y.Server)){t.warning("Filtering with ControlFilters is ONLY possible if the ODataTreeBinding is running in OperationMode.Client or "+"OperationMode.Auto, in case the given threshold is lower than the total number of tree nodes.");return this}if(!e){e=[]}if(e instanceof n){e=[e]}if(s===l.Control){this.aFilters=e}else{if(e.length>1){e=[h.groupFilters(e)]}this.aApplicationFilters=e}if(!this.bInitial){if(this.bClientOperation&&(s===l.Control||s===l.Application&&!this.bUseServersideApplicationFilters)){if(this.oAllKeys){this.oKeys=i({},this.oAllKeys);this.oLengths=i({},this.oAllLengths);this.oFinalLengths=i({},this.oAllFinalLengths);this._applyFilter();this._applySort();this._fireChange({reason:o.Filter})}else{this.sChangeReason=o.Filter}}else{this.resetData();this.sChangeReason=o.Filter;this._fireRefresh({reason:this.sChangeReason})}a=true}if(r){return a}else{return this}};v.prototype._applyFilter=function(){var e=this;var i;if(this.bUseServersideApplicationFilters){i=h.groupFilters(this.aFilters)}else{i=h.combineFilters(this.aFilters,this.aApplicationFilters)}var s=function(t){var s=h.apply([t],i,function(t,i){var s=e.oModel.getContext("/"+t);return e.oModel.getProperty(i,s)},e.mNormalizeCache);return s.length>0};var r={};this._filterRecursive({id:"null"},r,s);this.oKeys=r;if(!this.oKeys["null"]){t.warning("Clientside filter did not match on any node!")}else{this.oLengths["null"]=this.oKeys["null"].length;this.oFinalLengths["null"]=true}};v.prototype._filterRecursive=function(e,t,i){var s=this.oKeys[e.id];if(s){e.children=e.children||[];for(var r=0;r<s.length;r++){var o=this._filterRecursive({id:s[r]},t,i);if(o.isFiltered){t[e.id]=t[e.id]||[];t[e.id].push(o.id);e.children.push(o)}}if(e.children.length>0){e.isFiltered=true}else{e.isFiltered=i(e.id)}if(e.isFiltered){this.oLengths[e.id]=e.children.length;this.oFinalLengths[e.id]=true}return e}else{e.isFiltered=i(e.id);return e}};v.prototype.sort=function(e,t){var i=false;if(e instanceof d){e=[e]}this.aSorters=e||[];if(!this.bInitial){this._abortPendingRequest();if(this.bClientOperation){this.addSortComparators(e,this.oEntityType);if(this.oAllKeys){this._applySort();this._fireChange({reason:o.Sort})}else{this.sChangeReason=o.Sort}}else{this.resetData(undefined,{reason:o.Sort});this.sChangeReason=o.Sort;this._fireRefresh({reason:this.sChangeReason})}i=true}if(t){return i}else{return this}};v.prototype.addSortComparators=function(i,r){var o,a;if(!r){t.warning("Cannot determine sort comparators, as entitytype of the collection is unknown!");return}s(i,function(t,i){if(!i.fnCompare){o=this.oModel.oMetadata._getPropertyMetadata(r,i.sPath);a=o&&o.type;e(o,"PropertyType for property "+i.sPath+" of EntityType "+r.name+" not found!");i.fnCompare=c.getComparator(a)}}.bind(this))};v.prototype._applySort=function(){var e=this,t;var i=function(i,s){t=e.oModel.getContext("/"+i);return e.oModel.getProperty(s,t)};for(var s in this.oKeys){f.apply(this.oKeys[s],this.aSorters,i)}};v.prototype.checkUpdate=function(e,t){var i=this.sChangeReason?this.sChangeReason:o.Change;var r=false;if(!e){if(this.bNeedsUpdate||!t){r=true}else{s(this.oKeys,function(e,i){s(i,function(e,i){if(i in t){r=true;return false}return true});if(r){return false}return true})}}if(e||r){this.bNeedsUpdate=false;this._fireChange({reason:i})}this.sChangeReason=undefined};v.prototype._getNavPath=function(e){var t=this.oModel.resolve(e,this.getContext());if(!t){return undefined}var i=t.split("/"),s=i[i.length-1],r;var o=s.split("(")[0];if(o&&this.oNavigationPaths[o]){r=this.oNavigationPaths[o]}return r};v.prototype._processODataObject=function(e,t,i){var s=[],r=this;if(i&&i.indexOf("/")>-1){s=i.split("/");i=s[0];s.splice(0,1)}const o=this.getModel();var a=o._getObject(t);if(Array.isArray(a)){this.oKeys[t]=a;this.oLengths[t]=a.length;this.oFinalLengths[t]=true}else if(a){this.oLengths[t]=1;this.oFinalLengths[t]=true}if(i&&e[i]){if(Array.isArray(a)){a.forEach(function(e){r._processODataObject(o.getProperty("/"+e),"/"+e+"/"+i,s.join("/"))})}else if(typeof a==="object"){r._processODataObject(e,t+"/"+i,s.join("/"))}}};v.prototype._hasTreeAnnotations=function(){var e=this.oModel.oMetadata,i=this.getResolvedPath(),r,o=e.mNamespaces["sap"],a=this;this.oTreeProperties={"hierarchy-level-for":false,"hierarchy-parent-node-for":false,"hierarchy-node-for":false,"hierarchy-drill-state-for":false};var n=function(){var e=0;var i=0;s(a.oTreeProperties,function(t,s){i++;if(s){e+=1}});if(e===i){return true}else if(e>0&&e<i){t.warning("Incomplete hierarchy tree annotations. Please check your service metadata definition!")}return false};if(this.mParameters&&this.mParameters.treeAnnotationProperties){this.oTreeProperties["hierarchy-level-for"]=this.mParameters.treeAnnotationProperties.hierarchyLevelFor;this.oTreeProperties["hierarchy-parent-node-for"]=this.mParameters.treeAnnotationProperties.hierarchyParentNodeFor;this.oTreeProperties["hierarchy-node-for"]=this.mParameters.treeAnnotationProperties.hierarchyNodeFor;this.oTreeProperties["hierarchy-drill-state-for"]=this.mParameters.treeAnnotationProperties.hierarchyDrillStateFor;return n()}if(i.indexOf("?")!==-1){i=i.split("?")[0]}r=e._getEntityTypeByPath(i);if(!r){t.fatal("EntityType for path "+i+" could not be found.");return false}s(r.property,function(e,t){if(!t.extensions){return true}s(t.extensions,function(e,i){var s=i.name;if(i.namespace===o&&s in a.oTreeProperties&&!a.oTreeProperties[s]){a.oTreeProperties[s]=t.name}});return true});return n()};v.prototype.initialize=function(){if(this.oModel.oMetadata&&this.oModel.oMetadata.isLoaded()&&this.bInitial){if(this.isResolved()){this._initialize(this._fireRefresh.bind(this,{reason:o.Refresh}))}else{this._fireRefresh({reason:o.Refresh})}}return this};v.prototype._initialize=function(e){this.bInitial=false;this.bHasTreeAnnotations=this._hasTreeAnnotations();this.oEntityType=this._getEntityType();this._processSelectParameters();this._applyAdapter(e);return this};v.prototype.setContext=function(e){if(e&&e.isPreliminary()&&!this.bUsePreliminaryContext){return}if(e&&e.isUpdated()&&this.bUsePreliminaryContext&&this.oContext===e){this._fireChange({reason:o.Context});return}if(a.hasChanged(this.oContext,e)){this.oContext=e;if(!this.isRelative()){return}if(this.getResolvedPath()){this.resetData();this._initialize(this._fireChange.bind(this,{reason:o.Context}))}else if(!r(this.oAllKeys)||!r(this.oKeys)||!r(this._aNodes)){this.resetData();this._fireChange({reason:o.Context})}}};v.prototype.applyAdapterInterface=function(){this.getContexts=this.getContexts||function(){return[]};this.getNodes=this.getNodes||function(){return[]};this.getLength=this.getLength||function(){return 0};this.isLengthFinal=this.isLengthFinal||function(){return false};this.getContextByIndex=this.getContextByIndex||function(){return};this.attachSelectionChanged=this.attachSelectionChanged||function(e,t,i){this.attachEvent("selectionChanged",e,t,i);return this};this.detachSelectionChanged=this.detachSelectionChanged||function(e,t){this.detachEvent("selectionChanged",e,t);return this};this.fireSelectionChanged=this.fireSelectionChanged||function(e){this.fireEvent("selectionChanged",e);return this};return this};v.prototype._applyAdapter=function(e){var i,r,o,a,n,h,l="sap/ui/model/odata/ODataTreeBindingAdapter",d="hierarchy-node-descendant-count-for",f="hierarchy-preorder-rank-for",u="hierarchy-sibling-rank-for",p=this;if(!this.bHasTreeAnnotations&&!this.oNavigationPaths){t.error("Neither hierarchy annotations, "+"nor navigation properties are specified to build the tree.",this);return}if(this.bHasTreeAnnotations){i=this.getResolvedPath();if(i.indexOf("?")!==-1){i=i.split("?")[0]}r=this.oModel.oMetadata._getEntityTypeByPath(i);s(r.property,function(e,t){if(!t.extensions){return true}s(t.extensions,function(e,i){h=i.name;if(i.namespace===p.oModel.oMetadata.mNamespaces["sap"]&&(h==d||h==u||h==f)){p.oTreeProperties[h]=t.name}});return true});this.oTreeProperties[d]=this.oTreeProperties[d]||this.mParameters.treeAnnotationProperties&&this.mParameters.treeAnnotationProperties.hierarchyNodeDescendantCountFor;if(this.oTreeProperties[d]&&this.sOperationMode==y.Server){this.oTreeProperties[u]=this.oTreeProperties[u]||this.mParameters.treeAnnotationProperties&&this.mParameters.treeAnnotationProperties.hierarchySiblingRankFor;this.oTreeProperties[f]=this.oTreeProperties[f]||this.mParameters.treeAnnotationProperties&&this.mParameters.treeAnnotationProperties.hierarchyPreorderRankFor;if(this.mParameters.restoreTreeStateAfterChange){if(this.oTreeProperties[u]&&this.oTreeProperties[f]){this._bRestoreTreeStateAfterChange=true;this._aTreeKeyProperties=[];for(o=r.key.propertyRef.length-1;o>=0;o--){this._aTreeKeyProperties.push(r.key.propertyRef[o].name)}}else{t.warning("Tree state restoration not possible: Missing annotation "+'"hierarchy-sibling-rank-for" and/or '+'"hierarchy-preorder-rank-for"');this._bRestoreTreeStateAfterChange=false}}else{this._bRestoreTreeStateAfterChange=false}if(this.mParameters&&this.mParameters.select){if(this.mParameters.select.indexOf(this.oTreeProperties[d])===-1){this.mParameters.select+=","+this.oTreeProperties[d]}if(this._bRestoreTreeStateAfterChange){for(a=this._aTreeKeyProperties.length-1;a>=0;a--){n=this._aTreeKeyProperties[a];if(this.mParameters.select.indexOf(n)===-1){this.mParameters.select+=","+n}}}this.sCustomParams=this.oModel.createCustomParams(this.mParameters)}l="sap/ui/model/odata/ODataTreeBindingFlat"}}sap.ui.require([l],function(t){t.apply(p);e()})};v.prototype._processSelectParameters=function(){if(this.mParameters){this.oNavigationPaths=this.mParameters.navigation;if(this.mParameters.select){var e=this.mParameters.select.split(",");var i=[];if(this.oNavigationPaths){s(this.oNavigationPaths,function(e,t){if(i.indexOf(t)==-1){i.push(t)}})}s(i,function(t,i){if(e.indexOf(i)==-1){e.push(i)}});if(this.bHasTreeAnnotations){s(this.oTreeProperties,function(t,i){if(i){if(e.indexOf(i)==-1){e.push(i)}}})}this.mParameters.select=e.join(",")}this.sCustomParams=this.oModel.createCustomParams(this.mParameters)}if(!this.bHasTreeAnnotations&&!this.oNavigationPaths){t.error("Neither navigation paths parameters, nor (complete/valid) tree hierarchy annotations where provided to the TreeBinding.");this.oNavigationPaths={}}};v.prototype.getTreeAnnotation=function(e){return this.bHasTreeAnnotations?this.oTreeProperties[e]:undefined};v.prototype.getDownloadUrl=function(e){var t=[],i;if(e){t.push("$format="+encodeURIComponent(e))}if(this.aSorters&&this.aSorters.length>0){t.push(c.createSortParams(this.aSorters))}if(this.getFilterParams()){t.push("$filter="+this.getFilterParams())}if(this.sCustomParams){t.push(this.sCustomParams)}i=this.getResolvedPath();return i&&this.oModel._createRequestUrl(i,null,t)};v.prototype.setNumberOfExpandedLevels=function(e){e=e||0;if(e<0){t.warning("ODataTreeBinding: numberOfExpandedLevels was set to 0. Negative values are prohibited.");e=0}this.iNumberOfExpandedLevels=e;this._fireChange()};v.prototype.getNumberOfExpandedLevels=function(){return this.iNumberOfExpandedLevels};v.prototype.setRootLevel=function(e){e=parseInt(e||0);if(e<0){t.warning("ODataTreeBinding: rootLevels was set to 0. Negative values are prohibited.");e=0}this.iRootLevel=e;this.refresh()};v.prototype.getRootLevel=function(){return parseInt(this.iRootLevel)};v.prototype._getEntityType=function(){var t=this.getResolvedPath();if(t){var i=this.oModel.oMetadata._getEntityTypeByPath(t);e(i,"EntityType for path "+t+" could not be found!");return i}return undefined};v.prototype.getFilterParams=function(){var e;if(this.aApplicationFilters){this.aApplicationFilters=Array.isArray(this.aApplicationFilters)?this.aApplicationFilters:[this.aApplicationFilters];if(this.aApplicationFilters.length>0&&!this.sFilterParams){e=h.groupFilters(this.aApplicationFilters);this.sFilterParams=c._createFilterParams(e,this.oModel.oMetadata,this.oEntityType);this.sFilterParams=this.sFilterParams?"("+this.sFilterParams+")":""}}else{this.sFilterParams=""}return this.sFilterParams};v.prototype.getFilterInfo=function(e){return this.aApplicationFilters[0]?this.aApplicationFilters[0].getAST(e):null};v.prototype._abortPendingRequest=function(){if(!r(this.mRequestHandles)){this.bSkipDataEvents=true;s(this.mRequestHandles,function(e,t){if(t){t.abort()}});this.mRequestHandles={}}};return v});
//# sourceMappingURL=ODataTreeBinding.js.map