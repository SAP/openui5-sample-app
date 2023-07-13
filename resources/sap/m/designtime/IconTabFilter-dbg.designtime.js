/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.IconTabBar control
sap.ui.define([],
	function () {
		"use strict";

		return {
			palette: {
				group: "CONTAINER",
				icons: {
					svg: "sap/m/designtime/IconTabFilter.icon.svg"
				}
			},
			actions: {
				rename: function (oPage) {
					return {
						changeType: "rename",
						domRef: function (oControl) {
							return oControl.$().find(".sapMITBText")[0];
						}
					};
				}
			},
			aggregations: {
				content: {
					domRef: function(oControl) {
						var oIconTabHeader = oControl.getParent(),
							oIconTabBar = oIconTabHeader && oIconTabHeader.getParent(),
							aContent = oControl.getContent() || [];

						if (oIconTabHeader.oSelectedItem === oControl && aContent.length > 0 && oIconTabBar) {
							return oIconTabBar.getDomRef("content");
						}
					},
					actions: {
						move: "moveControls"
					}
				}
			}
		};

	});