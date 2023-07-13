/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var r={apiVersion:2};var n="sapMMsgView";r.render=function(r,i){var a=e.getLibraryResourceBundle("sap.m");r.openStart("div",i);r.class(n);r.accessibilityState(i,{role:"region",label:a.getText("MESSAGE_VIEW_ARIA_LABEL")});r.openEnd();r.renderControl(i._navContainer);r.close("div")};return r},true);
//# sourceMappingURL=MessageViewRenderer.js.map