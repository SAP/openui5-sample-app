/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer',
		'./ListBaseRenderer'],
	function(Renderer,
			 ListBaseRenderer) {
		"use strict";

		/**
		 * NotificationList renderer.
		 * @namespace
		 *
		 */
		var NotificationListRenderer = Renderer.extend(ListBaseRenderer);
		NotificationListRenderer.apiVersion = 2;

		/**
		 * Returns the ARIA accessibility role.
		 *
		 * @param {sap.m.NotificationList} oControl An object representation of the control
		 * @returns {string}
		 */
		NotificationListRenderer.getAriaRole = function(oControl) {
			return "list";
		};

		return NotificationListRenderer;

	}, /* bExport= */ true);
