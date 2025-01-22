/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/base/security/encodeCSS"],function(e,t){"use strict";var i=e.GenericTileMode;var r=e.GenericTileScope;var n=e.FrameType;var o={apiVersion:2};o.render=function(e,i){var n=i.getTooltip_AsString(),o=i.getScope(),a=t("sapMSTScope"+o),s;e.openStart("div",i);if(i.getHeight()){e.style("height",i.getHeight())}if(i.getWidth()){e.style("width",i.getWidth())}e.class("sapMST");e.class(a);if(!this._bAnimationPause){e.class("sapMSTPauseIcon")}if(n){e.attr("title",n)}s=i.getTiles().length;e.attr("tabindex","0");e.attr("role","application");e.attr("aria-roledescription",i._oRb.getText("SLIDETILE"));if(s>1){e.class("sapMSTIndicatorVisible")}e.openEnd();i.getAggregation("_invisibleText");e.renderControl(i.getAggregation("_invisibleText"));if(s>1&&o===r.Display){this._renderPausePlayIcon(e,i);this._renderTilesIndicator(e,i)}this._renderTiles(e,i,s);if(o===r.Actions){this._renderActionsScope(e,i)}e.openStart("div",i.getId()+"-focus");e.class("sapMSTFocusDiv");e.openEnd();e.close("div");e.close("div")};o._renderTiles=function(e,t,r){e.openStart("div");e.class("sapMSTOverflowHidden");e.attr("aria-hidden","true");e.openEnd();for(var o=0;o<r;o++){e.openStart("div",t.getId()+"-wrapper-"+o);e.class("sapMSTWrapper");if(t.getTiles()[o].getFrameType()===n.Stretch&&t.getTiles()[o].getMode()===i.ArticleMode){e.class("sapMGTTileStretch")}e.openEnd();e.renderControl(t.getTiles()[o]);e.close("div")}e.close("div")};o._renderTilesIndicator=function(e,t){var i=t.getTiles().length;e.openStart("div",t.getId()+"-tilesIndicator");e.class("sapMSTBulleted");e.class("sapUiSizeCompact");e.openEnd();e.renderControl(t._oLeftScroll);e.openStart("div",t.getId()+"-tilesWrapper");e.class("sapMSTIndicatorWrapper");e.openEnd();for(var r=0;r<i;r++){e.openStart("div",t.getId()+"-indicatorTap-"+r);e.class("sapMSTIndicatorTapArea");e.openEnd();e.openStart("span",t.getId()+"-tileIndicator-"+r);e.class("sapMSTIndicator");e.openEnd();e.close("span");e.close("div")}e.close("div");e.renderControl(t._oRightScroll);e.close("div")};o._renderPausePlayIcon=function(e,t){if(t.getTiles().length>1){e.openStart("div");e.class("sapMSTIconClickTapArea");e.openEnd();e.close("div");e.openStart("div");e.class("sapMSTIconDisplayArea");e.openEnd();e.close("div");e.openStart("div");e.class("sapMSTIconNestedArea");e.openEnd();e.renderControl(t.getAggregation("_pausePlayIcon"));e.close("div")}};o._renderActionsScope=function(e,t){e.renderControl(t._oRemoveButton);e.renderControl(t._oMoreIcon)};return o},true);
//# sourceMappingURL=SlideTileRenderer.js.map