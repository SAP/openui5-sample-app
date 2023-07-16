/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["sap/ui/core/Renderer", "sap/m/ColumnListItemRenderer", "sap/m/ListItemBaseRenderer"], function (Renderer, ColumnListItemRenderer) {
	"use strict";

	/**
	 * UploadSetTableItem renderer.
	 * @namespace
	 */
	var UploadSetTableItemRenderer = Renderer.extend(ColumnListItemRenderer);
	UploadSetTableItemRenderer.apiVersion = 2;

    UploadSetTableItemRenderer.render = function(rm, oLI) {
		ColumnListItemRenderer.render.apply(this, arguments);
	};
    // enable in-place DOM patching
	return UploadSetTableItemRenderer;
}, /* bExport= */ true);
