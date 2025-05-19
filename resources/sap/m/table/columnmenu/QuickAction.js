/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase","sap/m/library"],function(e,t){"use strict";var a=e.extend("sap.m.table.columnmenu.QuickAction",{metadata:{library:"sap.m",properties:{label:{type:"string",defaultValue:""},category:{type:"sap.m.table.columnmenu.Category",defaultValue:t.table.columnmenu.Category.Generic},contentSize:{type:"sap.m.table.columnmenu.QuickActionContentSize",defaultValue:"L"}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}}}});return a});
//# sourceMappingURL=QuickAction.js.map