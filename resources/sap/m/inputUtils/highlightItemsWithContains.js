/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/encodeXML"],function(e){"use strict";var n=function(n,t){if(!RegExp.escape){RegExp.escape=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}}var r=n?n.textContent:"",i="",u=RegExp.escape(t),a=new RegExp(u,"gi"),p=function(e){return e.match(new RegExp(a,"i"))};if(!p(r)){return e(r)}else{i=r.replace(a,function(n){return'<span class="sapMInputHighlight">'+e(n)+"</span>"})}return i};var t=function(e,t,r){var i,u;r=r||200;if(!t||!e&&!e.length||e.length>r){return}u=[];for(i=0;i<e.length;i++){u.push(n(e[i],t))}for(i=0;i<e.length;i++){e[i].innerHTML=u[i]}};return t});
//# sourceMappingURL=highlightItemsWithContains.js.map