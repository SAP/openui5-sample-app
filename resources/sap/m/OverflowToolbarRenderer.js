/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Renderer","./ToolbarRenderer","sap/m/BarInPageEnabler"],function(e,r,t,n){"use strict";var o=e.OverflowToolbarPriority;var l=r.extend(t);l.apiVersion=2;l.renderBarContent=function(e,r){var t=false,i;if(r.getActive()){e.renderControl(r._getActiveButton())}r._getVisibleContent().forEach(function(l){n.addChildClassTo(l,r);if(r._getControlPriority(l)!==o.AlwaysOverflow){e.renderControl(l)}else{t=t||l.getVisible()}});if(t||r._getOverflowButtonNeeded()){l.renderOverflowButton(e,r)}i=r.getContent().some(function(e){return e.getVisible()});if(i){l.renderOverflowButtonClone(e,r)}};l.renderOverflowButton=function(e,r){var t=r._getOverflowButton();n.addChildClassTo(t,r);e.renderControl(t)};l.renderOverflowButtonClone=function(e,r){var t=r._getOverflowButtonClone();n.addChildClassTo(t,r);e.renderControl(t)};return l},true);
//# sourceMappingURL=OverflowToolbarRenderer.js.map