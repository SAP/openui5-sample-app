/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./StandardListItemRenderer", "sap/ui/core/Renderer"],
	function (StandardListItemRenderer, Renderer) {
		"use strict";


		/**
		 * MessageListItem renderer.
		 * @namespace
		 */
		var MessageListItemRenderer = Renderer.extend(StandardListItemRenderer);
		MessageListItemRenderer.apiVersion = 2;

		MessageListItemRenderer.renderTitle = function (oRm, oControl) {
			if (oControl.getActiveTitle()) {
				oRm.renderControl(oControl.getLink());
				oRm.renderControl(oControl.getLinkAriaDescribedBy());
			} else {
				StandardListItemRenderer.renderTitle.apply(this, arguments);
			}
		};

		return MessageListItemRenderer;

	}, /* bExport= */ true);
