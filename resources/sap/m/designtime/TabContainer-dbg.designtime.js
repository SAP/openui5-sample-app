/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.TabContainer control
sap.ui.define([],
	function() {
		"use strict";

		return {
			name: {
				singular: "TABCONTAINER_NAME",
				plural: "TABCONTAINER_NAME_PLURAL"
			},
			palette: {
				group: "CONTAINER"
				// TODO: uncomment this when icon is avaiable
				// icons: {
				// 	svg: "sap/m/designtime/TabContainer.icon.svg"
				// }
			},
			templates: {
				create: "sap/m/designtime/TabContainer.create.fragment.xml"
			}
		};

	});