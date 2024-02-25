/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Lib","sap/ui/core/library","sap/ui/core/Icon","./TokenRenderer","sap/ui/events/KeyCodes"],function(e,t,i,r,o,n,s){"use strict";var a=r.TextDirection;var p=t.extend("sap.m.Token",{metadata:{library:"sap.m",properties:{selected:{type:"boolean",group:"Misc",defaultValue:false},key:{type:"string",group:"Misc",defaultValue:""},text:{type:"string",group:"Misc",defaultValue:""},editable:{type:"boolean",group:"Misc",defaultValue:true},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:a.Inherit},editableParent:{type:"boolean",group:"Behavior",defaultValue:true,visibility:"hidden"},truncated:{type:"boolean",group:"Appearance",defaultValue:false,visibility:"hidden"},posinset:{type:"int",visibility:"hidden"},setsize:{type:"int",visibility:"hidden"}},aggregations:{deleteIcon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{delete:{enableEventBubbling:true},press:{},select:{},deselect:{}}},renderer:n});p.prototype.init=function(){var e=new o({id:this.getId()+"-icon",src:"sap-icon://decline",noTabStop:true,press:this._fireDeleteToken.bind(this),tooltip:i.getResourceBundleFor("sap.m").getText("TOKEN_ICON_TOOLTIP")});e.addStyleClass("sapMTokenIcon");e.setUseIconTooltip(false);this.setAggregation("deleteIcon",e)};p.prototype.ontouchstart=function(e){if(e.target.id===this.getId()+"-icon"){e.preventDefault()}};p.prototype._getTooltip=function(e,t){return e.getTooltip_AsString()};p.prototype._onTokenPress=function(e){var t=this.getSelected(),i=e.ctrlKey||e.metaKey,r=true;if(i||e.which===s.SPACE){r=!t}this.setSelected(r);this.firePress();if(t!==r){if(r){this.fireSelect()}else{this.fireDeselect()}}if(this.getSelected()){this.focus()}};p.prototype.ontap=function(e){var t=this.getAggregation("deleteIcon");if(t&&e.target.id===t.getId()){e.setMark("tokenDeletePress",true);return}e.setMark("tokenTap",this);this._onTokenPress(e)};p.prototype._fireDeleteToken=function(e,t,i){if(this.getEditable()&&this.getProperty("editableParent")){this.fireDelete({token:this,byKeyboard:t,backspace:i})}e.preventDefault()};p.prototype.onsapspace=function(e){this._onTokenPress(e);if(e){e.preventDefault();e.stopPropagation()}};p.prototype.onkeydown=function(e){if((e.ctrlKey||e.metaKey)&&e.which===s.SPACE){this.onsapspace(e);e.preventDefault()}};p.prototype.getTruncated=function(){return this.getProperty("truncated")};p.prototype.setTruncated=function(e){return this.setProperty("truncated",e)};return p});
//# sourceMappingURL=Token.js.map