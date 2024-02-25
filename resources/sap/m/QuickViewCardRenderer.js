/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";var r={apiVersion:2};r.render=function(r,t){r.openStart("div",t).class("sapMQuickViewCard").accessibilityState({label:{value:e.getResourceBundleFor("sap.m").getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});r.openEnd();r.renderControl(t.getNavContainer());r.close("div")};return r},true);
//# sourceMappingURL=QuickViewCardRenderer.js.map