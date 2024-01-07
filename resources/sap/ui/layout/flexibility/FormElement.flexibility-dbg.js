/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/*global sap */

sap.ui.define([
	"sap/ui/layout/changeHandler/RenameFormElement"
], function (RenameFormElement) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"renameField": RenameFormElement
	};
}, /* bExport= */true);