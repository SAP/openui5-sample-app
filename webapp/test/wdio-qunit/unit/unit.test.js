/* global browser */
describe("QUnit test page", function () {
	"use strict";

	it("should pass unit tests", async function () {
		await browser.url("http://localhost:8080/test/wdio-qunit/unit/unitTests.qunit.html");
		await browser.getQUnitResults();
	});
});
