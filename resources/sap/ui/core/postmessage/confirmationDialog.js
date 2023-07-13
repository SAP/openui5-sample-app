/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";return function(e){return new Promise(function(i,n){var o=sap.ui.getCore().getLoadedLibraries().hasOwnProperty("sap.m");if(o){sap.ui.require(["sap/m/MessageBox"],function(o){o.confirm(e,{actions:[o.Action.YES,o.Action.NO],onClose:function(e){if(e===o.Action.YES){i()}else{n()}}})},n)}else{var r=window.confirm(e);if(r){i()}else{n()}}})}});
//# sourceMappingURL=confirmationDialog.js.map