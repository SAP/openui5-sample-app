/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */


sap.ui.define([], function() {
	"use strict";

	var SemanticPageRenderer = {
		apiVersion: 2
	};

	SemanticPageRenderer.render = function(oRenderManager, omPage) {

		oRenderManager.openStart("div", omPage);
		oRenderManager.class("sapMSemanticPage");
		oRenderManager.openEnd();
		oRenderManager.renderControl(omPage._getPage());
		oRenderManager.close("div");
	};

	return SemanticPageRenderer;
}, /* bExport= */ true);
