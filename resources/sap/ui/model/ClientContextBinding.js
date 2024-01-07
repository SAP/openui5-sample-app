/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ContextBinding"],function(t){"use strict";var e=t.extend("sap.ui.model.ClientContextBinding",{constructor:function(e,n,i,o,s){t.call(this,e,n,i,o,s);var r=this;e.createBindingContext(n,i,o,function(t){r.bInitial=false;r.oElementContext=t})}});e.prototype.refresh=function(t){var e=this;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(n){if(e.oElementContext===n&&!t){e.oModel.checkUpdate(true,n)}else{e.oElementContext=n;e._fireChange()}},true)};e.prototype.initialize=function(){var t=this;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(e){t.oElementContext=e;t._fireChange()},true)};e.prototype.setContext=function(t){var e=this;if(this.oContext!=t){this.oContext=t;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(t){e.oElementContext=t;e._fireChange()})}};return e});
//# sourceMappingURL=ClientContextBinding.js.map