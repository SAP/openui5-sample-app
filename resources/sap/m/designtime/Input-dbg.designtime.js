/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.InputBase control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "INPUT_NAME",
				plural: "INPUT_NAME_PLURAL"
			},
			palette: {
				group: "INPUT",
				icons: {
					svg: "sap/m/designtime/Input.icon.svg"
				}
			},
			templates: {
				create: "sap/m/designtime/Input.create.fragment.xml"
			}
		};
	});