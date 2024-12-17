/* global browser */
describe("QUnit test page", function () {
	"use strict";

	it("should pass OPA tests", async function () {
		await browser.url("http://localhost:8080/test/wdio-qunit/integration/opaTests.qunit.html");
		await browser.getQUnitResults();
	});
});
