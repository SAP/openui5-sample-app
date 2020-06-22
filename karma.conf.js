module.exports = function(config) {
	"use strict";

	var chromeFlags = [
		"--window-size=1280,1024"
	];

	var chromeNoSandboxFlags = ["--no-sandbox"].unshift.apply(chromeFlags)

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
			},
			CustomChromeHeadlessNoSandbox: {
				base: "ChromeHeadless",
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
