/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/LayoutData","./library"],function(e,t){"use strict";var i=e.extend("sap.ui.layout.SplitterLayoutData",{metadata:{library:"sap.ui.layout",properties:{resizable:{type:"boolean",group:"Behavior",defaultValue:true},size:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"auto"},minSize:{type:"int",group:"Dimension",defaultValue:0}}}});i.prototype.init=function(){e.prototype.init.apply(this,arguments);this._bIsModified=false};i.prototype._markModified=function(){this._bIsModified=true};i.prototype._isMarked=function(){return this._bIsModified};i.prototype._getSizeUnit=function(){const e=this.getSize();if(e.includes("px")){return"px"}if(e.includes("rem")){return"rem"}if(e.includes("%")){return"%"}return"auto"};return i});
//# sourceMappingURL=SplitterLayoutData.js.map