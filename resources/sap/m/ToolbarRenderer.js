/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BarInPageEnabler"],function(e){"use strict";var t={apiVersion:2};t.render=e.prototype.render;t.writeAccessibilityState=function(e,t){var i={},s=t.assignAccessibilityState(i);if(!Object.keys(s).length){e.accessibilityState(null)}else{e.accessibilityState(t,s)}};t.decorateRootElement=function(e,t){var i=t.getActive();if(i){e.class("sapMTBActive")}else{this.writeAccessibilityState(e,t);e.class("sapMTBInactive")}e.class("sapMTB");e.class("sapMTBNewFlex");e.class("sapMTB"+t.getStyle());e.class("sapMTB-"+t.getActiveDesign()+"-CTX");e.style("width",t.getWidth());e.style("height",t.getHeight())};t.renderBarContent=function(t,i){if(i.getActive()){t.renderControl(i._getActiveButton())}i.getContent().forEach(function(s){e.addChildClassTo(s,i);t.renderControl(s)})};t.shouldAddIBarContext=function(e){return false};return t},true);
//# sourceMappingURL=ToolbarRenderer.js.map