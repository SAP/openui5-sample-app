/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ColumnPopoverItem","sap/m/ToggleButton"],function(t,e){"use strict";var o=t.extend("sap.m.ColumnPopoverCustomItem",{metadata:{library:"sap.m",properties:{icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},text:{type:"string",group:"Misc",defaultValue:null}},aggregations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}},events:{beforeShowContent:{}}}});o.prototype._createButton=function(t,o){var n=o.getAggregation("_popover");var s=this.getContent();if(s){s.setVisible(false);this._sContentId=s.sId}n.addContent(s);var i=this;return new e(t,{icon:this.getIcon(),type:"Transparent",tooltip:this.getText(),visible:this.getVisible(),press:function(){if(o._oShownCustomContent){o._oShownCustomContent.setVisible(false)}if(this.getPressed()){o._cleanSelection(this);i.fireBeforeShowContent();if(s){s.setVisible(true);o._oShownCustomContent=s}}else if(s){s.setVisible(false);o._oShownCustomContent=null}}})};return o});
//# sourceMappingURL=ColumnPopoverCustomItem.js.map