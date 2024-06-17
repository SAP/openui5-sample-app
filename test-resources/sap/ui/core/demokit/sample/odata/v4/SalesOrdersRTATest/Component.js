/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @fileOverview Extension of the sales orders app to test suspend/resume with UI adaptation at
 *   runtime.
 * @version @version@
 */
sap.ui.define([
	"sap/ui/core/sample/odata/v4/SalesOrders/Component"
], function (SalesOrdersComponent) {
	"use strict";

	return SalesOrdersComponent.extend("sap.ui.core.sample.odata.v4.SalesOrdersRTATest.Component", {
		metadata : {
			interfaces : ["sap.ui.core.IAsyncContentCreation"],
			manifest : "json"
		}
	});
});

