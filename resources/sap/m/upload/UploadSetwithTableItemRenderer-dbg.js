/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["sap/ui/core/Renderer", "sap/m/ColumnListItemRenderer", "sap/m/ListItemBaseRenderer"], function (Renderer, ColumnListItemRenderer) {
	"use strict";

	/**
	 * UploadSetwithTableItem renderer.
	 * @namespace
	 */
	var UploadSetwithTableItemRenderer = Renderer.extend(ColumnListItemRenderer);
	UploadSetwithTableItemRenderer.apiVersion = 2;

    UploadSetwithTableItemRenderer.render = function(rm, oLI) {
		oLI.addStyleClass("SapMUSTI");
		ColumnListItemRenderer.render.apply(this, arguments);
	};
    // enable in-place DOM patching
	return UploadSetwithTableItemRenderer;
}, /* bExport= */ true);
