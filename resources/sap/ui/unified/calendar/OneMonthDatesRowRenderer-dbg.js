/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer', './MonthRenderer', './DatesRowRenderer'],
	function(Renderer, MonthRenderer, DatesRowRenderer) {
		"use strict";

		/**
		 * OneMonthDatesRowRenderer renderer.
		 * @namespace
		 */
		var OneMonthDatesRowRenderer = Renderer.extend(DatesRowRenderer);

		OneMonthDatesRowRenderer.apiVersion = 2;

		["getClass", "renderMonth", "renderDays", "renderHeader"].forEach(function(sHelperMethod) {
			OneMonthDatesRowRenderer[sHelperMethod] = function(oRm, oDatesRow) {
				if (oDatesRow.iMode < 2) {
					return MonthRenderer[sHelperMethod].apply(MonthRenderer, arguments);
				} else {
					if (sHelperMethod === "getClass") {
						var aClasses = ["sapUiCalDatesRow", "sapUiCalRow", "sapUiCalOneMonthDatesRow"];

						if (!oDatesRow.getShowDayNamesLine()) {
							aClasses.push("sapUiCalNoNameLine");
						}

						return aClasses;
					}
					return DatesRowRenderer[sHelperMethod].apply(DatesRowRenderer, arguments);
				}
			};
		});



		return OneMonthDatesRowRenderer;

	}, /* bExport=  */ true);
