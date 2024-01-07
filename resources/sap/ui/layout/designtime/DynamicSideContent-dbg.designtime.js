/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.ui.layout.DynamicSideContent control
sap.ui.define([],
	function () {
		"use strict";

		return {
			aggregations: {
				mainContent: {
					domRef: ":sap-domref > div",
					actions: {
						move: "moveControls"
					}
				},
				sideContent: {
					domRef: ":sap-domref > [id$='SCGridCell']",
					actions: {
						move: "moveControls"
					}
				}
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			}
		};

	});