/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase"],function(e){"use strict";var t=e.extend("sap.m.table.columnmenu.QuickSort",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.QuickSortItem",multiple:true}},events:{change:{parameters:{key:{type:"string"},sortOrder:{type:"sap.ui.core.SortOrder"}}}}}});t.prototype.getEffectiveQuickActions=function(){var e=this.getItems();var t=[];if(this.getVisible()){e.forEach(function(e){t.push(e._getAction())},this)}return t};t.prototype.onChange=function(e){this.fireChange({item:e});this.getMenu().close()};return t});
//# sourceMappingURL=QuickSort.js.map