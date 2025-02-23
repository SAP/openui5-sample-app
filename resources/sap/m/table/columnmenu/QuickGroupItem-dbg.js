/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/library",
	"./QuickAction",
	"./QuickActionItem",
	"sap/m/Switch"
], function (
	library,
	QuickAction,
	QuickActionItem,
	Switch
) {
	"use strict";

	/**
	 * Constructor for a new <code>QuickGroupItem</code>.
	 *
	 * @param {string} [sId] ID for the new <code>QuickGroupItem</code>, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new <code>QuickGroupItem</code>
	 *
	 * @class
	 * The <code>QuickGroupItem</code> class is used for items for the <code>sap.m.table.columnmenu.QuickGroup</code>.
	 * It can be used to specify control- and application-specific items for grouping.
	 *
	 * @extends sap.m.table.columnmenu.QuickActionItem
	 *
	 * @author SAP SE
	 * @version 1.133.0
	 *
	 * @public
	 * @since 1.110
	 *
	 * @alias sap.m.table.columnmenu.QuickGroupItem
	 */
	var QuickGroupItem = QuickActionItem.extend("sap.m.table.columnmenu.QuickGroupItem", {

		metadata: {
			library: "sap.m",
			properties: {
				/**
				 * Specifies whether the respective column is grouped.
				 */
				grouped: { type: "boolean", defaultValue: false }
			}
		}
	});

	QuickGroupItem.prototype._getAction = function() {
		var sLabel = this.getLabel();
		var oQuickAction = new QuickAction({
			label: sLabel,
			content: [this.getContent()],
			category: library.table.columnmenu.Category.Group,
			contentSize: library.InputListItemContentSize.S
		});

		this.addDependent(oQuickAction);
		return oQuickAction;
	};

	QuickGroupItem.prototype.getContent = function() {
		if (!this._oContent) {
			this._oContent = new Switch({
				state: this.getGrouped(),
				customTextOn: " ",
				customTextOff: " ",
				change: [{item: this}, this._onGroupChange, this]
			});
		}
		return this._oContent;
	};

	/*
	 * @see JSDoc generated by SAPUI5 control API generator
	 */
	QuickGroupItem.prototype.setGrouped = function(bGrouped) {
		this.setProperty("grouped", bGrouped, true);
		this.getContent().setState(bGrouped);
		return this;
	};

	QuickGroupItem.prototype._onGroupChange = function (oEvent, mGroupInfo) {
		var bGrouped = oEvent.getSource().getState();
		this.setGrouped(bGrouped);
		this.getParent().onChange(mGroupInfo.item);
	};

	return QuickGroupItem;
});