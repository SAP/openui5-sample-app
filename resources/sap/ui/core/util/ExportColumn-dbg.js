/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.core.util.ExportColumn
sap.ui.define([
	'sap/ui/base/ManagedObject',
	'./ExportCell' // convenience dependency for legacy code that uses global names
],
	function(ManagedObject) {
	'use strict';

	/**
	 * Constructor for a new ExportColumn.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Can have a name and a cell template.
	 * @extends sap.ui.base.ManagedObject
	 *
	 * @author SAP SE
	 * @version 1.121.0
	 * @since 1.22.0
	 *
	 * @public
	 * @deprecated Since version 1.73
	 * @alias sap.ui.core.util.ExportColumn
	 */
	var ExportColumn = ManagedObject.extend("sap.ui.core.util.ExportColumn", {
		metadata: {
			library: "sap.ui.core",
			properties: {
				/**
				 * Column name.
				 */
				name: "string"
			},
			aggregations: {
				/**
				 * Cell template for column.
				 */
				template: {
					type: "sap.ui.core.util.ExportCell",
					multiple: false
				}
			}
		}
	});

	return ExportColumn;

});
