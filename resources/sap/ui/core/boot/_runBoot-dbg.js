/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Require boot.js asynchronous. Actually this is not possible as bundle
 * configuration so a helper is needed for now.
 * @private
 * @ui5-restricted sap.base, sap.ui.core
 */
(function() {
    "use strict";
	sap.ui.require(["sap/ui/core/boot"]);
})();