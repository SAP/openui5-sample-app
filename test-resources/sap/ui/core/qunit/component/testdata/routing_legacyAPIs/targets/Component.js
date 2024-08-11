/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/Button",
	"sap/ui/core/UIComponent",
	"sap/ui/core/mvc/Controller"
], function(Button, UIComponent, Controller) {
	"use strict";

	// new Component
	var Component = UIComponent.extend("testdata.routing_legacyAPIs.targets.Component", {

		metadata : {
			routing : {
				config : {
					targetsClass : "sap.m.routing.Targets",
					async: true
				},
				targets: {
					myTarget: {
						viewType : "XML"
					}
				}
			}
		},

		createContent : function () {
			Controller.extend("testdata.routing_legacyAPIs.targets.TestController", {});
			sap.ui.jsview("testdata.routing_legacyAPIs.targets.TestView", {
				createContent : function() {
					return new Button();
				},
				getController : function() {
					return sap.ui.controller("testdata.routing_legacyAPIs.targets.TestController");
				}
			});

			this.oView = sap.ui.jsview("testdata.routing_legacyAPIs.targets.TestView");
			return this.oView;
		}
	});


	return Component;

});
