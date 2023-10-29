/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/Device","sap/ui/base/EventProvider","sap/ui/base/Interface","sap/ui/base/Object","sap/ui/base/ManagedObject","./AnimationMode","./Component","./Configuration","./Element","./ElementMetadata","./Lib","./Rendering","./RenderManager","./ControlBehavior","./UIArea","./Messaging","./StaticArea","sap/ui/core/Theming","sap/base/Log","sap/ui/performance/Measurement","sap/ui/security/FrameOptions","sap/base/assert","sap/base/util/Deferred","sap/base/util/ObjectPath","sap/ui/performance/trace/initTraces","sap/base/util/isEmptyObject","sap/base/util/each","sap/ui/VersionInfo","sap/base/config","sap/base/Event","sap/ui/events/jquery/EventSimulation"],function(jQuery,e,t,n,o,i,r,a,s,u,c,p,d,l,f,h,g,y,m,v,b,E,C,T,S,M,I,_,L,A,P){"use strict";var R;if(sap.ui.getCore&&sap.ui.getCore()){return sap.ui.getCore()}M();var V;function w(){var e=A.get({name:"sapUiXxWaitForTheme",type:A.Type.String,external:true}).toLowerCase();if(e==="true"){e="rendering"}if(e!=="rendering"&&e!=="init"){e=undefined}return e}var k=function(e,t){var n=[],o=0,i=0;this.startTask=function(e){var t=n.length;n[t]={name:e,finished:false};o++;return t};this.finishTask=function(t,a){if(!n[t]||n[t].finished){throw new Error("trying to finish non existing or already finished task")}n[t].finished=true;o--;if(a===false){i++}if(o===0){v.info("Sync point '"+e+"' finished (tasks:"+n.length+", open:"+o+", failures:"+i+")");r()}};function r(){if(t){t(o,i)}t=null}v.info("Sync point '"+e+"' created")};var B=o.extend("sap.ui.core.Core",{constructor:function(){var e=this,n="sap.ui.core.Core";if(R){v.error("Only the framework must create an instance of sap/ui/core/Core."+" To get access to its functionality, require sap/ui/core/Core,"+" and use the module export directly without using 'new'.");return R}o.call(this);V=new t;["attachEvent","detachEvent","getEventingParent"].forEach(function(e){B.prototype[e]=V[e].bind(V)});this.bBooted=false;this.bInitialized=false;this.bReady=false;this.aPlugins=[];this.oModels={};this.oEventBus=null;Object.defineProperty(this,"mElements",{get:function(){v.error("oCore.mElements was a private member and has been removed. Use one of the methods in sap.ui.core.Element.registry instead");return u.registry.all()},configurable:false});this.mObjects={template:{}};this.oRootComponent=null;this.pReady=new T;this.bInitLegacyLib=false;v.info("Creating Core",null,n);b.start("coreComplete","Core.js - complete");b.start("coreBoot","Core.js - boot");b.start("coreInit","Core.js - init");var i=sap.ui.require("sap/base/config/GlobalConfigurationProvider");i.freeze();s.setCore(this);(function(){var e=A.get({name:"sapUiXxHandleValidation",type:A.Type.Boolean,external:true});if(e){g.registerObject(this,true)}}).bind(this)();var r=s.getValue("frameOptionsConfig")||{};r.mode=s.getFrameOptions();r.allowlistService=s.getAllowlistService();this.oFrameOptions=new E(r);this._grantFriendAccess();var a=this.aModules=s.getValue("modules");if(s.getDebug()){a.unshift("sap.ui.debug.DebugEnv")}var c=a.indexOf("sap.ui.core.library");if(c!=0){if(c>0){a.splice(c,1)}a.unshift("sap.ui.core.library")}if(A.get({name:"sapUiXxLesssupport",type:A.Type.Boolean})&&a.indexOf("sap.ui.core.plugin.LessSupport")==-1){v.info("Including LessSupport into declared modules");a.push("sap.ui.core.plugin.LessSupport")}var d=s.getPreload();var l=d==="async"||sap.ui.loader.config().async;document.documentElement.classList.add("sapUiTheme-"+m.getTheme());v.info("Declared theme "+m.getTheme(),null,n);v.info("Declared modules: "+a,n);this._setupContentDirection();this._setupBrowser();this._setupOS();this._setupLang();this._setupAnimation();sap.ui.getCore=function(){return e.getInterface()};var f=new k("UI5 Document Ready",function(t,n){e.init()});var h=f.startTask("document.ready");var y=f.startTask("preload and boot");var C=function(){v.trace("document is ready");f.finishTask(h);document.removeEventListener("DOMContentLoaded",C)};if(document.readyState!=="loading"){C()}else{document.addEventListener("DOMContentLoaded",C)}var S=new k("UI5 Core Preloads and Bootstrap Script",function(t,n){v.trace("Core loaded: open="+t+", failures="+n);e._boot(l,function(){f.finishTask(y);b.end("coreBoot")})});var M=S.startTask("create sp2 tasks task");if(p.getVersionedLibCss()){var I=S.startTask("load version info");var _=function(e){if(e){v.trace('Loaded "sap-ui-version.json".')}else{v.error('Could not load "sap-ui-version.json".')}S.finishTask(I)};if(l){L.load().then(_,function(e){v.error('Unexpected error when loading "sap-ui-version.json": '+e);S.finishTask(I)})}else{_(sap.ui.getVersionInfo({async:l,failOnError:false}))}}this._polyfillFlexbox();var P=S.startTask("bootstrap script");this.boot=function(){if(this.bBooted){return}this.bBooted=true;w.call(this);S.finishTask(P)};function w(){var t=A.get({name:"sapUiXxBootTask",type:A.Type.Function});if(t){var n=S.startTask("custom boot task");t(function(e){S.finishTask(n,typeof e==="undefined"||e===true)})}if(d==="sync"||d==="async"){var o=e.aModules.reduce(function(e,t){var n=t.search(/\.library$/);if(n>=0){e.push(t.slice(0,n))}return e},[]);var i=p._load(o,{sync:!l,preloadOnly:true});if(l){var r=S.startTask("preload bootstrap libraries");i.then(function(){S.finishTask(r)},function(){S.finishTask(r,false)})}}var a=s.getAppCacheBuster();if(a&&a.length>0){if(l){var u=S.startTask("require AppCachebuster");sap.ui.require(["sap/ui/core/AppCacheBuster"],function(e){e.boot(S);S.finishTask(u)})}else{var c=sap.ui.requireSync("sap/ui/core/AppCacheBuster");c.boot(S)}}if(s.getSupportMode()!==null){var f=S.startTask("support info script");var h=function(e,t){e.initializeSupportMode(s.getSupportMode(),l);t.initSupportRules(s.getSupportMode());S.finishTask(f)};if(l){sap.ui.require(["sap/ui/core/support/Support","sap/ui/support/Bootstrap"],h,function(e){v.error("Could not load support mode modules:",e)})}else{v.warning("Synchronous loading of Support mode. Set preload configuration to 'async' or switch to asynchronous bootstrap to prevent these synchronous request.","SyncXHR",null,function(){return{type:"SyncXHR",name:"support-mode"}});h(sap.ui.requireSync("sap/ui/core/support/Support"),sap.ui.requireSync("sap/ui/support/Bootstrap"))}}if(s.getTestRecorderMode()!==null){var g=S.startTask("test recorder script");var y=function(e){e.init(s.getTestRecorderMode());S.finishTask(g)};if(l){sap.ui.require(["sap/ui/testrecorder/Bootstrap"],y,function(e){v.error("Could not load test recorder:",e)})}else{v.warning("Synchronous loading of Test recorder mode. Set preload configuration to 'async' or switch to asynchronous bootstrap to prevent these synchronous request.","SyncXHR",null,function(){return{type:"SyncXHR",name:"test-recorder-mode"}});y(sap.ui.requireSync("sap/ui/testrecorder/Bootstrap"))}}S.finishTask(M)}},metadata:{publicMethods:["getConfiguration","boot","ready","isMobile","isInitialized","attachInit","lock","unlock","isLocked","attachInitEvent","registerPlugin","unregisterPlugin","setRoot","getRootComponent","getApplication","getControl","getComponent","getTemplate","createComponent","getCurrentFocusedControlId","getEventBus","byId","attachIntervalTimer","detachIntervalTimer","getElementById","byFieldGroupId","getLoadedLibraries","loadLibrary","initLibrary","getLibraryResourceBundle","attachLibraryChanged","detachLibraryChanged","loadLibraries","setModel","getModel","hasModel","getMessageManager","attachEvent","detachEvent","attachControlEvent","detachControlEvent","attachParseError","detachParseError","attachValidationError","detachValidationError","attachFormatError","detachFormatError","attachValidationSuccess","detachValidationSuccess","attachLocalizationChanged","detachLocalizationChanged","fireFormatError","fireValidationSuccess","fireValidationError","fireParseError","getStaticAreaRef","isStaticAreaRef","createRenderManager","createUIArea","getUIArea","getUIDirty","applyChanges","getRenderManager","addPrerenderingTask","applyTheme","setThemeRoot","attachThemeChanged","detachThemeChanged","isThemeApplied","notifyContentDensityChanged","attachThemeScopingChanged","detachThemeScopingChanged","fireThemeScopingChanged","includeLibraryTheme"]}});B.M_EVENTS={ControlEvent:"ControlEvent",UIUpdated:"UIUpdated",ThemeChanged:"ThemeChanged",ThemeScopingChanged:"themeScopingChanged",LocalizationChanged:"localizationChanged",LibraryChanged:"libraryChanged",ValidationError:"validationError",ParseError:"parseError",FormatError:"formatError",ValidationSuccess:"validationSuccess"};B.prototype._grantFriendAccess=function(){c.prototype.register=function(e){p._registerElement(e)}};B.prototype._setupContentDirection=function(){var e="sap.ui.core.Core",t=s.getRTL()?"rtl":"ltr";document.documentElement.setAttribute("dir",t);v.info("Content direction set to '"+t+"'",null,e)};B.prototype._setupBrowser=function(){var t="sap.ui.core.Core";var n=document.documentElement;var o=e.browser;var i=o.name;if(i){if(i===o.BROWSER.SAFARI&&o.mobile){i="m"+i}i=i+(o.version===-1?"":Math.floor(o.version));n.dataset.sapUiBrowser=i;v.debug("Browser-Id: "+i,null,t)}};B.prototype._setupOS=function(){var t=document.documentElement;t.dataset.sapUiOs=e.os.name+e.os.versionStr;var n=null;switch(e.os.name){case e.os.OS.IOS:n="sap-ios";break;case e.os.OS.ANDROID:n="sap-android";break}if(n){t.classList.add(n)}};B.prototype._setupLang=function(){var e=document.documentElement;var t=function(){var t=s.getLocale();t?e.setAttribute("lang",t.toString()):e.removeAttribute("lang")};t.call(this);this.attachLocalizationChanged(t,this)};B.prototype._setupAnimation=function(){function e(){var e=document.documentElement;var t=f.getAnimationMode();e.dataset.sapUiAnimationMode=t;var n=t!==r.minimal&&t!==r.none;e.dataset.sapUiAnimation=n?"on":"off";if(typeof jQuery!=="undefined"){jQuery.fx.off=!n}}f.attachChange(function(t){if(t.animationMode){e()}});e()};B.prototype._polyfillFlexbox=function(){jQuery.support.useFlexBoxPolyfill=false};B.prototype._boot=function(e,t){this.aModules.push("sap/ui/core/date/"+s.getCalendarType());if(e){return this._requireModulesAsync().then(function(){t()})}v.warning("Modules and libraries declared via bootstrap-configuration are loaded synchronously. Set preload configuration to"+" 'async' or switch to asynchronous bootstrap to prevent these requests.","SyncXHR",null,function(){return{type:"SyncXHR",name:"legacy-module"}});this.aModules.forEach(function(e){var t=e.match(/^(.*)\.library$/);if(t){p._load(t[1],{sync:true})}else{sap.ui.requireSync(/^jquery\.sap\./.test(e)?e:e.replace(/\./g,"/"))}});t()};B.prototype._requireModulesAsync=function(){var e=[],t=[];this.aModules.forEach(function(n){var o=n.match(/^(.*)\.library$/);if(o){e.push(o[1])}else{t.push(/^jquery\.sap\./.test(n)?n:n.replace(/\./g,"/"))}});return Promise.all([p._load(e),new Promise(function(e){sap.ui.require(t,function(){e(Array.prototype.slice.call(arguments))})})])};B.prototype.applyTheme=function(e,t){C(typeof e==="string","sThemeName must be a string");C(typeof t==="string"||typeof t==="undefined","sThemeBaseUrl must be a string or undefined");if(t){m.setThemeRoot(e,t)}m.setTheme(e)};B.prototype.setThemeRoot=function(e,t,n,o){if(typeof t==="string"){o=n;n=t;t=undefined}m.setThemeRoot(e,n,t,o);return this};B.prototype.init=function(){if(this.bInitialized){return}h.setCore(this);var e="sap.ui.core.Core.init()";v.info("Initializing",null,e);b.end("coreInit");this._setBodyAccessibilityRole();var t=w();if(this.isThemeApplied()||!t){this._executeInitialization()}else{d.suspend();if(t==="rendering"){d.notifyInteractionStep();this._executeInitialization();d.getLogger().debug("delay initial rendering until theme has been loaded");m.attachAppliedOnce(function(){d.resume("after theme has been loaded")})}else if(t==="init"){d.getLogger().debug("delay init event and initial rendering until theme has been loaded");d.notifyInteractionStep();m.attachAppliedOnce(function(){this._executeInitialization();d.resume("after theme has been loaded")}.bind(this))}}};B.prototype._executeOnInit=function(){var e=A.get({name:"sapUiOnInit",type:A.Type.Code,defaultValue:A.get({name:"sapUiEvtOninit",type:A.Type.Code})});if(e){if(typeof e==="function"){e()}else if(typeof e==="string"){var t=/^module\:((?:[_$.\-a-zA-Z0-9]+\/)*[_$.\-a-zA-Z0-9]+)$/.exec(e);if(t&&t[1]){setTimeout(sap.ui.require.bind(sap.ui,[t[1]]),0)}else{var n=S.get(e);if(typeof n==="function"){n()}else{v.warning("[Deprecated] Do not use inline JavaScript code with the oninit attribute."+" Use the module:... syntax or the name of a global function");window.eval(e)}}}}};B.prototype._setupRootComponent=function(){var e="sap.ui.core.Core.init()";var t=s.getRootComponent();if(t){v.info("Loading Root Component: "+t,null,e);var n=sap.ui.component({name:t});this.oRootComponent=n;var i=A.get({name:"sapUiXxRootComponentNode",type:A.Type.String});if(i&&n.isA("sap.ui.core.UIComponent")){var r=document.getElementById(i);if(r){v.info("Creating ComponentContainer for Root Component: "+t,null,e);var a=sap.ui.requireSync("sap/ui/core/ComponentContainer"),u=new a({component:n,propagateModel:true});u.placeAt(r)}}}else{var c=s.getApplication();if(c){v.warning("The configuration 'application' is deprecated. Please use the configuration 'component' instead! "+"Please migrate from sap.ui.app.Application to sap.ui.core.Component.","SyncXHR",null,function(){return{type:"Deprecation",name:"sap.ui.core"}});v.info("Loading Application: "+c,null,e);sap.ui.requireSync(c.replace(/\./g,"/"));var p=S.get(c);C(p!==undefined,'The specified application "'+c+'" could not be found!');var d=new p;C(o.isA(d,"sap.ui.app.Application"),'The specified application "'+c+'" must be an instance of sap.ui.app.Application!')}}};B.prototype._setBodyAccessibilityRole=function(){var e=document.body;if(s.getAccessibility()&&s.getAutoAriaBodyRole()&&!e.getAttribute("role")){e.setAttribute("role","application")}};B.prototype._executeInitialization=function(){var e="sap.ui.core.Core.init()";if(this.bInitialized){return}this.bInitialized=true;v.info("Initialized",null,e);v.info("Starting Plugins",null,e);this.startPlugins();v.info("Plugins started",null,e);this._executeOnInit();this._setupRootComponent();this.pReady.resolve();this.bReady=true};B.prototype.isInitialized=function(){return this.bInitialized};B.prototype.isThemeApplied=function(){var e=false;function t(){e=true}m.attachAppliedOnce(t);return e};m.attachApplied(function(e){V&&V.fireEvent(B.M_EVENTS.ThemeChanged,P.getParameters(e))});B.prototype.attachInitEvent=function(e){C(typeof e==="function","fnFunction must be a function");if(!this.bReady){this.pReady.promise.then(e)}};B.prototype.attachInit=function(e){C(typeof e==="function","fnFunction must be a function");this.ready(e)};B.prototype.lock=function(){this.bLocked=true;h.registry.forEach(e=>{e.lock()})};B.prototype.unlock=function(){this.bLocked=false;h.registry.forEach(e=>{e.unlock()})};B.prototype.isLocked=function(){return this.bLocked};B.prototype.getConfiguration=function(){return s};B.prototype.getRenderManager=function(){return this.createRenderManager()};B.prototype.createRenderManager=function(){C(this.isInitialized(),"A RenderManager should be created only after the Core has been initialized");var e=new l;return e.getInterface()};B.prototype.getCurrentFocusedControlId=function(){if(!this.isInitialized()){throw new Error("Core must be initialized")}return u.getActiveElement()?.getId()||null};B.prototype.loadLibrary=function(e,t){var n={name:e};var o={sync:true};if(typeof t==="boolean"){o.sync=!t}else if(typeof t==="string"){n.url=t}else if(typeof t==="object"){o.sync=!t.async;n.url=t.url}var i=p._load(n,o);if(!o.sync){return i.then(function(e){return e[0]})}else{return i[0]}};B.prototype.loadLibraries=function(e,t){t=Object.assign({async:true},t);t.sync=!t.async;var n=p._load(e,t);if(!t.sync){return n}else{return undefined}};B.prototype.createComponent=function(e,t,n,o){if(typeof e==="string"){e={name:e,url:t};if(typeof n==="object"){e.settings=n}else{e.id=n;e.settings=o}}if(e.async&&(e.manifest!==undefined||e.manifestFirst===undefined&&e.manifestUrl===undefined)){if(e.manifest===undefined){e.manifest=false}return a.create(e)}return sap.ui.component(e)};B.prototype.getRootComponent=function(){return this.oRootComponent};B.prototype.initLibrary=function(e){C(typeof e==="string"||typeof e==="object","oLibInfo must be a string or object");var t=typeof e==="string";if(t){e={name:e}}var n=e.name,o="sap.ui.core.Core.initLibrary()";if(t){v.error("[Deprecated] library "+n+" uses old fashioned initLibrary() call (rebuild with newest generator)")}if(!n){v.error("A library name must be provided.",null,o);return}var i=p._get(n);if(i&&i.isSettingsEnhanced()){return S.get(n)}return p.init(e)};B.prototype.includeLibraryTheme=function(e,t,n){var o=p._get(e,true);o._includeTheme(t,n)};B.prototype.getLoadedLibraries=function(){return p.all()};B.prototype.getLibraryResourceBundle=function(e,t,n){if(typeof e==="boolean"){n=e;e=undefined;t=undefined}if(typeof t==="boolean"){n=t;t=undefined}C(e===undefined&&t===undefined||typeof e==="string","sLibraryName must be a string or there is no argument given at all");C(t===undefined||typeof t==="string","sLocale must be a string or omitted");e=e||"sap.ui.core";var o=p._get(e||"sap.ui.core",true);return o._loadResourceBundle(t,!n)};function O(e,t){C(typeof e==="string"||typeof e==="object","oDomRef must be a string or object");C(t instanceof n||o.isA(t,"sap.ui.core.Control"),"oControl must be a Control or Interface");if(t){t.placeAt(e,"only")}}B.prototype.setRoot=O;B.prototype.createUIArea=function(e){if(typeof e==="string"&&e===y.STATIC_UIAREA_ID){return y.getUIArea()}return h.create(e)};B.prototype.getUIArea=function(e){C(typeof e==="string"||typeof e==="object","o must be a string or object");var t="";if(typeof e=="string"){t=e}else{t=e.id}if(t){return h.registry.get(t)}return null};B.prototype.getUIDirty=function(){return d.isPending()};B.prototype.notifyContentDensityChanged=m.notifyContentDensityChanged;B.prototype.attachThemeChanged=function(e,t){V.attachEvent(B.M_EVENTS.ThemeChanged,e,t)};B.prototype.detachThemeChanged=function(e,t){V.detachEvent(B.M_EVENTS.ThemeChanged,e,t)};B.prototype.attachThemeScopingChanged=function(e,t){V.attachEvent(B.M_EVENTS.ThemeScopingChanged,e,t)};B.prototype.detachThemeScopingChanged=function(e,t){V.detachEvent(B.M_EVENTS.ThemeScopingChanged,e,t)};m.attachThemeScopingChanged(function(e){V.fireEvent(B.M_EVENTS.ThemeScopingChanged,P.getParameters(e))});B.prototype.attachLocalizationChanged=function(e,t){V.attachEvent(B.M_EVENTS.LocalizationChanged,e,t)};B.prototype.detachLocalizationChanged=function(e,t){V.detachEvent(B.M_EVENTS.LocalizationChanged,e,t)};B.prototype.fireLocalizationChanged=function(e){var t=B.M_EVENTS.LocalizationChanged,n=jQuery.Event(t,{changes:e}),o=i._handleLocalizationChange;v.info("localization settings changed: "+Object.keys(e).join(","),null,"sap.ui.core.Core");_(this.oModels,function(e,t){if(t&&t._handleLocalizationChange){t._handleLocalizationChange()}});function r(e){h.registry.forEach(function(t){o.call(t,e)});a.registry.forEach(function(t){o.call(t,e)});u.registry.forEach(function(t){o.call(t,e)})}r.call(this,1);r.call(this,2);if(e.rtl!=undefined){document.documentElement.setAttribute("dir",e.rtl?"rtl":"ltr");h.registry.forEach(function(e){e.invalidate()});v.info("RTL mode "+e.rtl?"activated":"deactivated")}u.registry.forEach(function(e){e._handleEvent(n)});V.fireEvent(t,{changes:e})};B.prototype.attachLibraryChanged=function(e,t){V.attachEvent(B.M_EVENTS.LibraryChanged,e,t)};B.prototype.detachLibraryChanged=function(e,t){V.detachEvent(B.M_EVENTS.LibraryChanged,e,t)};p.attachLibraryChanged(function(e){V.fireEvent(B.M_EVENTS.LibraryChanged,e.getParameters())});B.prototype.applyChanges=function(){d.renderPendingUIUpdates("forced by applyChanges")};B.prototype.registerObject=function(e){var t=e.getId(),n=e.getMetadata().getStereotype(),o=this.getObject(n,t);if(o&&o!==e){v.error('adding object "'+n+"\" with duplicate id '"+t+"'");throw new Error('Error: adding object "'+n+"\" with duplicate id '"+t+"'")}this.mObjects[n][t]=e};B.prototype.deregisterObject=function(e){var t=e.getId(),n=e.getMetadata().getStereotype();delete this.mObjects[n][t]};B.prototype.byId=u.getElementById;B.prototype.getControl=u.getElementById;B.prototype.getElementById=u.getElementById;B.prototype.getObject=function(e,t){C(t==null||typeof t==="string","sId must be a string when defined");C(this.mObjects[e]!==undefined,"sType must be a supported stereotype");return t==null?undefined:this.mObjects[e]&&this.mObjects[e][t]};B.prototype.getComponent=a.registry.get;B.prototype.getTemplate=function(e){v.warning("Synchronous loading of 'sap/ui/core/tmpl/Template'. Use 'sap/ui/core/tmpl/Template' module and"+" call Template.byId instead","SyncXHR",null,function(){return{type:"SyncXHR",name:"Core.prototype.getTemplate"}});var t=sap.ui.requireSync("sap/ui/core/tmpl/Template");return t.byId(e)};B.prototype.getStaticAreaRef=function(){return y.getDomRef()};B.prototype.isStaticAreaRef=function(e){return y.getDomRef()===e};var j;B.prototype.attachIntervalTimer=function(e,t){v.warning("Usage of sap.ui.getCore().attachIntervalTimer() is deprecated. "+"Please use 'IntervalTrigger.addListener()' from 'sap/ui/core/IntervalTrigger' module instead.","Deprecation",null,function(){return{type:"sap.ui.core.Core",name:"Core"}});if(!j){j=sap.ui.require("sap/ui/core/IntervalTrigger")||sap.ui.requireSync("sap/ui/core/IntervalTrigger")}j.addListener(e,t)};B.prototype.detachIntervalTimer=function(e,t){if(j){j.removeListener(e,t)}};B.prototype.attachControlEvent=function(e,t){V.attachEvent(B.M_EVENTS.ControlEvent,e,t)};B.prototype.detachControlEvent=function(e,t){V.detachEvent(B.M_EVENTS.ControlEvent,e,t)};B.prototype.fireControlEvent=function(e){V.fireEvent(B.M_EVENTS.ControlEvent,e)};B.prototype._handleControlEvent=function(e,t){var n=jQuery.Event(e.type);Object.assign(n,e);n.originalEvent=undefined;this.fireControlEvent({browserEvent:n,uiArea:t})};B.prototype.getApplication=function(){return sap.ui.getApplication&&sap.ui.getApplication()};B.prototype.registerPlugin=function(e){C(typeof e==="object","oPlugin must be an object");if(!e){return}for(var t=0,n=this.aPlugins.length;t<n;t++){if(this.aPlugins[t]===e){return}}this.aPlugins.push(e);if(this.bInitialized&&e&&e.startPlugin){e.startPlugin(this)}};B.prototype.unregisterPlugin=function(e){C(typeof e==="object","oPlugin must be an object");if(!e){return}var t=-1;for(var n=this.aPlugins.length;n--;n>=0){if(this.aPlugins[n]===e){t=n;break}}if(t==-1){return}if(this.bInitialized&&e&&e.stopPlugin){e.stopPlugin(this)}this.aPlugins.splice(t,1)};B.prototype.startPlugins=function(){for(var e=0,t=this.aPlugins.length;e<t;e++){var n=this.aPlugins[e];if(n&&n.startPlugin){n.startPlugin(this,true)}}};B.prototype.stopPlugins=function(){for(var e=0,t=this.aPlugins.length;e<t;e++){var n=this.aPlugins[e];if(n&&n.stopPlugin){n.stopPlugin(this)}}};B.prototype.setModel=function(e,t){C(e==null||o.isA(e,"sap.ui.model.Model"),"oModel must be an instance of sap.ui.model.Model, null or undefined");C(t===undefined||typeof t==="string"&&!/^(undefined|null)?$/.test(t),"sName must be a string or omitted");var n=this,r;if(!e&&this.oModels[t]){delete this.oModels[t];if(I(n.oModels)&&I(n.oBindingContexts)){r=i._oEmptyPropagatedProperties}else{r={oModels:Object.assign({},n.oModels),oBindingContexts:{},aPropagationListeners:[]}}h.registry.forEach(function(n){if(e!=n.getModel(t)){n._propagateProperties(t,n,r,false,t)}})}else if(e&&e!==this.oModels[t]){this.oModels[t]=e;h.registry.forEach(function(n){if(e!=n.getModel(t)){var o={oModels:Object.assign({},this.oModels),oBindingContexts:{},aPropagationListeners:[]};n._propagateProperties(t,n,o,false,t)}}.bind(this))}return this};B.prototype.getMessageManager=function(){return g};B.prototype.byFieldGroupId=function(e){return u.registry.filter(function(t){return t.isA("sap.ui.core.Control")&&t.checkFieldGroupIds(e)})};B.prototype.getModel=function(e){C(e===undefined||typeof e==="string"&&!/^(undefined|null)?$/.test(e),"sName must be a string or omitted");return this.oModels[e]};B.prototype.hasModel=function(){return!I(this.oModels)};B.prototype.getEventBus=function(){if(!this.oEventBus){var e=sap.ui.require("sap/ui/core/EventBus");if(!e){v.warning("Synchronous loading of EventBus. Ensure that 'sap/ui/core/EventBus' module is loaded"+" before this function is called.","SyncXHR",null,function(){return{type:"SyncXHR",name:"core-eventbus"}});e=sap.ui.requireSync("sap/ui/core/EventBus")}var t=this.oEventBus=e.getInstance();this._preserveHandler=function(e){t.publish("sap.ui","__preserveContent",{domNode:e.domNode})};l.attachPreserveContent(this._preserveHandler)}return this.oEventBus};B.prototype.attachValidationError=function(e,t,n){if(typeof e==="function"){n=t;t=e;e=undefined}V.attachEvent(B.M_EVENTS.ValidationError,e,t,n);return this};B.prototype.detachValidationError=function(e,t){V.detachEvent(B.M_EVENTS.ValidationError,e,t);return this};B.prototype.attachParseError=function(e,t,n){if(typeof e==="function"){n=t;t=e;e=undefined}V.attachEvent(B.M_EVENTS.ParseError,e,t,n);return this};B.prototype.detachParseError=function(e,t){V.detachEvent(B.M_EVENTS.ParseError,e,t);return this};B.prototype.attachFormatError=function(e,t,n){if(typeof e==="function"){n=t;t=e;e=undefined}V.attachEvent(B.M_EVENTS.FormatError,e,t,n);return this};B.prototype.detachFormatError=function(e,t){V.detachEvent(B.M_EVENTS.FormatError,e,t);return this};B.prototype.attachValidationSuccess=function(e,t,n){if(typeof e==="function"){n=t;t=e;e=undefined}V.attachEvent(B.M_EVENTS.ValidationSuccess,e,t,n);return this};B.prototype.detachValidationSuccess=function(e,t){V.detachEvent(B.M_EVENTS.ValidationSuccess,e,t);return this};B.prototype.fireParseError=function(e){V.fireEvent(B.M_EVENTS.ParseError,e);return this};B.prototype.fireValidationError=function(e){V.fireEvent(B.M_EVENTS.ValidationError,e);return this};B.prototype.fireFormatError=function(e){V.fireEvent(B.M_EVENTS.FormatError,e);return this};B.prototype.fireValidationSuccess=function(e){V.fireEvent(B.M_EVENTS.ValidationSuccess,e);return this};B.prototype.isMobile=function(){return e.browser.mobile};B.prototype._getEventProvider=function(){return V};B.prototype.addPrerenderingTask=function(e,t){d.addPrerenderingTask(e,t)};B.prototype.ready=function(e){if(e){if(this.bReady){e()}else{this.pReady.promise.then(e)}}return this.pReady.promise};B.prototype.destroy=function(){l.detachPreserveContent(this._preserveHandler);V.destroy();o.prototype.destroy.call(this)};sap.ui.setRoot=O;R=(new B).getInterface();return R});
//# sourceMappingURL=Core.js.map