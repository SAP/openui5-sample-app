/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/base/Log",
	"sap/ui/model/TreeBinding"
], function (Log, TreeBinding) {
	"use strict";
	/*global QUnit */

	//*********************************************************************************************
	QUnit.module("TreeBinding", {
		beforeEach : function () {
			this.oLogMock = this.mock(Log);
			this.oLogMock.expects("error").never();
			this.oLogMock.expects("warning").never();
		}
	});

	//*********************************************************************************************
	QUnit.test("getCount: default", function (assert) {
		// code under test
		assert.strictEqual(TreeBinding.prototype.getCount.call(), undefined);
	});
});