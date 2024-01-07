/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.m.Togglebutton
sap.ui.define(['./ButtonRenderer', 'sap/ui/core/Renderer'],
	function(ButtonRenderer, Renderer) {
	"use strict";


	/**
	 * ToggleButton renderer.
	 * @namespace
	 */

	var ToggleButtonRenderer = Renderer.extend(ButtonRenderer);

	ToggleButtonRenderer.apiVersion = 2;

	/**
	 * Callback for specific rendering of accessibility attributes.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            oRm the RenderManager currently rendering this control
	 * @param {sap.m.ToggleButton}
	 *            oToggleButton the ToggleButton that should be rendered
	 * @param {object} mAccProps Accessibillity properties
	 * @private
	 */
	ToggleButtonRenderer.renderAccessibilityAttributes = function(oRm, oToggleButton, mAccProps) {

		mAccProps["pressed"] = oToggleButton.getPressed();

	};

	/**
	 * Callback for specific rendering of inner button attributes.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            oRm the RenderManager currently rendering this control
	 * @param {sap.m.ToggleButton}
	 *            oToggleButton the ToggleButton that should be rendered
	 * @private
	 */
	ToggleButtonRenderer.renderButtonAttributes = function(oRm, oToggleButton) {
		if (oToggleButton.getPressed() && !oToggleButton._isUnstyled()) {
			oRm.class("sapMToggleBtnPressed");
		}
	};

	return ToggleButtonRenderer;

}, /* bExport= */ true);
