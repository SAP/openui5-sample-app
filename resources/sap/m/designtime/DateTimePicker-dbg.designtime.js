/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.DateTimePicker control
sap.ui.define([],
	function() {
		"use strict";

		return {
			name: {
				singular: "DATETIMEPICKER_NAME",
				plural: "DATETIMEPICKER_NAME_PLURAL"
			},
			palette: {
				group: "INPUT",
				icons: {
					svg: "sap/m/designtime/DateTimePicker.icon.svg"
				}
			},
			templates: {
				create: "sap/m/designtime/DateTimePicker.create.fragment.xml"
			}
		};

	});