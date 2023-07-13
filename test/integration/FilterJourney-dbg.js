/* global QUnit */

sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/demo/todo/test/integration/pages/App"
], function (opaTest) {
	"use strict";

	QUnit.module("Filter");

	opaTest("should show correct items when filtering for 'Active' items", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iFilterForItems("active");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct items when filtering for 'Completed' items", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iFilterForItems("completed");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct items when filtering for 'Completed' items and switch back to 'All'", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iFilterForItems("completed");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		//Actions
		When.onTheAppPage.iFilterForItems("all");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(2);

		// Cleanup
		Then.iTeardownMyApp();
	});

});
