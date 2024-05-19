/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Initialization Code and shared classes of library sap.ui.testlib
 */
sap.ui.define([
	"sap/ui/core/library", // library dependencies
	"sap/ui/core/Core"
], function(coreLib, Core) {
	"use strict";

	// delegate further initialization of this library to the Core
	return Core.initLibrary({
		name : "sap.ui.testlib",
		apiVersion:2,
		dependencies : ["sap.ui.core"],
		types: [
		],
		interfaces: [
		],
		controls: [
			"sap.ui.testlib.TestButton"
		],
		elements: [
		],
		version: "1.2.3"
	});
});
