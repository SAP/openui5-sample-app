/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.f.GridContainer control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "GRID_CONTAINER_CONTROL_NAME",
				plural: "GRID_CONTAINER_CONTROL_NAME_PLURAL"
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			},
			aggregations: {
				items: {
					domRef: ":sap-domref",
					actions: {
						move: "moveControls"
					}
				}
			}
		};
	}, /* bExport= */ false);