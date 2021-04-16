// @ts-nocheck - Ignore Karma config, see https://github.com/karma-runner/karma/issues/3329
module.exports = function(config) {
	"use strict";

	var chromeFlags = [
		"--window-size=1280,1024"
	];

	var chromeNoSandboxFlags = ["--no-sandbox"].concat(chromeFlags);

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
			CustomChromiumHeadlesssNoSandbox: {
				base: "ChromiumHeadless",
				flags: chromeNoSandboxFlags
			},
			ChromeRemote: {
				base: "WebDriver",
				browserName: "chrome",
				name: "Karma",
				pseudoActivityInterval: 30000,
				config: {
					hostname: "localhost",
					port: 4444
				}
			}
		},

	});
};
