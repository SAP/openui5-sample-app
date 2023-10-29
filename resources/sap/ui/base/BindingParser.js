/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ExpressionParser","sap/ui/model/BindingMode","sap/ui/model/Filter","sap/ui/model/Sorter","sap/base/Log","sap/base/util/JSTokenizer","sap/base/util/resolveReference"],function(e,t,r,n,i,o,s){"use strict";var a={_keepBindingStrings:false};var f=/^\{\s*('|"|)[a-zA-Z$_][a-zA-Z0-9$_]*\1\s*:/;var u=/(\\[\\\{\}])|(\{)/g;var l=/([\\\{\}])/g;function p(e,t){var r=e.some(function(e){return e.requiresIContext});function n(n){var i,o=e.length,s=arguments,a=new Array(o);for(i=0;i<o;i+=1){if(e[i].requiresIContext){s=arguments}else if(r){s=Array.prototype.slice.call(arguments,1)}a[i]=e[i].apply(this,s)}if(t){return t.apply(this,a)}return o>1?a.join(" "):a[0]}if(r){n.requiresIContext=true}n.textFragments=t&&t.textFragments||"sap.ui.base.BindingParser: composeFormatters";return n}function c(e){var t=function(){var t=[],r=e.length,n;for(n=0;n<r;n++){if(typeof e[n]==="number"){t.push(arguments[e[n]])}else{t.push(e[n])}}return t.join("")};t.textFragments=e;return t}function d(e){var t=e.indexOf(">"),r={path:e};if(t>0){r.model=e.slice(0,t);r.path=e.slice(t+1)}return r}function y(e,t){try{a.mergeParts(e)}catch(e){i.error("Cannot merge parts: "+e.message,t,"sap.ui.base.BindingParser")}}function h(e,t){var o=Object.assign({".":e.oContext},e.mLocals);function a(t,r){if(typeof t[r]==="string"){var n=t[r];t[r]=s(t[r],o,{preferDotContext:e.bPreferContext,bindDotContext:!e.bStaticContext});if(typeof t[r]!=="function"){if(e.bTolerateFunctionsNotFound){e.aFunctionsNotFound=e.aFunctionsNotFound||[];e.aFunctionsNotFound.push(n)}else{i.error(r+" function "+n+" not found!")}}}}function f(t){var r;var n=t.type;if(typeof n==="string"){r=s(n,o,{bindContext:false});var a=function(e){if(typeof e==="function"){t.type=new e(t.formatOptions,t.constraints)}else{t.type=e}if(!t.type){i.error("Failed to resolve type '"+n+"'. Maybe not loaded or a typo?")}delete t.formatOptions;delete t.constraints};if(e.aTypePromises){var f;if(typeof r==="function"&&!r._sapUiLazyLoader||r&&typeof r==="object"){f=Promise.resolve(a(r))}else{f=new Promise(function(e,t){sap.ui.require([n.replace(/\./g,"/")],e,t)}).catch(function(e){i.error(e)}).then(a)}e.aTypePromises.push(f)}else{a(r)}}}function u(e){if(e!=null&&typeof e==="object"){for(var t in e){a(e,t)}}}function l(e,t){var n=e[t];if(Array.isArray(n)){n.forEach(function(e,t){l(n,t)});return}if(n&&typeof n==="object"){a(n,"test");l(n,"filters");l(n,"condition");e[t]=new r(n)}}function p(e,t){var r=e[t];if(Array.isArray(r)){r.forEach(function(e,t){p(r,t)});return}if(r&&typeof r==="object"){a(r,"group");a(r,"comparator");e[t]=new n(r)}}if(typeof t==="object"){if(Array.isArray(t.parts)){t.parts.forEach(function(t){h(e,t)})}f(t);l(t,"filters");p(t,"sorter");u(t.events);a(t,"formatter");a(t,"factory");a(t,"groupHeaderFactory")}return t}function m(e,t,r){var n=o.parseJS,i,s;if(f.test(t.slice(r))){i=n(t,r);h(e,i.result);return i}s=t.indexOf("}",r);if(s<r){throw new SyntaxError("no closing braces found in '"+t+"' after pos:"+r)}return{result:d(t.slice(r+1,s)),at:s+1}}a.simpleParser=function(e){var t=arguments[7];var r;if(e.startsWith("{")&&e.endsWith("}")){r=d(e.slice(1,-1))}if(t){return{bindingInfo:r,resolved:Promise.resolve()}}return r};a.simpleParser.escape=function(e){return e};a.complexParser=function(r,n,i,o,s,f,l,p){var d=false,h={parts:[]},g=false,x={oContext:n,mLocals:l,aFunctionsNotFound:undefined,bPreferContext:f,bStaticContext:s,bTolerateFunctionsNotFound:o,aTypePromises:p?[]:undefined},v=[],b,F=0,P,A;function C(t,i,o){var a=e.parse(m.bind(null,x),r,i,null,l||(s?n:null));function f(e,t){if(e.parts){e.parts.forEach(function(t,r){if(typeof t==="string"){t=e.parts[r]={path:t}}f(t,r)});d=d||t!==undefined}else{e.mode=o}}if(t.charAt(a.at)!=="}"){throw new SyntaxError("Expected '}' and instead saw '"+t.charAt(a.at)+"' in expression binding "+t+" at position "+a.at)}a.at+=1;if(a.result){f(a.result)}else{v[v.length-1]=String(a.constant);b=true}return a}u.lastIndex=0;while((P=u.exec(r))!==null){if(F<P.index){v.push(r.slice(F,P.index))}if(P[1]){v.push(P[1].slice(1));b=true}else{v.push(h.parts.length);if(r.indexOf(":=",P.index)===P.index+1){A=C(r,P.index+3,t.OneTime)}else if(r.charAt(P.index+1)==="="){A=C(r,P.index+2,t.OneWay)}else{A=m(x,r,P.index)}if(A.result){h.parts.push(A.result);g=g||"parts"in A.result}u.lastIndex=A.at}F=u.lastIndex}if(F<r.length){v.push(r.slice(F))}if(h.parts.length>0){if(v.length===1){h=h.parts[0];g=d}else{h.formatter=c(v)}if(g){y(h,r)}if(a._keepBindingStrings){h.bindingString=r}if(x.aFunctionsNotFound){h.functionsNotFound=x.aFunctionsNotFound}if(p){return{bindingInfo:h,resolved:Promise.all(x.aTypePromises),wait:x.aTypePromises.length>0}}return h}else if(i&&b){var w=v.join("");if(p){return{bindingInfo:w,resolved:Promise.resolve()}}return w}};a.complexParser.escape=function(e){return e.replace(l,"\\$1")};a.mergeParts=function(e){var t=[],r=[];e.parts.forEach(function(e){var n,i=function(){return e},o,s=r.length;function a(){return arguments[s]}if(e&&typeof e==="object"){if(e.parts){for(o in e){if(o!=="formatter"&&o!=="parts"){throw new Error("Unsupported property: "+o)}}r=r.concat(e.parts);n=r.length;if(e.formatter){if(e.formatter.requiresIContext===true){i=function(t){var r=Array.prototype.slice.call(arguments,s+1,n+1);r.unshift(t._slice(s,n));return e.formatter.apply(this,r)};i.requiresIContext=true}else{i=function(){return e.formatter.apply(this,Array.prototype.slice.call(arguments,s,n))}}}else if(n-s>1){i=function(){return Array.prototype.slice.call(arguments,s,n).join(" ")}}else{i=a}}else if("path"in e){r.push(e);i=a}}t.push(i)});e.parts=r;e.formatter=p(t,e.formatter)};a.parseExpression=function(t,r,n,i){n=n||{};if(i){n.mLocals=i}return e.parse(m.bind(null,n),t,r,i)};return a},true);
//# sourceMappingURL=BindingParser.js.map