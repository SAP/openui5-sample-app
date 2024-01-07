/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.SearchField control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "SEARCH_FIELD_NAME",
				plural: "SEARCH_FIELD_NAME_PLURAL"
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			},
			palette: {
				group: "INPUT",
				icons: {
					svg: "sap/m/designtime/SearchField.icon.svg"
				}
			},
			templates: {
				create: "sap/m/designtime/SearchField.create.fragment.xml"
			}
		};
	});