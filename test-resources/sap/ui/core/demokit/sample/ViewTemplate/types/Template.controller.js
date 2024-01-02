/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/core/ElementRegistry",
	"sap/ui/core/sample/common/Controller"
], function (ElementRegistry, Controller) {
	"use strict";

	return Controller.extend("sap.ui.core.sample.ViewTemplate.types.Template", {
		onBeforeRendering : function () {
			ElementRegistry.forEach(function (oElement) {
				var oBinding = oElement.getBinding("value");

				if (oElement.isA("sap.m.Input") && oBinding && oBinding.getType()
						&& oBinding.getType().getPlaceholderText) {
					oElement.setPlaceholder(oBinding.getType().getPlaceholderText());
				}
			});
		}
	});
});
