QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async function (Core) {
	"use strict";

	await Core.ready();
	sap.ui.require(["sap/ui/demo/todo/test/unit/unitTests.qunit"], () =>
		QUnit.start()
	);
});
