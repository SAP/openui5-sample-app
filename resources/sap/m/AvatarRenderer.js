/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS"],function(e,a){"use strict";var t=e.AvatarSize;var s=e.AvatarType;var l={apiVersion:2};l.render=function(e,l){var r=l.getEnabled(),i=l.getInitials(),n=l._getActualDisplayType(),o=l._getImageFallbackType(),p=l.getDisplaySize(),c=l.getDisplayShape(),d=l.getImageFitType(),g=l.getCustomDisplaySize(),f=l.getCustomFontSize(),y=l._getAvatarSrc(),u="sapFAvatar",b=l.getTooltip_AsString(),I=l._getAriaLabelledBy(),S=l.getAriaDescribedBy(),v=l.getAriaHasPopup(),A=l.hasListeners("press"),C=A&&!l._bIsDefaultIcon&&l.getDetailBox()||A&&!l.getDetailBox(),h=C?l._getBadge():null,D=l._getDefaultTooltip(),_=i.length,m=l.getActive()&&C;e.openStart("span",l);e.class(u);e.class("sapFAvatarColor"+l._getActualBackgroundColor());e.class(u+p);e.class(u+n);e.class(u+c);if(m){e.class("sapMAvatarPressed")}if(r){if(C){e.class("sapMPointer");e.class(u+"Focusable");e.attr("role","button");e.attr("tabindex",0)}else if(l.getDecorative()){e.attr("role","presentation");e.attr("aria-hidden","true")}else{e.attr("role","img")}}else{e.attr("disabled","disabled");e.class("sapMAvatarDisabled")}if(l.getShowBorder()){e.class("sapFAvatarBorder")}if(p===t.Custom){e.style("width",g);e.style("height",g);e.style("font-size",f)}if(b){e.attr("title",b);e.attr("aria-label",b)}else if(i){e.attr("aria-label",D+" "+i)}else{e.attr("aria-label",D)}if(I&&I.length>0){e.attr("aria-labelledby",I.join(" "))}if(S&&S.length>0){e.attr("aria-describedby",S.join(" "))}if(v&&v!=="None"){e.attr("aria-haspopup",v.toLowerCase())}e.openEnd();if(n===s.Icon||o===s.Icon){e.renderControl(l._getIcon().addStyleClass(u+"TypeIcon"))}else if(n===s.Initials||o===s.Initials){if(_===3){e.renderControl(l._getIcon().addStyleClass(u+"TypeIcon").addStyleClass(u+"HiddenIcon"))}e.openStart("span");e.class(u+"InitialsHolder");e.openEnd();e.text(i);e.close("span")}if(n===s.Image){e.openStart("span");e.class(u+"ImageHolder");e.class(u+n+d);e.style("background-image","url('"+a(y)+"')");e.openEnd();e.close("span")}if(h){e.openStart("div");e.class(u+"BadgeIconActiveArea");if(g){e.style("font-size",g)}e.openEnd();e.openStart("span");e.class(u+"BadgeIcon");e.openEnd();e.renderControl(h);e.close("span");e.close("div")}e.close("span")};return l},true);
//# sourceMappingURL=AvatarRenderer.js.map