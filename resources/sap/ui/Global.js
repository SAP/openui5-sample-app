/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/VersionInfo","sap/base/Log","sap/base/assert","sap/base/util/ObjectPath"],function(e,a,n,r){"use strict";if(window.OpenAjax&&window.OpenAjax.hub){OpenAjax.hub.registerLibrary("sap","http://www.sap.com/","0.1",{})}var t;let s={version:"1.122.1",buildinfo:{lastchange:"",buildtime:"20240505-0226"}};s=Object.assign(sap.ui,s);var o=sap.ui.loader._.getSyncCallBehavior();sap.ui.getVersionInfo=function(n){if(n&&n.async){a.info("Do not use deprecated function 'sap.ui.getVersionInfo'. Use"+" 'sap/ui/VersionInfo' module's asynchronous .load function instead")}else{a.warning("Do not use deprecated function 'sap.ui.getVersionInfo' synchronously! Use"+" 'sap/ui/VersionInfo' module's asynchronous .load function instead","Deprecation",null,function(){return{type:"sap.ui.getVersionInfo",name:"Global"}})}return e._load(n)};sap.ui.namespace=function(e){n(false,"sap.ui.namespace is long time deprecated and shouldn't be used");return r.create(e)};sap.ui.lazyRequire=function(e,s,i){n(typeof e==="string"&&e,"lazyRequire: sClassName must be a non-empty string");n(!s||typeof s==="string","lazyRequire: sMethods must be empty or a string");if(o===2){a.error("[nosync] lazy stub creation ignored for '"+e+"'");return}var u=e.replace(/\//gi,"."),c=u.lastIndexOf("."),l=u.substr(0,c),p=u.substr(c+1),f=r.create(l),y=f[p],d=(s||"new").split(" "),b=d.indexOf("new");i=i||u;if(!y){if(b>=0){y=function(){if(o){if(o===1){a.error("[nosync] lazy stub for constructor '"+u+"' called")}}else{a.debug("lazy stub for constructor '"+u+"' called.")}sap.ui.requireSync(i.replace(/\./g,"/"));var r=f[p];n(typeof r==="function","lazyRequire: oRealClass must be a function after loading");if(r._sapUiLazyLoader){throw new Error("lazyRequire: stub '"+u+"'has not been replaced by module '"+i+"'")}var s=Object.create(r.prototype);if(!(this instanceof y)){t=t||sap.ui.require("sap/ui/base/Object");if(t&&s instanceof t){a.error("Constructor "+e+' has been called without "new" operator!',null,null,function(){try{throw new Error}catch(e){return e}})}}var c=r.apply(s,arguments);if(c&&(typeof c==="function"||typeof c==="object")){s=c}return s};y._sapUiLazyLoader=true;d.splice(b,1)}else{y={}}f[p]=y}d.forEach(function(e){if(!y[e]){y[e]=function(){if(o){if(o===1){a.error("[no-sync] lazy stub for method '"+u+"."+e+"' called")}}else{a.debug("lazy stub for method '"+u+"."+e+"' called.")}sap.ui.requireSync(i.replace(/\./g,"/"));var r=f[p];n(typeof r==="function"||typeof r==="object","lazyRequire: oRealClass must be a function or object after loading");n(typeof r[e]==="function","lazyRequire: method must be a function");if(r[e]._sapUiLazyLoader){throw new Error("lazyRequire: stub '"+u+"."+e+"' has not been replaced by loaded module '"+i+"'")}return r[e].apply(r,arguments)};y[e]._sapUiLazyLoader=true}})};sap.ui.lazyRequire._isStub=function(e){n(typeof e==="string"&&e,"lazyRequire._isStub: sClassName must be a non-empty string");var a=e.lastIndexOf("."),t=e.slice(0,a),s=e.slice(a+1),o=r.get(t||"");return!!(o&&typeof o[s]==="function"&&o[s]._sapUiLazyLoader)};sap.ui.resource=function(e,a){n(typeof e==="string","sLibraryName must be a string");n(typeof a==="string","sResourcePath must be a string");return sap.ui.require.toUrl((String(e).replace(/\./g,"/")+"/"+a).replace(/^\/*/,""))};sap.ui.localResources=function(e){n(e,"sNamespace must not be empty");var a={};a[e.replace(/\./g,"/")]="./"+e.replace(/\./g,"/");sap.ui.loader.config({paths:a})};return s});
//# sourceMappingURL=Global.js.map