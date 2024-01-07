/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ButtonRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var i=t.extend(e);i.apiVersion=2;i.renderAccessibilityAttributes=function(e,t){if(t.getTabIndex()){e.attr("tabindex",t.getTabIndex())}if(t.getAriaHidden()){e.attr("aria-hidden",t.getAriaHidden())}if(t.getAriaHaspopup()){e.attr("aria-haspopup",t.getAriaHaspopup())}};return i},true);
//# sourceMappingURL=AccButtonRenderer.js.map