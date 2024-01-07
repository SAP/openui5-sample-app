/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/MenuButton","sap/m/MenuButtonRenderer","sap/ui/core/IconPool"],function(t,e,o){"use strict";var n=t.extend("sap.m.OverflowToolbarMenuButton",{renderer:e});n.prototype.getText=function(){if(this._bInOverflow){return t.prototype.getText.call(this)}return""};n.prototype.getTooltip=function(){var e=t.prototype.getTooltip.call(this);if(this._bInOverflow){return this.getText()===e?"":e}if(e){return e}var n=o.getIconInfo(this.getIcon());if(n){e=n.text?n.text:n.name}return e};n.prototype._updateButtonControl=function(){this._getButtonControl().setTooltip(this.getTooltip());this._getButtonControl().setText(this.getText())};return n});
//# sourceMappingURL=OverflowToolbarMenuButton.js.map