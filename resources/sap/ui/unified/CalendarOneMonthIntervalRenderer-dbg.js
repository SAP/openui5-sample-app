/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer', './CalendarDateIntervalRenderer'],
	function(Renderer, CalendarDateIntervalRenderer) {
	"use strict";


	/**
	 * CalendarOneMonthInterval renderer.
	 * @namespace
	 */
	var CalendarOneMonthIntervalRenderer = Renderer.extend(CalendarDateIntervalRenderer);
	CalendarOneMonthIntervalRenderer.apiVersion = 2;

	CalendarOneMonthIntervalRenderer.addAttributes = function(oRm, oCal) {

		CalendarDateIntervalRenderer.addAttributes.apply(this, arguments);
		oRm.class("sapUiCalOneMonthInt");
	};

	return CalendarOneMonthIntervalRenderer;

}, /* bExport= */ true);
