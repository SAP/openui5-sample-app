/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.f.DynamicPageHeader control
sap.ui.define([],
	function() {
	"use strict";

	return {
		aggregations : {
			content : {
				domRef :  ":sap-domref .sapFDynamicPageHeaderContent",
				actions : {
					move : {
						changeType : "moveControls"
					}
				}
			}
		},
		actions : {
			remove : {
				changeType : "hideControl"
			},
			reveal : {
				changeType : "unhideControl"
			}
		},
		name: {
			singular: "DYNAMIC_PAGE_HEADER_NAME",
			plural: "DYNAMIC_PAGE_HEADER_NAME_PLURAL"
		}
	};

});
