/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.MessageStrip control
sap.ui.define([],
	function() {
	"use strict";

	return {
		palette: {
			group: "TILE",
			icons: {
				svg: "sap/m/designtime/MessageStrip.icon.svg"
			}
		},
		templates: {
			create: "sap/m/designtime/MessageStrip.create.fragment.xml"
		}
	};

});