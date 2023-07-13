/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/core/sample/common/Helper",
		"sap/ui/core/sample/odata/v4/RecursiveHierarchy/pages/Main",
		"sap/ui/core/sample/odata/v4/RecursiveHierarchy/tests/pageExpandCollapse",
		"sap/ui/test/opaQunit"
	], function (Helper, Main, pageExpandCollapse, opaTest) {
		Helper.qUnitModule("sap.ui.core.sample.odata.v4.RecursiveHierarchy");

		//*****************************************************************************
		[false, true].forEach(function (bTreeTable) {
			var sTitle = "page, expand, collapse; w/ TreeTable: " + bTreeTable;

			opaTest(sTitle, function (Given, When, Then) {
				Main.setTreeTable(bTreeTable);

				pageExpandCollapse(Given, When, Then);
			});
		});

		QUnit.start();
	});
});
