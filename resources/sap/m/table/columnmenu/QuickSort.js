/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase","sap/m/table/columnmenu/QuickSortItem"],function(e,t){"use strict";var i=e.extend("sap.m.table.columnmenu.QuickSort",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.QuickSortItem",defaultClass:t,multiple:true}},events:{change:{parameters:{key:{type:"string"},sortOrder:{type:"sap.ui.core.SortOrder"}}}}}});i.prototype.getEffectiveQuickActions=function(){var e=this.getItems();var t=[];if(this.getVisible()){e.forEach(function(e){t.push(e._getAction())},this)}return t};i.prototype.onChange=function(e){this.fireChange({item:e});this.getMenu().close()};return i});
//# sourceMappingURL=QuickSort.js.map