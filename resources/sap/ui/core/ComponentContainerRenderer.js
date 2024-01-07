/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var i=t.getComponentInstance();var n=t.getWidth();var r=t.getHeight();e.openStart("div",t);e.style("width",n);e.style("height",r);e.class("sapUiComponentContainer");e.openEnd();e.openStart("div",t.getId()+"-uiarea");if(n&&n!=="auto"){e.style("width","100%")}if(r&&r!=="auto"){e.style("height","100%")}e.openEnd();if(i){i.render(e)}e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=ComponentContainerRenderer.js.map