/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase","sap/m/table/columnmenu/QuickSortItem","sap/m/library"],function(e,t,i){"use strict";var r=e.extend("sap.m.table.columnmenu.QuickSort",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.QuickSortItem",defaultClass:t,multiple:true}},events:{change:{parameters:{key:{type:"string"},sortOrder:{type:"sap.ui.core.SortOrder"}}}}}});r.prototype.getEffectiveQuickActions=function(){var e=[];if(this.getVisible()){var t=this.getItems().filter(e=>e.getVisible());t.forEach(t=>{e.push(t._getAction())})}return e};r.prototype.onChange=function(e){this.fireChange({item:e});this.getMenu().close()};return r});
//# sourceMappingURL=QuickSort.js.map