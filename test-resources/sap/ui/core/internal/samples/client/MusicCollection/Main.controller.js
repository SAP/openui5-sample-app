/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.core.internal.samples.client.MusicCollection.Main", {
		onUpdateItemsCount : function () {
			var iCount,
				oItemsBinding = this.byId("treetable").getBinding("rows"),
				oUiModel = this.getView().getModel("ui");

			if (oItemsBinding) {
				iCount = oItemsBinding.getCount();
				oUiModel.setProperty("/itemsCount", iCount === undefined ? "??" : iCount);
			}
		}
	});
});