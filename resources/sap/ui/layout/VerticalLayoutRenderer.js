/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var i=t;i.openStart("div",e);i.class("sapUiVlt");i.class("sapuiVlt");if(e.getWidth()&&e.getWidth()!=""){i.style("width",e.getWidth())}i.openEnd();var n=e.getContent();for(var s=0;s<n.length;s++){i.openStart("div");i.class("sapUiVltCell");i.class("sapuiVltCell");i.openEnd();i.renderControl(n[s]);i.close("div")}i.close("div")};return t},true);
//# sourceMappingURL=VerticalLayoutRenderer.js.map