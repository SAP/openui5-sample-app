/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 *
 *
 * Configuration handler for Filter state
 *
 * @internal
 * @private
 *
 */


sap.ui.define(["sap/m/upload/p13n/handlers/BaseConfigHandler"], function (BaseConfigHandler) {
	"use strict";

	const FilterConfigHandler = BaseConfigHandler.extend("sap.m.upload.p13n.handlers.FilterConfigHandler", {});

	const EVENT_NAME = "uploadSetTableFilterStateChange";

	FilterConfigHandler.getEventName = function () {
		return EVENT_NAME;
	};

	FilterConfigHandler.prototype.modifyState = function (oPayload, oExistingConfig) {
		const oContent = oPayload.content,
			sAggregation = oContent.targetAggregation,
			oConfig = oExistingConfig || {};

		oConfig.properties ??= {};
		oConfig.properties[sAggregation] ??= {};

		if (oContent.deleted) {
			oContent.deleted.forEach((oEntry) => {
				if (oConfig.properties[sAggregation][oEntry.key]) {
					delete oConfig.properties[sAggregation][oEntry.key];
				}
			});
		}
		if (oContent.moved) {
			oContent.moved.forEach((oEntry) => {
				oConfig.properties[sAggregation][oEntry.key] = {
					key: oEntry.key,
					index: oEntry.index,
					path: oEntry.path,
					operator: oEntry.operator,
					value: oEntry.value
				};
			});
		}
		if (oContent.inserted) {
			oContent.inserted.forEach((oEntry) => {
				oConfig.properties[sAggregation][oEntry.key] = {
					key: oEntry.key,
					index: oEntry.index,
					path: oEntry.path,
					operator: oEntry.operator,
					value: oEntry.value
				};
			});
		}

		return oConfig;
	};

	return FilterConfigHandler;
});
