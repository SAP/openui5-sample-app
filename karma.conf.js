/* eslint-env node */
"use strict";
module.exports = function(config) {
	const chromeFlags = [
		"--window-size=1280,1024"
	];

	config.set({

		frameworks: ["ui5"],

		browsers: ["CustomChrome"],

		browserConsoleLogOptions: {
			level: "error"
		},

		customLaunchers: {
			CustomChrome: {
				base: "Chrome",
				flags: chromeFlags
			},
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: chromeFlags
			}
		},

	});
};
