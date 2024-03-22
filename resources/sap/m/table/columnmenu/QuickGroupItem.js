/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./QuickActionItem"],function(e){"use strict";var t=e.extend("sap.m.table.columnmenu.QuickGroupItem",{metadata:{library:"sap.m",properties:{grouped:{type:"boolean",defaultValue:false}}}});t.prototype.setGrouped=function(e){return this.setProperty("grouped",e).updateContent()};return t});
//# sourceMappingURL=QuickGroupItem.js.map