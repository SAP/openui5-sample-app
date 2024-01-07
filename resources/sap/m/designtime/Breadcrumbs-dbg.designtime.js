/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.Breadcrumbs control
sap.ui.define([],
	function () {
		"use strict";

		return {
			palette: {
				group: "ACTION",
				icons: {
					svg: "sap/m/designtime/Breadcrumbs.icon.svg"
				}
			},
			templates: {
				create: "sap/m/designtime/Breadcrumbs.create.fragment.xml"
			}
		};
	});