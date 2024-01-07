/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/LayoutData","sap/ui/layout/library"],function(t){"use strict";var e=t.extend("sap.ui.layout.cssgrid.ResponsiveColumnItemLayoutData",{metadata:{library:"sap.ui.layout",interfaces:["sap.ui.layout.cssgrid.IGridItemLayoutData"],properties:{columns:{type:"int",group:"Misc",defaultValue:1},rows:{type:"int",group:"Misc",defaultValue:1}}}});e.prototype.setItemStyles=function(t){t.style.setProperty("grid-row","span "+this.getRows());t.style.setProperty("grid-column","span "+this.getColumns())};return e});
//# sourceMappingURL=ResponsiveColumnItemLayoutData.js.map