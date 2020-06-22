module.exports = function(config) {
	"use strict";

	require("./karma.conf")(config);

	var isPiper = false; // TODO: Detect piper execution via environment variable or parameter
	var browser = "ChromeRemote"; // Piper provides a Selenium grid to connect to
	if (!isPiper) {
		// If not executed in Piper, use Chrome installation provided by puppeteer
		process.env.CHROME_BIN = require("puppeteer").executablePath();
		browser = "ChromeHeadless";
	}

	config.set({

		preprocessors: {
			"{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: "html",
					dir: "coverage"
				},
				{
					type: "text"
				}
			],
			check: {
				each: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100
				}
			}
		},

		reporters: ["progress", "coverage"],

		browsers: [browser],

		singleRun: true

	});
};
