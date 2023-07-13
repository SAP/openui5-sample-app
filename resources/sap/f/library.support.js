/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 * Adds support rules of the sap.f library to the support infrastructure.
 */
sap.ui.define([
		"sap/ui/support/library",
		"./rules/Avatar.support",
		"./rules/DynamicPage.support"
	],
	function (SupportLib, AvatarSupport, DynamicPageSupport) {
		"use strict";

		return {
			name: "sap.f",
			niceName: "UI5 Fiori Library",
			ruleset: [AvatarSupport, DynamicPageSupport]
		};

	}, true);