/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.f.Avatar control
sap.ui.define([
	"sap/ui/thirdparty/jquery",
	"sap/m/designtime/Avatar.designtime"],
	function (jQuery, mAvatarDesignTime) {
		"use strict";

		return jQuery.extend(mAvatarDesignTime, {
			templates: {
				create: "sap/f/designtime/Avatar.create.fragment.xml"
			}
		});
	});