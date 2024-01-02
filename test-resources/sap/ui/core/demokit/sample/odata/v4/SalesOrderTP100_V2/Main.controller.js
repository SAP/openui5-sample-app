/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.core.sample.odata.v4.SalesOrderTP100_V2.Main", {
		onBeforeRendering : function () {
			this.byId("SalesOrdersTitle").setBindingContext(
				this.byId("SalesOrders").getBinding("items").getHeaderContext());
		},
		onSalesOrdersSelect : function (oEvent) {
			this.byId("SalesOrderItems").setBindingContext(
				oEvent.getParameters().listItem.getBindingContext());
		}
	});
});
