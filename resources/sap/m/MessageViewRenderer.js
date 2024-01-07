/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var r={apiVersion:2};var n="sapMMsgView";r.render=function(r,t){var a=e.getLibraryResourceBundle("sap.m");r.openStart("section",t);r.class(n);r.accessibilityState(t,{label:a.getText("MESSAGE_VIEW_ARIA_LABEL")});r.openEnd();r.renderControl(t._navContainer);r.close("section")};return r},true);
//# sourceMappingURL=MessageViewRenderer.js.map