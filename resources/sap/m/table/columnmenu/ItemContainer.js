/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/ItemBase"],function(e){"use strict";var t=e.extend("sap.m.table.columnmenu.ItemContainer",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.ItemBase"}}}});t.prototype.getEffectiveItems=function(){return!this.getVisible()?[]:this.getItems().reduce(function(e,t){return e.concat(t.getEffectiveItems())},[])};return t});
//# sourceMappingURL=ItemContainer.js.map