/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.unified.Shell
sap.ui.define(['sap/ui/core/Renderer', './ShellLayoutRenderer'],
	function(Renderer, ShellLayoutRenderer) {
	"use strict";


	/**
	 * Renderer for the sap.ui.unified.Shell
	 * @namespace
	 * @deprecated As of version 1.44.0, the concept has been discarded.
	 */
	var ShellRenderer = Renderer.extend(ShellLayoutRenderer);


	return ShellRenderer;

}, /* bExport= */ true);
