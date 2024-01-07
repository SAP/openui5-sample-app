/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"./ButtonRenderer",
	"sap/ui/core/Renderer"
], function (ButtonRenderer, Renderer) {
	"use strict";

	var AccButtonRenderer = Renderer.extend(ButtonRenderer);
	AccButtonRenderer.apiVersion = 2;

	AccButtonRenderer.renderAccessibilityAttributes = function (oRM, oControl) {
		if (oControl.getTabIndex()) {
			oRM.attr("tabindex", oControl.getTabIndex());
		}
		if (oControl.getAriaHidden()) {
			oRM.attr("aria-hidden", oControl.getAriaHidden());
		}
		if (oControl.getAriaHaspopup()) {
			oRM.attr("aria-haspopup", oControl.getAriaHaspopup());
		}
	};

	return AccButtonRenderer;
}, /* bExport= */ true);