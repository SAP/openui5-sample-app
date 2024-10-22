/* global QUnit */

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App"
], (opaTest) => {
	"use strict";

	QUnit.module("Todo List");

	opaTest("should add an item", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test");

		// Assertions
		Then.onTheAppPage.iShouldSeeTheItemBeingAdded(3, "my test");

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should remove a completed item", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("my test");

		// Assertions
		Then.onTheAppPage.iShouldSeeAllButOneItemBeingRemoved("my test");

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should select an item", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectTheLastItem(true);

		// Assertions
		Then.onTheAppPage.iShouldSeeTheLastItemBeingCompleted(true);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should unselect an item", (Given, When, Then) => {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectTheLastItem(true)
			.and.iSelectTheLastItem(false);

		// Assertions
		Then.onTheAppPage.iShouldSeeTheLastItemBeingCompleted(false);

		// Cleanup
		Then.iTeardownMyApp();
	});
});
