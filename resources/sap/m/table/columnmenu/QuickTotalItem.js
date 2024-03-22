/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./QuickActionItem"],function(t){"use strict";var e=t.extend("sap.m.table.columnmenu.QuickTotalItem",{metadata:{library:"sap.m",properties:{totaled:{type:"boolean",defaultValue:false}}}});e.prototype.setTotaled=function(t){return this.setProperty("totaled",t).updateContent()};return e});
//# sourceMappingURL=QuickTotalItem.js.map