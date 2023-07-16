/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/message/MessageProcessor","./ManagedObjectBindingSupport","./BindingMode","./Context","./Filter","sap/base/util/deepEqual","sap/base/util/each"],function(t,e,i,n,r,s,o){"use strict";var a=t.extend("sap.ui.model.Model",{constructor:function(){t.apply(this,arguments);this.aBindings=[];this.oBindingsToRemove=new Set;this.mContexts={};this.oData={};this.sDefaultBindingMode=i.TwoWay;this.bDestroyed=false;this.bForceUpdate=undefined;this.bLegacySyntax=false;this.mMessages={};this.sRemoveTimer=null;this.iSizeLimit=100;this.mSupportedBindingModes={OneWay:true,TwoWay:true,OneTime:true};this.mUnsupportedFilterOperators={};this.sUpdateTimer=null},metadata:{abstract:true,publicMethods:["bindProperty","bindList","bindTree","bindContext","createBindingContext","destroyBindingContext","getProperty","getDefaultBindingMode","setDefaultBindingMode","isBindingModeSupported","attachParseError","detachParseError","attachRequestCompleted","detachRequestCompleted","attachRequestFailed","detachRequestFailed","attachRequestSent","detachRequestSent","attachPropertyChange","detachPropertyChange","setSizeLimit","refresh","isList","getObject"]}});a.M_EVENTS={ParseError:"parseError",RequestFailed:"requestFailed",RequestSent:"requestSent",RequestCompleted:"requestCompleted",PropertyChange:"propertyChange"};a.prototype.attachRequestFailed=function(t,e,i){this.attachEvent("requestFailed",t,e,i);return this};a.prototype.detachRequestFailed=function(t,e){this.detachEvent("requestFailed",t,e);return this};a.prototype.fireRequestFailed=function(t){this.fireEvent("requestFailed",t);return this};a.prototype.attachParseError=function(t,e,i){this.attachEvent("parseError",t,e,i);return this};a.prototype.detachParseError=function(t,e){this.detachEvent("parseError",t,e);return this};a.prototype.fireParseError=function(t){this.fireEvent("parseError",t);return this};a.prototype.attachRequestSent=function(t,e,i){this.attachEvent("requestSent",t,e,i);return this};a.prototype.detachRequestSent=function(t,e){this.detachEvent("requestSent",t,e);return this};a.prototype.fireRequestSent=function(t){this.fireEvent("requestSent",t);return this};a.prototype.attachRequestCompleted=function(t,e,i){this.attachEvent("requestCompleted",t,e,i);return this};a.prototype.detachRequestCompleted=function(t,e){this.detachEvent("requestCompleted",t,e);return this};a.prototype.fireRequestCompleted=function(t){this.fireEvent("requestCompleted",t);return this};a.prototype.firePropertyChange=function(t){this.fireEvent("propertyChange",t);return this};a.prototype.attachPropertyChange=function(t,e,i){this.attachEvent("propertyChange",t,e,i);return this};a.prototype.detachPropertyChange=function(t,e){this.detachEvent("propertyChange",t,e);return this};a.prototype.getObject=function(t,e,i){return this.getProperty(t,e,i)};a.prototype.getContext=function(t){if(!t.startsWith("/")){throw new Error("Path "+t+" must start with a / ")}var e=this.mContexts[t];if(!e){e=new n(this,t);this.mContexts[t]=e}return e};a.prototype.resolve=function(t,e){var i=typeof t=="string"&&!t.startsWith("/"),n=t,r;if(i){if(e){r=e.getPath();n=r+(r.endsWith("/")?"":"/")+t}else{n=this.isLegacySyntax()?"/"+t:undefined}}if(!t&&e){n=e.getPath()}if(n&&n!=="/"&&n.endsWith("/")){n=n.substr(0,n.length-1)}return n};a.prototype._cleanUpBindings=function(){var t=this.oBindingsToRemove;if(t.size>0){this.aBindings=this.aBindings.filter(function(e){return!t.has(e)});t.clear()}};a.prototype.addBinding=function(t){this._cleanUpBindings();this.aBindings.push(t)};a.prototype.getBindings=function(){this._cleanUpBindings();return this.aBindings.slice()};a.prototype.removeBinding=function(t){this.oBindingsToRemove.add(t);if(!this.sRemoveTimer){this.sRemoveTimer=setTimeout(function(){this.sRemoveTimer=null;this._cleanUpBindings()}.bind(this),0)}};a.prototype.getDefaultBindingMode=function(){return this.sDefaultBindingMode};a.prototype.setDefaultBindingMode=function(t){if(this.isBindingModeSupported(t)){this.sDefaultBindingMode=t;return this}throw new Error("Binding mode "+t+" is not supported by this model.",this)};a.prototype.isBindingModeSupported=function(t){return t in this.mSupportedBindingModes};a.prototype.setLegacySyntax=function(t){this.bLegacySyntax=t};a.prototype.isLegacySyntax=function(){return this.bLegacySyntax};a.prototype.setSizeLimit=function(t){this.iSizeLimit=t};a.prototype.getInterface=function(){return this};a.prototype.refresh=function(t){this.checkUpdate(t);if(t){var e=[];for(var i in this.mMessages){e=e.concat(this.mMessages[i])}var n=sap.ui.require("sap/ui/core/message/MessageManager");if(n){n.updateMessages(e,[])}}};a.prototype.checkUpdate=function(t,e){if(e){this.bForceUpdate=this.bForceUpdate||t;if(!this.sUpdateTimer){this.sUpdateTimer=setTimeout(function(){this.checkUpdate(this.bForceUpdate)}.bind(this),0)}return}t=this.bForceUpdate||t;if(this.sUpdateTimer){clearTimeout(this.sUpdateTimer);this.sUpdateTimer=null;this.bForceUpdate=undefined}var i=this.getBindings();o(i,function(e,i){i.checkUpdate(t)})};a.prototype.setMessages=function(t){t=t||{};if(!s(this.mMessages,t)){this.mMessages=t;this.checkMessages()}};a.prototype.getMessagesByPath=function(t,e){var i=new Set,n=this;if(!e){return this.mMessages[t]||[]}Object.keys(this.mMessages).forEach(function(e){n.filterMatchingMessages(e,t).forEach(function(t){i.add(t)})});return Array.from(i)};a.prototype.filterMatchingMessages=function(t,e){if(t===e||t.startsWith(e==="/"?e:e+"/")){return this.mMessages[t]}return[]};a.prototype.checkMessages=function(){o(this.getBindings(),function(t,e){if(e.checkDataState){e.checkDataState()}})};a.prototype.destroy=function(){t.prototype.destroy.apply(this,arguments);this.oData={};this.aBindings=[];this.mContexts={};if(this.sRemoveTimer){clearTimeout(this.sRemoveTimer);this.sRemoveTimer=null;this.oBindingsToRemove.clear()}if(this.sUpdateTimer){clearTimeout(this.sUpdateTimer);this.sUpdateTimer=null}this.bDestroyed=true};a.prototype.getMetaModel=function(){return undefined};a.prototype.getOriginalProperty=function(t,e){return this.getProperty(t,e)};a.prototype.isLaundering=function(t,e){return false};a.prototype.checkFilterOperation=function(t){h(t,function(t){if(this.mUnsupportedFilterOperators[t.sOperator]){throw new Error("Filter instances contain an unsupported FilterOperator: "+t.sOperator)}}.bind(this))};function h(t,e){t=t||[];if(t instanceof r){t=[t]}for(var i=0;i<t.length;i++){var n=t[i];e(n);h(n.oCondition,e);h(n.aFilters,e)}}a.prototype.mixinBindingSupport=function(t){Object.assign(t,e)};return a});
//# sourceMappingURL=Model.js.map