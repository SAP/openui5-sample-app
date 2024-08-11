/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.P13nSortItem.
sap.ui.define([
	'./library', 'sap/ui/core/Item'
], function(library, Item) {
	"use strict";

	/**
	 * Constructor for a new P13nSortItem.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] initial settings for the new control
	 * @class Type for <code>sortItems</code> aggregation in P13nSortPanel control.
	 * @extends sap.ui.core.Item
	 * @version 1.127.0
	 * @constructor
	 * @public
	 * @since 1.26.0
	 * @alias sap.m.P13nSortItem
     * @deprecated As of 1.120, replaced by the artifacts in {@link sap.m.p13n}.
	 */
	var P13nSortItem = Item.extend("sap.m.P13nSortItem", /** @lends sap.m.P13nSortItem.prototype */
		{
			metadata: {

				library: "sap.m",
				properties: {

					/**
					 * sap.m.P13nConditionOperation
					 */
					operation: {
						type: "string",
						group: "Misc",
						defaultValue: null
					},

					/**
					 * key of the column
					 */
					columnKey: {
						type: "string",
						group: "Misc",
						defaultValue: null
					}
				}
			}
		});

	P13nSortItem.prototype.setColumnKey = function(v) {
		return this.setProperty("columnKey", v, true);
	};

	P13nSortItem.prototype.setOperation = function(v) {
		return this.setProperty("operation", v, true);
	};

	return P13nSortItem;

});
