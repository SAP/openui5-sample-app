/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase"],function(e){"use strict";var t=e.extend("sap.m.table.columnmenu.QuickGroup",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.QuickGroupItem",multiple:true}},events:{change:{parameters:{key:{type:"string"},grouped:{type:"boolean"}}}}}});t.prototype.getEffectiveQuickActions=function(){var e=[];if(this.getVisible()){var t=this.getItems().filter(e=>e.getVisible());t.forEach(t=>{e.push(t._getAction())})}return e};t.prototype.onChange=function(e){this.fireChange({item:e});this.getMenu().close()};return t});
//# sourceMappingURL=QuickGroup.js.map