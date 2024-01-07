/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/Entry","sap/m/library"],function(t,e){"use strict";var i=t.extend("sap.m.table.columnmenu.QuickActionBase",{metadata:{abstract:true,library:"sap.m"}});i.prototype.getEffectiveQuickActions=function(){return this.getVisible()?[this]:[]};i.prototype.setVisible=function(t){if(this.getVisible()==t){return this}this.setProperty("visible",t);this.getMenu()&&this.getMenu()._initQuickActionContainer();return this};i.prototype.getCategory=function(){if(this.getMetadata().hasProperty("category")){return this.getProperty("category")}return e.table.columnmenu.Category.Generic};return i});
//# sourceMappingURL=QuickActionBase.js.map