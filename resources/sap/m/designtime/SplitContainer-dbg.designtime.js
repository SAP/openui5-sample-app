/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.SplitContainer control
sap.ui.define([],
	function() {
	"use strict";

	return {
		name: {
			singular: "SPLIT_CONTAINER_NAME",
			plural: "SPLIT_CONTAINER_NAME_PLURAL"
		},
		palette: {
			group: "CONTAINER"
		},
		aggregations : {
			masterPages : {
				domRef : ":sap-domref > .sapMSplitContainerMaster, :sap-domref > .sapMSplitContainerMobile"
			},
			detailPages : {
				domRef : ":sap-domref > .sapMSplitContainerDetail"
			}
		}
	};

});