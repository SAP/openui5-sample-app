/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.ObjectNumber control
sap.ui.define([],
	function() {
	"use strict";

	return {
		palette: {
			group: "DISPLAY",
			icons: {
				svg: "sap/m/designtime/ObjectNumber.icon.svg"
			}
		},
		templates: {
			create: "sap/m/designtime/ObjectNumber.create.fragment.xml"
		}
	};

});