/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/core/sample/common/pages/Any",
		"sap/ui/core/sample/odata/v4/SalesOrders/pages/Main",
		"sap/ui/core/sample/odata/v4/SalesOrdersRTATest/pages/MainRTA",
		"sap/ui/core/sample/odata/v4/SalesOrdersRTATest/Opa.SalesOrderRTATestAdaptUI.qunit"
	], function () {
		QUnit.start();
	});
});
