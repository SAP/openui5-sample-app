module.exports = function(config) {
	"use strict";

	config.set({

		frameworks: ["ui5"],

		browsers: ["Chrome"],

		browserConsoleLogOptions: {
			level: "error"
		}

	});
};
