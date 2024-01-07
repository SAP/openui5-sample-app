/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ChangeReason","./PropertyBinding"],function(t,e){"use strict";var n=e.extend("sap.ui.model.StaticBinding",{constructor:function(t){e.apply(this,[null,""]);this.vValue=t}});n.prototype.getPath=function(){return null};n.prototype.getModel=function(){return null};n.prototype.getContext=function(){return null};n.prototype.updateRequired=function(){return true};n.prototype.getValue=function(){return this.vValue};n.prototype.setValue=function(e){if(e!==this.vValue){this.vValue=e;this._fireChange({reason:t.Change})}};n.prototype.attachChange=function(t,e){this.attachEvent("change",t,e)};n.prototype.detachChange=function(t,e){this.detachEvent("change",t,e)};return n});
//# sourceMappingURL=StaticBinding.js.map