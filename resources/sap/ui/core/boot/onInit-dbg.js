/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/base/config"
], function(
	config
) {
	"use strict";

	var aParts;
	var sInitModule = config.get({
		name: "sapUiOnInit",
		type: config.Type.String
	});

	if (sInitModule) {
		aParts = sInitModule.split("@");
		if (aParts.length > 1) {
			var mPaths = {};
			var sModulePath = /^.*[\/\\]/.exec(aParts[0])[0];
			sModulePath = sModulePath.substr(0, sModulePath.length - 1);
			mPaths[sModulePath] = aParts[1];
			sap.ui.loader.config({
				paths: mPaths
			});
		}
	}

	return {
		run: function() {
			var pOnInit = Promise.resolve();
			if (sInitModule) {
				pOnInit = new Promise(function(resolve, reject) {
					sap.ui.require([aParts[0]], resolve, reject);
				});
			}
			return pOnInit;
		}
	};
});