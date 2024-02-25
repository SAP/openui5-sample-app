/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(t){"use strict";var r={apiVersion:2};r.render=function(r,e){var i=t.Priority;r.openStart("div",e);r.class("sapMATC");r.openEnd();if(e.getPriority()!==i.None&&e.getPriorityText()){this._renderPriority(r,e)}this._renderContent(r,e);r.close("div")};r._renderPriority=function(t,r){var e=r.getPriorityText();t.openStart("div",r.getId()+"-priority-value");t.class("sapMTilePriorityValue");t.class(r.getPriority());t.openEnd();t.text(e);t.close("div")};r._renderContent=function(t,r){t.openStart("div",r.getId()+"-contentContainer");t.class("sapMContainer");t.openEnd();r.getAttributes().forEach(function(r){t.renderControl(r)});t.close("div")};return r},true);
//# sourceMappingURL=ActionTileContentRenderer.js.map