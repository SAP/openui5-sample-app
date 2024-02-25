/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";var n={apiVersion:2};var r="sapMMsgView";n.render=function(n,t){var i=e.getResourceBundleFor("sap.m");n.openStart("section",t);n.class(r);n.accessibilityState(t,{label:i.getText("MESSAGE_VIEW_ARIA_LABEL")});n.openEnd();n.renderControl(t._navContainer);n.close("section")};return n},true);
//# sourceMappingURL=MessageViewRenderer.js.map