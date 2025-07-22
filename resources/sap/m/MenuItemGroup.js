/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/Device","sap/ui/core/library"],function(e,t,i){"use strict";const s=i.ItemSelectionMode;const a=e.extend("sap.m.MenuItemGroup",{metadata:{interfaces:["sap.m.IMenuItem"],library:"sap.m",properties:{itemSelectionMode:{type:"sap.ui.core.ItemSelectionMode",group:"Behavior",defaultValue:s.None}},aggregations:{items:{type:"sap.m.IMenuItem",multiple:true,singularName:"item"}},associations:{_menu:{type:"sap.m.Menu",visibility:"hidden"}}}});a.prototype._clearSelectedItems=function(){this.getItems().forEach(e=>e.setSelected&&e.setSelected(false))};a.prototype._ensureSingleSelection=function(){const e=this.getItems(),t=e.map(e=>e.getSelected()),i=t.lastIndexOf(true);this._clearSelectedItems();if(i!==-1){e[i].setSelected(true)}};return a});
//# sourceMappingURL=MenuItemGroup.js.map