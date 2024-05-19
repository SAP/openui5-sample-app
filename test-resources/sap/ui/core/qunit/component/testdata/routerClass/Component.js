/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	// new Component
	const RouterClassComponent = UIComponent.extend("sap.ui.test.routerClass.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});

	RouterClassComponent._fnGetRouterClassName = function(oManifest) {
		window._oHookSpy?.call(this, oManifest);
		const oAppComponentEntry = oManifest.getEntry("/sap.ui.generic.app");

		if (oAppComponentEntry) {
			if (oAppComponentEntry?.settings?.flexibleColumnLayout) {
				return "sap.f.routing.Router";
			} else {
				return "sap.m.routing.Router";
			}
		}

		return null;
	};

	return RouterClassComponent;
});
