/*
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([], function () {
	"use strict";

	/*global Map */
	var mRegistry = new Map();

	/**
	 * @private
	 * @ui5-restricted
	 */
	var _Calendars = {
		get: function (sCalendarType) {
			if (!mRegistry.has(sCalendarType)) {
				sap.ui.requireSync("sap/ui/core/date/" + sCalendarType); // TODO: establish full async alternative
			}

			return mRegistry.get(sCalendarType);
		},
		set: function (sCalendarType, CalendarClass) {
			mRegistry.set(sCalendarType, CalendarClass);
		}
	};

	return _Calendars;
});
