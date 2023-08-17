module.exports = function(config) {
	"use strict";

	require("./karma.conf")(config);
	config.set({

		ui5: {
			logAssertions: true,
			logHTMLFilePath: false,
			testpage: "webapp/test/gherkin/gherkinTests.qunit.html"
		},

		cucumberReporter: {
			out: "report/cucumber.json"
		},

		reporters: ["progress", "cucumber"],

		browsers: ["CustomChromeHeadless"],

		singleRun: true

	});
};
