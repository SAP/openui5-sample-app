/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";return{apiVersion:2,render:function(r,t){var n=e.getResourceBundleFor("sap.f");r.openStart("div",t);r.attr("role","menu");r.attr("aria-label",n.getText("PRODUCTSWITCH_CONTAINER_LABEL"));r.openEnd();r.renderControl(t._getGridContainer());r.close("div")}}},true);
//# sourceMappingURL=ProductSwitchRenderer.js.map