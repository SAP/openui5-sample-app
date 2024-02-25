/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./JSONListBinding","./JSONPropertyBinding","./JSONTreeBinding","sap/base/Log","sap/base/util/deepExtend","sap/base/util/isPlainObject","sap/ui/model/ClientModel","sap/ui/model/Context"],function(e,t,r,i,s,o,n,a){"use strict";var u=n.extend("sap.ui.model.json.JSONModel",{constructor:function(e,t){this.pSequentialImportCompleted=Promise.resolve();n.apply(this,arguments);this.bObserve=t;if(e&&typeof e=="object"){this.setData(e)}},metadata:{publicMethods:["setJSON","getJSON"]}});u.prototype.setData=function(e,t){if(t){this.oData=s(Array.isArray(this.oData)?[]:{},this.oData,e)}else{this.oData=e}if(this.bObserve){this.observeData()}this.checkUpdate()};u.prototype.observeData=function(){var e=this;function t(e){return function(){return e}}function r(t,r){return function(i){s(i,t,r);e.checkUpdate()}}function i(e,i,s){if(typeof s=="function"){e[i]=s}else{Object.defineProperty(e,i,{get:t(s),set:r(e,i)})}}function s(e,t,r){var n;if(Array.isArray(e)){for(n=0;n<e.length;n++){s(e[n],e,n)}}else if(o(e)){for(n in e){s(e[n],e,n)}}if(t){i(t,r,e)}}s(this.oData)};u.prototype.setJSON=function(e,t){var r;try{r=JSON.parse(e+"");this.setData(r,t)}catch(e){i.fatal("The following problem occurred: JSON parse Error: "+e);this.fireParseError({url:"",errorCode:-1,reason:"",srcText:e,line:-1,linepos:-1,filepos:-1})}};u.prototype.getJSON=function(){return JSON.stringify(this.oData)};u.prototype.loadData=function(e,t,r,s,o,n,a){var u;r=r!==false;s=s||"GET";n=n===undefined?this.bCache:n;this.fireRequestSent({url:e,type:s,async:r,headers:a,info:"cache="+n+";bMerge="+o,infoObject:{cache:n,merge:o}});var c=function(t){if(!t){i.fatal("The following problem occurred: No data was retrieved by service: "+e)}this.setData(t,o);this.fireRequestCompleted({url:e,type:s,async:r,headers:a,info:"cache="+n+";bMerge="+o,infoObject:{cache:n,merge:o},success:true})}.bind(this);var f=function(t,u){var c=u||t.textStatus;var f=r?t.request:t;var p=f.status;var h=f.statusText;var l=f.responseText;var d={message:c,statusCode:p,statusText:h,responseText:l};i.fatal("The following problem occurred: "+c,l+","+p+","+h);this.fireRequestCompleted({url:e,type:s,async:r,headers:a,info:"cache="+n+";bMerge="+o,infoObject:{cache:n,merge:o},success:false,errorobject:d});this.fireRequestFailed(d);if(r){return Promise.reject(d)}return undefined}.bind(this);var p=function(i,o){this._ajax({url:e,async:r,dataType:"json",cache:n,data:t,headers:a,type:s,success:i,error:o})}.bind(this);if(r){u=new Promise(function(e,t){var r=function(e,r,i){t({request:e,textStatus:r,error:i})};p(e,r)});var h=this.pSequentialImportCompleted.then(function(){return u.then(c,f)});this.pSequentialImportCompleted=h.catch(function(e){i.error("Loading of data failed: "+e.stack)});return h}else{p(c,f);return undefined}};u.prototype.dataLoaded=function(){return this.pSequentialImportCompleted};u.prototype.bindProperty=function(e,r,i){var s=new t(this,e,r,i);return s};u.prototype.bindList=function(t,r,i,s,o){var n=new e(this,t,r,i,s,o);return n};u.prototype.bindTree=function(e,t,i,s,o){var n=new r(this,e,t,i,s,o);return n};u.prototype.setProperty=function(e,t,r,i){var s=this.resolve(e,r),o,n,a;if(!s){return false}if(s=="/"){this.setData(t);return true}o=s.lastIndexOf("/");n=s.substring(0,o||1);a=s.substr(o+1);var u=this._getObject(n);if(u){u[a]=t;this.checkUpdate(false,i);return true}return false};u.prototype.getProperty=function(e,t){return this._getObject(e,t)};u.prototype._getObject=function(e,t){let r=null;if(this.isLegacySyntax()){r=this.oData}if(t instanceof a){r=this._getObject(t.getPath())}else if(t!=null){r=t}if(!e){return r}var i=e.split("/"),s=0;if(!i[0]){r=this.oData;s++}while(r&&i[s]){r=r[i[s]];s++}return r};u.prototype.isList=function(e,t){var r=this.resolve(e,t);return Array.isArray(this._getObject(r))};u.prototype._setMetaModel=function(e){this._oMetaModel=e};u.prototype.getMetaModel=function(){return this._oMetaModel};return u});
//# sourceMappingURL=JSONModel.js.map