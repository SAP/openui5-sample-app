/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
	function () {
		"use strict";
		/**
		 * Search renderer.
		 * @namespace
		 */

		var SearchRenderer = {
			apiVersion: 2
		};

		SearchRenderer.render = function (oRm, oSearch) {
			var oSearchField = oSearch._getSearchField(),
				oCancelButton = oSearch._getCancelButton(),
				oSearchButton = oSearch._getSearchButton(),
				bIsOpen = oSearch.getIsOpen(),
				bPhoneMode = oSearch.getPhoneMode();

			oRm.openStart("div", oSearch);
			if (bIsOpen) {
				oRm.class("sapFShellBarSearch");
			}
			if (bPhoneMode) {
				oRm.class("sapFShellBarSearchFullWidth");
			}
			oRm.openEnd();

			oRm.openStart("div");
			oRm.class("sapFShellBarSearchWrap");
			oRm.openEnd();

				if (bIsOpen) {
					oRm.renderControl(oSearchField);
				}
				oRm.renderControl(oSearchButton);
				if (bIsOpen) {
					oRm.renderControl(oCancelButton);
				}
			oRm.close("div");
			oRm.close("div");
		};

		return SearchRenderer;

	}, /* bExport= */ true);
