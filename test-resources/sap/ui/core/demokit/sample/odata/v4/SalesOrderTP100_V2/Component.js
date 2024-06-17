/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @fileOverview Application component: Consumption of an OData V2 Service via an OData V4 data
 * model.
 * @version @version@
 */
sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.core.sample.odata.v4.SalesOrderTP100_V2.Component", {
		metadata : {
			interfaces : ["sap.ui.core.IAsyncContentCreation"],
			manifest : "json"
		}
	});
});
