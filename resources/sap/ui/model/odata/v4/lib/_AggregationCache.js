/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_AggregationHelper","./_Cache","./_ConcatHelper","./_GroupLock","./_Helper","./_MinMaxHelper","sap/base/Log","sap/ui/base/SyncPromise"],function(e,t,n,i,r,o,a,s){"use strict";function l(i,o,a,l,d){var u=function(){},c=null,h,f=this;t.call(this,i,o,l,true);this.oAggregation=a;this.sDownloadUrl=t.prototype.getDownloadUrl.call(this,"");this.aElements=[];this.aElements.$byPredicate={};this.aElements.$count=undefined;this.aElements.$created=0;this.oCountPromise=undefined;if(l.$count){if(a.hierarchyQualifier){this.oCountPromise=new s(function(e){h=e});this.oCountPromise.$resolve=h}else if(a.groupLevels.length){l.$$leaves=true;this.oCountPromise=new s(function(e){c=function(t){e(parseInt(t.UI5__leaves))}})}}this.oFirstLevel=this.createGroupLevelCache(null,d||!!c);this.addKeptElement=this.oFirstLevel.addKeptElement;this.removeKeptElement=this.oFirstLevel.removeKeptElement;this.requestSideEffects=this.oFirstLevel.requestSideEffects;this.oGrandTotalPromise=undefined;if(d){this.oGrandTotalPromise=new s(function(t){n.enhanceCache(f.oFirstLevel,a,[c,function(n){var i;if(a["grandTotal like 1.84"]){e.removeUI5grand__(n)}e.setAnnotations(n,true,true,0,e.getAllProperties(a));if(a.grandTotalAtBottomOnly===false){i=Object.assign({},n,{"@$ui5.node.isExpanded":undefined});r.setPrivateAnnotation(n,"copy",i);r.setPrivateAnnotation(i,"predicate","($isTotal=true)")}r.setPrivateAnnotation(n,"predicate","()");t(n)},u])})}else if(c){n.enhanceCache(f.oFirstLevel,a,[c,u])}}l.prototype=Object.create(t.prototype);l.prototype.addTransientCollection=null;l.prototype.getAndRemoveCollection=null;l.prototype._delete=function(e,n,i,o,a){let l=parseInt(i);if(isNaN(l)){throw new Error(`Unsupported kept-alive entity: ${this.sResourcePath}${i}`)}const d=this.aElements[l];const u=r.getPrivateAnnotation(d,"predicate");if(d["@$ui5.node.isExpanded"]){throw new Error(`Unsupported expanded node: ${this.sResourcePath}${u}`)}const c=r.getPrivateAnnotation(d,"parent");if(d["@$ui5.context.isTransient"]){return c._delete(e,n,r.getPrivateAnnotation(d,"transientPredicate"))}return s.resolve(this.oRequestor.request("DELETE",n,e,{"If-Match":d})).then(()=>{l=t.getElementIndex(this.aElements,u,l);const e=c.removeElement(r.getPrivateAnnotation(d,"index",0),u);const n=r.getPrivateAnnotation(d,"descendants",0);for(let t=0;t<n;t+=1){c.removeElement(e)}const i=n+1;if(c===this.oFirstLevel){this.adjustDescendantCount(d,l,-i)}else if(!c.getValue("$count")){this.makeLeaf(this.aElements[l-1])}if(!("@$ui5.context.isTransient"in d)){this.shiftIndex(l,-i)}this.removeElement(l,u);a(l,-1)})};l.prototype.addElements=function(t,n,i,o){var a=this.aElements,l=this.oAggregation.hierarchyQualifier,d=this.oAggregation.$NodeProperty,u=this;function c(t,c){var h=a[n+c],f,p=r.getPrivateAnnotation(t,"predicate"),g=r.getPrivateAnnotation(t,"transientPredicate");if(h){if(h===t){return}e.beforeOverwritePlaceholder(h,t,i,o===undefined?undefined:o+c,d)}else if(n+c>=a.length){throw new Error("Array index out of bounds: "+(n+c))}f=a.$byPredicate[p];if(f&&f!==t&&!(f instanceof s)){if(!l){throw new Error("Duplicate predicate: "+p)}if(!f["@odata.etag"]||t["@odata.etag"]===f["@odata.etag"]){r.updateNonExisting(t,f)}else if(u.hasPendingChangesForPath(p)){throw new Error("Modified on client and on server: "+u.sResourcePath+p)}}if(p){a.$byPredicate[p]=t}if(g){a.$byPredicate[g]=t}a[n+c]=t;if(i){r.setPrivateAnnotation(t,"parent",i)}if(g){o-=1}else{r.setPrivateAnnotation(t,"index",o+c)}}if(n<0){throw new Error("Illegal offset: "+n)}if(Array.isArray(t)){t.forEach(c)}else{c(t,0)}};l.prototype.adjustDescendantCount=function(e,t,n){let i=e["@$ui5.node.level"];let o=false;for(let e=t-1;e>=0&&i>1;e-=1){const a=this.aElements[e];const s=a["@$ui5.node.level"];if(s===0){o=true}else if(s<i){if(!o||this.isAncestorOf(e,t)){const i=r.getPrivateAnnotation(a,"descendants")+n;r.setPrivateAnnotation(a,"descendants",i);if(i===0){this.makeLeaf(a)}t=e;o=false}i=s}}};l.prototype.beforeRequestSideEffects=function(e){if(!this.oAggregation.hierarchyQualifier){throw new Error("Missing recursive hierarchy")}delete e.$apply;if(!e.$select.includes(this.oAggregation.$NodeProperty)){e.$select.push(this.oAggregation.$NodeProperty)}};l.prototype.beforeUpdateSelected=function(t,n){e.checkNodeProperty(this.aElements.$byPredicate[t],n,this.oAggregation.$NodeProperty,true)};l.prototype.collapse=function(t){const n=this.getValue(t);const i=e.getCollapsedObject(n);r.updateAll(this.mChangeListeners,t,n,i);const o=this.aElements;const a=o.indexOf(n);let s=this.countDescendants(n,a);if(this.oAggregation.subtotalsAtBottomOnly!==undefined&&Object.keys(i).length>1){s+=1}for(let e=a+1;e<a+1+s;e+=1){delete o.$byPredicate[r.getPrivateAnnotation(o[e],"predicate")];delete o.$byPredicate[r.getPrivateAnnotation(o[e],"transientPredicate")]}const l=o.splice(a+1,s);l.$index=r.getPrivateAnnotation(n,"index");r.setPrivateAnnotation(n,"spliced",l);o.$count-=s;return s};l.prototype.countDescendants=function(e,t){var n;let i=e["@$ui5.node.level"];let o=r.getPrivateAnnotation(e,"descendants");if(o){i=this.oAggregation.expandTo}const a=this.aElements;for(n=t+1;n<a.length;n+=1){if(a[n]["@$ui5.node.level"]<=i){if(!o){break}o-=1;if(a[n]["@$ui5.node.isExpanded"]===false){o-=r.getPrivateAnnotation(a[n],"descendants",0)}}}return n-(t+1)};l.prototype.create=function(e,t,n,i,o,a,s,l){if(a){throw new Error("Unsupported bAtEndOfCreated")}const d=o["@$ui5.node.parent"];delete o["@$ui5.node.parent"];const u=d?.slice(d.indexOf("("));const c=this.aElements;const h=c.$byPredicate[u];if(h?.["@$ui5.node.isExpanded"]===false){throw new Error("Unsupported collapsed parent: "+d)}const f=h?h["@$ui5.node.level"]+1:1;let p=f>(this.oAggregation.expandTo||1)?r.getPrivateAnnotation(h,"cache"):this.oFirstLevel;if(!p){p=this.createGroupLevelCache(h);p.setEmpty();r.setPrivateAnnotation(h,"cache",p);r.updateAll(this.mChangeListeners,u,h,{"@$ui5.node.isExpanded":true})}const g=c.indexOf(h)+1;const v=p.create(e,t,n,i,o,a,s,l,()=>{if(p===this.oFirstLevel){this.adjustDescendantCount(o,g,-1)}c.$count-=1;delete c.$byPredicate[r.getPrivateAnnotation(o,"transientPredicate")];c.splice(g,1)});if(d){r.getPrivateAnnotation(o,"postBody")[this.oAggregation.$ParentNavigationProperty+"@odata.bind"]=r.makeRelativeUrl("/"+d,"/"+this.sResourcePath)}o["@$ui5.node.level"]=f;c.splice(g,0,null);this.addElements(o,g,p);c.$count+=1;if(p===this.oFirstLevel){this.adjustDescendantCount(o,g,+1)}return v.then(function(){c.$byPredicate[r.getPrivateAnnotation(o,"predicate")]=o;o["@$ui5.node.level"]=f;return o})};l.prototype.createGroupLevelCache=function(n,i){var o=this.oAggregation,a=n?n["@$ui5.node.level"]+1:1,s,d,u,c,h,f;if(o.hierarchyQualifier){h=Object.assign({},this.mQueryOptions)}else{s=e.getAllProperties(o);c=a>o.groupLevels.length;u=c?o.groupLevels.concat(Object.keys(o.group).sort()):o.groupLevels.slice(0,a);h=e.filterOrderby(this.mQueryOptions,o,a);f=!c&&Object.keys(o.aggregate).some(function(e){return o.aggregate[e].subtotals})}if(n){const e=r.getPrivateAnnotation(n,"filter")||r.getKeyFilter(n,o.$metaPath,this.getTypes());h.$$filterBeforeAggregate=e+(h.$$filterBeforeAggregate?" and ("+h.$$filterBeforeAggregate+")":"")}if(!i){delete h.$count;h=e.buildApply(o,h,a)}h.$count=true;d=t.create(this.oRequestor,this.sResourcePath,h,true);d.calculateKeyPredicate=o.hierarchyQualifier?l.calculateKeyPredicateRH.bind(null,n,o):l.calculateKeyPredicate.bind(null,n,u,s,c,f);return d};l.prototype.expand=function(t,n,o){var a,l=typeof n==="string"?this.getValue(n):n,d=r.getPrivateAnnotation(l,"spliced"),u=this;if(n!==l){r.updateAll(this.mChangeListeners,n,l,e.getOrCreateExpandedObject(this.oAggregation,l))}if(d){r.deletePrivateAnnotation(l,"spliced");const e=this.aElements;const t=e.indexOf(l)+1;this.aElements=e.concat(d,e.splice(t));this.aElements.$byPredicate=e.$byPredicate;a=d.length;this.aElements.$count=e.$count+a;const n=l["@$ui5.node.level"]+1-d[0]["@$ui5.node.level"];const o=r.getPrivateAnnotation(l,"index")-d.$index;d.forEach(function(e){var t=r.getPrivateAnnotation(e,"predicate");e["@$ui5.node.level"]+=n;if(r.getPrivateAnnotation(e,"parent")===u.oFirstLevel){const t=r.getPrivateAnnotation(e,"index");if(t!==undefined){r.setPrivateAnnotation(e,"index",t+o)}}if(!r.hasPrivateAnnotation(e,"placeholder")){if(d.$stale){u.turnIntoPlaceholder(e,t)}else{u.aElements.$byPredicate[t]=e;const n=r.getPrivateAnnotation(e,"transientPredicate");if(n){u.aElements.$byPredicate[n]=e}if(r.hasPrivateAnnotation(e,"expanding")){r.deletePrivateAnnotation(e,"expanding");a+=u.expand(i.$cached,e).getResult()}}}});return s.resolve(a)}let c=r.getPrivateAnnotation(l,"cache");if(!c){c=this.createGroupLevelCache(l);r.setPrivateAnnotation(l,"cache",c)}return c.read(0,this.iReadLength,0,t,o).then(function(t){var i=u.aElements.indexOf(l)+1,o=l["@$ui5.node.level"],s=e.getCollapsedObject(l),d=u.oAggregation.subtotalsAtBottomOnly!==undefined&&Object.keys(s).length>1,h;if(!l["@$ui5.node.isExpanded"]){r.deletePrivateAnnotation(l,"spliced");return 0}if(!i){r.setPrivateAnnotation(l,"expanding",true);return 0}a=t.value.$count;if(r.hasPrivateAnnotation(l,"groupLevelCount")&&r.getPrivateAnnotation(l,"groupLevelCount")!==a){throw new Error("Unexpected structural change: groupLevelCount")}r.setPrivateAnnotation(l,"groupLevelCount",a);r.updateAll(u.mChangeListeners,n,l,{"@$ui5.node.groupLevelCount":a});if(d){a+=1}if(i===u.aElements.length){u.aElements.length+=a}else{for(h=u.aElements.length-1;h>=i;h-=1){u.aElements[h+a]=u.aElements[h];delete u.aElements[h]}}u.addElements(t.value,i,c,0);for(h=i+t.value.length;h<i+t.value.$count;h+=1){u.aElements[h]=e.createPlaceholder(o+1,h-i,c)}if(d){s=Object.assign({},s);e.setAnnotations(s,undefined,true,o,e.getAllProperties(u.oAggregation));r.setPrivateAnnotation(s,"predicate",r.getPrivateAnnotation(l,"predicate").slice(0,-1)+",$isTotal=true)");u.addElements(s,i+a-1)}u.aElements.$count+=a;return a},function(t){r.updateAll(u.mChangeListeners,n,l,e.getCollapsedObject(l));throw t})};l.prototype.fetchValue=function(e,t,n,i){var r=this;if(t==="$count"){if(this.oCountPromise){return this.oCountPromise}if(this.oAggregation.hierarchyQualifier||this.oAggregation.groupLevels.length){a.error("Failed to drill-down into $count, invalid segment: $count",this.toString(),"sap.ui.model.odata.v4.lib._Cache");return s.resolve()}return this.oFirstLevel.fetchValue(e,t,n,i)}return s.resolve(this.aElements.$byPredicate[t.split("/")[0]]).then(function(){r.registerChangeListener(t,i);return r.drillDown(r.aElements,t,e)})};l.prototype.getAllElements=function(e){var t;if(e){throw new Error("Unsupported path: "+e)}t=this.aElements.map(function(e){return r.hasPrivateAnnotation(e,"placeholder")?undefined:e});t.$count=this.aElements.$count;return t};l.prototype.getCreatedElements=function(e){return[]};l.prototype.getDownloadQueryOptions=function(t){if(this.oAggregation.hierarchyQualifier){if("$count"in t){t=Object.assign({},t);delete t.$count}}else{t=e.filterOrderby(t,this.oAggregation)}return e.buildApply(this.oAggregation,t,0,true)};l.prototype.getDownloadUrl=function(e,t){return this.sDownloadUrl};l.prototype.getParentIndex=function(e){const t=this.aElements[e]["@$ui5.node.level"];if(t<=1){return-1}for(;e>=0;e-=1){if(this.aElements[e]["@$ui5.node.level"]<t){return e}}throw new Error("Unexpected error")};l.prototype.getValue=function(e){var t;t=this.fetchValue(i.$cached,e);if(t.isFulfilled()){return t.getResult()}t.caught()};l.prototype.isAncestorOf=function(e,t){if(t===e){return true}if(t<e||!this.aElements[e]["@$ui5.node.isExpanded"]||this.aElements[e]["@$ui5.node.level"]>=this.aElements[t]["@$ui5.node.level"]){return false}return t<=e+this.countDescendants(this.aElements[e],e)};l.prototype.isDeletingInOtherGroup=function(e){return false};l.prototype.keepOnlyGivenElements=function(t){var n={},i=this;t.forEach(function(e){n[e]=true});return this.aElements.filter(function(t){var o=r.getPrivateAnnotation(t,"predicate");if(!o){return}if(n[o]){e.markSplicedStale(t);return true}i.turnIntoPlaceholder(t,o)})};l.prototype.makeLeaf=function(e){r.updateAll(this.mChangeListeners,r.getPrivateAnnotation(e,"predicate"),e,{"@$ui5.node.isExpanded":undefined});delete e["@$ui5.node.isExpanded"]};l.prototype.move=function(e,t,n){const o="($uid="+r.uid()+")";const a=t.slice(t.indexOf("("));const l=this.aElements.$byPredicate[a];const d=n.slice(n.indexOf("("));const u=this.aElements.$byPredicate[d];let c;let h=r.getPrivateAnnotation(u,"cache");if(!h&&u["@$ui5.node.isExpanded"]===false){h=this.createGroupLevelCache(u);h.restoreElement(undefined,0,l,"",undefined,o);c=h.read(0,this.iReadLength,0,e.getUnlockedCopy())}return s.all([this.oRequestor.request("PATCH",t,e,{"If-Match":l,Prefer:"return=minimal"},{[this.oAggregation.$ParentNavigationProperty+"@odata.bind"]:n},null,function e(){}),c]).then(([e,t])=>{const n=this.aElements.indexOf(l);r.updateExisting(this.mChangeListeners,a,l,{"@odata.etag":e["@odata.etag"],"@$ui5.node.level":u["@$ui5.node.level"]+1});const s=r.getPrivateAnnotation(l,"parent");s.removeElement(r.getPrivateAnnotation(l,"index",0),a);if(s.getValue("$count")===0){const e=this.aElements[n-1];this.makeLeaf(e);r.deletePrivateAnnotation(e,"cache");s.setActive(false)}r.deletePrivateAnnotation(l,"index");if(!r.hasPrivateAnnotation(l,"transientPredicate")){r.setPrivateAnnotation(l,"transientPredicate",o);this.aElements.$byPredicate[o]=l;r.updateAll(this.mChangeListeners,a,l,{"@$ui5.context.isTransient":false});this.shiftIndex(n,-1)}this.aElements.splice(n,1);let f=1;if(c){r.setPrivateAnnotation(l,"parent",h);r.setPrivateAnnotation(u,"cache",h);this.aElements.$count-=1;f=this.expand(i.$cached,d).unwrap()}else{if(!h){h=this.createGroupLevelCache(u);h.setEmpty();r.setPrivateAnnotation(u,"cache",h);r.updateAll(this.mChangeListeners,d,u,{"@$ui5.node.isExpanded":true})}r.setPrivateAnnotation(l,"parent",h);h.restoreElement(undefined,0,l,"");const e=this.aElements.indexOf(u)+1;const t=r.getPrivateAnnotation(u,"spliced");if(t){l["@$ui5.node.level"]=t[0]["@$ui5.node.level"];t.unshift(l);this.aElements.$count-=1;f=this.expand(i.$cached,d).unwrap()}else{this.aElements.splice(e,0,l)}}return f})};l.prototype.read=function(e,t,n,i,o){var a,l,d=e,u=t,c,h,f=this.oGrandTotalPromise&&this.oAggregation.grandTotalAtBottomOnly!==true,p=[],g,v,P=this;function m(e,t){p.push(P.readGap(c,e,t,i.getUnlockedCopy(),o))}if(f&&!e&&t===1){if(n!==0){throw new Error("Unsupported prefetch length: "+n)}i.unlock();return this.oGrandTotalPromise.then(function(e){return{value:[e]}})}if(this.aElements.$count===undefined){this.iReadLength=t+n;if(f){if(d){d-=1}else{u-=1}}p.push(this.readCount(i),this.readFirst(d,u,n,i,o))}else{for(g=e,v=Math.min(e+t,this.aElements.length);g<v;g+=1){l=this.aElements[g];a=r.hasPrivateAnnotation(l,"placeholder")?r.getPrivateAnnotation(l,"parent"):undefined;if(a!==c){if(h!==undefined){m(h,g);c=h=undefined}if(a){h=g;c=a}}else if(h!==undefined&&r.getPrivateAnnotation(l,"index")!==r.getPrivateAnnotation(this.aElements[g-1],"index")+1){m(h,g);h=g}}if(h!==undefined){m(h,g)}i.unlock()}return s.all(p).then(function(){var n=P.aElements.slice(e,e+t).map(function(e){return r.hasPrivateAnnotation(e,"placeholder")?undefined:e});n.$count=P.aElements.$count;return{value:n}})};l.prototype.readCount=function(e){var t,n=this.oCountPromise&&this.oCountPromise.$resolve,i;if(n){delete this.oCountPromise.$resolve;t=Object.assign({},this.mQueryOptions);delete t.$apply;delete t.$count;delete t.$expand;delete t.$orderby;if(this.oAggregation.search){t.$search=this.oAggregation.search}delete t.$select;i=this.sResourcePath+"/$count"+this.oRequestor.buildQueryString(null,t);return this.oRequestor.request("GET",i,e.getUnlockedCopy()).then(n)}};l.prototype.readFirst=function(t,n,i,o,a){var s=this;return this.oFirstLevel.read(t,n,i,o,a).then(function(n){var i,o,a=0,l;s.aElements.length=s.aElements.$count=n.value.$count;if(s.oGrandTotalPromise){s.aElements.$count+=1;s.aElements.length+=1;i=s.oGrandTotalPromise.getResult();switch(s.oAggregation.grandTotalAtBottomOnly){case false:a=1;s.aElements.$count+=1;s.aElements.length+=1;s.addElements(i,0);o=r.getPrivateAnnotation(i,"copy");s.addElements(o,s.aElements.length-1);break;case true:s.addElements(i,s.aElements.length-1);break;default:a=1;s.addElements(i,0)}}s.addElements(n.value,t+a,s.oFirstLevel,t);for(l=0;l<s.aElements.$count;l+=1){if(!s.aElements[l]){s.aElements[l]=e.createPlaceholder(s.oAggregation.expandTo>1?0:1,l-a,s.oFirstLevel)}}})};l.prototype.readGap=function(e,t,n,i,o){const a=this.aElements[t];const s=r.getPrivateAnnotation(a,"index");if(s===undefined){if(n-t!==1){throw new Error("Not just a single created persisted")}const s=r.getPrivateAnnotation(a,"predicate");const l=e.refreshSingle(i,"",-1,s,true,false,o).then(n=>{r.copyPrivateAnnotation(a,"context",n);this.addElements(n,t,e)});this.aElements.$byPredicate[s]=l;return l}const l=e.getQueryOptions();if(l.$count){delete l.$count;e.setQueryOptions(l,true)}const d=e.read(s,n-t,0,i,o,true).then(n=>{var i=false,r;if(a!==this.aElements[t]&&n.value[0]!==this.aElements[t]){i=true;t=this.aElements.indexOf(a);if(t<0){t=this.aElements.indexOf(n.value[0]);if(t<0){r=new Error("Collapse before read has finished");r.canceled=true;throw r}}}this.addElements(n.value,t,e,s);if(i){r=new Error("Collapse or expand before read has finished");r.canceled=true;throw r}});if(d.isPending()){for(let e=t;e<n;e+=1){const t=r.getPrivateAnnotation(this.aElements[e],"predicate");if(t){this.aElements.$byPredicate[t]=d}}}return d};l.prototype.refreshKeptElements=function(e,t){return this.oFirstLevel.refreshKeptElements.call(this,e,t,true)};l.prototype.reset=function(e,n,i,o,a){var l,d=this;if(a){throw new Error("Unsupported grouping via sorter")}e.forEach(function(e){var t=d.aElements.$byPredicate[e];if(r.hasPrivateAnnotation(t,"placeholder")){throw new Error("Unexpected placeholder")}delete t["@$ui5.node.isExpanded"];delete t["@$ui5.node.level"];delete t["@$ui5._"];r.setPrivateAnnotation(t,"predicate",e)});this.oAggregation=o;this.sDownloadUrl=t.prototype.getDownloadUrl.call(this,"");this.oFirstLevel.reset.call(this,e,n,i);if(n){this.oBackup.oCountPromise=this.oCountPromise;this.oBackup.oFirstLevel=this.oFirstLevel}this.oCountPromise=undefined;if(i.$count){this.oCountPromise=new s(function(e){l=e});this.oCountPromise.$resolve=l}this.oFirstLevel=this.createGroupLevelCache()};l.prototype.resetChangesForPath=function(e){r.getPrivateAnnotation(this.getValue(e),"parent").resetChangesForPath(e)};l.prototype.restore=function(e){if(e){this.oCountPromise=this.oBackup.oCountPromise;this.oFirstLevel=this.oBackup.oFirstLevel}this.oFirstLevel.restore.call(this,e)};l.prototype.shiftIndex=function(e,t){const n=this.aElements;const i=n[e];const o=r.getPrivateAnnotation(i,"parent");for(let a=e+1;a<n.length;a+=1){const e=n[a];if(r.getPrivateAnnotation(e,"parent")===o){const n=r.getPrivateAnnotation(e,"index");if(n!==undefined){r.setPrivateAnnotation(e,"index",n+t)}}if(o!==this.oFirstLevel&&e["@$ui5.node.level"]<i["@$ui5.node.level"]){break}}};l.prototype.toString=function(){return this.sDownloadUrl};l.prototype.turnIntoPlaceholder=function(t,n){if(r.hasPrivateAnnotation(t,"placeholder")){return}r.setPrivateAnnotation(t,"placeholder",1);e.markSplicedStale(t);delete this.aElements.$byPredicate[n];const i=r.getPrivateAnnotation(t,"index");if(i!==undefined){r.getPrivateAnnotation(t,"parent").drop(i,n,true)}};l.calculateKeyPredicate=function(t,n,i,o,a,s,l,d){var u;if(!(d in l)){return undefined}if(t){i.forEach(function(e){if(Array.isArray(e)){r.inheritPathValue(e,t,s)}else if(!(e in s)){s[e]=t[e]}})}u=o&&r.getKeyPredicate(s,d,l)||r.getKeyPredicate(s,d,l,n,true);r.setPrivateAnnotation(s,"predicate",u);if(!o){r.setPrivateAnnotation(s,"filter",r.getKeyFilter(s,d,l,n))}e.setAnnotations(s,o?undefined:false,a,t?t["@$ui5.node.level"]+1:1,t?null:i);return u};l.calculateKeyPredicateRH=function(t,n,i,o,a){var s,l,d=1,u,c;if(!(a in o)){return undefined}c=r.getKeyPredicate(i,a,o);r.setPrivateAnnotation(i,"predicate",c);if(a!==n.$metaPath){return c}switch(r.drillDown(i,n.$DrillStateProperty)){case"expanded":l=true;break;case"collapsed":l=false;break;default:}r.deleteProperty(i,n.$DrillStateProperty);if(t){d=t["@$ui5.node.level"]+1}else{s=r.drillDown(i,n.$DistanceFromRootProperty);if(s){r.deleteProperty(i,n.$DistanceFromRootProperty);d=parseInt(s)+1}}e.setAnnotations(i,l,undefined,d);if(n.$LimitedDescendantCountProperty){u=r.drillDown(i,n.$LimitedDescendantCountProperty);if(u){r.deleteProperty(i,n.$LimitedDescendantCountProperty);if(u!=="0"){r.setPrivateAnnotation(i,"descendants",parseInt(u))}}}return c};l.create=function(n,i,r,a,s,d,u,c){var h,f;function p(){if("$expand"in a){throw new Error("Unsupported system query option: $expand")}if("$select"in a){throw new Error("Unsupported system query option: $select")}}if(s){h=e.hasGrandTotal(s.aggregate);f=s.groupLevels&&!!s.groupLevels.length;if(e.hasMinOrMax(s.aggregate)){if(h){throw new Error("Unsupported grand totals together with min/max")}if(f){throw new Error("Unsupported group levels together with min/max")}if(s.hierarchyQualifier){throw new Error("Unsupported recursive hierarchy together with min/max")}if(u){throw new Error("Unsupported $$sharedRequest together with min/max")}p();return o.createCache(n,i,s,a)}if(a.$filter&&(h&&!s["grandTotal like 1.84"]||f)){throw new Error("Unsupported system query option: $filter")}if(h||f||s.hierarchyQualifier){if(a.$search){throw new Error("Unsupported system query option: $search")}if(!s.hierarchyQualifier){p()}if(c){throw new Error("Unsupported grouping via sorter")}if(u){throw new Error("Unsupported $$sharedRequest")}return new l(n,i,s,a,h)}}if(a.$$filterBeforeAggregate){a.$apply="filter("+a.$$filterBeforeAggregate+")/"+a.$apply;delete a.$$filterBeforeAggregate}return t.create(n,i,a,d,r,u)};return l},false);
//# sourceMappingURL=_AggregationCache.js.map