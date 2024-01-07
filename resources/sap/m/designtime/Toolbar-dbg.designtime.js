/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.Toolbar control
sap.ui.define([],
	function() {
	"use strict";

	return {
		aggregations: {
			content: {
				domRef: ":sap-domref",
				actions: {
					move: "moveControls"
				}
			}
		},
		templates: {
			create: "sap/m/designtime/Toolbar.create.fragment.xml"
		}
	};

});