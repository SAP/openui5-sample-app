/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/core/Core",
	"sap/ui/core/sample/common/Helper",
	"sap/ui/core/sample/odata/v4/DataAggregation/tests/expandPageCollapse",
	"sap/ui/core/sample/odata/v4/DataAggregation/tests/filter",
	"sap/ui/test/opaQunit",
	"sap/ui/core/sample/odata/v4/DataAggregation/SandboxModel" // preload only
], function (Core, Helper, expandPageCollapse, filter, opaTest) {
	"use strict";

	Core.ready().then(function () {
		Helper.qUnitModule("sap.ui.core.sample.odata.v4.DataAggregation");

		["", "true", "false"].forEach(function (sGrandTotalAtBottomOnly) {
			["", "true", "false"].forEach(function (sSubtotalsAtBottomOnly) {
				var sTitle = "expand, page, collapse"
						+ "; grand total at bottom only: " + sGrandTotalAtBottomOnly
						+ "; subtotals at bottom only: " + sSubtotalsAtBottomOnly;

				//*****************************************************************************
				opaTest(sTitle, expandPageCollapse.bind(null,
					sGrandTotalAtBottomOnly, sSubtotalsAtBottomOnly, ""));
			});
		});

		//*****************************************************************************
		opaTest("filter", filter);

		//*****************************************************************************
		opaTest("expand, page, collapse w/ leaf count", expandPageCollapse.bind(null,
			"", "", "true"));

		QUnit.start();
	});
});
