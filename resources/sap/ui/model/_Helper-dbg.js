/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/base/security/encodeURL",
	"sap/base/util/deepEqual",
	"sap/base/util/extend",
	"sap/base/util/isPlainObject",
	"sap/base/util/merge"
], function (encodeURL, deepEqual, extend, isPlainObject, merge) {
	"use strict";

	/**
	 * @alias sap.ui.model._Helper
	 * @private
	 */
	var _Helper = {
		// Trampoline properties to allow for mocking in unit tests.
		// @see sap.base.(security|util).*
		deepEqual : deepEqual,
		encodeURL : encodeURL,
		extend : extend,
		isPlainObject : isPlainObject,
		merge : merge
	};

	return _Helper;
}, /* bExport= */false);
