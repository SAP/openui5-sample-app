/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.MultiComboBox control
sap.ui.define([],
	function() {
	"use strict";

	return {
		palette: {
			group: "INPUT",
			icons: {
				svg: "sap/m/designtime/MultiComboBox.icon.svg"
			}
		},
		templates: {
			create: "sap/m/designtime/MultiComboBox.create.fragment.xml"
		}
	};

});