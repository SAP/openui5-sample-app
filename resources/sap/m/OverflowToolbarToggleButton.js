/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/ToggleButton","sap/m/ToggleButtonRenderer"],function(e,t){"use strict";var o=e.extend("sap.m.OverflowToolbarToggleButton",{renderer:t});o.prototype._getText=function(){return this._bInOverflow?e.prototype._getText.call(this):""};return o});
//# sourceMappingURL=OverflowToolbarToggleButton.js.map