/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/core/mvc/Controller"
], function(UIComponent) {
	"use strict";

	// new Component
	const Component = UIComponent.extend("sap.ui.test.routerPreloading.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
		}
	});

	return Component;
});
