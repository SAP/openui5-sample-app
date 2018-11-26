/* global QUnit */

sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/demo/todo/test/integration/pages/App"
], function (opaTest) {
	"use strict";

	QUnit.module("Search");

	opaTest("should show correct item count after search (1)", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct item count after search (0)", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("there should not be an item for this search");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(0);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct item count after search and clearing the search", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
			.and.iEnterTextForSearchAndPressEnter("");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(2);

		// Cleanup
		Then.iTeardownMyApp();
	});

});
