/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObjectMetadata","sap/ui/core/Manifest","sap/base/Log","sap/base/util/extend","sap/base/util/deepExtend","sap/base/util/isPlainObject","sap/base/util/LoaderExtensions"],function(e,t,n,a,o,i,s){"use strict";var r=sap.ui.loader._.getSyncCallBehavior();var p=function(t,n){e.apply(this,arguments)};p.prototype=Object.create(e.prototype);p.prototype.constructor=p;p.preprocessClassInfo=function(e){if(e&&typeof e.metadata==="string"){e.metadata={_src:e.metadata}}return e};p.prototype.applySettings=function(t){var o=this._oStaticInfo=t.metadata;var i=this.getName(),r=i.replace(/\.\w+?$/,"");if(o._src){if(o._src=="component.json"){n.warning("Usage of declaration \"metadata: 'component.json'\" is deprecated (component "+i+"). Use \"metadata: 'json'\" instead.")}else if(o._src!="json"){throw new Error("Invalid metadata declaration for component "+i+': "'+o._src+'"! Use "metadata: \'json\'" to load metadata from component.json.')}var p=r.replace(/\./g,"/")+"/component.json";n.info("The metadata of the component "+i+" is loaded from file "+p+".");try{var c=s.loadResource(p,{dataType:"json"});a(o,c)}catch(e){n.error('Failed to load component metadata from "'+p+'" (component '+i+")! Reason: "+e)}}e.prototype.applySettings.call(this,t);this._sComponentName=r;this._bInitialized=false;this._iInstanceCount=0;var f=o["manifest"];if(f){o.__metadataVersion=2;if(typeof f==="string"&&f==="json"){return}}else{o.__metadataVersion=1;f={}}this._applyManifest(f)};p.prototype._applyManifest=function(e,a=false){if(this._oManifest){n.info("Can't apply manifest to ComponentMetadata as it has already been created.",this.getName(),"sap.ui.core.ComponentMetadata");return}e["name"]=e["name"]||this.getName();e["sap.app"]=e["sap.app"]||{id:this.getComponentName()};e["sap.ui5"]=e["sap.ui5"]||{};if(!this.isBaseClass()){e["sap.ui5"]["extends"]=e["sap.ui5"]["extends"]||{}}this._convertLegacyMetadata(this._oStaticInfo,e);this._oManifest=new t(e,{componentName:this.getComponentName(),baseUrl:sap.ui.require.toUrl(this.getComponentName().replace(/\./g,"/"))+"/",process:!a&&this._oStaticInfo.__metadataVersion===2})};p.prototype.init=function(){if(this._iInstanceCount===0){var e=this.getParent();if(e instanceof p){e.init()}this.getManifestObject().init();this._bInitialized=true}this._iInstanceCount++};p.prototype.exit=function(){var e=Math.max(this._iInstanceCount-1,0);if(e===0){this.getManifestObject().exit();var t=this.getParent();if(t instanceof p){t.exit()}this._bInitialized=false}this._iInstanceCount=e};p.prototype.onInitComponent=function(e){n.error("The function ComponentMetadata#onInitComponent will be removed soon!")};p.prototype.onExitComponent=function(e){n.error("The function ComponentMetadata#onExitComponent will be removed soon!")};p.prototype.isBaseClass=function(){return/^sap\.ui\.core\.(UI)?Component$/.test(this.getName())};p.prototype.getMetadataVersion=function(){return this._oStaticInfo.__metadataVersion};p.prototype.getManifestObject=function(){if(!this._oManifest){var e=this._oStaticInfo["manifest"];if(typeof e==="string"&&e==="json"){var t=this.getName();var a=this.getComponentName();var o=a.replace(/\./g,"/")+"/manifest.json";var i=!!sap.ui.loader._.getModuleState(o);if(!i&&r===2){n.error("[nosync] Loading manifest of the component "+t+" ignored.",o,"sap.ui.core.ComponentMetadata");e={}}else{if(!i&&r===1){n.error("[nosync] The manifest of the component "+t+" is loaded with sync XHR.",o,"sap.ui.core.ComponentMetadata")}else{n.info("The manifest of the component "+t+" is loaded from file "+o+".")}try{var p=s.loadResource(o,{dataType:"json"});e=p}catch(a){n.error('Failed to load component manifest from "'+o+'" (component '+t+")! Reason: "+a);e={}}}this._applyManifest(e)}}return this._oManifest};p.prototype.getManifest=function(){return this._getManifest()};p.prototype._getManifest=function(){if(this.getMetadataVersion()===1){return this.getManifestObject().getRawJson()}return this.getManifestObject().getJson()};p.prototype.getRawManifest=function(){return this.getManifestObject().getRawJson()};p.prototype._getRawManifest=function(){n.warning("ComponentMetadata#_getRawManifest: do not use deprecated functions anymore!");return this.getManifestObject().getRawJson()};p.prototype.getManifestEntry=function(e,t){return this._getManifestEntry(e,t)};p.prototype._getManifestEntry=function(e,t){var n=this.getManifestObject().getEntry(e);if(n!==undefined&&!i(n)){return n}var a,s;if(t&&(a=this.getParent())instanceof p){s=a._getManifestEntry(e,t)}if(s||n){n=o({},s,n)}return n};p.prototype.getCustomEntry=function(e,t){if(!e||e.indexOf(".")<=0){n.warning("Component Metadata entries with keys without namespace prefix can not be read via getCustomEntry. Key: "+e+", Component: "+this.getName());return null}var a,s=this._oStaticInfo[e]||{};if(!i(s)){n.warning("Custom Component Metadata entry with key '"+e+"' must be an object. Component: "+this.getName());return null}if(t&&(a=this.getParent())instanceof p){return o({},a.getCustomEntry(e,t),s)}return o({},s)};p.prototype.getComponentName=function(){return this._sComponentName};p.prototype.getDependencies=function(){if(!this._oLegacyDependencies){var e=this.getManifestEntry("/sap.ui5/dependencies"),t=e&&e.minUI5Version||null,n=e&&e.libs||{},a=e&&e.components||{};var o={ui5version:t,libs:[],components:[]};for(var i in n){o.libs.push(i)}for(var s in a){o.components.push(s)}this._oLegacyDependencies=o}return this._oLegacyDependencies};p.prototype.getIncludes=function(){n.warning("Usage of sap.ui.core.ComponentMetadata.prototype.getIncludes() is deprecated. "+"For CSS files, please use the '/sap.ui5/resources/css' section in your 'manifest.json'. ","Deprecation",null,function(){return{type:"sap.ui.core.ComponentMetadata",name:this.getName()}}.bind(this));if(!this._aLegacyIncludes){var e=[],t=this.getManifestEntry("/sap.ui5/resources")||{},a=t&&t.css||[],o=t&&t.js||[];for(var i=0,s=a.length;i<s;i++){if(a[i]&&a[i].uri){e.push(a[i].uri)}}for(var i=0,s=o.length;i<s;i++){if(o[i]&&o[i].uri){e.push(o[i].uri)}}this._aLegacyIncludes=e.length>0?e:null}return this._aLegacyIncludes};p.prototype.getUI5Version=function(){return this.getManifestEntry("/sap.ui5/dependencies/minUI5Version")};p.prototype.getComponents=function(){return this.getDependencies().components};p.prototype.getLibs=function(){return this.getDependencies().libs};p.prototype.getVersion=function(){return this.getManifestEntry("/sap.app/applicationVersion/version")};p.prototype.getConfig=function(e,t){var n=this.getManifestEntry("/sap.ui5/config",!t);if(!n){return{}}if(!e){return n}return n.hasOwnProperty(e)?n[e]:{}};p.prototype.getCustomizing=function(e){return this.getManifestEntry("/sap.ui5/extends/extensions",!e)};p.prototype.getModels=function(e){if(!this._oLegacyModels){this._oLegacyModels={};var t=this.getManifestEntry("/sap.ui5/models")||{};for(var n in t){var a=t[n];this._oLegacyModels[n]=a.settings||{};this._oLegacyModels[n].type=a.type;this._oLegacyModels[n].uri=a.uri}}var i,s=o({},this._oLegacyModels);if(!e&&(i=this.getParent())instanceof p){s=o({},i.getModels(),s)}return s};p.prototype.handleValidation=function(){return this.getManifestEntry("/sap.ui5/handleValidation")};p.prototype.getServices=function(){n.warning("Usage of sap.ui.core.ComponentMetadata.prototype.getServices is deprecated!");return this._oStaticInfo.services||{}};p.prototype._convertLegacyMetadata=function(e,t){var n=function(e,t){var n={};if(e){for(var a=0,o=e.length;a<o;a++){var i=e[a];if(typeof i==="string"){n[i]=typeof t==="function"&&t(i)||{}}}}return n};var a=t["sap.app"];var o=t["sap.ui5"];for(var i in e){var s=e[i];if(s!==undefined){switch(i){case"name":t[i]=t[i]||s;a["id"]=a["id"]||s;break;case"description":case"keywords":a[i]=a[i]||s;break;case"version":var r=a.applicationVersion=a.applicationVersion||{};r.version=r.version||s;break;case"config":o[i]=o[i]||s;break;case"customizing":var p=o["extends"]=o["extends"]||{};p.extensions=p.extensions||s;break;case"dependencies":if(!o[i]){o[i]={};o[i].minUI5Version=s.ui5version;o[i].libs=n(s.libs);o[i].components=n(s.components)}break;case"includes":if(!o["resources"]){o["resources"]={};if(s&&s.length>0){for(var c=0,f=s.length;c<f;c++){var u=s[c];var d=u.match(/\.(css|js)$/i);if(d){o["resources"][d[1]]=o["resources"][d[1]]||[];o["resources"][d[1]].push({uri:u})}}}}break;case"handleValidation":if(o[i]===undefined){o[i]=s}break;case"models":if(!o["models"]){var g={};for(var m in s){var h=s[m];var l={};for(var y in h){var v=h[y];switch(y){case"type":case"uri":l[y]=v;break;default:l.settings=l.settings||{};l.settings[y]=v}}g[m]=l}o["models"]=g}break}}}};return p},true);
//# sourceMappingURL=ComponentMetadata.js.map