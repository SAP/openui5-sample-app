/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'./library',
	'./SinglePlanningCalendarView'
],
function (library, SinglePlanningCalendarView) {
	"use strict";

	/**
	 * Constructor for a new <code>SinglePlanningCalendarDayView</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 *
	 * Represents a day view of the {@link sap.m.SinglePlanningCalendar}.
	 * The purpose of the element is to decouple the view logic from parent control <code>SinglePlanningCalendar</code>.
	 *
	 * @extends sap.m.SinglePlanningCalendarView
	 *
	 * @author SAP SE
	 * @version 1.128.0
	 *
	 * @constructor
	 * @public
	 *
	 * @since 1.61
	 * @alias sap.m.SinglePlanningCalendarDayView
	 */
	var SinglePlanningCalendarDayView = SinglePlanningCalendarView.extend("sap.m.SinglePlanningCalendarDayView", {
		metadata: {

			library: "sap.m"

		}
	});

	/**
	 * Returns the number of columns to be displayed in the grid of the <code>sap.m.SinglePlanningCalendar</code>.
	 *
	 * @returns {int} the number of columns to be displayed
	 * @override
	 * @public
	 */
	SinglePlanningCalendarDayView.prototype.getEntityCount = function () {
		return 1;
	};

	/**
	 * Should return a number of entities until the next/previous startDate of the
	 * <code>sap.m.SinglePlanningCalendar</code> after navigating forward or backwards.
	 *
	 * @returns {int} the number of entities to be skipped by scrolling
	 * @override
	 * @public
	 */
	SinglePlanningCalendarDayView.prototype.getScrollEntityCount = function () {
		return 1;
	};

	/**
	 * Calculates the startDate which will be displayed in the <code>sap.m.SinglePlanningCalendar</code> based
	 * on a given date.
	 *
	 * @param {Date|module:sap/ui/core/date/UI5Date} oDate The given date
	 * @returns {Date|module:sap/ui/core/date/UI5Date} The startDate of the view
	 * @override
	 * @public
	 */
	SinglePlanningCalendarDayView.prototype.calculateStartDate = function (oDate) {
		return oDate;
	};

	return SinglePlanningCalendarDayView;

});