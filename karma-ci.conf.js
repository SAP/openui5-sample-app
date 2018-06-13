// Karma configuration
// Generated on Wed Jun 13 2018 14:38:44 GMT+0200 (CEST)

module.exports = function(config) {
	require("./karma.conf")(config);
	config.set({

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'{webapp,webapp/!(test)}/*.js': ['coverage']
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: 'html',
					dir: '../coverage/'
				},
				{
					type: 'text'
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

		client: {
			qunit: {
				showUI: false
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

	});
};
