/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.ui.layout.FixFlex control
sap.ui.define([],
	function () {
		"use strict";

		return {
			aggregations: {
				fixContent: {
					domRef: ":sap-domref > .sapUiFixFlexFixed",
					actions: {
						move: "moveControls"
					}
				},
				flexContent: {
					domRef: ":sap-domref > .sapUiFixFlexFlexible"
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