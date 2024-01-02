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
	"sap/ui/core/mvc/View",
	"sap/ui/core/mvc/ViewType",
	"sap/ui/core/mvc/JSView"
], function(RouterExtension, Button, UIComponent, Controller, View, ViewType, JSView) {
	"use strict";

	// new Component
	var Component = UIComponent.extend("sap.ui.test.routing.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
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
		},

		createContent : function () {
			this._oViewWhileCreateContent = this.getRootControl();
			this.pView = View.create({
				viewName: "module:sap/ui/test/routing/TestView"
			});

			return this.pView;
		}
	});


	return Component;

});
