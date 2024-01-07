/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./DragInfo","./DropInfo","sap/base/Log"],function(e,t,r,a){"use strict";var n=r.extend("sap.ui.core.dnd.DragDropInfo",{metadata:{library:"sap.ui.core",interfaces:["sap.ui.core.dnd.IDragInfo","sap.ui.core.dnd.IDropInfo"],properties:{sourceAggregation:{type:"string",defaultValue:null}},associations:{targetElement:{type:"sap.ui.core.Element",multiple:false}},events:{dragStart:{allowPreventDefault:true},dragEnd:{}}}});t.Mixin.apply(n.prototype);n.prototype.getDropTarget=function(){var t=this.getTargetElement();if(t){return e.getElementById(t)}return this.getParent()};n.prototype.setGroupName=function(){a.error("groupName property must not be set on "+this);return this};return n});
//# sourceMappingURL=DragDropInfo.js.map