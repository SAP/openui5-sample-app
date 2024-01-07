/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/*global sap */

sap.ui.define([
	"sap/ui/layout/changeHandler/RenameFormContainer",
	"sap/ui/layout/changeHandler/AddFormField"
], function (RenameFormContainer, AddFormField) {
	"use strict";

	return {
		"hideControl": "default",
		"renameGroup": RenameFormContainer,
		"moveControls": "default",
		"addFormField" : AddFormField

	};
}, /* bExport= */true);
