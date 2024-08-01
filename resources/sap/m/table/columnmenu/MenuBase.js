/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control"],function(e){"use strict";var t=e.extend("sap.m.table.columnmenu.MenuBase",{metadata:{library:"sap.m",interfaces:["sap.ui.core.IColumnHeaderMenu"],events:{beforeOpen:{allowPreventDefault:true,parameters:{openBy:{type:"sap.ui.core.Element"}}},afterClose:{}}},renderer:{apiVersion:2}});t.prototype.openBy=function(e){throw new Error("This method should be implemented in one of the inherited classes.")};t.prototype.getAriaHasPopupType=function(){return"Menu"};t.prototype.isOpen=function(){throw new Error("This method should be implemented in one of the inherited classes.")};t.prototype.close=function(){throw new Error("This method should be implemented in one of the inherited classes.")};return t});
//# sourceMappingURL=MenuBase.js.map