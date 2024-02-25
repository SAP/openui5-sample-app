/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/m/p13n/enums/PersistenceMode"],(e,t)=>{"use strict";const o=e.extend("sap.m.p13n.PersistenceProvider",{metadata:{library:"sap.m",designtime:"sap/m/designtime/PersistenceProvider.designtime",properties:{mode:{type:"sap.m.p13n.enums.PersistenceMode",group:"Data",defaultValue:t.Auto}},associations:{for:{type:"sap.ui.core.Control",multiple:true}}},renderer:{apiVersion:2,render:function(e,t){e.openStart("div",t);e.openEnd();e.close("div")}}});o.prototype.applySettings=function(){e.prototype.applySettings.apply(this,arguments);this._bmodeLocked=true;return this};o.prototype.setMode=function(e){if(this._bmodeLocked&&e!==this.getMode()){throw new Error("mode is a final property.")}this.setProperty("mode",e);return this};o.prototype.exit=function(){this._bmodeLocked=null;e.prototype.exit.apply(this,arguments)};return o});
//# sourceMappingURL=PersistenceProvider.js.map