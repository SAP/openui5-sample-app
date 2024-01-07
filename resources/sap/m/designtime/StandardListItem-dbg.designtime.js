/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.StandardListItem control
sap.ui.define([],
	function() {
		"use strict";

		return {
			actions: {
				rename: {
					changeType: "rename",
					domRef: function (oControl) {
						return oControl.$().find(".sapMLIBContent > .sapMSLIDiv > .sapMSLITitleOnly")[0] || oControl.$().find(".sapMLIBContent > .sapMSLIDiv > .sapMSLITitle")[0];
					}
				}
			},
			aggregations: {
				avatar: {
					ignore: true
				}
			}
		};
	});