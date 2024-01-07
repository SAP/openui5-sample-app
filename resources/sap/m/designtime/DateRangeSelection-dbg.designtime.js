/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.DateRangeSelection control
sap.ui.define([],
	function() {
		"use strict";

		return {
			name: {
				singular: "DATERANGESELECTION_NAME",
				plural: "DATERANGESELECTION_NAME_PLURAL"
			},
			palette: {
				group: "INPUT",
				icons: {
					svg: "sap/m/designtime/DateRangeSelection.icon.svg"
				}
			},
			templates: {
				create: "sap/m/designtime/DateRangeSelection.create.fragment.xml"
			}
		};

	});