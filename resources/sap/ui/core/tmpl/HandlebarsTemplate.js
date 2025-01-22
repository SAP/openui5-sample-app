/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Template","./TemplateControl","sap/ui/core/RenderManager","sap/ui/thirdparty/handlebars","sap/ui/base/ManagedObject","sap/base/util/ObjectPath","sap/base/security/encodeXML","sap/base/util/isEmptyObject","sap/ui/core/Core"],function(e,t,a,r,n,o,i,s){"use strict";var h=e.extend("sap.ui.core.tmpl.HandlebarsTemplate",{metadata:{library:"sap.ui.core"},constructor:function(t,a){e.apply(this,arguments)}});e.registerType("text/x-handlebars-template","sap.ui.core.tmpl.HandlebarsTemplate");function l(e){for(var t in e){e[t]=e[t].replace("&gt;",">").replace("&lt;","<").replace("&quot;",'"').replace("&amp;","&")}}function p(e,t){var a=/^((\w+)>)?(.*)/,r=a.exec(e),n=r[2],o=a.exec(t),i=o[2];var r=a.exec(e);if(t&&n==i){return t+r[3]}else{return e}}h.RENDER_HELPERS=function(){var e=r.helpers["each"],t=r.helpers["with"],h=r.helpers["if"],g=r.helpers["unless"],f=(new a).getInterface();f.renderControl=function(e){this.writeControlData(e);this.writeClasses(e);this.writeStyles(e)};var d={each:function(t,a){a=a||t;if(!a.hash.path){return e.apply(this,arguments)}else{l(a.hash);var n=a.data.renderManager,o=a.data.rootControl,i=a.data.path,s=a.data.parentControl,h=p(a.hash.path,i),g=o.bindList(h),f=[],d;if(a.data){d=r.createFrame(a.data)}if(g){for(var u in g){if(d){d.renderManager=n;d.rootControl=o;d.path=h+"/"+u+"/";d.parentControl=s}f.push(a.fn({},{data:d}))}}if(!s){return new r.SafeString(f.join(""))}}},with:function(e,a){a=a||e;if(!a.hash.path){return t.apply(this,arguments)}},if:function(e,t){t=t||e;if(!t.hash.path){return h.apply(this,arguments)}else{l(t.hash);var a=t.data.rootControl,r=t.data.path,n=p(t.hash.path,r);if(n){var o=a.bindProp(n);if(o){return t.fn(this)}else{return t.inverse(this)}}}},unless:function(e,t){t=t||e;if(!t.hash.path){return g.apply(this,arguments)}else{l(t.hash);var a=t.data.rootControl,r=t.data.path,n=p(t.hash.path,r);if(n){var o=a.bindProp(n);if(!o){return t.fn(this)}else{return t.inverse(this)}}}},text:function(e,t){t=t||e;l(t.hash);var a=t.data.rootControl,n=t.data.path,o=p(t.hash.path,n);if(o){var s=a.bindProp(o);return s&&new r.SafeString(i(s))}else{throw new Error('The expression "text" requires the option "path"!')}},element:function(e,t){t=t||e;l(t.hash);var a=t.data.renderManager,n=t.data.rootControl,o=n.createDOMElement(t.hash,t.data.path),i=t.data.parentElement;if(t.fn){t.fn({},{data:{renderManager:a,rootControl:n,parentElement:o}})}if(i){i.addElement(o);return}return new r.SafeString(a.getHTML(o))},control:function(e,t){t=t||e;l(t.hash);var a=t.data.renderManager,i=t.data.control;if(i){return new r.SafeString(a.getHTML(i))}var h=t.data.rootControl,p=t.data.path,g=t.data.children,f=t.hash["sap-ui-type"],d=o.get(f||""),u=d&&d.getMetadata(),c=t.hash["sap-ui-default-aggregation"]||u&&u.getDefaultAggregationName(),v=t.data.view;if(!d){throw new Error("Control of type "+f+" cannot be found.")}var m={};if(t.fn){t.fn({},{data:{rootControl:h,path:p,children:m,defaultAggregation:c,view:v}})}var C=Object.assign({},t.hash),w;for(var b in C){if(b==="sap-ui-class"&&typeof C[b]==="string"){w=C["sap-ui-class"]&&C["sap-ui-class"].split(" ");delete C[b]}else if(m[b]){delete C[b]}}var y=h.createControl(C,t.data.path,!!g,v);if(w&&w.length>0){w.forEach(y.addStyleClass.bind(y))}if(!s(m)){C=t.hash;var M=u.getAllAggregations();for(var E in m){var S=m[E];for(var T=0,A=S.length;T<A;T++){var x=S[T],j=M[E],H=j&&j.multiple;if(typeof C[E]==="string"){var L=n.bindingParser(C[E],v&&v.getController());L.template=x;y.bindAggregation(E,L)}else{if(H){y.addAggregation(E,x)}else{y.setAggregation(E,x)}}}}}if(g){var E=t.hash["sap-ui-aggregation"]||t.data.defaultAggregation;g[E]=g[E]||[];g[E].push(y);return}return new r.SafeString(a.getHTML(y))},property:function(e,t){t=t||e;l(t.hash);var a=t.data.rootControl,r=a.getMetadata(),n=t.hash.name,o=r.getProperty(n)._sGetter;return a[o]()},aggregation:function(e,t){t=t||e;l(t.hash);if(t.data.children){var a=t.hash.name;if(t.fn){var n=Object.assign({},t.data,{defaultAggregation:a});t.fn({},{data:n})}}else{var o=t.data.renderManager,i=t.data.rootControl,s=i.getMetadata(),a=t.hash.name,h=s.getAggregation(a)._sGetter,p=[];var g=i[h]();if(g){for(var f=0,d=g.length;f<d;f++){if(t.fn){p.push(t.fn({},{data:{renderManager:o,rootControl:i,control:g[f]}}))}else{p.push(o.getHTML(g[f]))}}}return new r.SafeString(p.join(""))}},event:function(e,t){t=t||e},controlData:function(e,t){t=t||e;var a=t.data.rootControl;return new r.SafeString(f.getHTML(a))}};return d}();h.prototype.createMetadata=function(){var e=this.getContent(),a=this._fnTemplate=this._fnTemplate||r.compile(e);var n={},o=t.getMetadata().getAllSettings(),i=t.getMetadata().getAllPrivateAggregations();var s={property:function(e,t){t=t||e;l(t.hash);var a=t.hash.name;if(a&&a!=="id"&&!o[a]){n.properties=n.properties||{};n.properties[a]=Object.assign({},{type:"string"},t.hash)}else{throw new Error('The property name "'+a+'" is reserved.')}},aggregation:function(e,t){t=t||e;l(t.hash);var a=t.hash.name;if(a&&!o[a]&&!i[a]){t.hash.multiple=t.hash.multiple=="true";n.aggregations=n.aggregations||{};n.aggregations[a]=Object.assign({},t.hash)}else{throw new Error('The aggregation name "'+a+'" is reserved.')}},event:function(e,t){t=t||e},controlData:function(e,t){t=t||e;n._hasControlData=true}};["each","if","unless","with"].forEach(function(e){s[e]=function(){}});a({},{helpers:s});return n};h.prototype.createRenderer=function(e){var t=this.getContent(),a=this._fnTemplate=this._fnTemplate||r.compile(t);var n=function(t,r){var n=a(r.getContext()||{},{data:{renderManager:t,rootControl:r,view:e},helpers:h.RENDER_HELPERS});t.write(n)};return n};return h});
//# sourceMappingURL=HandlebarsTemplate.js.map