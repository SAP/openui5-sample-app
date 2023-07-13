/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Control","./IllustrationRenderer","./IllustrationPool"],function(e,t,i,l){"use strict";var s=t.extend("sap.m.Illustration",{metadata:{library:"sap.m",properties:{set:{type:"string",defaultValue:null},media:{type:"string",defaultValue:null},type:{type:"string",defaultValue:null}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},dnd:{draggable:true,droppable:false}},renderer:i});s.CAN_NOT_BUILD_SYMBOL_MSG="Some of the Control's properties are missing. Can't build Symbol ID. No SVG will be displayed.";s.prototype.init=function(){this._sId=this.getId()};s.prototype.onBeforeRendering=function(){this._buildSymbolId();if(this._sSymbolId){l.loadAsset(this._sSymbolId,this._sId)}else{e.warning(s.CAN_NOT_BUILD_SYMBOL_MSG)}};s.prototype._buildSymbolId=function(){var e=this.getSet(),t=this.getMedia(),i=this.getType();this._sSymbolId="";if(e&&t&&i){this._sSymbolId=e+"-"+t+"-"+i}};return s});
//# sourceMappingURL=Illustration.js.map