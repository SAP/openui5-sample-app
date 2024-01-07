/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var n={apiVersion:2};n.renderAvatar=function(n,e){var r=e.getAggregation("_avatar"),a=e.mBindingInfos,i=e.shouldShowIcon();if(i&&(!e.isPropertyInitial("iconSrc")||!e.isPropertyInitial("iconInitials"))){n.openStart("div").class("sapFCardHeaderImage").openEnd();if(a.iconSrc&&a.iconSrc.binding&&!a.iconSrc.binding.getValue()){r.addStyleClass("sapFCardHeaderItemBinded")}n.renderControl(r);n.renderControl(e._oAriaAvatarText);n.close("div")}};n.renderBanner=function(n,e){const r=e.getBannerLines()||[];const a=r.filter(n=>n.getVisible());if(!a.length){return}n.openStart("div").class("sapFCardHeaderBanner").openEnd();n.openStart("div").class("sapFCardHeaderBannerInner").openEnd();r.forEach(e=>{n.openStart("div").class("sapFCardHeaderBannerLine").openEnd();n.renderControl(e);n.close("div")});n.close("div");n.close("div")};return n},true);
//# sourceMappingURL=BaseHeaderRenderer.js.map