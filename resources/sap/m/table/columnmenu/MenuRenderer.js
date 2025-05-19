/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,n){e.openStart("div",n);e.class("sapMTCMenu");e.openEnd();const t=n._getAllEffectiveQuickActions().length>0;if(t){this.renderQuickActions(e,n)}const r=n._getAllEffectiveItems().length>0;if(r){this.renderItems(e,n)}if(!t&&!r){e.renderControl(n._oIllustratedMessage)}e.close("div")};e.renderQuickActions=function(e,n){e.openStart("div");if(n._oItemsContainer){if(n._oItemsContainer.getCurrentViewKey()==="$default"){e.class("sapMTCMenuQAList")}else{e.class("sapMTCMenuQAListHidden")}}else{e.class("sapMTCMenuQAList")}e.attr("role","region");e.openEnd();e.renderControl(n._oQuickSortList);e.renderControl(n._oQuickFilterList);e.renderControl(n._oQuickGroupList);e.renderControl(n._oQuickAggregateList);e.renderControl(n._oQuickGenericList);e.close("div")};e.renderItems=function(e,n){e.openStart("div");e.class("sapMTCMenuContainerWrapper");e.openEnd();e.renderControl(n._oItemsContainer);e.close("div")};return e});
//# sourceMappingURL=MenuRenderer.js.map