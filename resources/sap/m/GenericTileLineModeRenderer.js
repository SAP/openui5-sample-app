/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","sap/m/library","sap/base/security/encodeCSS","sap/ui/thirdparty/jquery"],function(e,t,s,jQuery){"use strict";var n=t.GenericTileScope;var r=t.LoadState;var a={apiVersion:2};a.render=function(t,a){var o=a._getTooltipText(),i=a._isScreenLarge(),p=a._getAriaText(),c=a.getScope(),l,d=false,S=a.hasListeners("press"),f=a.getState(),g=a.getAriaRoleDescription(),h=a.getAriaRole();var T=a.getUrl()&&!a._isInActionScope()&&f!==r.Disabled;this._bRTL=e.getRTL();if(c===n.Actions){if(f!==r.Disabled){l=s("sapMGTScopeActions")}}else if(c===n.ActionMore||c===n.ActionRemove){d=true;if(f!==r.Disabled){l=s("sapMGTScopeSingleAction")}}else{l=s("sapMGTScopeDisplay")}if(T){t.openStart("a",a);t.attr("href",a.getUrl());t.attr("rel","noopener noreferrer")}else{t.openStart("span",a)}t.attr("aria-label",p);if(g){t.attr("aria-roledescription",g)}if(h){t.attr("role",h)}else if(!T){t.attr("role",S?"button":"presentation")}else{t.attr("role","link")}t.class("sapMGT");t.class(l);if(c===n.ActionMore){t.style("padding-right","3.3rem")}if(f!==r.Disabled&&c===n.ActionRemove){t.class("sapMGTAcionRemove")}t.class("sapMGTLineMode");if(a.getSystemInfo()||a.getAppShortcut()){t.class("sapMGTInfoRendered");if(!i){t.class("sapMGTLineModeSmall")}}this._writeDirection(t);if(o){t.attr("title",o)}if(f!==r.Disabled){if(!a.isInActionRemoveScope()){t.class("sapMPointer");t.style("pointer-events","auto")}t.attr("tabindex","0")}else{t.class("sapMGTDisabled")}if(f===r.Failed){t.class("sapMGTFailed")}t.openEnd();if(o){a.getAggregation("_invisibleText").setText(o);t.renderControl(a.getAggregation("_invisibleText"))}if(a.getState()!==r.Disabled){this._renderFocusDiv(t,a)}if(i){t.openStart("div",a.getId()+"-startMarker");t.class("sapMGTStartMarker");t.openEnd();t.close("div");this._renderFailedIcon(t,a);t.openStart("span",a.getId()+"-lineWrapper");t.class("sapMGTLineWrapper");t.openEnd();t.openStart("span",a.getId()+"-headerWrapper");t.class("sapMGTHeaderWrapper");t.openEnd();this._renderHeader(t,a);if(a.getSubheader()){this._renderSubheader(t,a)}t.close("span");if(a.getSystemInfo()||a.getAppShortcut()){this._renderInfoContainer(t,a)}t.close("span");t.openStart("div",a.getId()+"-endMarker");t.class("sapMGTEndMarker");t.openEnd();if(a._isInActionScope()){this._renderActionsScope(t,a,d)}t.close("div");t.openStart("div",a.getId()+"-styleHelper");t.class("sapMGTStyleHelper");t.openEnd();t.close("div")}else if(a.getSystemInfo()||a.getAppShortcut()){t.openStart("div",a.getId()+"-touchArea");t.class("sapMGTTouchArea");t.openEnd();this._renderFailedIcon(t,a);t.openStart("span",a.getId()+"-lineModeHelpContainer");t.class("sapMGTLineModeHelpContainer");t.openEnd();t.openStart("span",a.getId()+"-headerWrapper");t.class("sapMGTHeaderWrapper");t.openEnd();this._renderHeader(t,a);if(a.getSubheader()){this._renderSubheader(t,a)}t.close("span");if(a.getSystemInfo()||a.getAppShortcut()){this._renderInfoContainer(t,a)}t.close("span");if(a._isInActionScope()){this._renderActionsScope(t,a,d)}t.close("div")}else{t.openStart("div",a.getId()+"-touchArea");t.class("sapMGTTouchArea");t.openEnd();this._renderFailedIcon(t,a);t.openStart("span",a.getId()+"-lineModeHelpContainer");t.class("sapMGTLineModeHelpContainer");t.openEnd();this._renderHeader(t,a);if(a.getSubheader()){this._renderSubheader(t,a)}t.close("span");if(a._isInActionScope()){this._renderActionsScope(t,a,d)}t.close("div")}if(a._isInActionScope()&&a.getState()!==r.Disabled){t.renderControl(a._oRemoveButton)}if(T){t.close("a")}else{t.close("span")}};a._renderInfoContainer=function(e,t){e.openStart("span",t.getId()+"-sapMGTTInfoWrapper");e.class("sapMGTTInfoWrapper").openEnd();e.openStart("span",t.getId()+"-sapMGTTInfo");e.class("sapMGTTInfo");if(!(t.getSystemInfo()&&t.getAppShortcut())){e.class("sapMGTInfoNotContainsSeperator")}e.openEnd();if(t.getAppShortcut()){e.openStart("span",t.getId()+"-appShortcut");e.class("sapMGTAppShortcutText").openEnd();e.renderControl(t._oAppShortcut);e.close("span")}if(t.getSystemInfo()){this._renderSystemInfo(e,t)}e.close("span");e.close("span")};a._writeDirection=function(e){if(this._bRTL){e.attr("dir","rtl")}};a._renderSystemInfo=function(e,t){e.openStart("span",t.getId()+"-systemInfoText");this._writeDirection(e);e.class("sapMGTSystemInfoText");if(t.getSystemInfo()&&t.getAppShortcut()){e.class("sapMGTSeperatorPresent")}e.openEnd();e.text(t._oSystemInfo.getText());e.close("span")};a._renderFailedIcon=function(e,t){if(t.getState()===r.Failed){if(t._isCompact()){t._oErrorIcon.setSize("1.25rem")}else{t._oErrorIcon.setSize("1.375rem")}e.renderControl(t._oErrorIcon.addStyleClass("sapMGTLineModeFailedIcon"))}};a._renderHeader=function(e,t){e.openStart("span",t.getId()+"-hdr-text");this._writeDirection(e);e.class("sapMGTHdrTxt");e.openEnd();e.text(t._oTitle.getText());e.close("span")};a._renderSubheader=function(e,t){e.openStart("span",t.getId()+"-subHdr-text");this._writeDirection(e);e.class("sapMGTSubHdrTxt");e.openEnd();e.text(t._oSubTitle.getText());e.close("span")};a._renderActionsScope=function(e,t,s){if(t.getState()!==r.Disabled){e.openStart("span",t.getId()+"-actions");e.class("sapMGTActionsContainer");if(s){e.class("sapMGTScopeSingleActionContainer")}e.openEnd();e.renderControl(t._oMoreIcon);e.close("span")}};a._updateHoverStyle=function(){var e=this.$("styleHelper");e.empty();if(!this._oStyleData||this.$().is(":hidden")){return}if(this._oStyleData.rtl){e.css("right",-this._oStyleData.positionRight)}else{e.css("left",-this._oStyleData.positionLeft)}this._oStyleData.lines.forEach(function(t){var s=jQuery("<div class='sapMGTLineStyleHelper'><div class='sapMGTLineStyleHelperInner'></div></div>");if(this._oStyleData.rtl){s.css("right",t.offset.x+"px")}else{s.css("left",t.offset.x+"px")}s.css({top:t.offset.y+"px",width:t.width+"px"});e.append(s)},this)};a._renderFocusDiv=function(e,t){e.openStart("div",t.getId()+"-focus");e.class("sapMGTFocusDiv");e.openEnd();e.close("div")};a._getCSSPixelValue=function(e,t){var s=e instanceof jQuery?e:e.$(),n=(s.css(t)||"").match(/([^a-zA-Z\%]*)(.*)/),r=parseFloat(n[1]),a=n[2];return a==="px"?r:r*16};return a},true);
//# sourceMappingURL=GenericTileLineModeRenderer.js.map