/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/base/future",
	"sap/base/Log"
], function(future, Log) {
	"use strict";

	function _enforceNoReturnValue(vResult, mLogInfo) {
		if (vResult !== undefined) {
			const sFunctionName = mLogInfo.name ? `'${mLogInfo.name}' ` : '';
			/**
			 * @deprecated
			 */
			if (typeof vResult.then === "function") {
				vResult.catch((err) => {
					Log.error(`The registered Event Listener ${sFunctionName}of '${mLogInfo.component}' failed.`, err);
				});
			}
			// for any return value other than 'undefined'
			future.fatalThrows(`${mLogInfo.component}: The registered Event Listener ${sFunctionName}must not have a return value.`);
		}
	}
	return _enforceNoReturnValue;
});
