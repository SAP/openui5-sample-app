/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
	function() {
	"use strict";

	/**
	 * ControlSpacer renderer.
	 * @namespace
	 */
	var ControlSpacerRenderer = {
		apiVersion: 2
	};

	ControlSpacerRenderer.render = function(rm, oControl) {
		rm.openStart("div", oControl);
		rm.class("sapMTBSpacer");

		rm.style("width", oControl.getWidth());

		rm.openEnd().close("div");
	};

	return ControlSpacerRenderer;

}, /* bExport= */ true);
