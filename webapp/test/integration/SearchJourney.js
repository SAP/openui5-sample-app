/* global QUnit */

sap.ui.define([
	"sap/ui/Device",
	"sap/ui/test/opaQunit",
	"./pages/App"
], (Device, opaTest) => {
	"use strict";

	QUnit.module("Search");

	if (Device.browser.mobile) {
		// Search functionality is currently not support on mobile devices
		return;
	}

	opaTest("should show correct item count after search (1)", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct item count after search (0)", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("there should not be an item for this search");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(0);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct item count after search and clearing the search", (Given, When, Then) => {

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

	opaTest("should show correct item count after search and active items filter", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
			.and.iFilterForItems("active");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct item count after search and completed items filter", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
			.and.iFilterForItems("completed");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(0);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct item count after search and all items filter", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
			.and.iFilterForItems("all");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

});
