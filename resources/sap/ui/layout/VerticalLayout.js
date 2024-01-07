/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/EnabledPropagator","./library","./VerticalLayoutRenderer"],function(e,t,a,r){"use strict";var i=e.extend("sap.ui.layout.VerticalLayout",{metadata:{library:"sap.ui.layout",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},enabled:{type:"boolean",group:"Behavior",defaultValue:true}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},dnd:{draggable:false,droppable:true},designtime:"sap/ui/layout/designtime/VerticalLayout.designtime"},renderer:r});i.prototype.getAccessibilityInfo=function(){return{children:this.getContent()}};t.call(i.prototype);return i});
//# sourceMappingURL=VerticalLayout.js.map