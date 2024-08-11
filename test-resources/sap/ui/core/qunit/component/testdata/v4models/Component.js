/*
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class testdata.v4models.Component
sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	"use strict";

	return UIComponent.extend("testdata.v4models.Component", {
		metadata: {
			manifest: {
				"_version": "1.0.0",
				"sap.app": {
					"_version": "1.0.0",
					"id": "testdata.v4models",
					"type": "application",
					"applicationVersion": {
						"version": "1.0.0"
					},
					"title": "V4 Models Test",
					"description": "V4 Models Test",
					"dataSources": {
						"ODataV2Consumption" : {
							"uri" : "/path/to/odata/service/",
							"type" : "OData",
							"settings" : {
								"odataVersion" : "2.0"
							}
						}
					}
				},
				"sap.ui": {
					"_version": "1.0.0",
					"technology": "UI5"
				},
				"sap.ui5": {
					"_version": "1.0.0",
					"dependencies": {
						"minUI5Version": "1.49.0",
						"libs": {
							"sap.ui.core": {
								"minVersion": "1.49.0"
							}
						}
					},
					"models": {
						"ODataV2Consumption": {
							"dataSource": "ODataV2Consumption",
							"settings" : {
								"autoExpandSelect" : false,
								"operationMode" : "Server"
							},
							"type" : "sap.ui.model.odata.v4.ODataModel"
						}
					}
				}
			}
		}
	});
});
