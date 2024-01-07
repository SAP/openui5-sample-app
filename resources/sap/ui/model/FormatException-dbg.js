/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.model.FormatException
sap.ui.define(['sap/ui/base/Exception'],
	function(Exception) {
	"use strict";

	/**
	 * Creates a new FormatException.
	 *
	 * @param {string} message
	 *   A message explaining why the formatting of a value failed
	 *
	 * @alias sap.ui.model.FormatException
	 * @class
	 * @classdesc
	 *   Instances of this exception are thrown when converting a model value to its representation
	 *   on the UI fails.
	 *
	 * @public
	 * @see sap.ui.model.SimpleType#formatValue
	 */
	var FormatException = function (message) {
		this.name = "FormatException";
		this.message = message;
	};

	FormatException.prototype = Object.create(Exception.prototype);

	return FormatException;
}, /* bExport= */ true);