/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/PropertyBinding","sap/ui/model/ChangeReason"],function(e,t){"use strict";var o=e.extend("sap.ui.model.resource.ResourcePropertyBinding",{constructor:function(t,o){e.apply(this,arguments);this.oValue=this.oModel.getProperty(o)}});o.prototype.getValue=function(){return this.oValue};o.prototype.checkUpdate=function(e){if(!this.bSuspended){var o=this.oModel.getProperty(this.sPath);if(e||o!=this.oValue){this.oValue=o;this._fireChange({reason:t.Change})}}};return o});
//# sourceMappingURL=ResourcePropertyBinding.js.map