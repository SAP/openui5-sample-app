/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.OverflowToolbarButton control
sap.ui.define([], function () {
	"use strict";

	return {
		actions: {
			remove: {
				changeType: "hideControl"
			},
			reveal: {
				changeType: "unhideControl"
			}
		},
		templates: {
			create: "sap/m/designtime/OverflowToolbarButton.create.fragment.xml"
		}
	};
});