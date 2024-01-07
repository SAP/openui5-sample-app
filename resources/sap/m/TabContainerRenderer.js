/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var n=e._getTabStrip(),o=e._getSelectedItemContent();t.openStart("div",e);t.class("sapMTabContainer");t.openEnd();if(n){t.renderControl(n)}t.openStart("div",e.getId()+"-containerContent");t.class("sapMTabContainerContent");if(e.getBackgroundDesign()){t.class("sapMTabContainerContent"+e.getBackgroundDesign())}t.openEnd();t.openStart("div",this.getContentDomId(e));t.class("sapMTabContainerInnerContent");t.accessibilityState(e,this.getTabContentAccAttributes(e));t.openEnd();if(o){o.forEach(function(e){t.renderControl(e)})}t.close("div");t.close("div");t.close("div")};t.getTabContentAccAttributes=function(t){var e=t.getSelectedItem(),n,o={role:"tabpanel"};if(e){n=t._toTabStripItem(e);if(n){o["labelledby"]=n.getId()}}return o};t.getContentDomId=function(t){return t.getId()+"-content"};return t},true);
//# sourceMappingURL=TabContainerRenderer.js.map