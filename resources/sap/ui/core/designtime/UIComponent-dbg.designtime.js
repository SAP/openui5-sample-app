/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the UI Component
sap.ui.define([],
	function () {
		"use strict";

		return {
			domRef: function(oUIComponent) {
				if (oUIComponent.oContainer) {
					return oUIComponent.oContainer.getDomRef("uiarea");
				}
			},
			aggregations: {
				rootControl: {
					ignore : false
				}
			}
		};
	});