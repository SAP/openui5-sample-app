/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.ui.layout.BlockLayout control
sap.ui.define([],
	function () {
		"use strict";

		return {
			palette: {
				group: "LAYOUT",
				icons: {
					svg: "sap/ui/layout/designtime/BlockLayout.icon.svg"
				}
			},
			aggregations: {
				content: {
					domRef: ":sap-domref",
					actions: {
						move: "moveControls"
					}
				}
			}
		};

	});