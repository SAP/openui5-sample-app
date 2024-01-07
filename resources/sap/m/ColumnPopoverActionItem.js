/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ColumnPopoverItem","sap/m/Button"],function(t,e){"use strict";var o=t.extend("sap.m.ColumnPopoverActionItem",{metadata:{library:"sap.m",properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null}},events:{press:{}}}});o.prototype._createButton=function(t,o){return new e(t,{icon:this.getIcon(),type:"Transparent",tooltip:this.getText(),visible:this.getVisible(),press:[function(t){if(o._oShownCustomContent){o._oShownCustomContent.setVisible(false);o._oShownCustomContent=null;o._cleanSelection(this)}var e=o.getAggregation("_popover");e.close();this.firePress()},this]})};return o});
//# sourceMappingURL=ColumnPopoverActionItem.js.map