/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/LayoutData","./library"],function(e,t){"use strict";var a=e.extend("sap.ui.layout.BlockLayoutCellData",{metadata:{library:"sap.ui.layout",properties:{sSize:{type:"int",group:"Appearance",defaultValue:1},mSize:{type:"int",group:"Appearance",defaultValue:1},lSize:{type:"int",group:"Appearance",defaultValue:1},xlSize:{type:"int",group:"Appearance",defaultValue:1}}}});a.prototype.breakRowOnSSize=true;a.prototype.breakRowOnMSize=false;a.prototype.breakRowOnLSize=false;a.prototype.breakRowOnXlSize=false;a.prototype.setSize=function(e){this.setProperty("mSize",e);this.setProperty("lSize",e);this.setProperty("xlSize",e);var t=this.getParent();if(t&&t.getParent()){t.getParent().invalidate()}return this};return a});
//# sourceMappingURL=BlockLayoutCellData.js.map