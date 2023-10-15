/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../Device","../base/Object","./AnimationMode","./ControlBehavior","./Locale","./format/TimezoneUtil","sap/ui/core/_ConfigurationProvider","sap/ui/core/getCompatibilityVersion","sap/ui/core/date/CalendarWeekNumbering","sap/ui/core/Theming","sap/base/util/Version","sap/base/Log","sap/base/assert","sap/base/config","sap/base/Event","sap/base/util/deepClone","sap/base/i18n/Localization","sap/base/i18n/Formatting"],function(e,t,a,n,r,i,o,u,l,s,f,g,c,p,d,y,m,b){"use strict";var x;var C="1.119.1";function V(){function t(){if(e.os.android){var t=navigator.userAgent.match(/\s([a-z]{2}-[a-z]{2})[;)]/i);if(t){return t[1]}}return navigator.language}return M(navigator.languages&&navigator.languages[0]||t()||navigator.userLanguage||navigator.browserLanguage)||new r("en")}function v(e,t){if(t==null){return}D[e]=h(e,t)}function h(e,t){if(t==null){return}switch(x[e].type){case"boolean":if(typeof t==="string"){if(x[e].defaultValue){return t.toLowerCase()!="false"}else{return t.toLowerCase()==="true"||t.toLowerCase()==="x"}}else{return!!t}case"string":return""+t;case"code":return typeof t==="function"?t:String(t);case"function":if(typeof t!=="function"){throw new Error("unsupported value")}return t;case"function[]":t.forEach(function(e){if(typeof e!=="function"){throw new Error("Not a function: "+e)}});return t.slice();case"string[]":if(Array.isArray(t)){return t}else if(typeof t==="string"){return t.split(/[ ,;]/).map(function(e){return e.trim()})}else{throw new Error("unsupported value")}case"object":if(typeof t!=="object"){throw new Error("unsupported value")}return t;case"Locale":var a=M(t);if(a||x[e].defaultValue==null){return a}else{throw new Error("unsupported value")}default:var n=x[e].type;if(typeof n==="object"){p._.checkEnum(n,t,e);return t}else{throw new Error("illegal state")}}}function L(e){var t=document.querySelector("META[name='"+e+"']"),a=t&&t.getAttribute("content");if(a){return a}}var x={theme:{type:"string",defaultValue:"base"},language:{type:"Locale",defaultValue:V()},timezone:{type:"string",defaultValue:i.getLocalTimezone()},formatLocale:{type:"Locale",defaultValue:null},calendarType:{type:"string",defaultValue:null},calendarWeekNumbering:{type:l,defaultValue:l.Default},trailingCurrencyCode:{type:"boolean",defaultValue:true},accessibility:{type:"boolean",defaultValue:true},autoAriaBodyRole:{type:"boolean",defaultValue:false,noUrl:true},animation:{type:"boolean",defaultValue:true},animationMode:{type:a,defaultValue:undefined},rtl:{type:"boolean",defaultValue:null},debug:{type:"boolean",defaultValue:false},inspect:{type:"boolean",defaultValue:false},originInfo:{type:"boolean",defaultValue:false},noConflict:{type:"boolean",defaultValue:false,noUrl:true},noDuplicateIds:{type:"boolean",defaultValue:true},trace:{type:"boolean",defaultValue:false,noUrl:true},modules:{type:"string[]",defaultValue:[],noUrl:true},areas:{type:"string[]",defaultValue:null,noUrl:true},onInit:{type:"code",defaultValue:undefined,noUrl:true},uidPrefix:{type:"string",defaultValue:"__",noUrl:true},ignoreUrlParams:{type:"boolean",defaultValue:false,noUrl:true},preload:{type:"string",defaultValue:"auto"},rootComponent:{type:"string",defaultValue:"",noUrl:true},preloadLibCss:{type:"string[]",defaultValue:[]},application:{type:"string",defaultValue:""},appCacheBuster:{type:"string[]",defaultValue:[]},bindingSyntax:{type:"string",defaultValue:"default",noUrl:true},versionedLibCss:{type:"boolean",defaultValue:false},manifestFirst:{type:"boolean",defaultValue:false},flexibilityServices:{type:"string",defaultValue:"/sap/bc/lrep"},whitelistService:{type:"string",defaultValue:null,noUrl:true},allowlistService:{type:"string",defaultValue:null,noUrl:true},frameOptions:{type:"string",defaultValue:"default",noUrl:true},frameOptionsConfig:{type:"object",defaultValue:undefined,noUrl:true},support:{type:"string[]",defaultValue:null},testRecorder:{type:"string[]",defaultValue:null},activeTerminologies:{type:"string[]",defaultValue:undefined},fileShareSupport:{type:"string",defaultValue:undefined,noUrl:true},securityTokenHandlers:{type:"function[]",defaultValue:[],noUrl:true},productive:{type:"boolean",defaultValue:false,noUrl:true},themeRoots:{type:"object",defaultValue:{},noUrl:true},"xx-placeholder":{type:"boolean",defaultValue:true},"xx-rootComponentNode":{type:"string",defaultValue:"",noUrl:true},"xx-appCacheBusterMode":{type:"string",defaultValue:"sync"},"xx-appCacheBusterHooks":{type:"object",defaultValue:undefined,noUrl:true},"xx-disableCustomizing":{type:"boolean",defaultValue:false,noUrl:true},"xx-viewCache":{type:"boolean",defaultValue:true},"xx-depCache":{type:"boolean",defaultValue:false},"xx-libraryPreloadFiles":{type:"string[]",defaultValue:[]},"xx-componentPreload":{type:"string",defaultValue:""},"xx-designMode":{type:"boolean",defaultValue:false},"xx-supportedLanguages":{type:"string[]",defaultValue:[]},"xx-bootTask":{type:"function",defaultValue:undefined,noUrl:true},"xx-suppressDeactivationOfControllerCode":{type:"boolean",defaultValue:false},"xx-lesssupport":{type:"boolean",defaultValue:false},"xx-handleValidation":{type:"boolean",defaultValue:false},"xx-fiori2Adaptation":{type:"string[]",defaultValue:[]},"xx-cache-use":{type:"boolean",defaultValue:true},"xx-cache-excludedKeys":{type:"string[]",defaultValue:[]},"xx-cache-serialization":{type:"boolean",defaultValue:false},"xx-nosync":{type:"string",defaultValue:""},"xx-waitForTheme":{type:"string",defaultValue:""},"xx-hyphenation":{type:"string",defaultValue:""},"xx-flexBundleRequestForced":{type:"boolean",defaultValue:false},"xx-skipAutomaticFlLibLoading":{type:"boolean",defaultValue:false},"xx-cssVariables":{type:"string",defaultValue:"false"},"xx-debugModuleLoading":{type:"boolean",defaultValue:false},statistics:{type:"boolean",defaultValue:false},"xx-acc-keys":{type:"boolean",defaultValue:false},"xx-measure-cards":{type:"boolean",defaultValue:false}};var w;var S;function T(){S=S||{__count:0};S.__count++;return S}function U(){if(S&&--S.__count===0){var e=S;delete S.__count;S=undefined;w&&w.fireLocalizationChanged(e)}}var A=t.extend("sap.ui.core.Configuration",{constructor:function(){g.error("Configuration is designed as a singleton and should not be created manually! "+"Please require 'sap/ui/core/Configuration' instead and use the module export directly without using 'new'.");return A}});var D={};var P=false;function F(){P=true;var e=window["sap-ui-config"]||{};for(var t in x){D[t]=Array.isArray(x[t].defaultValue)?[]:x[t].defaultValue;if(e.hasOwnProperty(t.toLowerCase())){v(t,e[t.toLowerCase()])}else if(!/^xx-/.test(t)&&e.hasOwnProperty("xx-"+t.toLowerCase())){v(t,e["xx-"+t.toLowerCase()])}}if(e.libs){D.modules=e.libs.split(",").map(function(e){return e.trim()+".library"}).concat(D.modules)}var a;if(!D.ignoreUrlParams){var n="sap-ui-";a=new URLSearchParams(window.location.search);if(a.has("sap-statistics")){var r=a.get("sap-statistics");v("statistics",r)}for(var t in x){if(x[t].noUrl){continue}var r=a.get(n+t);if(r==null&&!/^xx-/.test(t)){r=a.get(n+"xx-"+t)}if(r===""){D[t]=x[t].defaultValue}else{v(t,r)}}}var i=D["xx-fiori2Adaptation"];if(i.length===0||i.length===1&&i[0]==="false"){i=false}else if(i.length===1&&i[0]==="true"){i=true}D["xx-fiori2Adaptation"]=i;D["allowlistService"]=D["allowlistService"]||D["whitelistService"];if(!D["allowlistService"]){var o=L("sap.allowlistService")||L("sap.whitelistService");if(o){D["allowlistService"]=o;if(D["frameOptions"]==="default"){D["frameOptions"]="trusted"}}}if(D["frameOptions"]==="default"||D["frameOptions"]!=="allow"&&D["frameOptions"]!=="deny"&&D["frameOptions"]!=="trusted"){D["frameOptions"]="allow"}var u=D["frameOptionsConfig"];if(u){u.allowlist=u.allowlist||u.whitelist}if(D.flexibilityServices&&D.flexibilityServices!==x.flexibilityServices.defaultValue&&!D["xx-skipAutomaticFlLibLoading"]&&D.modules.indexOf("sap.ui.fl.library")==-1){D.modules.push("sap.ui.fl.library")}for(var t in x){if(D[t]!==x[t].defaultValue){g.info("  "+t+" = "+D[t])}}var l=A.getSyncCallBehavior();sap.ui.loader.config({reportSyncCalls:l});if(l&&e.__loaded){var s="[nosync]: configuration loaded via sync XHR";if(l===1){g.warning(s)}else{g.error(s)}}}var O;Object.assign(A,{getVersion:function(){if(D._version){return D._version}D._version=new f(C);return D._version},getCompatibilityVersion:u,getTheme:s.getTheme,getPlaceholder:function(){return p.get({name:"sapUiXxPlaceholder",type:p.Type.Boolean,external:true,defaultValue:true})},setTheme:function(e){s.setTheme(e);return this},getLanguage:m.getLanguage,setLanguage:m.setLanguage,getLanguageTag:function(){return m.getLanguageTag().toString()},getSAPLogonLanguage:m.getSAPLogonLanguage,getTimezone:m.getTimezone,setTimezone:m.setTimezone,getCalendarType:b.getCalendarType,getCalendarWeekNumbering:b.getCalendarWeekNumbering,getRTL:m.getRTL,setRTL:m.setRTL,getLocale:function(){var e=m.getLanguageTag();return r._getCoreLocale(e)},setCalendarType:function(e){b.setCalendarType.apply(b,arguments);return this},setCalendarWeekNumbering:function(e){b.setCalendarWeekNumbering.apply(b,arguments);return this},getFormatLocale:function(){return b.getLanguageTag().toString()},setFormatLocale:function(e){b.setLanguageTag.apply(b,arguments);return this},getLanguagesDeliveredWithCore:m.getLanguagesDeliveredWithCore,getSupportedLanguages:m.getSupportedLanguages,getAccessibility:n.isAccessibilityEnabled,getAutoAriaBodyRole:function(){return A.getValue("autoAriaBodyRole")},getAnimation:function(){var e=A.getAnimationMode();return e!==A.AnimationMode.minimal&&e!==A.AnimationMode.none},getAnimationMode:n.getAnimationMode,setAnimationMode:n.setAnimationMode,getFiori2Adaptation:function(){return A.getValue("xx-fiori2Adaptation")},getDebug:function(){return window["sap-ui-debug"]===true||p.get({name:"sapUiDebug",type:p.Type.Boolean,external:true})},getInspect:function(){return A.getValue("inspect")},getOriginInfo:function(){return A.getValue("originInfo")},getNoDuplicateIds:function(){return p.get({name:"sapUiNoDuplicateIds",type:p.Type.Boolean,defaultValue:true,external:true})},getTrace:function(){return A.getValue("trace")},getUIDPrefix:function(){var e=sap.ui.require("sap/ui/base/ManagedObjectMetadata");return e.getUIDPrefix()},getDesignMode:function(){return p.get({name:"sapUiXxDesignMode",type:p.Type.Boolean,external:true,freeze:true})},getSuppressDeactivationOfControllerCode:function(){return p.get({name:"sapUiXxSuppressDeactivationOfControllerCode",type:p.Type.Boolean,external:true,freeze:true})},getControllerCodeDeactivated:function(){return A.getDesignMode()&&!A.getSuppressDeactivationOfControllerCode()},getApplication:function(){return A.getValue("application")},getRootComponent:function(){return A.getValue("rootComponent")},getAppCacheBuster:function(){return p.get({name:"sapUiAppCacheBuster",type:p.Type.StringArray,external:true,freeze:true})},getAppCacheBusterMode:function(){return p.get({name:"sapUiXxAppCacheBusterMode",type:p.Type.String,defaultValue:"sync",external:true,freeze:true})},getAppCacheBusterHooks:function(){return p.get({name:"sapUiXxAppCacheBusterHooks",type:p.Type.Object,defaultValue:undefined,freeze:true})},getDisableCustomizing:function(){return p.get({name:"sapUiXxDisableCustomizing",type:p.Type.Boolean})},getPreload:function(){if(A.getDebug()===true){return""}var e=p.get({name:"sapUiPreload",type:p.Type.String,defaultValue:"auto",external:true});if(e==="auto"){if(window["sap-ui-optimized"]){e=sap.ui.loader.config().async?"async":"sync"}else{e=""}}return e},getSyncCallBehavior:function(){var e=0;var t=p.get({name:"sapUiXxNoSync",type:p.Type.String,external:true,freeze:true});if(t==="warn"){e=1}else if(/^(true|x)$/i.test(t)){e=2}return e},getDepCache:function(){return p.get({name:"sapUiXxDepCache",type:p.Type.Boolean,external:true})},getManifestFirst:function(){return p.get({name:"sapUiManifestFirst",type:p.Type.Boolean,external:true})},getFlexibilityServices:function(){var e=A.getValue("flexibilityServices")||[];if(typeof e==="string"){if(e[0]==="/"){e=[{url:e,layers:["ALL"],connector:"LrepConnector"}]}else{e=JSON.parse(e)}}D.flexibilityServices=e;return D.flexibilityServices},setFlexibilityServices:function(e){D.flexibilityServices=e.slice()},getComponentPreload:function(){return p.get({name:"sapUiXxComponentPreload",type:p.Type.String,external:true})||A.getPreload()},getFormatSettings:function(){return O},getFrameOptions:function(){return A.getValue("frameOptions")},getWhitelistService:function(){return A.getAllowlistService()},getAllowlistService:function(){return A.getValue("allowlistService")},getFileShareSupport:function(){return A.getValue("fileShareSupport")||undefined},getSupportMode:function(){return A.getValue("support")},getTestRecorderMode:function(){return A.getValue("testRecorder")},getStatistics:function(){return A.getStatisticsEnabled()},getStatisticsEnabled:function(){var e=A.getValue("statistics");try{e=e||window.localStorage.getItem("sap-ui-statistics")=="X"}catch(e){}return e},getNoNativeScroll:function(){return false},getActiveTerminologies:m.getActiveTerminologies,getSecurityTokenHandlers:function(){return A.getValue("securityTokenHandlers").slice()},setSecurityTokenHandlers:function(e){e.forEach(function(e){z(typeof e==="function","Not a function: "+e)});D.securityTokenHandlers=e.slice()},applySettings:function(e){function t(e,a){var n,r;for(n in a){r="set"+n.slice(0,1).toUpperCase()+n.slice(1);if(n==="formatSettings"&&O){t(O,a[n])}else if(typeof e[r]==="function"){e[r](a[n])}else{g.warning("Configuration.applySettings: unknown setting '"+n+"' ignored")}}}c(typeof e==="object","mSettings must be an object");T();t(A,e);U();return this},setCore:function(e){w=e;F()},getValue:function(e){var t;if(typeof e!=="string"||!Object.hasOwn(x,e)){throw new TypeError("Parameter 'sName' must be the name of a valid configuration option (one of "+Object.keys(x).map(function(e){return"'"+e+"'"}).sort().join(", ")+")")}if(P||D.hasOwnProperty(e)){t=D[e]}else{if(!D.ignoreUrlParams&&!x[e].noUrl){var a=new URLSearchParams(window.location.search);t=a.get("sap-ui-"+e)||a.get("sap-"+e)}t=t?t:window["sap-ui-config"][e]||window["sap-ui-config"][e.toLowerCase()];try{t=t===undefined?x[e].defaultValue:h(e,t)}catch(a){t=x[e].defaultValue}}if(typeof x[e].type==="string"&&(x[e].type.endsWith("[]")||x[e].type==="object")){t=y(t)}return t}});A.AnimationMode=a;function M(e){try{if(e&&typeof e==="string"){return new r(e)}}catch(e){}}function z(e,t){if(!e){throw new Error(t)}}var _=t.extend("sap.ui.core.Configuration.FormatSettings",{constructor:function(){this.mSettings={}},getFormatLocale:function(){var e=b.getLanguageTag();return r._getCoreLocale(e)},_set:b._set,getCustomUnits:b.getCustomUnits,setCustomUnits:b.setCustomUnits,addCustomUnits:b.addCustomUnits,setUnitMappings:b.setUnitMappings,addUnitMappings:b.addUnitMappings,getUnitMappings:b.getUnitMappings,getDatePattern:b.getDatePattern,setDatePattern:b.setDatePattern,getTimePattern:b.getTimePattern,setTimePattern:b.setTimePattern,getNumberSymbol:b.getNumberSymbol,setNumberSymbol:b.setNumberSymbol,getCustomCurrencies:b.getCustomCurrencies,setCustomCurrencies:b.setCustomCurrencies,addCustomCurrencies:b.addCustomCurrencies,setFirstDayOfWeek:function(e){z(typeof e=="number"&&e>=0&&e<=6,"iValue must be an integer value between 0 and 6");b._set("weekData-firstDay",e);return this},_setDayPeriods:b._setDayPeriods,getLegacyDateFormat:b.getLegacyDateFormat,setLegacyDateFormat:b.setLegacyDateFormat,getLegacyTimeFormat:b.getLegacyTimeFormat,setLegacyTimeFormat:b.setLegacyTimeFormat,getLegacyNumberFormat:b.getLegacyNumberFormat,setLegacyNumberFormat:b.setLegacyNumberFormat,setLegacyDateCalendarCustomizing:b.setLegacyDateCalendarCustomizing,getLegacyDateCalendarCustomizing:b.getLegacyDateCalendarCustomizing,setTrailingCurrencyCode:b.setTrailingCurrencyCode,getTrailingCurrencyCode:b.getTrailingCurrencyCode,getCustomLocaleData:b.getCustomLocaleData});O=new _(this);m.attachChange(function(e){if(!S&&w){w.fireLocalizationChanged(d.getParameters(e))}else if(S){Object.assign(S,d.getParameters(e))}});b.attachChange(function(e){if(!S&&w){w.fireLocalizationChanged(d.getParameters(e))}else if(S){Object.assign(S,d.getParameters(e))}});return A});
//# sourceMappingURL=Configuration.js.map