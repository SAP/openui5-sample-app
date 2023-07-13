/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./DragInfo","./DropInfo","sap/base/Log"],function(e,t,r){"use strict";var a=t.extend("sap.ui.core.dnd.DragDropInfo",{metadata:{library:"sap.ui.core",interfaces:["sap.ui.core.dnd.IDragInfo","sap.ui.core.dnd.IDropInfo"],properties:{sourceAggregation:{type:"string",defaultValue:null}},associations:{targetElement:{type:"sap.ui.core.Element",multiple:false}},events:{dragStart:{allowPreventDefault:true},dragEnd:{}}}});e.Mixin.apply(a.prototype);a.prototype.getDropTarget=function(){var e=this.getTargetElement();if(e){return sap.ui.getCore().byId(e)}return this.getParent()};a.prototype.setGroupName=function(){r.error("groupName property must not be set on "+this);return this};return a});
//# sourceMappingURL=DragDropInfo.js.map