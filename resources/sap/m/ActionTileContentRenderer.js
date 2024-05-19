/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(e){"use strict";var r={apiVersion:2};r.render=function(r,t){var i=e.Priority;var n=t.getHeaderLink();r.openStart("div",t);r.class("sapMATC");r.openEnd();if(n){this._renderHeaderLink(r,t)}if(t.getPriority()!==i.None&&t.getPriorityText()&&!n){this._renderPriority(r,t)}this._renderContent(r,t);r.close("div")};r._renderHeaderLink=function(e,r){e.openStart("div",r.getId()+"-header-link");e.class("sapMTilePriorityValue");e.openEnd();e.renderControl(r.getHeaderLink());e.close("div")};r._renderPriority=function(e,r){var t=r.getPriorityText();e.openStart("div",r.getId()+"-priority-value");e.class("sapMTilePriorityValue");e.class(r.getPriority());e.openEnd();e.text(t);e.close("div")};r._renderContent=function(e,r){e.openStart("div",r.getId()+"-contentContainer");e.class("sapMContainer");e.openEnd();r.getAttributes().forEach(function(r){e.renderControl(r)});e.close("div")};return r},true);
//# sourceMappingURL=ActionTileContentRenderer.js.map