module.exports = function(config) {
	config.set({

		basePath: 'webapp',

		frameworks: ['qunit', 'openui5'],

		openui5: {
			path: 'https://openui5nightly.hana.ondemand.com/resources/sap-ui-core.js'
		},

		client: {
			openui5: {
				config: {
					theme: 'sap_belize',
					language: 'EN',
					bindingSyntax: 'complex',
					compatVersion: 'edge',
					async: true,
					resourceroots: {'sap.ui.demo.todo': './base'}
				},
				tests: [
					'sap/ui/demo/todo/test/unit/AllTests',
					'sap/ui/demo/todo/test/integration/AllJourneys'
				]
			},
			clearContext: false,
			qunit: {
				showUI: true
			}
		},

		files: [
			{ pattern: '**', included: false, served: true, watched: true }
		],

		browserConsoleLogOptions: {
			level: 'error'
		},

		browsers: ['Chrome']

	});
};
