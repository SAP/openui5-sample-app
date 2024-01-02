/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/*global QUnit */
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/core/Core",
	"sap/ui/core/sample/common/pages/Any",
	"sap/ui/core/internal/samples/odata/twoFields/tests/pages/Main",
	"sap/ui/core/internal/samples/odata/twoFields/tests/All"
], function (Core) {
	"use strict";
	Core.ready().then(function () {
		QUnit.start();
	});
});
