/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @fileOverview Application component: Consumption of an OData V4 service.
 * @version @version@
 */
sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (XMLView, UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.core.sample.odata.v4.Sticky.Component", {
		metadata : {
			interfaces : ["sap.ui.core.IAsyncContentCreation"],
			manifest : "json"
		},

		createContent : function () {
			return XMLView.create({
				models : {
					undefined : this.getModel(),
					ui : new JSONModel({iMessages : 0, bSticky : false})
				},
				viewName : "sap.ui.core.sample.odata.v4.Sticky.Main"
			});
		}
	});
});
