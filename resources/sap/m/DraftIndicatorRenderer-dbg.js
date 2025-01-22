/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],
	function() {
	"use strict";


	/**
	 * DraftIndicator renderer.
	 * @namespace
	 */
	var DraftIndicatorRenderer = {
		apiVersion: 2
	};

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.m.DraftIndicator} oControl an object representation of the control that should be rendered
	 */
	DraftIndicatorRenderer.render = function(oRm, oControl) {

		oRm.openStart("div", oControl);
		oRm.class("sapMDraftIndicator");
		oRm.openEnd();

		var oLabel = oControl._getLabel();

		oRm.renderControl(oLabel);

		oRm.close("div");
	};


	return DraftIndicatorRenderer;

}, /* bExport= */ true);
