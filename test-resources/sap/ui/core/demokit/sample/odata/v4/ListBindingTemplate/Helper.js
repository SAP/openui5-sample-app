/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/base/BindingParser"
], function (BindingParser) {
	"use strict";

	return {
		asyncHelper : function (oContext) {
			return Promise.resolve(oContext.getPath() + "/EQUIPMENT_2_PRODUCT/");
		},

		format : function (vRawValue) {
			return "*" + vRawValue + "*";
		},
		stringify : function (vRawValue) {
			return vRawValue === undefined
				? undefined
				: BindingParser.complexParser.escape(JSON.stringify(vRawValue));
		}
	};
}, /* bExport= */ true);
