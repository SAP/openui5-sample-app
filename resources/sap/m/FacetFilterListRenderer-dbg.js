/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['./ListRenderer', 'sap/ui/core/Renderer'],
	function(ListRenderer, Renderer) {
	"use strict";

	/**
	 * FacetFilterList renderer.
	 *
	 * ListRenderer extends the ListBaseRenderer
	 * @namespace
	 * @alias sap.m.FacetFilterListRenderer
	 */
	var FacetFilterListRenderer = Renderer.extend(ListRenderer);
	FacetFilterListRenderer.apiVersion = 2;

	return FacetFilterListRenderer;

}, /* bExport= */ true);
