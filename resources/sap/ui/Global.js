/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/VersionInfo","sap/base/Log","sap/base/assert","sap/base/util/ObjectPath"],function(e,a,r,t){"use strict";if(globalThis.OpenAjax&&globalThis.OpenAjax.hub){OpenAjax.hub.registerLibrary("sap","http://www.sap.com/","0.1",{})}var n;let s={version:"1.132.1",buildinfo:{lastchange:"",buildtime:"20250209-0326"}};s=Object.assign(sap.ui,s);var o=sap.ui.loader._.getSyncCallBehavior();sap.ui.getVersionInfo=function(r){if(r&&r.async){a.info("Do not use deprecated function 'sap.ui.getVersionInfo'. Use"+" 'sap/ui/VersionInfo' module's asynchronous .load function instead")}else{a.warning("Do not use deprecated function 'sap.ui.getVersionInfo' synchronously! Use"+" 'sap/ui/VersionInfo' module's asynchronous .load function instead","Deprecation",null,function(){return{type:"sap.ui.getVersionInfo",name:"Global"}})}return e._load(r)};sap.ui.namespace=function(e){r(false,"sap.ui.namespace is long time deprecated and shouldn't be used");return t.create(e)};sap.ui.lazyRequire=function(e,s,i){r(typeof e==="string"&&e,"lazyRequire: sClassName must be a non-empty string");r(!s||typeof s==="string","lazyRequire: sMethods must be empty or a string");if(o===2){a.error("[nosync] lazy stub creation ignored for '"+e+"'");return}var u=e.replace(/\//gi,"."),l=u.lastIndexOf("."),c=u.substr(0,l),p=u.substr(l+1),f=t.create(c),y=f[p],d=(s||"new").split(" "),b=d.indexOf("new");i=i||u;if(!y){if(b>=0){y=function(){if(o){if(o===1){a.error("[nosync] lazy stub for constructor '"+u+"' called")}}else{a.debug("lazy stub for constructor '"+u+"' called.")}sap.ui.requireSync(i.replace(/\./g,"/"));var t=f[p];r(typeof t==="function","lazyRequire: oRealClass must be a function after loading");if(t._sapUiLazyLoader){throw new Error("lazyRequire: stub '"+u+"'has not been replaced by module '"+i+"'")}var s=Object.create(t.prototype);if(!(this instanceof y)){n=n||sap.ui.require("sap/ui/base/Object");if(n&&s instanceof n){a.error("Constructor "+e+' has been called without "new" operator!',null,null,function(){try{throw new Error}catch(e){return e}})}}var l=t.apply(s,arguments);if(l&&(typeof l==="function"||typeof l==="object")){s=l}return s};y._sapUiLazyLoader=true;d.splice(b,1)}else{y={}}f[p]=y}d.forEach(function(e){if(!y[e]){y[e]=function(){if(o){if(o===1){a.error("[no-sync] lazy stub for method '"+u+"."+e+"' called")}}else{a.debug("lazy stub for method '"+u+"."+e+"' called.")}sap.ui.requireSync(i.replace(/\./g,"/"));var t=f[p];r(typeof t==="function"||typeof t==="object","lazyRequire: oRealClass must be a function or object after loading");r(typeof t[e]==="function","lazyRequire: method must be a function");if(t[e]._sapUiLazyLoader){throw new Error("lazyRequire: stub '"+u+"."+e+"' has not been replaced by loaded module '"+i+"'")}return t[e].apply(t,arguments)};y[e]._sapUiLazyLoader=true}})};sap.ui.lazyRequire._isStub=function(e){r(typeof e==="string"&&e,"lazyRequire._isStub: sClassName must be a non-empty string");var a=e.lastIndexOf("."),n=e.slice(0,a),s=e.slice(a+1),o=t.get(n||"");return!!(o&&typeof o[s]==="function"&&o[s]._sapUiLazyLoader)};sap.ui.resource=function(e,a){r(typeof e==="string","sLibraryName must be a string");r(typeof a==="string","sResourcePath must be a string");return sap.ui.require.toUrl((String(e).replace(/\./g,"/")+"/"+a).replace(/^\/*/,""))};sap.ui.localResources=function(e){r(e,"sNamespace must not be empty");var a={};a[e.replace(/\./g,"/")]="./"+e.replace(/\./g,"/");sap.ui.loader.config({paths:a})};return s});
//# sourceMappingURL=Global.js.map