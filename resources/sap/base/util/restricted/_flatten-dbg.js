/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * See {@link https://lodash.com/docs/4.17.21#flatten}
 *
 * @function
 * @alias module:sap/base/util/restricted/_flatten
 * @author SAP SE
 * @since 1.80
 * @version 1.117.1
 * @private
 * @ui5-restricted
*/
sap.ui.define([
	"sap/base/util/restricted/_/lodash.custom"
], function(lodash) {
	"use strict";
	return lodash.flatten;
});