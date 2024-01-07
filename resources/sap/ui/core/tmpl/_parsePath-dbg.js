/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function() {
	"use strict";

	/**
	 * Parses the given path and extracts the model and path
	 *
	 * @param {string} sPath the path
	 * @return {object} the model and the path
	 */
	return function(sPath) {
		// TODO: wouldn't this be something central in ManagedObject?

		// parse the path
		var sModelName,
			iSeparatorPos = sPath.indexOf(">");

		// if a model name is specified in the binding path
		// we extract this binding path
		if (iSeparatorPos > 0) {
			sModelName = sPath.substr(0, iSeparatorPos);
			sPath = sPath.substr(iSeparatorPos + 1);
		}

		// returns the path information
		return {
			path: sPath,
			model: sModelName
		};
	};
});
