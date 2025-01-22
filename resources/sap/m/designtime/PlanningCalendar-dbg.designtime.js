/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.PlanningCalendar control
sap.ui.define([],
	function() {
		"use strict";

		return {
			name: {
				singular: "PLANNINGCALENDAR_NAME",
				plural: "PLANNINGCALENDAR_NAME_PLURAL"
			},
			palette: {
				group: "DISPLAY",
				icons: {
					svg: "sap/m/designtime/PlanningCalendar.icon.svg"
				}
			},
			templates: {
				create: "sap/m/designtime/PlanningCalendar.create.fragment.xml"
			}
		};

	});