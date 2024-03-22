/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/Entry"],function(t){"use strict";var e=t.extend("sap.m.table.columnmenu.QuickActionItem",{metadata:{library:"sap.m",properties:{key:{type:"string"},label:{type:"string",defaultValue:""}}}});e.prototype.setLabel=function(t){return this.setProperty("label",t).updateContent()};e.prototype.updateContent=function(){this.getParent()?._updateContent?.();return this};return e});
//# sourceMappingURL=QuickActionItem.js.map