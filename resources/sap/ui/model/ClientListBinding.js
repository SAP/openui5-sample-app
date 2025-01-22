/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/each","sap/ui/model/ChangeReason","sap/ui/model/Filter","sap/ui/model/FilterType","sap/ui/model/ListBinding","sap/ui/model/FilterProcessor","sap/ui/model/Sorter","sap/ui/model/SorterProcessor"],function(t,e,i,s,n,o,a,h,r){"use strict";var p=o.extend("sap.ui.model.ClientListBinding",{constructor:function(t,e,i,s,n,h){o.apply(this,arguments);this.mNormalizeCache={};this.oModel.checkFilter(this.aApplicationFilters);this.oCombinedFilter=a.combineFilters(this.aFilters,this.aApplicationFilters);this.bIgnoreSuspend=false;this.aLastContextData=undefined;this.aLastContexts=undefined;this.iLastEndIndex=undefined;this.iLastLength=undefined;this.iLastStartIndex=undefined;this.update()},metadata:{publicMethods:["getLength"]}});p.prototype._getContexts=function(t,e){if(!t){t=0}if(!e){e=Math.min(this.iLength,this.oModel.iSizeLimit)}var i=Math.min(t+e,this.aIndices.length),s,n=[],o=this.getResolvedPath();if(o&&!o.endsWith("/")){o+="/"}for(var a=t;a<i;a++){s=this.oModel.getContext(o+this.aIndices[a]);n.push(s)}return n};p.prototype._updateLastStartAndLength=function(t,e,i,s){if(s){this._checkKeepCurrentSupported(i)}else{this.iLastStartIndex=t;this.iLastLength=e}};p.prototype.getContexts=function(e,i,s,n){var o,a;this._updateLastStartAndLength(e,i,s,n);e=e||0;i=i||Math.min(this.iLength,this.oModel.iSizeLimit);a=this._getContexts(e,i);if(this.bUseExtendedChangeDetection){o=[];try{for(var h=0;h<a.length;h++){o.push(this.getContextData(a[h]))}if(this.aLastContextData&&e<this.iLastEndIndex){a.diff=this.diffData(this.aLastContextData,o)}this.iLastEndIndex=e+i;this.aLastContextData=o;this.aLastContexts=a.slice(0)}catch(e){this.aLastContextData=undefined;this.aLastContexts=undefined;this.bUseExtendedChangeDetection=false;t.warning("Disabled extended change detection for binding path '"+this.getResolvedPath()+"'; context data could not be serialized",e,this.getMetadata().getName())}}return a};p.prototype.getCurrentContexts=function(){if(this.bUseExtendedChangeDetection){return this.aLastContexts||[]}else{return this.getContexts(this.iLastStartIndex,this.iLastLength)}};p.prototype.getAllCurrentContexts=function(){return this._getContexts(0,Infinity)};p.prototype.setContext=function(t){if(this.oContext!=t){this.oContext=t;if(this.isRelative()){this.update();this._fireChange({reason:i.Context})}}};p.prototype.getLength=function(){return this.iLength};p.prototype._getLength=function(){return this.aIndices.length};p.prototype.updateIndices=function(){this.aIndices=[];for(var t=0;t<this.oList.length;t++){this.aIndices.push(t)}};p.prototype.sort=function(t){if(this.bSuspended){this.checkUpdate(true)}if(!t){this.aSorters=null;this.updateIndices();this.applyFilter()}else{if(t instanceof h){t=[t]}this.aSorters=t;this.applySort()}this.bIgnoreSuspend=true;this._fireChange({reason:i.Sort});this._fireSort({sorter:t});this.bIgnoreSuspend=false;return this};p.prototype.applySort=function(){var t=this;if(!this.aSorters||this.aSorters.length==0){return}this.aIndices=r.apply(this.aIndices,this.aSorters,function(e,i){return t.oModel.getProperty(i,t.oList[e])})};p.prototype.filter=function(t,e){this.oModel.checkFilter(t);if(this.bSuspended){this.checkUpdate(true)}this.updateIndices();if(t instanceof s){t=[t]}if(e==n.Application){this.aApplicationFilters=t||[]}else if(e==n.Control){this.aFilters=t||[]}else{this.aFilters=t||[];this.aApplicationFilters=[]}this.oCombinedFilter=a.combineFilters(this.aFilters,this.aApplicationFilters);if(this.aFilters.length===0&&this.aApplicationFilters.length===0){this.iLength=this._getLength()}else{this.applyFilter()}this.applySort();this.bIgnoreSuspend=true;this._fireChange({reason:i.Filter});if(e==n.Application){this._fireFilter({filters:this.aApplicationFilters})}else{this._fireFilter({filters:this.aFilters})}this.bIgnoreSuspend=false;return this};p.prototype.applyFilter=function(){var t=this;this.aIndices=a.apply(this.aIndices,this.oCombinedFilter,function(e,i){return t.oModel.getProperty(i,t.oList[e])},this.mNormalizeCache);this.iLength=this.aIndices.length};p.prototype.getDistinctValues=function(t){var i=[],s={},n,o=this;e(this.oList,function(e,a){n=o.oModel.getProperty(t,a);if(!s[n]){s[n]=true;i.push(n)}});return i};return p});
//# sourceMappingURL=ClientListBinding.js.map