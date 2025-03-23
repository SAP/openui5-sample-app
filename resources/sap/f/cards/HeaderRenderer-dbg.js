/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/f/cards/BaseHeaderRenderer",
	"sap/ui/core/Renderer"
], function (BaseHeaderRenderer, Renderer) {
	"use strict";

	var HeaderRenderer = Renderer.extend(BaseHeaderRenderer);
	HeaderRenderer.apiVersion = 2;

	return HeaderRenderer;
}, /* bExport= */ true);
