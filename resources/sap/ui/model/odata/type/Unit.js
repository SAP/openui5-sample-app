/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UnitMixin","sap/ui/core/format/NumberFormat","sap/ui/model/type/Unit"],function(t,e,i){"use strict";var n=i.extend("sap.ui.model.odata.type.Unit",{constructor:function(t,e,i){this._applyUnitMixin.apply(this,arguments)}});t(n.prototype,i,"customUnits","Unit");n.prototype.getCustomUnitForKey=function(t,i){return{decimals:t[i].UnitSpecificScale,displayName:t[i].Text,"unitPattern-count-other":e.getDefaultUnitPattern(i)}};n.prototype.getName=function(){return"sap.ui.model.odata.type.Unit"};return n});
//# sourceMappingURL=Unit.js.map