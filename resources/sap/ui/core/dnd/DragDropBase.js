/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","../Element","../library","./DragAndDrop"],function(e,t){"use strict";var a=t.extend("sap.ui.core.dnd.DragDropBase",{metadata:{abstract:true,library:"sap.ui.core",properties:{groupName:{type:"string",defaultValue:null,invalidate:false},enabled:{type:"boolean",defaultValue:true,invalidate:false},keyboardHandling:{type:"boolean",defaultValue:false,invalidate:false}}}});a.prototype.bIgnoreMetadataCheck=false;a.prototype.isDraggable=function(e){return false};a.prototype.isDroppable=function(e,t){return false};a.prototype.checkMetadata=function(t,a,r){if(this.bIgnoreMetadataCheck){return true}var n=t.getMetadata().getDragDropInfo(a);if(!n[r]){e.warning((a?a+" aggregation of ":"")+t+" is not configured to be "+r);return false}return true};a.prototype.setProperty=function(e,a,r){r=r==undefined?(this.getMetadata().getProperty(e).appData||{}).invalidate===false:r;return t.prototype.setProperty.call(this,e,a,r)};return a});
//# sourceMappingURL=DragDropBase.js.map