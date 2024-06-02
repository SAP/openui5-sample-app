/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseHeader","sap/m/library","sap/f/library","sap/m/Text","sap/m/Avatar","sap/f/cards/HeaderRenderer","sap/ui/core/InvisibleText"],function(t,e,i,a,s,r,n){"use strict";const p=e.AvatarShape;const l=e.AvatarColor;const o=e.AvatarImageFitType;const g=e.AvatarSize;var u=t.extend("sap.f.cards.Header",{metadata:{library:"sap.f",interfaces:["sap.f.cards.IHeader"],properties:{title:{type:"string",defaultValue:""},titleMaxLines:{type:"int",defaultValue:3},subtitle:{type:"string",defaultValue:""},subtitleMaxLines:{type:"int",defaultValue:2},statusText:{type:"string",defaultValue:""},iconDisplayShape:{type:"sap.m.AvatarShape",defaultValue:p.Circle},iconSrc:{type:"sap.ui.core.URI",defaultValue:""},iconInitials:{type:"string",defaultValue:""},iconAlt:{type:"string",defaultValue:""},iconBackgroundColor:{type:"sap.m.AvatarColor",defaultValue:l.Transparent},iconVisible:{type:"boolean",defaultValue:true},iconSize:{type:"sap.m.AvatarSize",defaultValue:g.S}},aggregations:{_title:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_subtitle:{type:"sap.m.Text",multiple:false,visibility:"hidden"},_avatar:{type:"sap.m.Avatar",multiple:false,visibility:"hidden"}},events:{press:{}}},renderer:r});u.prototype.init=function(){t.prototype.init.apply(this,arguments);this.data("sap-ui-fastnavgroup","true",true);this._oAriaAvatarText=new n({id:this.getId()+"-ariaAvatarText"});this._oAriaAvatarText.setText(this._oRb.getText("ARIA_HEADER_AVATAR_TEXT"))};u.prototype.exit=function(){t.prototype.exit.apply(this,arguments);this._oAriaAvatarText.destroy();this._oAriaAvatarText=null};u.prototype._getTitle=function(){var t=this.getAggregation("_title");if(!t){t=new a(this.getId()+"-title").addStyleClass("sapFCardTitle");this.setAggregation("_title",t)}return t};u.prototype._getSubtitle=function(){var t=this.getAggregation("_subtitle");if(!t){t=new a(this.getId()+"-subtitle").addStyleClass("sapFCardSubtitle");this.setAggregation("_subtitle",t)}return t};u.prototype._getAvatar=function(){var t=this.getAggregation("_avatar");if(!t){t=new s({imageFitType:o.Contain}).addStyleClass("sapFCardIcon");this.setAggregation("_avatar",t)}return t};u.prototype.onBeforeRendering=function(){t.prototype.onBeforeRendering.apply(this,arguments);this._getTitle().setText(this.getTitle()).setMaxLines(this.getTitleMaxLines()).setWrappingType(this.getWrappingType());this._enhanceText(this._getTitle());this._getSubtitle().setText(this.getSubtitle()).setMaxLines(this.getSubtitleMaxLines()).setWrappingType(this.getWrappingType());this._enhanceText(this._getSubtitle());this._getAvatar().setDisplayShape(this.getIconDisplayShape()).setSrc(this.getIconSrc()).setInitials(this.getIconInitials()).setTooltip(this.getIconAlt()).setBackgroundColor(this.getIconBackgroundColor()).setDisplaySize(this.getIconSize())};u.prototype.shouldShowIcon=function(){return this.getIconVisible()};u.prototype.enhanceAccessibilityState=function(t,e){if(t===this.getAggregation("_title")){e.role=this.getTitleAriaRole();e.level=this.getAriaHeadingLevel()}};u.prototype._getAriaLabelledBy=function(){const t=[];if(this.getParent()&&this.getParent()._ariaText){t.push(this.getParent()._ariaText.getId())}if(this.getTitle()){t.push(this._getTitle().getId())}if(this.getSubtitle()){t.push(this._getSubtitle().getId())}if(this.getStatusText()){t.push(this.getId()+"-status")}if(this.getIconSrc()||this.getIconInitials()){t.push(this.getId()+"-ariaAvatarText")}t.push(this._getBannerLinesIds());return t.filter(t=>!!t).join(" ")};u.prototype.isLoading=function(){return false};u.prototype.attachPress=function(){var e=Array.prototype.slice.apply(arguments);e.unshift("press");t.prototype.attachEvent.apply(this,e);this.invalidate();return this};u.prototype.detachPress=function(){var e=Array.prototype.slice.apply(arguments);e.unshift("press");t.prototype.detachEvent.apply(this,e);this.invalidate();return this};return u});
//# sourceMappingURL=Header.js.map