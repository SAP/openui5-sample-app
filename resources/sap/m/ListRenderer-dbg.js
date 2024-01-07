/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["sap/ui/core/Renderer", "./ListBaseRenderer"],
	function(Renderer, ListBaseRenderer) {
	"use strict";


	/**
	 * List renderer.
	 *
	 * ListRenderer extends the ListBaseRenderer
	 * @namespace
	 * @alias sap.m.ListRenderer
	 */
	var ListRenderer = Renderer.extend(ListBaseRenderer);
	ListRenderer.apiVersion = 2;

	ListRenderer.getNoDataAriaRole = function(oControl) {
		return oControl.getAriaRole() === "listbox" ? "option" : "listitem";
	};

	return ListRenderer;

}, /* bExport= */ true);
