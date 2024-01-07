/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'./PopoverRenderer', 'sap/ui/core/Renderer'
], function(PopoverRenderer, Renderer) {
	"use strict";

	/**
	 * OverflowToolbarAssociativePopover renderer
	 * @namespace
	 */
	var OverflowToolbarAssociativePopoverRenderer = Renderer.extend(PopoverRenderer);
	OverflowToolbarAssociativePopoverRenderer.apiVersion = 2;

	return OverflowToolbarAssociativePopoverRenderer;

}, /* bExport= */true);
