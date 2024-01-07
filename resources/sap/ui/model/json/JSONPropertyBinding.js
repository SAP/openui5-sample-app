/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/ChangeReason","sap/ui/model/ClientPropertyBinding","sap/base/util/deepEqual"],function(t,e,i){"use strict";var a=e.extend("sap.ui.model.json.JSONPropertyBinding");a.prototype.setValue=function(e){if(this.bSuspended){return}if(!i(this.oValue,e)){if(this.oModel.setProperty(this.sPath,e,this.oContext,true)){this.oValue=e;this.getDataState().setValue(this.oValue);this.oModel.firePropertyChange({reason:t.Binding,path:this.sPath,context:this.oContext,value:e})}}};a.prototype.checkUpdate=function(e){if(this.bSuspended&&!e){return}var a=this._getValue();if(!i(a,this.oValue)||e){this.oValue=a;this.getDataState().setValue(this.oValue);this.checkDataState();this._fireChange({reason:t.Change})}};return a});
//# sourceMappingURL=JSONPropertyBinding.js.map