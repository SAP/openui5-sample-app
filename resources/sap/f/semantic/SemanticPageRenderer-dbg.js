/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function() {
	"use strict";

	/**
	* <code>sap.f.semantic.SemanticPage</code> renderer.
	*/
	var SemanticPageRenderer = {
		apiVersion: 2
	};

	/**
	* Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	*
	* @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the Render-Output-Buffer
	* @param {sap.f.semantic.SemanticPage} oSemanticPage An object representation of the control that should be rendered
	*/
	SemanticPageRenderer.render = function(oRenderManager, oSemanticPage) {
		oRenderManager.openStart("div", oSemanticPage);
		oRenderManager.class("sapFSemanticPage");
		oRenderManager.openEnd();
		oRenderManager.renderControl(oSemanticPage._getPage());
		oRenderManager.close("div");
	};

	return SemanticPageRenderer;
}, /* bExport= */ true);