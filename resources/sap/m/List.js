/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./ListBase","./ListRenderer"],function(e,t,i){"use strict";var r=e.BackgroundDesign;var s=t.extend("sap.m.List",{metadata:{library:"sap.m",properties:{backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:r.Solid}}},renderer:i});s.prototype.getAriaRole=function(){return this._sAriaRole||"list"};s.prototype.applyAriaRole=function(e){this._sAriaRole=e};s.prototype.enhanceAccessibilityState=function(e,i){t.prototype.enhanceAccessibilityState.apply(this,arguments);if(this.getAriaRole()==="listbox"&&e.isA("sap.m.ListItemBase")&&!e.isGroupHeader()){i.roledescription=null;i.role="option";i.owns=null;if(e.isSelectable()){i.selected=e.getSelected()}}};return s});
//# sourceMappingURL=List.js.map