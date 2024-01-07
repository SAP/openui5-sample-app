/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","./library","./HorizontalLayoutRenderer"],function(e,t,a){"use strict";var o=e.extend("sap.ui.layout.HorizontalLayout",{metadata:{library:"sap.ui.layout",properties:{allowWrapping:{type:"boolean",group:"Misc",defaultValue:false}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},designtime:"sap/ui/layout/designtime/HorizontalLayout.designtime",dnd:{draggable:false,droppable:true}},renderer:a});o.prototype.getAccessibilityInfo=function(){return{children:this.getContent()}};return o});
//# sourceMappingURL=HorizontalLayout.js.map