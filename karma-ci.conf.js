// @ts-nocheck - Ignore Karma config, see https://github.com/karma-runner/karma/issues/3329
module.exports = function(config) {
	"use strict";

	require("./karma.conf")(config);

	if (!process.env.CHROME_BIN) {
		// If no Chrome installation is provided by the environment. Use the one installed by puppeteer
		process.env.CHROME_BIN = require("puppeteer").executablePath();
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

		browsers: ["CustomChromeHeadlessNoSandbox"],

		singleRun: true

	});
};
