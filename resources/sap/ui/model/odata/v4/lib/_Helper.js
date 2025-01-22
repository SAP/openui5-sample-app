/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_Parser","sap/base/Log","sap/base/util/deepEqual","sap/base/util/isEmptyObject","sap/base/util/merge","sap/base/util/uid","sap/ui/base/SyncPromise","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/thirdparty/URI"],function(e,t,n,r,i,a,o,u,s,f){"use strict";var c=/&/g,l=/^\w+$/,d="sap.ui.model.odata.v4.lib._Helper",p=/\=/g,g=/%29/g,h=/%28/g,y=/%27/g,$=/^(\$auto(\.\w+)?|\$direct|\w+)$/,v=/#/g,m=/\([^/]*|\/-?\d+/g,P=/\+/g,b=/'/g,E=/''/g,A=/\s+/g,j;function x(e){return e.replace(y,"'").replace(h,"(").replace(g,")")}j={addByPath:function(e,t,n){if(n){if(!e[t]){e[t]=[n]}else if(!e[t].includes(n)){e[t].push(n)}}},addChildrenWithAncestor:function(e,t,n){if(t.length){e.forEach(function(e){var r;if(t.includes(e)){n[e]=true;return}r=e.split("/");r.pop();while(r.length){if(t.indexOf(r.join("/"))>=0){n[e]=true;break}r.pop()}})}},addPromise:function(e){return new o(function(t,n){j.setPrivateAnnotation(e,"reject",n)})},addToCount:function(e,t,n,r){if(n.$count!==undefined){j.setCount(e,t,n,n.$count+r)}},addToSelect:function(e,t){e.$select??=[];t.forEach(function(t){if(!e.$select.includes(t)){e.$select.push(t)}})},adjustTargets:function(e,t,n,r,i){var a="additionalTargets"in e?"additionalTargets":j.getAnnotationKey(e,".additionalTargets"),o;o=[e.target].concat(e[a]).map(function(e){return e&&j.getAdjustedTarget(e,t,n,r,i)}).filter(function(e){return e});e.target=o[0];if(a){e[a]=o.slice(1)}},adjustTargetsInError:function(e,t,n,r){if(!e.error){return}j.adjustTargets(e.error,t,n,r);if(e.error.details){e.error.details.forEach(function(e){j.adjustTargets(e,t,n,r)})}},aggregateExpandSelect:function(e,t){if(t.$select){j.addToSelect(e,t.$select)}if(t.$expand){e.$expand??={};Object.keys(t.$expand).forEach(function(n){if(e.$expand[n]){j.aggregateExpandSelect(e.$expand[n],t.$expand[n])}else{e.$expand[n]=t.$expand[n]}})}},buildPath:function(){var e="",t,n;for(n=0;n<arguments.length;n+=1){t=arguments[n];if(t||t===0){if(e&&e!=="/"&&t[0]!=="("){e+="/"}e+=t}}return e},buildQuery:function(e,t){var n,r;if(!e){return""}n=Object.keys(e);if(n.length===0){return""}if(t){n=n.filter(e=>e[0]!=="$").concat(n.filter(e=>e[0]==="$").sort())}r=[];n.forEach(function(t){var n=e[t];if(Array.isArray(n)){n.forEach(function(e){r.push(j.encodePair(t,e))})}else{r.push(j.encodePair(t,n))}});return"?"+r.join("&")},buildSelect:function(e){var t={};if(!e||e.includes("*")){return true}e.forEach(function(e){var n=e.split("/"),r=n.length-1,i=t;n.some(function(e,t){if(t===r||n[t+1]==="*"){i[e]=true;return true}if(i[e]===true){return true}i=i[e]??={}})});return t},cancelNestedCreates:function(e,t){Object.keys(e).forEach(function(n){var r,i=e[n];if(i&&i.$postBodyCollection){r=new Error(t);r.canceled=true;i.forEach(function(e){j.getPrivateAnnotation(e,"reject")(r);j.cancelNestedCreates(e,t)})}})},checkGroupId:function(e,t,n,r){if(!t&&e===undefined||typeof e==="string"&&(t?l:$).test(e)||n&&e==="$single"){return}throw new Error((r||"Invalid group ID: ")+e)},clone:function e(t,n,r){var i;if(t===undefined||t===Infinity||t===-Infinity||Number.isNaN(t)){return t}i=JSON.stringify(t,n);return r?i:JSON.parse(i)},cloneNo$:function e(t){return j.clone(t,function(e,t){return e[0]==="$"?undefined:t})},convertExpandSelectToPaths:function(e){var t=[];function n(e,r){if(e.$select){e.$select.forEach(function(e){t.push(j.buildPath(r,e))})}if(e.$expand){Object.keys(e.$expand).forEach(function(t){n(e.$expand[t],j.buildPath(r,t))})}}n(e,"");return t},copyPrivateAnnotation:function(e,t,n){if(j.hasPrivateAnnotation(e,t)){if(j.hasPrivateAnnotation(n,t)){throw new Error("Must not overwrite: "+t)}j.setPrivateAnnotation(n,t,j.getPrivateAnnotation(e,t))}},copySelected:function(e,t){if(e["@$ui5.context.isSelected"]){t["@$ui5.context.isSelected"]=true}},createError:function(e,n,r,i){var a=e.responseText,o=e.getResponseHeader("Content-Type"),u,s=new Error(n+": "+e.status+" "+e.statusText),f=e.getResponseHeader("Retry-After"),c;s.status=e.status;s.statusText=e.statusText;s.requestUrl=r;s.resourcePath=i;if(e.status===0){s.message="Network error";return s}o&&=o.split(";")[0];if(e.status===412){u=e.getResponseHeader("Preference-Applied");if(u&&u.replace(A,"")==="handling=strict"){s.strictHandlingFailed=true}else{s.isConcurrentModification=true}}if(f){c=parseInt(f);s.retryAfter=new Date(Number.isNaN(c)?f:Date.now()+c*1e3)}if(o==="application/json"){try{s.error=JSON.parse(a).error;s.message=s.error.message;if(typeof s.message==="object"){s.message=s.error.message.value}}catch(e){t.warning(e.toString(),a,d)}}else if(o==="text/plain"){s.message=a}return s},createGetMethod:function(e,t){return function(){var n=this[e].apply(this,arguments);if(n.isFulfilled()){return n.getResult()}else if(t){if(n.isRejected()){n.caught();throw n.getResult()}else{throw new Error("Result pending")}}}},createMissing:function(e,t){t.reduce(function(e,n,r){if(!(n in e)){if(r+1<t.length){e[n]={}}else{e[n]=undefined;e[n+"@$ui5.noData"]=true}}return e[n]},e)},createRequestMethod:function(e){return function(){return Promise.resolve(this[e].apply(this,arguments))}},createTechnicalDetails:function(e){var t,n=e["@$ui5.error"],r=e["@$ui5.originalMessage"]||e,i={};if(n&&(n.status||n.cause)){n=n.cause||n;i.httpStatus=n.status;if(n.isConcurrentModification){i.isConcurrentModification=true}if(n.retryAfter){i.retryAfter=n.retryAfter}}if(!(r instanceof Error)){Object.defineProperty(i,"originalMessage",{enumerable:true,get:function(){t??=j.publicClone(r);return t}})}return i},decomposeError:function(e,t,n){var r=e.error.details&&e.error.details.map(function(e){return j.getContentID(e)}),i=j.getContentID(e.error);return t.map(function(t,a){var o=new Error(e.message);function u(e,n){if(a===0&&!n){if(e.target){e.message=e.target+": "+e.message}delete e.target;return true}return n===t.$ContentID}o.error=j.clone(e.error);o.requestUrl=n+t.url;o.resourcePath=t.$resourcePath;o.status=e.status;o.statusText=e.statusText;if(!u(o.error,i)){o.error.$ignoreTopLevel=true}if(e.strictHandlingFailed){o.strictHandlingFailed=true}o.error.details&&=o.error.details.filter(function(e,t){return u(e,r[t])});return o})},deepEqual:n,deletePrivateAnnotation:function(e,t){var n=e["@$ui5._"];if(n){delete n[t]}},deleteProperty:function(e,t){var n;if(t.includes("/")){n=t.split("/");t=n.pop();e=j.drillDown(e,n);if(!e){return}}delete e[t]},deleteUpdating:function(e,t){var n=t;e.split("/").some(function(e){var t=n[e];if(t===null||Array.isArray(t)){return true}if(typeof t==="object"){n=t;return false}delete n[e+"@$ui5.updating"]})},drillDown:function(e,t){if(typeof t==="string"){t=t.split("/")}return t.reduce(function(e,t){return e&&t in e?e[t]:undefined},e)},encode:function(e,t){var n=encodeURI(e).replace(c,"%26").replace(v,"%23").replace(P,"%2B");if(t){n=n.replace(p,"%3D")}return n},encodePair:function(e,t){return j.encode(e,true)+"="+j.encode(t,false)},extractMergeableQueryOptions:function(e){var t={};if("$expand"in e){t.$expand=e.$expand;e.$expand="~"}if("$select"in e){t.$select=e.$select;e.$select="~"}return t},extractMessages:function(e){var t=[];function n(n,r,i){var a={additionalTargets:j.getAdditionalTargets(n),code:n.code,message:n.message,numericSeverity:r,technical:i||n.technical,"@$ui5.error":e,"@$ui5.originalMessage":n};Object.keys(n).forEach(function(t){if(t[0]==="@"){if(t.endsWith(".numericSeverity")){a.numericSeverity=n[t]}else if(t.endsWith(".longtextUrl")&&e.requestUrl&&n[t]){a.longtextUrl=j.makeAbsolute(n[t],e.requestUrl)}}});if(typeof n.target==="string"){if(n.target[0]==="$"||!e.resourcePath){a.message=n.target+": "+n.message}else{a.target=n.target}}a.transition=true;t.push(a)}if(e.error){if(!e.error.$ignoreTopLevel){n(e.error,4,true)}if(e.error.details){e.error.details.forEach(function(e){n(e)})}}else{n(e,4,true)}return t},fetchPropertyAndType:function(e,t){return e(t).then(function(n){if(n&&n.$kind==="NavigationProperty"){return e(t+"/").then(function(){return n})}return n})},filterPaths:function(e,t){return t.filter(function(t){var n=j.getMetaPath(t);return e.every(function(e){return!j.hasPathPrefix(n,e)})})},fireChange:function(e,t,n,r){var i=e[t],a;if(i){for(a=0;a<i.length;a+=1){i[a].onChange(n,r)}}},fireChanges:function(e,t,n,r){Object.keys(n).forEach(function(i){var a=j.buildPath(t,i),o=n[i];if(o&&typeof o==="object"){j.fireChanges(e,a,o,r)}else{j.fireChange(e,a,r?undefined:o)}});j.fireChange(e,t,r?undefined:n)},formatLiteral:function(e,t){if(e===undefined){throw new Error("Illegal value: undefined")}if(e===null){return"null"}switch(t){case"Edm.Binary":return"binary'"+e+"'";case"Edm.Boolean":case"Edm.Byte":case"Edm.Double":case"Edm.Int16":case"Edm.Int32":case"Edm.SByte":case"Edm.Single":return String(e);case"Edm.Date":case"Edm.DateTimeOffset":case"Edm.Decimal":case"Edm.Guid":case"Edm.Int64":case"Edm.TimeOfDay":return e;case"Edm.Duration":return"duration'"+e+"'";case"Edm.String":return"'"+String(e).replace(b,"''")+"'";default:throw new Error("Unsupported type: "+t)}},getAdditionalTargets:function(e){return j.getAnnotation(e,".additionalTargets")},getAdjustedTarget:function(e,t,n,r,i){var a,o,u;u=e.split("/");o=u.shift();if(o==="$Parameter"){e=u.join("/");o=u.shift()}else if(i){return"/"+i+"/"+e}if(t.$IsBound&&o===t.$Parameter[0].$Name){e=j.buildPath(r,u.join("/"));return e}if(!n){return e}a=t.$Parameter.some(function(e){return o===e.$Name});if(a){e=n+"/"+e;return e}},getAnnotation:function(e,t){var n=j.getAnnotationKey(e,t);return n&&e[n]},getAnnotationKey:function(e,n,r){var i,a,o=(r||"")+"@";Object.keys(e).forEach(function(e){if(e.startsWith(o)&&e.endsWith(n)){if(i){t.warning("Cannot distinguish "+i+" from "+e,undefined,d);a=true}i=e}});return a?undefined:i},getContentID:function(e){return j.getAnnotation(e,".ContentID")},getFilterForPredicate:function(t,n,r,i,a){var o,f=e.parseKeyPredicate(t);if(""in f){f[n.$Key[0]]=f[""];delete f[""]}o=(a?Object.keys(f):n.$Key).map(function(e){var t,n;if(typeof e==="string"){n=t=e}else{t=Object.keys(e)[0];n=e[t]}return new u(n,s.EQ,j.parseLiteral(decodeURIComponent(f[t]),r.getObject(i+"/"+n+"/$Type"),n))});return o.length===1?o[0]:new u({and:true,filters:o})},getKeyFilter:function(e,t,n,r){var i=[],a,o=j.getKeyProperties(e,t,n,r);if(!o){return undefined}for(a in o){i.push(a+" eq "+o[a])}return i.join(" and ")},getKeyPredicate:function(e,t,n,r,i){var a=j.getKeyProperties(e,t,n,r,true);if(!a){return undefined}r=Object.keys(a).map(function(e,t,n){var r=encodeURIComponent(a[e]);return i||n.length>1?encodeURIComponent(e)+"="+r:r});return"("+r.join(",")+")"},getKeyProperties:function(e,t,n,r,i){var a,o={};r??=n[t].$Key;a=r.some(function(r){var a,u,s,f,c,l,d;if(typeof r==="string"){a=u=r}else{a=Object.keys(r)[0];u=r[a];if(!i){a=u}}c=u.split("/");f=c.pop();s=j.drillDown(e,c);d=s[f];if(d===undefined||f+"@odata.type"in s){return true}l=n[j.buildPath(t,c.join("/"))];d=j.formatLiteral(d,l[f].$Type);o[a]=d});return a?undefined:o},getMetaPath:function(e){if(e[0]==="/"){return e.replace(m,"")}if(e[0]!=="("){e="/"+e}return e.replace(m,"").slice(1)},getMissingPropertyPaths:function(e,t){return(t.$select||[]).concat(Object.keys(t.$expand||{})).filter(function(t){return j.isMissingProperty(e,t)})},getPredicateIndex:function(e){var t=e?e.indexOf("(",e.lastIndexOf("/")):-1;if(t<0||!e.endsWith(")")){throw new Error("Not a list context path to an entity: "+e)}return t},getPredicates:function(e){var t,n=e.map(r);function r(e){var n=j.getPrivateAnnotation(e.getValue(),"predicate");if(!n){t=true}return n}return t?null:n},getPrivateAnnotation:function(e,t,n){const r=e["@$ui5._"]?.[t];return r===undefined?n:r},getQueryOptionsForPath:function(e,t){t=j.getMetaPath(t);if(t){t.split("/").some(function(t){e&&=e.$expand&&e.$expand[t];if(!e||e===true){e={};return true}})}return e||{}},getRelativePath:function(e,t){if(t.length){if(!e.startsWith(t)){return undefined}e=e.slice(t.length);if(e){if(e[0]==="/"){return e.slice(1)}if(e[0]!=="("){return undefined}}}return e},hasPathPrefix:function(e,t){return j.getRelativePath(e,t)!==undefined},hasPrivateAnnotation:function(e,t){var n=e["@$ui5._"];return n?t in n:false},informAll:function(e,t,n,r,i){if(r===n){return}if(r&&typeof r==="object"){Object.keys(r).forEach(function(a){j.informAll(e,j.buildPath(t,a),n&&n[a],r[a],i)})}else{j.fireChange(e,t,!i&&r===undefined?null:r);r={}}if(n&&typeof n==="object"){Object.keys(n).forEach(function(a){if(!Object.hasOwn(r,a)){j.informAll(e,j.buildPath(t,a),n[a],undefined,i)}})}},inheritPathValue:function(e,t,n,r){e.forEach(function(i,a){var o=!(i in n)||r&&n[i]===null;if(a+1<e.length){if(o){n[i]={}}t=t[i];n=n[i]}else if(o){if(t[i+"@$ui5.noData"]){n[i+"@$ui5.noData"]=true}n[i]=t[i]}})},insert:function(e,t,n){if(t>=e.length){e[t]=n}else{e.splice(t,0,n)}},intersectQueryOptions:function(e,t,n,i,a,o){var u=[],s={},f=o&&n(i+"/@com.sap.vocabularies.Common.v1.Messages/$Path").getResult(),c,l,d,p={};function g(e,t){var r=t.split("/");return r.every(function(t,a){return a===0&&e||t==="$count"||n(i+"/"+r.slice(0,a+1).join("/")).getResult().$kind==="Property"})}if(t.indexOf("")>=0){throw new Error("Unsupported empty navigation property path")}if(t.indexOf("*")>=0){d=(e&&e.$select||[]).slice();if(f&&!d.includes(f)){d.push(f)}}else if(e&&e.$select&&e.$select.indexOf("*")<0){j.addChildrenWithAncestor(t,e.$select,p);j.addChildrenWithAncestor(e.$select,t,p);if(f&&t.includes(f)){p[f]=true}d=Object.keys(p).filter(g.bind(null,true))}else{d=t.filter(g.bind(null,false))}if(e&&e.$expand){u=Object.keys(e.$expand);u.forEach(function(o){var u,f=i+"/"+o,c=j.buildPath(a,o),l={},d;j.addChildrenWithAncestor([o],t,l);if(!r(l)){s[o]=e.$expand[o];return}d=j.stripPathPrefix(o,t);if(d.length){if(n(f).getResult().$isCollection){throw new Error("Unsupported collection-valued navigation property "+f)}u=j.intersectQueryOptions(e.$expand[o]||{},d,n,f,c);if(u){s[o]=u}}})}if(!d.length&&r(s)){return null}c=Object.assign({},e,{$select:d});l=n(i).getResult();if(l.$kind==="NavigationProperty"&&!l.$isCollection){j.selectKeyProperties(c,n(i+"/").getResult())}if(r(s)){delete c.$expand}else{c.$expand=s}return c},isDataAggregation:function(e){return e&&e.$$aggregation&&!e.$$aggregation.hierarchyQualifier},isEmptyObject:r,isMissingProperty:function(e,t){var n=t.split("/");function r(e,t){var i;if(Array.isArray(e)){return e.some(function(e){return r(e,t)})}i=e[n[t]];if(i&&typeof i==="object"&&t+1<n.length){return r(i,t+1)}return i===undefined}if(t.includes("*")){throw new Error("Unsupported property path "+t)}return r(e,0)},isSafeInteger:function(e){if(typeof e!=="number"||!isFinite(e)){return false}e=Math.abs(e);return e<=9007199254740991&&Math.floor(e)===e},isSelected:function(e,t){var n,r;if(!t){return false}if(t.$expand){for(n in t.$expand){r=j.getRelativePath(e,n);if(r){return j.isSelected(r,t.$expand[n])}}}return!t.$select||t.$select.includes("*")||t.$select.some(function(t){return j.hasPathPrefix(e,t)})},makeAbsolute:function(e,t){return x(new f(e).absoluteTo(t).toString())},makeRelativeUrl:function(e,t){return x(new f(e).relativeTo(t).toString())},makeUpdateData:function(e,t,n){return e.reduceRight(function(e,t){var r={};r[t]=e;if(n){r[t+"@$ui5.updating"]=true;n=false}return r},t)},merge:i,mergeQueryOptions:function(e,t,n){var r;function i(t,n){if(n&&e?.[t]!==n){r??={...e};r[t]=n}}i("$orderby",t);if(n){i("$filter",n[0]);i("$$filterBeforeAggregate",n[1]);i("$$filterOnAggregate",n[2])}return r||e},namespace:function(e){var t;e=e.split("/")[0].split("(")[0];t=e.lastIndexOf(".");return t<0?"":e.slice(0,t)},parseLiteral:function(e,t,n){function r(r){if(!isFinite(r)){throw new Error(n+": Not a valid "+t+" literal: "+e)}return r}if(e==="null"){return null}switch(t){case"Edm.Boolean":return e==="true";case"Edm.Byte":case"Edm.Int16":case"Edm.Int32":case"Edm.SByte":return r(parseInt(e));case"Edm.Date":case"Edm.DateTimeOffset":case"Edm.Decimal":case"Edm.Guid":case"Edm.Int64":case"Edm.TimeOfDay":return e;case"Edm.Double":case"Edm.Single":return e==="INF"||e==="-INF"||e==="NaN"?e:r(parseFloat(e));case"Edm.String":return e.slice(1,-1).replace(E,"'");default:throw new Error(n+": Unsupported type: "+t)}},parseRawHeaders:function(e){return e.split("\r\n").slice(0,-1).reduce((e,t)=>{const n=t.indexOf(": ");if(n<0){e[t]=""}else{e[t.slice(0,n).toLowerCase()]=t.slice(n+2)}return e},{})},publicClone:function(e,t,n){if(Array.isArray(e)){e=e.slice()}return j.clone(e,function(e,n){if(t?!e.startsWith("@$ui5."):e!=="@$ui5._"){return n}},n)},registerChangeListener:function(e,t,n){if(n){j.addByPath(e.mChangeListeners,t,n);n.setDeregisterChangeListener(function(){j.removeByPath(e.mChangeListeners,t,n)})}},removeByPath:function(e,t,n){var r=e[t],i;if(r){i=r.indexOf(n);if(i>=0){if(r.length===1){delete e[t]}else{r.splice(i,1)}}}},resetInactiveEntity:function(e,t,n){var r=j.getPrivateAnnotation(n,"initialData"),i=j.getPrivateAnnotation(n,"postBody"),a=Object.assign({},i);Object.keys(i).forEach(function(e){if(e in r){n[e]=i[e]=j.clone(r[e])}else{delete i[e];delete n[e]}});j.informAll(e,t,a,i,true);j.updateAll(e,t,n,{"@$ui5.context.isInactive":true});j.getPrivateAnnotation(n,"context").setInactive()},resolveIfMatchHeader:function(e,t){var n=e&&e["If-Match"];if(n&&typeof n==="object"){n=n["@odata.etag"];e=Object.assign({},e);if(n===undefined){delete e["If-Match"]}else{e["If-Match"]=t?"*":n}}return e},restoreUpdatingProperties:function(e,t){var n=t||{};Object.keys(e||{}).forEach(function(r){if(r.startsWith("@")){return}if(Array.isArray(e[r])){return}if(typeof e[r]==="object"){n[r]=j.restoreUpdatingProperties(e[r],n[r])}if(e[r+"@$ui5.updating"]){n[r]=e[r];n[r+"@$ui5.updating"]=e[r+"@$ui5.updating"];t=n}});return t},selectKeyProperties:function(e,t){if(t&&t.$Key){j.addToSelect(e,t.$Key.map(function(e){if(typeof e==="object"){return e[Object.keys(e)[0]]}return e}))}},setAnnotation:function(e,t,n){if(n!==undefined){e[t]=n}else{delete e[t]}},setCount:function(e,t,n,r){if(typeof r==="string"){r=parseInt(r)}j.updateExisting(e,t,n,{$count:r})},setLanguage:function(e,t){if(t&&!e.includes("?sap-language=")&&!e.includes("&sap-language=")){e+=(e.includes("?")?"&":"?")+"sap-language="+j.encode(t)}return e},setPrivateAnnotation:function(e,t,n){var r=e["@$ui5._"];r??=e["@$ui5._"]={};r[t]=n},stripPathPrefix:function(e,t){var n=e+"/";if(e===""){return t}return t.filter(function(t){return t===e||t.startsWith(n)}).map(function(e){return e.slice(n.length)})},toArray:function(e){if(e===undefined||e===null){return[]}if(Array.isArray(e)){return e.slice()}return[e]},uid:a,updateAll:function(e,t,n,r){Object.keys(r).forEach(function(i){var a=j.buildPath(t,i),o=r[i],u=n[i];if(i==="@$ui5._"){j.setPrivateAnnotation(n,"predicate",j.getPrivateAnnotation(r,"predicate"))}else if(Array.isArray(o)){n[i]=o;j.fireChange(e,a,o)}else if(o&&typeof o==="object"){u=n[i]=j.updateAll(e,a,u||{},o);j.fireChange(e,a,u)}else if(u!==o){n[i]=o;if(u&&typeof u==="object"){j.fireChanges(e,a,u,true)}else{j.fireChange(e,a,o)}}});return n},updateExisting:function(e,t,n,r){if(!r){return}Object.keys(n).forEach(function(i){var a=j.buildPath(t,i),o=n[i],u=r[i];if(i in r||i[0]==="#"){if(Array.isArray(u)){n[i]=u;j.fireChange(e,a,u)}else if(u&&typeof u==="object"){if(o){j.updateExisting(e,a,o,u);j.fireChange(e,a,o)}else{n[i]=u;j.fireChanges(e,a,u,false)}}else if(o!==u){n[i]=u;if(o&&typeof o==="object"){j.fireChanges(e,a,o,true)}else{j.fireChange(e,a,u)}}}});Object.keys(r).filter(function(e){return e[0]==="#"}).filter(function(e){return!(e in n)}).forEach(function(i){var a=r[i],o=j.buildPath(t,i);n[i]=a;j.fireChanges(e,o,a,false)})},updateNestedCreates:function(e,t,n,r,i,a){let o=false;const u=j.getQueryOptionsForPath(t,n);Object.keys(u.$expand||{}).forEach(function(e){const t=j.drillDown(r,e);if(t&&!Array.isArray(t)){o=true}});Object.keys(a||{}).filter(function(e){return!e.includes("/")}).forEach(function(u){const s=i[u];if(!s){delete r[u];return}r[u]=s;s.$count=undefined;s.$created=0;s.$byPredicate={};if(a[u]){s.$transfer=true}const f=n+"/"+u;j.setCount(e,f,s,s.length);const c={};const l=u+"/";Object.keys(a).forEach(function(e){if(e.startsWith(l)){c[e.slice(l.length)]=a[e]}});s.forEach(function(n){const r=j.getPrivateAnnotation(n,"predicate");s.$byPredicate[r]=n;j.updateNestedCreates(e,t,f+r,n,n,c)});o=true});return o},updateNonExisting:function(e,t){Object.keys(t).forEach(function(n){var r=t[n],i;if(n in e){i=e[n];if(r&&i&&typeof r==="object"&&!Array.isArray(r)){j.updateNonExisting(i,r)}}else{e[n]=r}})},updateSelected:function(e,t,n,r,i,a,o){function u(e,t){var n;if(e===true){return true}if(e[t]){return e[t]}n=t.indexOf("@");if(n===0||n>0&&e[t.slice(0,n)]){return true}}function s(t,n,r,i){Object.keys(r).forEach(function(a){if(!(a in i)&&a.includes("@")&&!a.startsWith("@$ui5.")&&u(n,a)&&!a.endsWith("@$ui5.updating")){delete r[a];j.fireChange(e,j.buildPath(t,a),undefined)}});Object.keys(i).forEach(function(o){var f=j.buildPath(t,o),c=u(n,o),l,d=i[o],p,g=r[o];if(!c){return}if(o==="@$ui5._"){l=j.getPrivateAnnotation(i,"predicate");if(a&&a(t)){p=j.getPrivateAnnotation(r,"predicate");if(l!==p){throw new Error("Key predicate of '"+t+"' changed from "+p+" to "+l)}}else{j.setPrivateAnnotation(r,"predicate",l)}}else if(Array.isArray(d)){if(!(g&&g.$postBodyCollection)){r[o]=d;j.fireChange(e,f,d)}}else if(d&&typeof d==="object"&&!o.includes("@")){r[o]=s(f,c,g||{},d);j.fireChange(e,f,d)}else if(g!==d&&!r[o+"@$ui5.updating"]){r[o]=d;if(g&&typeof g==="object"){j.fireChanges(e,f,g,true)}else if(c===true){j.fireChange(e,f,d)}}});if(o){return r}Object.keys(n).forEach(function(n){if(r[n]===undefined&&n!=="*"){r[n+"@$ui5.noData"]=true;j.fireChange(e,j.buildPath(t,n),undefined,true)}});return r}s(t,j.buildSelect(i),n,r)},updateTransientPaths:function(e,t,n){var r;for(r in e){if(r.includes(t)){e[r.replace(t,n)]=e[r];delete e[r]}}},wrapChildQueryOptions:function(e,n,i,a,o){var u="",s=n.split("/"),f,c=e,l={},p=l,g;if(n===""){return i}for(g=0;g<s.length;g+=1){c=j.buildPath(c,s[g]);u=j.buildPath(u,s[g]);if(s[g].endsWith("*")){f=null;continue}f=a(c).getResult();if(f.$kind==="NavigationProperty"){p.$expand={};if(!o&&g===s.length-1){i=Object.assign({},i);i.$select&&=i.$select.slice()}p=p.$expand[u]=g===s.length-1?i:{};if(!o){j.selectKeyProperties(p,a(c+"/").getResult())}u=""}else if(f.$kind!=="Property"){return undefined}}if(!f||f.$kind==="Property"){if(!r(i)){t.error("Failed to enhance query options for auto-$expand/$select as the"+" child binding has query options, but its path '"+n+"' points to a structural property",JSON.stringify(i),d);return undefined}j.addToSelect(p,[u])}if("$apply"in i){t.debug("Cannot wrap $apply into $expand: "+n,JSON.stringify(i),d);return undefined}return l}};return j},false);
//# sourceMappingURL=_Helper.js.map