/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/QuickActionBase"],function(t){"use strict";var e=t.extend("sap.m.table.columnmenu.QuickActionContainer",{metadata:{library:"sap.m",aggregations:{quickActions:{type:"sap.m.table.columnmenu.QuickActionBase"}}}});e.prototype.getEffectiveQuickActions=function(){return!this.getVisible()?[]:this.getQuickActions().reduce(function(t,e){return t.concat(e.getEffectiveQuickActions())},[])};return e});
//# sourceMappingURL=QuickActionContainer.js.map