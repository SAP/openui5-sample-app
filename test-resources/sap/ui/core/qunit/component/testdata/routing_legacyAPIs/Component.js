/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"../routing/RouterExtension",
	"sap/m/Button",
	"sap/ui/core/UIComponent",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/mvc/JSView"
], function(RouterExtension, Button, UIComponent, Controller, JSView) {
	"use strict";


	// new Component
	var Component = UIComponent.extend("testdata.routing_legacyAPIs.Component", {

		metadata : {
			routing : {
				config : {
					routerClass : RouterExtension,
					async: true
				},
				routes : [
					{
						name : "firstRoute",
						pattern : "first/{firstMandatoryParameter}"
					}
				],
				targets: {
					myTarget: {
						viewType : "XML"
					}
				}
			}
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this._oViewWhileInit = this.getRootControl();
		},

		createContent : function () {
			Controller.extend("testdata.routing_legacyAPIs.TestController", {});
			sap.ui.jsview("testdata.routing_legacyAPIs.TestView", {
				createContent : function() {
					return new Button();
				},
				getController : function() {
					return sap.ui.controller("testdata.routing_legacyAPIs.TestController");
				}
			});

			this._oViewWhileCreateContent = this.getRootControl();
			this.oView = sap.ui.jsview("testdata.routing_legacyAPIs.TestView");
			return this.oView;
		}
	});


	return Component;

});
