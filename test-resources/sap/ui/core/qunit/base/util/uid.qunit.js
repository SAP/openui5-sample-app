/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/*global QUnit */
sap.ui.define(['sap/base/util/uid'], function(uid) {
	"use strict";

	QUnit.module("sap.base.util.uid");

	QUnit.test("basic test", function(assert) {
		var myid = uid();
		assert.ok(myid);
	});
});