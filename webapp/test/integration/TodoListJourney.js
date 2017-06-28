/* global QUnit */

sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/demo/todo/test/integration/pages/App"
], function (opaTest) {
	"use strict";

	QUnit.module("Todo List");

	opaTest("should add an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartTheApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test");

		// Assertions
		Then.onTheAppPage.iShouldSeeTheItemBeingAdded(3, "my test").
			and.iTeardownTheApp();
	});

	opaTest("should remove a completed item", function (Given, When, Then) {

		// Arrangements
		Given.iStartTheApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("my test");

		// Assertions
		Then.onTheAppPage.iShouldSeeAllButOneItemBeingRemoved("my test").
			and.iTeardownTheApp();
	});

	opaTest("should select an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartTheApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectTheLastItem(true);

		// Assertions
		Then.onTheAppPage.iShouldSeeTheLastItemBeingCompleted(true).
			and.iTeardownTheApp();
	});

	opaTest("should unselect an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartTheApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectTheLastItem(true)
			.and.iSelectTheLastItem(false);

		// Assertions
		Then.onTheAppPage.iShouldSeeTheLastItemBeingCompleted(false).
			and.iTeardownTheApp();
	});

	opaTest("should show correct count for completed items", function (Given, When, Then) {

		// Arrangements
		Given.iStartTheApp();

		//Actions
		When.onTheAppPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("first")
			.and.iSelectTheLastItem(true)
			.and.iEnterTextForNewItemAndPressEnter("second")
			.and.iEnterTextForNewItemAndPressEnter("third")
			.and.iSelectTheLastItem(true);

		// Assertions
		Then.onTheAppPage.iShouldSeeItemLeftCount(1).
		and.iTeardownTheApp();
	});

});
