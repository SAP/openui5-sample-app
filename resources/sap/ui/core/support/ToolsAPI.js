/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Global","sap/ui/core/Configuration","sap/ui/core/Element","sap/ui/core/ElementMetadata","sap/ui/core/Theming","sap/base/util/LoaderExtensions","sap/base/util/UriParameters","sap/ui/thirdparty/jquery"],function(e,t,r,n,a,i,o,jQuery){"use strict";function g(){var t=e.versioninfo?e.versioninfo.libraries:undefined;var r=Object.create(null);if(t!==undefined){t.forEach(function(e,t,n){r[e.name]=e.version})}return r}function u(){var e=sap.ui.getCore().getLoadedLibraries();var t=Object.create(null);Object.keys(sap.ui.getCore().getLoadedLibraries()).forEach(function(r,n,a){t[r]=e[r].version});return t}function d(){var e=o.fromQuery(window.location.search);return Array.from(e.keys()).reduce(function(t,r){t[r]=e.getAll(r);return t},{})}function l(){return{commonInformation:{version:e.version,buildTime:e.buildinfo.buildtime,lastChange:e.buildinfo.lastchange,jquery:jQuery.fn.jquery,userAgent:navigator.userAgent,applicationHREF:window.location.href,documentTitle:document.title,documentMode:document.documentMode||"",debugMode:t.getDebug(),statistics:t.getStatisticsEnabled()},configurationBootstrap:window["sap-ui-config"]||Object.create(null),configurationComputed:{theme:a.getTheme(),language:t.getLanguage(),formatLocale:t.getFormatLocale(),accessibility:t.getAccessibility(),animation:t.getAnimationMode()!==t.AnimationMode.minimal&&t.getAnimationMode()!==t.AnimationMode.none,rtl:t.getRTL(),debug:t.getDebug(),inspect:t.getInspect(),originInfo:t.getOriginInfo(),noDuplicateIds:t.getNoDuplicateIds()},libraries:g(),loadedLibraries:u(),loadedModules:i.getAllRequiredModules().sort(),URLParameters:d()}}var c={_createRenderedTreeModel:function(e,t){var n=e;var a=n.firstElementChild;var i=t;var o=i;var g=r.getElementById(n.id);if(n.getAttribute("data-sap-ui")&&g){i.push({id:g.getId(),name:g.getMetadata().getName(),type:"sap-ui-control",content:[]});o=i[i.length-1].content}else if(n.getAttribute("data-sap-ui-area")){i.push({id:n.id,name:"sap-ui-area",type:"data-sap-ui",content:[]});o=i[i.length-1].content}while(a){this._createRenderedTreeModel(a,o);a=a.nextElementSibling}}};var s={_getOwnProperties:function(e){var t=Object.create(null);var r=e.getMetadata().getProperties();t.meta=Object.create(null);t.meta.controlName=e.getMetadata().getName();t.properties=Object.create(null);Object.keys(r).forEach(function(n){t.properties[n]=Object.create(null);t.properties[n].value=e.getProperty(n);t.properties[n].type=r[n].getType().getName?r[n].getType().getName():""});return t},_copyInheritedProperties:function(e,t){var r=t.getProperties();var n=Object.create(null);n.meta=Object.create(null);n.meta.controlName=t.getName();n.properties=Object.create(null);Object.keys(r).forEach(function(t){n.properties[t]=Object.create(null);n.properties[t].value=r[t].get(e);n.properties[t].type=r[t].getType().getName?r[t].getType().getName():""});return n},_getInheritedProperties:function(e){var t=[];var r=e.getMetadata().getParent();while(r instanceof n){t.push(this._copyInheritedProperties(e,r));r=r.getParent()}return t},_getProperties:function(e){var t=r.getElementById(e);var n=Object.create(null);if(t){n.own=this._getOwnProperties(t);n.inherited=this._getInheritedProperties(t)}return n},_getModelFromContext:function(e,t){var r=e.getBinding(t);var n=r.getModel();var a=e.getBindingInfo(t).parts?e.getBindingInfo(t).parts:[];var i=[];for(var o=0;o<a.length;o++){i.push(a[o].model)}var g={names:i,path:r.getPath()};if(n){g.mode=n.getDefaultBindingMode();g.type=n.getMetadata().getName();g.data=n.getData?n.getData("/"):undefined}return g},_getBindDataForProperties:function(e){var t=e.getMetadata().getAllProperties();var r=Object.create(null);for(var n in t){if(t.hasOwnProperty(n)&&e.getBinding(n)){r[n]=Object.create(null);r[n].path=e.getBinding(n).getPath();r[n].value=e.getBinding(n).getValue();r[n].type=e.getMetadata().getProperty(n).getType().getName?e.getMetadata().getProperty(n).getType().getName():"";r[n].mode=e.getBinding(n).getBindingMode();r[n].model=this._getModelFromContext(e,n)}}return r},_getBindDataForAggregations:function(e){var t=e.getMetadata().getAllAggregations();var r=Object.create(null);for(var n in t){if(t.hasOwnProperty(n)&&e.getBinding(n)){r[n]=Object.create(null);r[n].model=this._getModelFromContext(e,n)}}return r}};return{getFrameworkInformation:l,getRenderedControlTree:function(){var e=[];c._createRenderedTreeModel(document.body,e);return e},getControlProperties:function(e){return s._getProperties(e)},getControlBindings:function(e){var t=Object.create(null);var n=r.getElementById(e);var a;if(!n){return t}a=n.getBindingContext();t.meta=Object.create(null);t.contextPath=a?a.getPath():null;t.aggregations=s._getBindDataForAggregations(n);t.properties=s._getBindDataForProperties(n);return t}}});
//# sourceMappingURL=ToolsAPI.js.map