/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.Bar control
sap.ui.define([],
	function() {
	"use strict";

	return {
		aggregations: {
			contentLeft: {
				domRef: ":sap-domref > .sapMBarLeft",
				actions: {
					move: "moveControls"
				}
			},
			contentMiddle: {
				domRef: ":sap-domref > .sapMBarMiddle > .sapMBarPH",
				actions: {
					move: "moveControls"
				}
			},
			contentRight: {
				domRef: ":sap-domref > .sapMBarRight",
				actions: {
					move: "moveControls"
				}
			}
		}
	};

});
