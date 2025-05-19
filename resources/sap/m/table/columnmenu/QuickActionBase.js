/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/Entry","sap/m/library"],function(t,e){"use strict";var n=t.extend("sap.m.table.columnmenu.QuickActionBase",{metadata:{abstract:true,library:"sap.m"}});n.prototype.getEffectiveQuickActions=function(){return this.getVisible()?[this]:[]};n.prototype.getCategory=function(){if(this.getMetadata().hasProperty("category")){return this.getProperty("category")}return e.table.columnmenu.Category.Generic};n.prototype.getContentSize=function(){if(this.getMetadata().hasProperty("contentSize")){return this.getProperty("contentSize")}return e.table.columnmenu.QuickActionContentSize.L};return n});
//# sourceMappingURL=QuickActionBase.js.map