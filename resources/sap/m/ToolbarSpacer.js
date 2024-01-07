/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","./ToolbarSpacerRenderer","sap/base/Log"],function(a,e,r,t){"use strict";var o=e.extend("sap.m.ToolbarSpacer",{metadata:{library:"sap.m",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:""}}},renderer:r});o.prototype.setLayoutData=function(a){if(a&&a.isA("sap.m.ToolbarLayoutData")){t.warning("sap.m.ToolbarLayoutData should not be set in the layoutData aggregation of sap.m.ToolbarSpacer");return this}return this.setAggregation("layoutData",a)};return o});
//# sourceMappingURL=ToolbarSpacer.js.map