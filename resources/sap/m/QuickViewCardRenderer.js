/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var r={apiVersion:2};r.render=function(r,a){r.openStart("div",a).class("sapMQuickViewCard").accessibilityState({label:{value:e.getLibraryResourceBundle("sap.m").getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});if(!a.getShowVerticalScrollBar()){r.class("sapMQuickViewCardNoScroll")}r.openEnd();r.renderControl(a.getNavContainer());r.close("div")};return r},true);
//# sourceMappingURL=QuickViewCardRenderer.js.map