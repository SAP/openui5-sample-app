/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/Configuration","sap/ui/core/Lib","sap/ui/core/Theming","sap/ui/thirdparty/URI","../Element","sap/base/util/UriParameters","sap/base/Log","sap/base/util/extend","sap/base/util/syncFetch","sap/ui/core/theming/ThemeManager","./ThemeHelper"],function(e,r,t,a,n,i,s,o,u,c,f,l){"use strict";var m=r.getSyncCallBehavior();var d={};var h=null;var p=null;var g=[];var v=[];var y=new n(sap.ui.require.toUrl(""),document.baseURI).origin();var b={};var w=/url[\s]*\('?"?([^\'")]*)'?"?\)/;var P=s.fromQuery(window.location.search).get("sap-ui-xx-no-inline-theming-parameters")!=="true";function A(e,r){var t=w.exec(e);if(t){var a=new n(t[1]);if(a.is("relative")){var i=a.absoluteTo(r).normalize().toString();e="url('"+i+"')"}}return e}function C(e,r,t){for(var a in r){if(typeof e[a]==="undefined"){e[a]=A(r[a],t)}}return e}function L(e,r){if(typeof e["default"]!=="object"){e={default:e,scopes:{}}}h=h||{};h["default"]=h["default"]||{};h["scopes"]=h["scopes"]||{};C(h["default"],e["default"],r);if(typeof e["scopes"]==="object"){for(var t in e["scopes"]){h["scopes"][t]=h["scopes"][t]||{};C(h["scopes"][t],e["scopes"][t],r)}}}function U(e){document.querySelectorAll("link[id^=sap-ui-theme-]").forEach(function(r){e(r.getAttribute("id"))})}function I(e,r){var t=T(e);var a=l.checkAndRemoveStyle({id:e});if(!a&&!r){o.warning("Parameters have been requested but theme is not applied, yet.","sap.ui.core.theming.Parameters")}if(a&&P){var n=document.getElementById(e);var i=window.getComputedStyle(n).getPropertyValue("background-image");var s=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(i);if(s&&s.length>=2){var u=s[1];if(u.charAt(0)!=="{"&&u.charAt(u.length-1)!=="}"){try{u=decodeURIComponent(u)}catch(e){o.warning("Could not decode theme parameters URI from "+t.styleSheetUrl)}}try{var c=JSON.parse(u);L(c,t.themeBaseUrl);return true}catch(e){o.warning("Could not parse theme parameters from "+t.styleSheetUrl+". Loading library-parameters.json as fallback solution.")}}}return r?a:false}function S(e){var r=T(e);if(!I(e)){var t=r.styleSheetUrl.replace(/\/(?:css_variables|library)([^\/.]*)\.(?:css|less)($|[?#])/,function(e,r,t){return"/library-parameters.json"+(t?t:"")});if(m===2){o.error("[nosync] Loading library-parameters.json ignored",t,"sap.ui.core.theming.Parameters");return}else if(m===1){o.error("[nosync] Loading library-parameters.json with sync XHR",t,"sap.ui.core.theming.Parameters")}var a=new n(r.themeBaseUrl).origin();var i=b[a];var s=[];if(i===undefined){if(t.startsWith(y)){s=[false,true]}else{s=[true,false]}}else{s=[i]}j(t,r.themeBaseUrl,s)}}function T(e){var r=document.getElementById(e);if(!r){o.warning("Could not find stylesheet element with ID",e,"sap.ui.core.theming.Parameters");return undefined}var t=r.href;return{themeBaseUrl:new n(t).filename("").query("").toString(),styleSheetUrl:t}}function j(e,r,t){var a={Accept:c.ContentTypes.JSON};var i=t.shift();if(i){a["X-Requested-With"]="XMLHttpRequest"}function s(a){o.error("Could not load theme parameters from: "+e,a);if(t.length>0){o.warning("Initial library-parameters.json request failed ('withCredentials="+i+"'; sUrl: '"+e+"').\n"+"Retrying with 'withCredentials="+!i+"'.","sap.ui.core.theming.Parameters");j(e,r,t)}}try{var u=c(e,{credentials:i?"include":"omit",headers:a});if(u.ok){var f=u.json();var l=new n(r).origin();b[l]=i;if(Array.isArray(f)){for(var m=0;m<f.length;m++){var d=f[m];L(d,r)}}else{L(f,r)}}else{throw new Error(u.statusText||u.status)}}catch(e){s(e)}}function N(e){if(!h){L({},"");U(function(r){if(e){if(!I(r,e)){g.push(r)}}else{S(r)}})}return h}function E(){var e=[];g.forEach(function(r){if(!I(r,true)){e.push(r)}});g=e}function x(){g.forEach(S);g=[]}d._addLibraryTheme=function(e){if(h){g.push("sap-ui-theme-"+e)}};function R(e){var r=e.async,a=N(r);if(e.scopeName){a=a["scopes"][e.scopeName]}else{a=a["default"]}var n=a[e.parameterName];if(!n){var i=e.parameterName.indexOf(":");if(i!=-1){var s=e.parameterName.substr(i+1);n=a[s]}}if(e.loadPendingParameters&&typeof n==="undefined"&&!r){var o=t.getAllInstancesRequiringCss();o.forEach(function(e){f._includeLibraryThemeAndEnsureThemeRoot(e)});x();n=R({parameterName:e.parameterName,scopeName:e.scopeName,loadPendingParameters:false})}return n}function O(e,r,t){var a=d.getActiveScopesFor(r,t);var n=a.flat().reduce(function(e,r){if(e.indexOf(r)===-1){e.push(r)}return e},[]);for(var i=0;i<n.length;i++){var s=n[i];var o=R({parameterName:e,scopeName:s,async:t});if(o){return o}}return R({parameterName:e,async:t})}d._getScopes=function(e,r){if(e&&!h){return}var t=N(r);var a=Object.keys(t["scopes"]);return a};d.getActiveScopesFor=function(e,r){var t=[];if(e instanceof i){var a=e.getDomRef();if(r){E()}else{x()}var n=this._getScopes(undefined,r);if(n.length){if(a){var s=function(e){var r=a.classList;return r&&r.contains(e)};while(a){var o=n.filter(s);if(o.length>0){t.push(o)}a=a.parentNode}}else{var u=function(r){return typeof e.hasStyleClass==="function"&&e.hasStyleClass(r)};while(e){var o=n.filter(u);if(o.length>0){t.push(o)}e=typeof e.getParent==="function"&&e.getParent()}}}}return t};d.get=function(r,t){var n,s,u,c,l;var m=function(e){return e.callback===s};if(!e.isInitialized()){o.warning("Called sap.ui.core.theming.Parameters.get() before core has been initialized. "+"Consider using the API only when required, e.g. onBeforeRendering.")}if(!p){p=a.getTheme()}if(arguments.length===0){o.warning("Legacy variant usage of sap.ui.core.theming.Parameters.get API detected. Do not use the Parameters.get() API to retrieve ALL theming parameters, "+"as this will lead to unwanted synchronous requests. "+"Use the asynchronous API variant instead and retrieve a fixed set of parameters.","LegacyParametersGet","sap.ui.support",function(){return{type:"LegacyParametersGet"}});x();var d=N();return Object.assign({},d["default"])}if(!r){return undefined}if(r instanceof Object&&!Array.isArray(r)){if(!r.name){o.warning("sap.ui.core.theming.Parameters.get was called with an object argument without one or more parameter names.");return undefined}t=r.scopeElement;s=r.callback;c=typeof r.name==="string"?[r.name]:r.name;u=true}else{if(typeof r==="string"){c=[r]}else{c=r}o.warning("Legacy variant usage of sap.ui.core.theming.Parameters.get API detected for parameter(s): '"+c.join(", ")+"'. This could lead to bad performance and additional synchronous XHRs, as parameters might not be available yet. Use asynchronous variant instead.","LegacyParametersGet","sap.ui.support",function(){return{type:"LegacyParametersGet"}})}var h,g;var y=function(e){if(t instanceof i){return O(e,t,u)}else{if(u){E()}return R({parameterName:e,loadPendingParameters:!u,async:u})}};g={};for(var b=0;b<c.length;b++){n=c[b];var w=y(n);if(!u||w){g[n]=w}}if(u&&s&&Object.keys(g).length!==c.length){if(!f.themeLoaded){h=function(){f.detachEvent("ThemeChanged",h);var e=this.get({name:r.name,scopeElement:r.scopeElement});if(!e||typeof e==="object"&&Object.keys(e).length!==c.length){o.error("One or more parameters could not be found.","sap.ui.core.theming.Parameters")}s(e);v.splice(v.findIndex(m),1)}.bind(this);l=v.findIndex(m);if(l>=0){f.detachEvent("ThemeChanged",v[l].eventHandler);v[l].eventHandler=h}else{v.push({callback:s,eventHandler:h})}f.attachEvent("ThemeChanged",h);return undefined}else{o.error("One or more parameters could not be found.","sap.ui.core.theming.Parameters")}}return c.length===1?g[c[0]]:g};d._setOrLoadParameters=function(e){h={default:{},scopes:{}};p=a.getTheme();U(function(r){var t=r.substr(13);if(e[t]){u(h["default"],e[t])}else{S(r)}})};d.reset=function(){this._reset.apply(this,arguments)};d._reset=function(){var e=arguments[0]===true;if(!e||a.getTheme()!==p){p=a.getTheme();g=[];h=null;l.reset()}};d._getThemeImage=function(e,r){e=e||"sapUiGlobalLogo";var t=d.get(e);if(t){var a=w.exec(t);if(a){t=a[1]}else if(t==="''"||t==="none"){t=null}}if(r&&!t){return sap.ui.require.toUrl("sap/ui/core/themes/base/img/1x1.gif")}return t};return d},true);
//# sourceMappingURL=Parameters.js.map