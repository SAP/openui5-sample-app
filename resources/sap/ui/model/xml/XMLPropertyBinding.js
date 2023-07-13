/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ChangeReason","sap/ui/model/ClientPropertyBinding","sap/base/util/deepEqual"],function(e,t,i){"use strict";var s=t.extend("sap.ui.model.xml.XMLPropertyBinding");s.prototype.setValue=function(t){if(this.bSuspended){return}if(this.oValue!=t){if(this.oModel.setProperty(this.sPath,t,this.oContext,true)){this.oValue=t;this.oModel.firePropertyChange({reason:e.Binding,path:this.sPath,context:this.oContext,value:t})}}};s.prototype.checkUpdate=function(t){if(this.bSuspended&&!t){return}var s=this._getValue();if(!i(s,this.oValue)||t){this.oValue=s;this._fireChange({reason:e.Change})}};return s});
//# sourceMappingURL=XMLPropertyBinding.js.map