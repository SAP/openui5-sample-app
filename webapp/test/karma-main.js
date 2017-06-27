(function (karma) {
	"use strict";

	// Prevent Karma from running prematurely.
	karma.loaded = function () {};

	sap.ui.getCore().attachInit(function() {
		sap.ui.require([
			"sap/ui/demo/todo/test/unit/allTests",
			"sap/ui/demo/todo/test/integration/AllJourneys"
		], function() {
			// Finally, start Karma to run the tests.
			karma.start();
		});
	});
})(window.__karma__)
