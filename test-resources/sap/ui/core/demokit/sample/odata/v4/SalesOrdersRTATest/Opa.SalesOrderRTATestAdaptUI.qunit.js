/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/sample/common/Helper",
	"sap/ui/core/sample/odata/v4/SalesOrdersRTATest/tests/AdaptSalesOrdersTable",
	"sap/ui/test/opaQunit"
], function (Helper, AdaptSalesOrdersTable, opaTest) {
	"use strict";

	Helper.qUnitModule("sap.ui.core.sample.odata.v4.SalesOrdersRTATest "
		+ "- Adapt UI SalesOrdersTable");

	//*****************************************************************************
	opaTest("Adapt UI SalesOrdersTable", function (Given, When, Then) {
		AdaptSalesOrdersTable.adaptSalesOrdersTable(Given, When, Then,
			"sap.ui.core.sample.odata.v4.SalesOrdersRTATest");
	});
});
