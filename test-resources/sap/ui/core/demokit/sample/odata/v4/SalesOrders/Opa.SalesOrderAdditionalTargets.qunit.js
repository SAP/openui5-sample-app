/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/sample/common/Helper",
	"sap/ui/core/sample/odata/v4/SalesOrders/tests/additionalTargets",
	"sap/ui/test/opaQunit"
], function (Helper, additionalTargets, opaTest) {
	"use strict";

	Helper.qUnitModule("sap.ui.core.sample.odata.v4.SalesOrders - Additional Targets");

	//*****************************************************************************
	opaTest("Additional targets", function (Given, When, Then) {
		additionalTargets(Given, When, Then);
	});
});
