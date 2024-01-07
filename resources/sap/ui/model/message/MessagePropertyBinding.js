/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ChangeReason","sap/ui/model/ClientPropertyBinding","sap/base/util/deepEqual"],function(e,t,i){"use strict";var s=t.extend("sap.ui.model.message.MessagePropertyBinding");s.prototype.setValue=function(e){if(!i(this.oValue,e)){this.oModel.setProperty(this.sPath,e,this.oContext)}};s.prototype.checkUpdate=function(t){var s=this._getValue();if(!i(s,this.oValue)||t){this.oValue=s;this._fireChange({reason:e.Change})}};return s});
//# sourceMappingURL=MessagePropertyBinding.js.map