/*
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.test.v4models.sapSystem.Component
sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.test.v4models.sapSystem.Component", {
		interfaces: ["sap.ui.core.IAsyncContentCreation"],
		metadata: {
			manifest: "json"
		}
	});

});
