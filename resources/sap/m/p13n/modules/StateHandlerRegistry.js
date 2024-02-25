/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/EventProvider"],t=>{"use strict";const e="StateHandlerRegistry: This class is a singleton and should not be used without an AdaptationProvider. Please use 'Engine.getInstance().stateHandlerRegistry' instead";let n;const a=t.extend("sap.m.p13n.modules.StateHandlerRegistry",{constructor:function(){if(n){throw Error(e)}t.call(this)}});a.prototype.attachChange=function(e){return t.prototype.attachEvent.call(this,"stateChange",e)};a.prototype.detachChange=function(e){return t.prototype.detachEvent.call(this,"stateChange",e)};a.prototype.fireChange=function(e,n){return t.prototype.fireEvent.call(this,"stateChange",{control:e,state:n})};a.getInstance=()=>{if(!n){n=new a}return n};return a});
//# sourceMappingURL=StateHandlerRegistry.js.map