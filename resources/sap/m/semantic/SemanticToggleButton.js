/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/semantic/SemanticButton","sap/m/ToggleButton","sap/m/semantic/SemanticOverflowToolbarToggleButton"],function(t,e,s){"use strict";var r=t.extend("sap.m.semantic.SemanticToggleButton",{metadata:{library:"sap.m",abstract:true,properties:{pressed:{type:"boolean",group:"Data",defaultValue:false}}}});r.prototype._getClass=function(t){return t&&t.constraints==="IconOnly"?s:e};r.prototype._onPress=function(t){var e;if(this.getEnabled()){e=t.getParameter("pressed");this.setPressed(e);this.firePress({pressed:e})}};r.prototype._applyProperty=function(e,s,r){if(e==="pressed"){this._setPressed(s,r)}else{t.prototype._applyProperty.apply(this,arguments)}};r.prototype._setPressed=function(t,e){var s=this._getControl(),r=Boolean(t);if(s.getPressed()!==r){this._getControl().setPressed(r,e)}};r.prototype._createInstance=function(t){var e=new t({id:this.getId()+"-toggleButton"});e.attachEvent("press",this._onPress,this);return e};return r});
//# sourceMappingURL=SemanticToggleButton.js.map