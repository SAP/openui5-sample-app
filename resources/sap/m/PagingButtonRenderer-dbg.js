/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
	function() {
		"use strict";

		/**
		 * PagingButton renderer
		 * @namespace
		 */
		var PagingButtonRenderer = {
			apiVersion: 2
		};


		PagingButtonRenderer.render = function (oRm, oControl) {
			var nextButton = oControl._getNextButton(),
				prevButton = oControl._getPreviousButton();

			oRm.openStart("div", oControl);
			oRm.class("sapMPagingButton");
			oRm.openEnd();
			oRm.renderControl(prevButton);
			oRm.renderControl(nextButton);
			oRm.close("div");
		};

		return PagingButtonRenderer;

	}, /* bExport= */ true);
