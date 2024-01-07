/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Adds support rules of the sap.ui.unified library to the support infrastructure.
 */
sap.ui.define(["sap/ui/support/library", "./rules/FileUploader.support"],
	function(SupportLib, FileUploaderSupport) {
	"use strict";

	return {
		name: "sap.ui.unified",
		niceName: "UI5 Main Library",
		ruleset: [
			FileUploaderSupport
		]
	};

}, true);