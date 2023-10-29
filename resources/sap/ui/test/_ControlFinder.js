/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/extend","sap/base/util/isEmptyObject","sap/ui/base/Object","sap/ui/core/Element","sap/ui/test/OpaPlugin","sap/ui/test/actions/Press","sap/ui/test/_LogCollector","sap/ui/test/_OpaLogger","sap/ui/thirdparty/jquery"],function(e,t,n,r,i,s,o,a,u){"use strict";var c=new i;var l=n.extend("sap.ui.test._ControlFinder",{});var f=a.getLogger("sap.ui.test._ControlFinder");var d=o.getInstance("^((?!autowaiter).)*$");var g=[];l._findControls=function(e){if(_(e)){try{return l._findControls(v(e))}catch(e){f.error(e);return[]}}else{var t=c._getFilteredControls(e);if(t===i.FILTER_FOUND_NO_CONTROLS){return[]}else{return Array.isArray(t)?t:[t]}}};l._findElements=function(e){d.start();var t=l._findControls(e);var n=function(e){var t=(new s).$(e)[0];if(t&&t.id){return t}else{return e.getDomRef()}};var r=t.map(function(t){switch(e.interaction){case"root":return t.getDomRef();case"focus":return t.getFocusDomRef();case"press":var r=(new s)._getAdapter(t);return t.$(r)[0];case"auto":return n(t);default:r=e.interaction&&e.interaction.idSuffix;return r?t.$(r)[0]:n(t)}});g.push(d.getAndClearLog());d.stop();return r};l._getControlForElement=function(e){var t=Object.prototype.toString.call(e)==="[object String]"?"#"+e:e;return p(l._getIdentifiedDOMElement(t))};l._getControlProperty=function(t,n){var r=e({},t.mProperties,{id:t.getId()});return Object.keys(r).indexOf(n)>-1?r[n]:null};l._getDomElementIDSuffix=function(e,t){var n=e.id;var r="-";var i=t.getId().length;return n.charAt(i)===r&&n.substring(i+1)};l._getIdentifiedDOMElement=function(e){if(typeof e==="string"){e=e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}return u(e).closest("[data-sap-ui]")};l._getIdentifiedDOMElementId=function(e){var t=l._getIdentifiedDOMElement(e);return t.attr("data-sap-ui")};l._getLatestLog=function(){return g&&g.pop()};l._isControlInStaticArea=function(e){var t=sap.ui.getCore().getStaticAreaRef();return u.contains(t,e.getDomRef())};var p=function(e){return r.closestTo(e[0])};if(typeof r.closestTo!=="function"){p=function(e){return jQuery(e).control(0)}}function _(e){return e.ancestor||e.descendant||e.sibling}function v(n){var r={};if(n.ancestor){var i=b(n);var s=l._findControls(i)[0];if(s){r.ancestor=s;delete n.ancestor}else{throw new Error("Ancestor not found using selector: "+JSON.stringify(i))}}if(n.descendant){var o=l._findControls(n.descendant)[0];if(o){r.descendant=o;delete n.descendant}else{throw new Error("Descendant not found using selector: "+JSON.stringify(n.descendant))}}if(n.sibling){if(Array.isArray(n.sibling)){var a=l._findControls(n.sibling[0])[0];if(a){r.sibling=[[a,n.sibling[1]]];delete n.sibling}}else{var a=l._findControls(n.sibling)[0];if(a){r.sibling=a;delete n.sibling}else{throw new Error("Sibling not found using selector: "+JSON.stringify(n.sibling))}}}if(t(r)){return n}else{return e({},n,{matchers:r})}}function b(e){if(Array.isArray(e.ancestor)){return{id:e.ancestor[0]}}else{return e.ancestor}}return l});
//# sourceMappingURL=_ControlFinder.js.map