/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./ListBase","./ListRenderer"],function(e,r,a){"use strict";var t=e.BackgroundDesign;var i=r.extend("sap.m.List",{metadata:{library:"sap.m",properties:{backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:t.Solid}}},renderer:a});i.prototype.getAriaRole=function(){return this._sAriaRole||"list"};i.prototype.applyAriaRole=function(e){this._sAriaRole=e};return i});
//# sourceMappingURL=List.js.map