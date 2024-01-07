/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./PropertyBinding"],function(t){"use strict";var e=t.extend("sap.ui.model.ClientPropertyBinding",{constructor:function(e,s,i,o){t.apply(this,arguments);this.oValue=this._getValue();this.setIgnoreMessages(o&&o.ignoreMessages)}});e.prototype.getValue=function(){return this.oValue};e.prototype._getValue=function(){var t=this.sPath.substr(this.sPath.lastIndexOf("/")+1);if(this.oContext&&t=="__name__"){var e=this.oContext.getPath().split("/");return e[e.length-1]}return this.oModel.getProperty(this.sPath,this.oContext)};e.prototype.setContext=function(t){if(this.oContext!=t){var e=sap.ui.require("sap/ui/core/Messaging");if(e){e.removeMessages(this.getDataState().getControlMessages(),true)}this.oContext=t;if(this.isRelative()){this.checkUpdate()}}};e.prototype.supportsIgnoreMessages=function(){return true};return e});
//# sourceMappingURL=ClientPropertyBinding.js.map