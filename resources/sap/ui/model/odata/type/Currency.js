/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UnitMixin","sap/ui/model/type/Currency"],function(t,e){"use strict";var n=e.extend("sap.ui.model.odata.type.Currency",{constructor:function(t,e){this._applyUnitMixin.apply(this,arguments)}});t(n.prototype,e,"customCurrencies","Currency");n.prototype.getCustomUnitForKey=function(t,e){return{decimals:t[e].UnitSpecificScale,isoCode:t[e].StandardCode}};n.prototype.getName=function(){return"sap.ui.model.odata.type.Currency"};return n});
//# sourceMappingURL=Currency.js.map