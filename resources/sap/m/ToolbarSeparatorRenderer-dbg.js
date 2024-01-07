/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
	function() {
	"use strict";


	/**
	 * ToolbarSeparator renderer.
	 * @namespace
	 */
	var ToolbarSeparatorRenderer = {
		apiVersion: 2
	};

	ToolbarSeparatorRenderer.render = function(rm, oControl) {
		rm.openStart("div", oControl);
		rm.class("sapMTBSeparator");

		//ARIA
		rm.accessibilityState(oControl, {
			role: "separator"
		});

		rm.openEnd();
		rm.close("div");
	};

	return ToolbarSeparatorRenderer;

}, /* bExport= */ true);
