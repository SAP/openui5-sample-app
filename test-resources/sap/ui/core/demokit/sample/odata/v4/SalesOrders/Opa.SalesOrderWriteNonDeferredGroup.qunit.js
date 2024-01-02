/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/sample/common/Helper",
	"sap/ui/core/sample/odata/v4/SalesOrders/tests/WriteNonDeferredGroup",
	"sap/ui/test/opaQunit",
	"sap/ui/test/TestUtils"
], function (Helper, WriteNonDeferredGroupTest, opaTest, TestUtils) {
	"use strict";

	Helper.qUnitModule("sap.ui.core.sample.odata.v4.SalesOrders - "
		+ "Write via application groups with SubmitMode.Auto/.Direct");

	if (!TestUtils.isRealOData()) {
		QUnit.skip("Test runs only with realOData=true");
		return;
	}

	//*****************************************************************************
	["myAutoGroup", "myDirectGroup"].forEach(function (sGroupId) {
		opaTest("POST/PATCH SalesOrder via group: " + sGroupId,
			WriteNonDeferredGroupTest.writeNonDeferredGroup.bind(null, sGroupId, ""));
	});
});
