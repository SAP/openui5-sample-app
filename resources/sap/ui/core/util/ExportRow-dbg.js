/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.core.util.ExportRow
sap.ui.define([
	'sap/ui/base/ManagedObject',
	'./ExportCell' // convenience dependency for legacy code that uses global names
],
	function(ManagedObject) {
	'use strict';

	/**
	 * Constructor for a new ExportRow.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Internally used in {@link sap.ui.core.util.Export Export}.
	 * @extends sap.ui.base.ManagedObject
	 *
	 * @author SAP SE
	 * @version 1.128.0
	 * @since 1.22.0
	 *
	 * @public
	 * @deprecated As of version 1.73, replaced by the export functionality of the <code>sap.ui.export</code> library.
	 * @alias sap.ui.core.util.ExportRow
	 */
	var ExportRow = ManagedObject.extend("sap.ui.core.util.ExportRow", {
		metadata: {
			library: "sap.ui.core",
			aggregations: {
				/**
				 * Cells for the Export.
				 */
				cells: {
					type: "sap.ui.core.util.ExportCell",
					multiple: true
				}
			}
		}
	});

	return ExportRow;

});
