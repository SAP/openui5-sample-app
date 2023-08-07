/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(() => {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/todo/test/unit/AllTests"
	], () => QUnit.start());
});
