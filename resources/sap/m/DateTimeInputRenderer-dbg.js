/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],
	function() {
	"use strict";

	/**
	 * DateTimeInput renderer.
	 * @namespace
	 */
	var DateTimeInputRenderer = {
		apiVersion: 2
	};

	DateTimeInputRenderer.render = function(oRm, oControl) {

		oRm.openStart("div", oControl);
		oRm.class("sapMDTI");

		var sWidth = oControl.getWidth();
		if (sWidth) {
			oRm.style("width", sWidth);
		}

		oRm.openEnd();

		var oPicker = oControl.getAggregation("_picker");
		if (oPicker) {
			oRm.renderControl(oPicker);
		}

		oRm.close("div");

	};

	return DateTimeInputRenderer;

}, /* bExport= */ true);
