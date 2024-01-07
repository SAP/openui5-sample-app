/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.RangeSlider control
sap.ui.define([],
	function() {
	"use strict";

	return {
		palette: {
			group: "INPUT"
		},
		templates: {
			create: "sap/m/designtime/RangeSlider.create.fragment.xml"
		},
		name: {
			singular: "RANGESLIDER_NAME",
			plural: "RANGESLIDER_NAME_PLURAL"
		}
	};

});