/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/extend","sap/base/util/isEmptyObject","sap/ui/base/Object","sap/ui/test/_OpaLogger","sap/ui/test/_ParameterValidator","sap/ui/thirdparty/jquery"],function(t,e,i,a,n){"use strict";var s=i.extend("sap.ui.test.autowaiter.WaiterBase",{constructor:function(){i.call(this);this._mConfig=this._getDefaultConfig();this._sName=this.getMetadata().getName();this._oLogger=a.getLogger(this._sName);this._oHasPendingLogger=a.getLogger(this._sName+"#hasPending");this._oConfigValidator=new n({errorPrefix:this._sName+"#extendConfig"})},hasPending:function(){return false},isEnabled:function(){return this._mConfig.enabled},extendConfig:function(i){if(!e(i)){this._oConfigValidator.validate({inputToValidate:i,validationInfo:this._getValidationInfo()});t(this._mConfig,i)}},_getDefaultConfig:function(){return{enabled:true}},_getValidationInfo:function(){return{enabled:"bool"}}});return s});
//# sourceMappingURL=WaiterBase.js.map