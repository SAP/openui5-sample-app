/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["./ListItemBaseRenderer", "sap/ui/core/Renderer"],
	function(ListItemBaseRenderer, Renderer) {
	"use strict";


	/**
	 * CustomListItem renderer.
	 * @namespace
	 */
	var CustomListItemRenderer = Renderer.extend(ListItemBaseRenderer);
	CustomListItemRenderer.apiVersion = 2;

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm
	 *            RenderManager that can be used to render the control's DOM
	 * @param {sap.m.CustomListItem} oLI
	 *            The item to be rendered
	 */
	CustomListItemRenderer.renderLIAttributes = function(rm, oLI) {
		rm.class("sapMCLI");
	};

	CustomListItemRenderer.renderLIContent = function(rm, oLI) {
		oLI.getContent().forEach(rm.renderControl, rm);
	};

	return CustomListItemRenderer;

}, /* bExport= */ true);
