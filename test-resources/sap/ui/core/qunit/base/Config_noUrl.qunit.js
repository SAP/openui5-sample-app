/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/*global QUnit */
QUnit.config.autostart = false;

globalThis.fnInit = () => {
	"use strict";

	sap.ui.require([
		"sap/base/config"
	], (BaseConfiguration) => {
		QUnit.module("Base Configuration");

		QUnit.test("Basic: Check getter for URL provider with config from meta tag noUrl", function(assert) {
			assert.expect(1);

			assert.strictEqual(BaseConfiguration.get({
				name: "sapUiFooBar",
				type: "string",
				defaultValue: "defaultValue",
				external: true
			}), "defaultValue", "BaseConfiguration.get for param 'sapUiFooBar' returns default value 'defaultValue'");
		});

		QUnit.start();
	});
};
