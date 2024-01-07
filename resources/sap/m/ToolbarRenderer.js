/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BarInPageEnabler"],function(e){"use strict";var t={apiVersion:2};t.render=e.prototype.render;t.writeAccessibilityState=function(e,t){var s={},i=t.assignAccessibilityState(s);if(!Object.keys(i).length){e.accessibilityState(null)}else{e.accessibilityState(t,i)}};t.decorateRootElement=function(e,t){var s=t.getActive();if(s){e.class("sapMTBActive")}else{this.writeAccessibilityState(e,t);e.class("sapMTBInactive")}e.class("sapMTB");e.class("sapMTBNewFlex");e.class("sapMTB"+t.getStyle());e.class("sapMTB-"+t.getActiveDesign()+"-CTX");e.style("width",t.getWidth());e.style("height",t.getHeight())};t.renderBarContent=function(t,s){var i=null;if(s.getActive()){t.renderControl(s._getActiveButton())}s.getContent().forEach(function(a){e.addChildClassTo(a,s);if(!i&&a.getVisible()){a.addStyleClass("sapMBarChildFirstChild");i=a}else{a.removeStyleClass("sapMBarChildFirstChild")}t.renderControl(a)})};t.shouldAddIBarContext=function(e){return false};return t},true);
//# sourceMappingURL=ToolbarRenderer.js.map