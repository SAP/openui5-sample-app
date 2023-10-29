/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_AggregationHelper","./_Cache","./_ConcatHelper","./_GroupLock","./_Helper","./_MinMaxHelper","sap/base/Log","sap/ui/base/SyncPromise"],function(e,t,n,i,r,o,a,s){"use strict";function l(i,o,a,l,d){var u=function(){},c=null,h,p=this;t.call(this,i,o,l,true);this.oAggregation=a;this.sDownloadUrl=t.prototype.getDownloadUrl.call(this,"");this.aElements=[];this.aElements.$byPredicate={};this.aElements.$count=undefined;this.aElements.$created=0;this.oCountPromise=undefined;if(l.$count){if(a.hierarchyQualifier){this.oCountPromise=new s(function(e){h=e});this.oCountPromise.$resolve=h}else if(a.groupLevels.length){l.$$leaves=true;this.oCountPromise=new s(function(e){c=function(t){e(parseInt(t.UI5__leaves))}})}}this.oFirstLevel=this.createGroupLevelCache(null,d||!!c);this.addKeptElement=this.oFirstLevel.addKeptElement;this.removeKeptElement=this.oFirstLevel.removeKeptElement;this.requestSideEffects=this.oFirstLevel.requestSideEffects;this.oGrandTotalPromise=undefined;if(d){this.oGrandTotalPromise=new s(function(t){n.enhanceCache(p.oFirstLevel,a,[c,function(n){var i;if(a["grandTotal like 1.84"]){e.removeUI5grand__(n)}e.setAnnotations(n,true,true,0,e.getAllProperties(a));if(a.grandTotalAtBottomOnly===false){i=Object.assign({},n,{"@$ui5.node.isExpanded":undefined});r.setPrivateAnnotation(n,"copy",i);r.setPrivateAnnotation(i,"predicate","($isTotal=true)")}r.setPrivateAnnotation(n,"predicate","()");t(n)},u])})}else if(c){n.enhanceCache(p.oFirstLevel,a,[c,u])}}l.prototype=Object.create(t.prototype);l.prototype.addTransientCollection=null;l.prototype.getAndRemoveCollection=null;l.prototype._delete=function(e,t,n,i,o){if(this.oAggregation.expandTo>1){throw new Error("Unsupported expandTo: "+this.oAggregation.expandTo)}let a=parseInt(n);if(isNaN(a)){throw new Error(`Unsupported kept-alive entity: ${this.sResourcePath}${n}`)}const s=this.aElements[a];const l=r.getPrivateAnnotation(s,"parent");const d=r.getPrivateAnnotation(s,"index");let u=a-d-1;const c=this.aElements[u];return l._delete(e,t,d.toString(),i,(e,t)=>{if(t<0){this.shiftIndex(a,t);this.removeElement(this.aElements,a,r.getPrivateAnnotation(s,"predicate"),"");if(c&&!l.getValue("$count")){r.updateAll(this.mChangeListeners,r.getPrivateAnnotation(c,"predicate"),c,{"@$ui5.node.isExpanded":undefined});delete c["@$ui5.node.isExpanded"]}}else{if(c){if(c!==this.aElements[u]){u=this.aElements.indexOf(c)}if(l.getValue("$count")===1){r.updateAll(this.mChangeListeners,r.getPrivateAnnotation(c,"predicate"),c,{"@$ui5.node.isExpanded":true})}}a=u+e+1;this.restoreElement(this.aElements,a,s,"");this.shiftIndex(a,t);r.setPrivateAnnotation(s,"index",e)}o(a,t)})};l.prototype.addElements=function(t,n,i,o){var a=this.aElements,l=this.oAggregation.hierarchyQualifier,d=this.oAggregation.$NodeProperty,u=this;function c(t,c){var h=a[n+c],p,f=r.getPrivateAnnotation(t,"transientPredicate")||r.getPrivateAnnotation(t,"predicate");if(h){if(h===t){return}e.beforeOverwritePlaceholder(h,t,i,o+c,d)}else if(n+c>=a.length){throw new Error("Array index out of bounds: "+(n+c))}p=a.$byPredicate[f];if(p&&p!==t&&!(p instanceof s)){if(!l){throw new Error("Duplicate predicate: "+f)}if(!p["@odata.etag"]||t["@odata.etag"]===p["@odata.etag"]){r.updateNonExisting(t,p)}else if(u.hasPendingChangesForPath(f)){throw new Error("Modified on client and on server: "+u.sResourcePath+f)}}a.$byPredicate[f]=a[n+c]=t;if(i){r.setPrivateAnnotation(t,"index",o+c);r.setPrivateAnnotation(t,"parent",i)}}if(n<0){throw new Error("Illegal offset: "+n)}if(Array.isArray(t)){t.forEach(c)}else{c(t,0)}};l.prototype.beforeRequestSideEffects=function(e){if(!this.oAggregation.hierarchyQualifier){throw new Error("Missing recursive hierarchy")}delete e.$apply;if(!e.$select.includes(this.oAggregation.$NodeProperty)){e.$select.push(this.oAggregation.$NodeProperty)}};l.prototype.beforeUpdateSelected=function(t,n){e.checkNodeProperty(this.aElements.$byPredicate[t],n,this.oAggregation.$NodeProperty,true)};l.prototype.collapse=function(t){var n,i=0,o,a=this.aElements,s=this.getValue(t),l=s["@$ui5.node.level"],d=a.indexOf(s),u=d+1;function c(e){delete a.$byPredicate[r.getPrivateAnnotation(a[e],"predicate")];delete a.$byPredicate[r.getPrivateAnnotation(a[e],"transientPredicate")];i+=1}n=e.getCollapsedObject(s);r.updateAll(this.mChangeListeners,t,s,n);o=r.getPrivateAnnotation(s,"descendants");if(o){l=this.oAggregation.expandTo}while(u<a.length){if(a[u]["@$ui5.node.level"]<=l){if(!o){break}o-=1;if(a[u]["@$ui5.node.isExpanded"]===false){o-=r.getPrivateAnnotation(a[u],"descendants")||0}}c(u);u+=1}if(this.oAggregation.subtotalsAtBottomOnly!==undefined&&Object.keys(n).length>1){c(u)}r.setPrivateAnnotation(s,"spliced",a.splice(d+1,i));a.$count-=i;return i};l.prototype.create=function(e,t,n,i,o,a,s,l){if(this.oAggregation.expandTo>1){throw new Error("Unsupported expandTo: "+this.oAggregation.expandTo)}if(a){throw new Error("Unsupported bAtEndOfCreated")}const d=this.aElements;const u=o["@$ui5.node.parent"];const c=u.slice(u.indexOf("("));const h=d.$byPredicate[c];if(h["@$ui5.node.isExpanded"]===false){throw new Error("Unsupported collapsed parent: "+u)}const p=d.indexOf(h)+1;let f=r.getPrivateAnnotation(h,"cache");if(!f){f=this.createGroupLevelCache(h);f.setEmpty();r.setPrivateAnnotation(h,"cache",f);r.updateAll(this.mChangeListeners,c,h,{"@$ui5.node.isExpanded":true})}delete o["@$ui5.node.parent"];const g=f.create(e,t,n,i,o,a,s,l,function e(){this.shiftIndex(p,-1);d.$count-=1;delete d.$byPredicate[r.getPrivateAnnotation(o,"transientPredicate")];d.splice(d.indexOf(o),1)}.bind(this));r.getPrivateAnnotation(o,"postBody")[this.oAggregation.$ParentNavigationProperty+"@odata.bind"]=r.makeRelativeUrl("/"+u,"/"+this.sResourcePath);o["@$ui5.node.level"]=h["@$ui5.node.level"]+1;d.splice(p,0,null);this.addElements(o,p,f,0);d.$count+=1;this.shiftIndex(p,+1);return g.then(function(){d.$byPredicate[r.getPrivateAnnotation(o,"predicate")]=o;return o})};l.prototype.createGroupLevelCache=function(n,i){var o=this.oAggregation,a=n?n["@$ui5.node.level"]+1:1,s,d,u,c,h,p;if(o.hierarchyQualifier){h=Object.assign({},this.mQueryOptions)}else{s=e.getAllProperties(o);c=a>o.groupLevels.length;u=c?o.groupLevels.concat(Object.keys(o.group).sort()):o.groupLevels.slice(0,a);h=e.filterOrderby(this.mQueryOptions,o,a);p=!c&&Object.keys(o.aggregate).some(function(e){return o.aggregate[e].subtotals})}if(n){const e=r.getPrivateAnnotation(n,"filter")||r.getKeyFilter(n,o.$metaPath,this.getTypes());h.$$filterBeforeAggregate=e+(h.$$filterBeforeAggregate?" and ("+h.$$filterBeforeAggregate+")":"")}if(!i){delete h.$count;h=e.buildApply(o,h,a)}h.$count=true;d=t.create(this.oRequestor,this.sResourcePath,h,true);d.calculateKeyPredicate=o.hierarchyQualifier?l.calculateKeyPredicateRH.bind(null,n,o):l.calculateKeyPredicate.bind(null,n,u,s,c,p);return d};l.prototype.expand=function(t,n,o){var a,l=typeof n==="string"?this.getValue(n):n,d=r.getPrivateAnnotation(l,"spliced"),u=this;if(n!==l){r.updateAll(this.mChangeListeners,n,l,e.getOrCreateExpandedObject(this.oAggregation,l))}if(d){r.deletePrivateAnnotation(l,"spliced");const e=this.aElements;const t=e.indexOf(l)+1;this.aElements=e.concat(d,e.splice(t));this.aElements.$byPredicate=e.$byPredicate;a=d.length;this.aElements.$count=e.$count+a;const n=l["@$ui5.node.level"]+1-d[0]["@$ui5.node.level"];d.forEach(function(e){var t=r.getPrivateAnnotation(e,"predicate");e["@$ui5.node.level"]+=n;if(!r.hasPrivateAnnotation(e,"placeholder")){if(d.$stale){u.turnIntoPlaceholder(e,t)}else{u.aElements.$byPredicate[t]=e;if(r.hasPrivateAnnotation(e,"expanding")){r.deletePrivateAnnotation(e,"expanding");a+=u.expand(i.$cached,e).getResult()}}}});return s.resolve(a)}let c=r.getPrivateAnnotation(l,"cache");if(!c){c=this.createGroupLevelCache(l);r.setPrivateAnnotation(l,"cache",c)}return c.read(0,this.iReadLength,0,t,o).then(function(t){var i=u.aElements.indexOf(l)+1,o=l["@$ui5.node.level"],s=e.getCollapsedObject(l),d=u.oAggregation.subtotalsAtBottomOnly!==undefined&&Object.keys(s).length>1,h;if(!l["@$ui5.node.isExpanded"]){r.deletePrivateAnnotation(l,"spliced");return 0}if(!i){r.setPrivateAnnotation(l,"expanding",true);return 0}a=t.value.$count;if(r.hasPrivateAnnotation(l,"groupLevelCount")&&r.getPrivateAnnotation(l,"groupLevelCount")!==a){throw new Error("Unexpected structural change: groupLevelCount")}r.setPrivateAnnotation(l,"groupLevelCount",a);r.updateAll(u.mChangeListeners,n,l,{"@$ui5.node.groupLevelCount":a});if(d){a+=1}if(i===u.aElements.length){u.aElements.length+=a}else{for(h=u.aElements.length-1;h>=i;h-=1){u.aElements[h+a]=u.aElements[h];delete u.aElements[h]}}u.addElements(t.value,i,c,0);for(h=i+t.value.length;h<i+t.value.$count;h+=1){u.aElements[h]=e.createPlaceholder(o+1,h-i,c)}if(d){s=Object.assign({},s);e.setAnnotations(s,undefined,true,o,e.getAllProperties(u.oAggregation));r.setPrivateAnnotation(s,"predicate",r.getPrivateAnnotation(l,"predicate").slice(0,-1)+",$isTotal=true)");u.addElements(s,i+a-1)}u.aElements.$count+=a;return a},function(t){r.updateAll(u.mChangeListeners,n,l,e.getCollapsedObject(l));throw t})};l.prototype.fetchValue=function(e,t,n,i){var r=this;if(t==="$count"){if(this.oCountPromise){return this.oCountPromise}if(this.oAggregation.hierarchyQualifier||this.oAggregation.groupLevels.length){a.error("Failed to drill-down into $count, invalid segment: $count",this.toString(),"sap.ui.model.odata.v4.lib._Cache");return s.resolve()}return this.oFirstLevel.fetchValue(e,t,n,i)}return s.resolve(this.aElements.$byPredicate[t.split("/")[0]]).then(function(){r.registerChangeListener(t,i);return r.drillDown(r.aElements,t,e)})};l.prototype.getAllElements=function(e){var t;if(e){throw new Error("Unsupported path: "+e)}t=this.aElements.map(function(e){return r.hasPrivateAnnotation(e,"placeholder")?undefined:e});t.$count=this.aElements.$count;return t};l.prototype.getCreatedElements=function(e){return[]};l.prototype.getDownloadQueryOptions=function(t){if(this.oAggregation.hierarchyQualifier){if("$count"in t){t=Object.assign({},t);delete t.$count}}else{t=e.filterOrderby(t,this.oAggregation)}return e.buildApply(this.oAggregation,t,0,true)};l.prototype.getDownloadUrl=function(e,t){return this.sDownloadUrl};l.prototype.getValue=function(e){var t;t=this.fetchValue(i.$cached,e);if(t.isFulfilled()){return t.getResult()}t.caught()};l.prototype.isDeletingInOtherGroup=function(e){return false};l.prototype.keepOnlyGivenElements=function(t){var n={},i=this;t.forEach(function(e){n[e]=true});return this.aElements.filter(function(t){var o=r.getPrivateAnnotation(t,"predicate");if(n[o]){e.markSplicedStale(t);return true}i.turnIntoPlaceholder(t,o)})};l.prototype.move=function(e,t,n){const i=t.slice(t.indexOf("("));const o=this.aElements.$byPredicate[i];return this.oRequestor.request("PATCH",t,e,{"If-Match":o,Prefer:"return=minimal"},{[this.oAggregation.$ParentNavigationProperty+"@odata.bind"]:n},null,function e(){}).then(e=>{r.updateExisting(this.mChangeListeners,i,o,{"@odata.etag":e["@odata.etag"]});const t=this.aElements.indexOf(o);this.shiftIndex(t,-1);this.aElements.splice(t,1);const a=r.getPrivateAnnotation(o,"parent");a.removeElement(undefined,r.getPrivateAnnotation(o,"index"),i,"");if(a.getValue("$count")===0){const e=this.aElements[t-1];r.updateAll(this.mChangeListeners,r.getPrivateAnnotation(e,"predicate"),e,{"@$ui5.node.isExpanded":undefined});delete e["@$ui5.node.isExpanded"];r.deletePrivateAnnotation(e,"cache");a.setActive(false)}if(!r.hasPrivateAnnotation(o,"transientPredicate")){const e="($uid="+r.uid()+")";r.setPrivateAnnotation(o,"transientPredicate",e);this.aElements.$byPredicate[e]=o;r.updateAll(this.mChangeListeners,i,o,{"@$ui5.context.isTransient":false})}const s=n.slice(n.indexOf("("));const l=this.aElements.$byPredicate[s];let d=r.getPrivateAnnotation(l,"cache");if(!d){d=this.createGroupLevelCache(l);d.setEmpty();r.setPrivateAnnotation(l,"cache",d);r.updateAll(this.mChangeListeners,s,l,{"@$ui5.node.isExpanded":true})}d.restoreElement(undefined,0,o,"");r.setPrivateAnnotation(o,"index",0);r.setPrivateAnnotation(o,"parent",d);r.updateAll(this.mChangeListeners,i,o,{"@$ui5.node.level":l["@$ui5.node.level"]+1});const u=this.aElements.indexOf(l)+1;this.aElements.splice(u,0,o);this.shiftIndex(u,+1)})};l.prototype.read=function(e,t,n,i,o){var a,l,d=e,u=t,c,h,p=this.oGrandTotalPromise&&this.oAggregation.grandTotalAtBottomOnly!==true,f=[],g,v,m=this;function P(e,t){f.push(m.readGap(c,e,t,i.getUnlockedCopy(),o))}if(p&&!e&&t===1){if(n!==0){throw new Error("Unsupported prefetch length: "+n)}i.unlock();return this.oGrandTotalPromise.then(function(e){return{value:[e]}})}if(this.aElements.$count===undefined){this.iReadLength=t+n;if(p){if(d){d-=1}else{u-=1}}f.push(this.readCount(i),this.readFirst(d,u,n,i,o))}else{for(g=e,v=Math.min(e+t,this.aElements.length);g<v;g+=1){l=this.aElements[g];a=r.hasPrivateAnnotation(l,"placeholder")?r.getPrivateAnnotation(l,"parent"):undefined;if(a!==c){if(h!==undefined){P(h,g);c=h=undefined}if(a){h=g;c=a}}else if(h!==undefined&&r.getPrivateAnnotation(l,"index")!==r.getPrivateAnnotation(this.aElements[g-1],"index")+1){P(h,g);h=g}}if(h!==undefined){P(h,g)}i.unlock()}return s.all(f).then(function(){var n=m.aElements.slice(e,e+t).map(function(e){return r.hasPrivateAnnotation(e,"placeholder")?undefined:e});n.$count=m.aElements.$count;return{value:n}})};l.prototype.readCount=function(e){var t,n=this.oCountPromise&&this.oCountPromise.$resolve,i;if(n){delete this.oCountPromise.$resolve;t=Object.assign({},this.mQueryOptions);delete t.$apply;delete t.$count;delete t.$expand;delete t.$orderby;if(this.oAggregation.search){t.$search=this.oAggregation.search}delete t.$select;i=this.sResourcePath+"/$count"+this.oRequestor.buildQueryString(null,t);return this.oRequestor.request("GET",i,e.getUnlockedCopy()).then(n)}};l.prototype.readFirst=function(t,n,i,o,a){var s=this;return this.oFirstLevel.read(t,n,i,o,a).then(function(n){var i,o,a=0,l;s.aElements.length=s.aElements.$count=n.value.$count;if(s.oGrandTotalPromise){s.aElements.$count+=1;s.aElements.length+=1;i=s.oGrandTotalPromise.getResult();switch(s.oAggregation.grandTotalAtBottomOnly){case false:a=1;s.aElements.$count+=1;s.aElements.length+=1;s.addElements(i,0);o=r.getPrivateAnnotation(i,"copy");s.addElements(o,s.aElements.length-1);break;case true:s.addElements(i,s.aElements.length-1);break;default:a=1;s.addElements(i,0)}}s.addElements(n.value,t+a,s.oFirstLevel,t);for(l=0;l<s.aElements.$count;l+=1){if(!s.aElements[l]){s.aElements[l]=e.createPlaceholder(s.oAggregation.expandTo>1?0:1,l-a,s.oFirstLevel)}}})};l.prototype.readGap=function(e,t,n,i,o){var a,s,l=e.getQueryOptions(),d=r.getPrivateAnnotation(this.aElements[t],"index"),u=this.aElements[t],c,h=this;if(l.$count){delete l.$count;e.setQueryOptions(l,true)}s=e.read(d,n-t,0,i,o).then(function(n){var i=false,r;if(u!==h.aElements[t]&&n.value[0]!==h.aElements[t]){i=true;t=h.aElements.indexOf(u);if(t<0){t=h.aElements.indexOf(n.value[0]);if(t<0){r=new Error("Collapse before read has finished");r.canceled=true;throw r}}}h.addElements(n.value,t,e,d);if(i){r=new Error("Collapse or expand before read has finished");r.canceled=true;throw r}});if(s.isPending()){for(c=t;c<n;c+=1){a=r.getPrivateAnnotation(this.aElements[c],"predicate");if(a){this.aElements.$byPredicate[a]=s}}}return s};l.prototype.refreshKeptElements=function(e,t){return this.oFirstLevel.refreshKeptElements.call(this,e,t,true)};l.prototype.reset=function(e,n,i,o,a){var l,d=this;if(a){throw new Error("Unsupported grouping via sorter")}e.forEach(function(e){var t=d.aElements.$byPredicate[e];if(r.hasPrivateAnnotation(t,"placeholder")){throw new Error("Unexpected placeholder")}delete t["@$ui5.node.isExpanded"];delete t["@$ui5.node.level"];delete t["@$ui5._"];r.setPrivateAnnotation(t,"predicate",e)});this.oAggregation=o;this.sDownloadUrl=t.prototype.getDownloadUrl.call(this,"");this.oFirstLevel.reset.call(this,e,n,i);if(n){this.oBackup.oCountPromise=this.oCountPromise;this.oBackup.oFirstLevel=this.oFirstLevel}this.oCountPromise=undefined;if(i.$count){this.oCountPromise=new s(function(e){l=e});this.oCountPromise.$resolve=l}this.oFirstLevel=this.createGroupLevelCache()};l.prototype.resetChangesForPath=function(e){r.getPrivateAnnotation(this.getValue(e),"parent").resetChangesForPath(e)};l.prototype.restore=function(e){if(e){this.oCountPromise=this.oBackup.oCountPromise;this.oFirstLevel=this.oBackup.oFirstLevel}this.oFirstLevel.restore.call(this,e)};l.prototype.shiftIndex=function(e,t){const n=this.aElements;const i=n[e];const o=r.getPrivateAnnotation(i,"parent");for(let a=e+1;a<n.length;a+=1){const e=n[a];if(r.getPrivateAnnotation(e,"parent")===o){r.setPrivateAnnotation(e,"index",r.getPrivateAnnotation(e,"index")+t)}if(e["@$ui5.node.level"]<i["@$ui5.node.level"]&&!r.hasPrivateAnnotation(e,"placeholder")){break}}};l.prototype.toString=function(){return this.sDownloadUrl};l.prototype.turnIntoPlaceholder=function(t,n){if(r.hasPrivateAnnotation(t,"placeholder")){return}r.setPrivateAnnotation(t,"placeholder",1);e.markSplicedStale(t);delete this.aElements.$byPredicate[n];r.getPrivateAnnotation(t,"parent").drop(r.getPrivateAnnotation(t,"index"),n)};l.calculateKeyPredicate=function(t,n,i,o,a,s,l,d){var u;if(!(d in l)){return undefined}if(t){i.forEach(function(e){if(Array.isArray(e)){r.inheritPathValue(e,t,s)}else if(!(e in s)){s[e]=t[e]}})}u=o&&r.getKeyPredicate(s,d,l)||r.getKeyPredicate(s,d,l,n,true);r.setPrivateAnnotation(s,"predicate",u);if(!o){r.setPrivateAnnotation(s,"filter",r.getKeyFilter(s,d,l,n))}e.setAnnotations(s,o?undefined:false,a,t?t["@$ui5.node.level"]+1:1,t?null:i);return u};l.calculateKeyPredicateRH=function(t,n,i,o,a){var s,l,d=1,u,c;if(!(a in o)){return undefined}c=r.getKeyPredicate(i,a,o);r.setPrivateAnnotation(i,"predicate",c);if(a!==n.$metaPath){return c}switch(r.drillDown(i,n.$DrillStateProperty)){case"expanded":l=true;break;case"collapsed":l=false;break;default:}r.deleteProperty(i,n.$DrillStateProperty);if(t){d=t["@$ui5.node.level"]+1}else{s=r.drillDown(i,n.$DistanceFromRootProperty);if(s){r.deleteProperty(i,n.$DistanceFromRootProperty);d=parseInt(s)+1}}e.setAnnotations(i,l,undefined,d);if(n.$LimitedDescendantCountProperty){u=r.drillDown(i,n.$LimitedDescendantCountProperty);if(u){r.deleteProperty(i,n.$LimitedDescendantCountProperty);if(u!=="0"){r.setPrivateAnnotation(i,"descendants",parseInt(u))}}}return c};l.create=function(n,i,r,a,s,d,u,c){var h,p;function f(){if("$expand"in a){throw new Error("Unsupported system query option: $expand")}if("$select"in a){throw new Error("Unsupported system query option: $select")}}if(s){h=e.hasGrandTotal(s.aggregate);p=s.groupLevels&&!!s.groupLevels.length;if(e.hasMinOrMax(s.aggregate)){if(h){throw new Error("Unsupported grand totals together with min/max")}if(p){throw new Error("Unsupported group levels together with min/max")}if(s.hierarchyQualifier){throw new Error("Unsupported recursive hierarchy together with min/max")}if(u){throw new Error("Unsupported $$sharedRequest together with min/max")}f();return o.createCache(n,i,s,a)}if(a.$filter&&(h&&!s["grandTotal like 1.84"]||p)){throw new Error("Unsupported system query option: $filter")}if(h||p||s.hierarchyQualifier){if(a.$search){throw new Error("Unsupported system query option: $search")}if(!s.hierarchyQualifier){f()}if(c){throw new Error("Unsupported grouping via sorter")}if(u){throw new Error("Unsupported $$sharedRequest")}return new l(n,i,s,a,h)}}if(a.$$filterBeforeAggregate){a.$apply="filter("+a.$$filterBeforeAggregate+")/"+a.$apply;delete a.$$filterBeforeAggregate}return t.create(n,i,a,d,r,u)};return l},false);
//# sourceMappingURL=_AggregationCache.js.map