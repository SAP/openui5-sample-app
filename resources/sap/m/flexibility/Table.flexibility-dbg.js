/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/MoveTableColumns",
	"sap/m/changeHandler/AddTableColumn",
	"sap/m/flexibility/EngineFlex"
], function (MoveTableColumns, AddTableColumn, EngineFlex) {
	"use strict";

	return Object.assign(EngineFlex, {
		"hideControl": "default",
		"unhideControl": "default",
		"moveTableColumns": MoveTableColumns,
		"addTableColumn": AddTableColumn
	});
}, /* bExport= */ true);