/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.ui.unified.Currency control
sap.ui.define([],
	function() {
		"use strict";

		return {
			name: {
				singular: "CURRENCY_NAME",
				plural: "CURRENCY_NAME_PLURAL"
			},
			palette: {
				group: "DISPLAY",
				icons: {
					svg: "sap/ui/unified/designtime/Currency.icon.svg"
				}
			},
			templates: {
				create: "sap/ui/unified/designtime/Currency.create.fragment.xml"
			}
		};

	});