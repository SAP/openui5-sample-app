/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/semantic/SemanticControl","sap/m/Button","sap/m/semantic/SemanticOverflowToolbarButton","sap/ui/thirdparty/jquery"],function(t,e,n,jQuery){"use strict";var r=t.extend("sap.m.semantic.SemanticButton",{metadata:{library:"sap.m",abstract:true,properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true}},events:{press:{}}}});r.prototype._getControl=function(){var t,e,n,r=this._getConfiguration();if(!r){return null}t=this.getAggregation("_control");if(!t){e=this._getClass(r);n=this._createInstance(e);n.applySettings(r.getSettings());if(typeof r.getEventDelegates==="function"){n.addEventDelegate(r.getEventDelegates(n))}this.setAggregation("_control",n,true);t=this.getAggregation("_control")}return t};r.prototype._getClass=function(t){return t&&t.constraints==="IconOnly"?n:e};r.prototype._createInstance=function(t){return new t({id:this.getId()+"-button",press:jQuery.proxy(this.firePress,this)})};return r});
//# sourceMappingURL=SemanticButton.js.map