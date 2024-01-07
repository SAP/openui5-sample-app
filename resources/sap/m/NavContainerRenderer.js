/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/InvisibleRenderer"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,r){r._bRenderingInProgress=true;if(!r.getVisible()){e.render(t,r,"div");return false}var i=r.getHeight(),n=r.getTooltip_AsString(),s=r.getCurrentPage();t.openStart("div",r);t.class("sapMNav");t.style("width",r.getWidth());if(i&&i!="100%"){t.style("height",i)}if(this.renderAttributes){this.renderAttributes(t,r)}if(n){t.attr("title",n)}t.openEnd();if(this.renderBeforeContent){this.renderBeforeContent(t,r)}r.getPages().forEach(function(e){if(e===s){s.removeStyleClass("sapMNavItemHidden");t.renderControl(s)}else{t.cleanupControlWithoutRendering(e)}});t.close("div");r._bRenderingInProgress=false};return t},true);
//# sourceMappingURL=NavContainerRenderer.js.map