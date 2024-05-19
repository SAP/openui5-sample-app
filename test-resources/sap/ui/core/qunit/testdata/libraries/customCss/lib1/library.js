/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Initialization Code and shared classes of library testlibs.customCss.lib1
 */
sap.ui.define([
	"sap/ui/core/Lib",
	"sap/ui/core/library" // library dependencies
], function(Library) {
	"use strict";

	return Library.init({
		name : "testlibs.customCss.lib1",
		apiVersion: 2,
		dependencies : ["sap.ui.core"],
		version: "1.2.3"
	});
});
