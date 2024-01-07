/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.Select control
sap.ui.define([],
	function() {
	"use strict";

	return {
		palette: {
			group: "INPUT",
			icons: {
				svg: "sap/m/designtime/Select.icon.svg"
			}
		},
		aggregations : {
			items : {
				domRef : ":sap-domref",
				ignore : true
			},
			picker: {
				ignore: true
			}
		},
		templates: {
			create: "sap/m/designtime/Select.create.fragment.xml"
		}
	};

});