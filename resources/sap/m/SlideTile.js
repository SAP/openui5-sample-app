/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/base/i18n/Localization","sap/ui/core/Control","sap/m/GenericTile","sap/ui/core/Icon","./SlideTileRenderer","sap/ui/events/KeyCodes","sap/ui/events/PseudoEvents","sap/ui/thirdparty/jquery","sap/ui/core/InvisibleText","sap/ui/core/Lib","sap/m/Button"],function(e,t,i,s,n,r,a,o,jQuery,l,h,c){"use strict";var d=e.GenericTileScope;var p=e.TileSizeBehavior;var u=e.ButtonType,f=e.FrameType,_=24;var T=i.extend("sap.m.SlideTile",{metadata:{library:"sap.m",properties:{displayTime:{type:"int",group:"Appearance",defaultValue:5e3},transitionTime:{type:"int",group:"Appearance",defaultValue:500},scope:{type:"sap.m.GenericTileScope",group:"Misc",defaultValue:"Display"},sizeBehavior:{type:"sap.m.TileSizeBehavior",defaultValue:p.Responsive},width:{type:"sap.ui.core.CSSSize",group:"Appearance"},height:{type:"sap.ui.core.CSSSize",group:"Appearance"}},defaultAggregation:"tiles",aggregations:{tiles:{type:"sap.m.GenericTile",defaultClass:s,multiple:true,singularName:"tile",bindable:"bindable"},_pausePlayIcon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"},_invisibleText:{type:"sap.ui.core.InvisibleText",multiple:false,visibility:"hidden"}},events:{press:{parameters:{scope:{type:"sap.m.GenericTileScope"},action:{type:"string"},domRef:{type:"any"}}}}},renderer:r});T.prototype.init=function(){this._oRb=h.getResourceBundleFor("sap.m");this.setAggregation("_pausePlayIcon",new n({id:this.getId()+"-pause-play-icon",src:"sap-icon://media-pause",color:"#ffffff",size:"1rem",noTabStop:true}),true);this._oInvisibleText=new l(this.getId()+"-ariaText");this._oLeftScroll=new c({icon:"sap-icon://navigation-left-arrow",type:u.Transparent,ariaDescribedBy:this._oInvisibleText,press:()=>{this._scrollToNextTile(true,true,null,true);this._setInvisibleText(this._getPrefixText())}});this._oRightScroll=new c({icon:"sap-icon://navigation-right-arrow",type:u.Transparent,ariaDescribedBy:this._oInvisibleText,press:()=>{this._scrollToNextTile(true,false,null,true);this._setInvisibleText(this._getPrefixText())}});this._tabKeyPressedTile=false;this._tabKeyPressedButton=false;this.addDependent(this._oLeftScroll);this.addDependent(this._oRightScroll);this.setAggregation("_invisibleText",this._oInvisibleText,true)};T.prototype.onBeforeRendering=function(){s.prototype._initScopeContent.call(this,"sapMST");var e=this.getScope()===d.Actions;for(var t=0;t<this.getTiles().length;t++){this.getTiles()[t].showActionsView(e)}if(this._iCurrentTile>=0){this._iLastTile=this._iCurrentTile}this._bNeedInvalidate=false;this._stopAnimation();this._sWidth=this._sHeight=undefined;this._iCurrentTile=this._iPreviousTile=undefined;if(this.getParent()&&this.getParent().isA("sap.f.GridContainer")){this._applyNewDim()}};T.prototype.onAfterRendering=function(){this._setupResizeClassHandler();var e=this.getTiles().length,t=this.getScope();this._iCurrAnimationTime=0;this._bAnimationPause=false;if(this._iLastTile>=0&&e>1){this._scrollToTile(this._iLastTile)}else{this._scrollToNextTile()}if(e>1&&t===d.Display){this._startAnimation();this._resetIndicator(true)}if(t===d.Actions&&this._iCurrentTile>=0&&this._hasNewsContent(this._iCurrentTile)){this.addStyleClass("sapMSTDarkBackground")}var i;for(var s=0;s<this.getTiles().length;s++){var n=this.getTiles()[this._iCurrentTile];if(n&&n._isNavigateActionEnabled()){n._oNavigateAction._bExcludeFromTabChain=false;n._oNavigateAction.invalidate()}i=document.querySelector('div[id$="indicatorTap-'+s+'"]');if(i){i.addEventListener("click",function(e){var t=e.currentTarget.id,i=parseInt(t.substring(t.lastIndexOf("-")+1)),s=this._iCurrentTile>i;if(this._iCurrentTile!==i){this._scrollToNextTile(this._bAnimationPause,s,i)}}.bind(this))}}this._attachEvents();this._removeChildAria();if(this.getDomRef()){this.getDomRef().setAttribute("aria-describedby",this.getAggregation("_invisibleText").getId())}};T.prototype.exit=function(){this._stopAnimation();if(this._oMoreIcon){this._oMoreIcon.destroy()}if(this._oRemoveButton){this._oRemoveButton.destroy()}};T.prototype.ontap=function(e){var t=this.getScope();this.$().trigger("focus");if(t===d.Actions){var i=this._getEventParams(e);this.firePress(i);e.preventDefault()}};T.prototype.ontouchstart=function(e){if(this.getScope()===d.Display){if(jQuery(e.target).hasClass("sapMSTIconClickTapArea")){this.addStyleClass("sapMSTIconPressed")}else{this.addStyleClass("sapMSTHvr")}}};T.prototype.ontouchend=function(e){this.removeStyleClass("sapMSTHvr")};T.prototype.ontouchcancel=function(e){if(this.hasStyleClass("sapMSTIconPressed")){this.removeStyleClass("sapMSTIconPressed")}else{this.removeStyleClass("sapMSTHvr")}};T.prototype.onkeydown=function(e){if(this.getScope()===d.Display){if(o.events.sapenter.fnCheck(e)&&e.target?.tagName!=="BUTTON"){var t=this.getTiles()[this._iCurrentTile];t.onkeydown(e)}if(e.which===a.TAB&&e.target?.tagName!=="BUTTON"){this._tabKeyPressedTile=true;this._tabKeyPressedButton=false}else if(e.which===a.TAB&&e.target?.tagName==="BUTTON"){this._tabKeyPressedButton=true;this._tabKeyPressedTile=false}}};T.prototype.onkeyup=function(e){var t;if(this.getScope()===d.Display){if(o.events.sapenter.fnCheck(e)&&e.target?.tagName!=="BUTTON"){var i=this.getTiles()[this._iCurrentTile];i.onkeyup(e);return}if(o.events.sapspace.fnCheck(e)&&e?.target?.tagName!=="BUTTON"){this._toggleAnimation();this.bIsPrevStateNormal=!this._bAnimationPause}if(e.which===a.B&&this._bAnimationPause){this._scrollToNextTile(true,true)}if(e.which===a.F&&this._bAnimationPause){this._scrollToNextTile(true,false)}}else if(this.getScope()===d.Actions){if(o.events.sapselect.fnCheck(e)){this.firePress(this._getEventParams(e));e.preventDefault()}else if(o.events.sapdelete.fnCheck(e)||o.events.sapbackspace.fnCheck(e)){t={scope:this.getScope(),action:s._Action.Remove,domRef:this._oRemoveButton.getPopupAnchorDomRef()};this.firePress(t);e.preventDefault()}}};T.prototype.onsapspace=function(e){e.preventDefault()};T.prototype.onmouseup=function(e){if(this.getScope()===d.Display){if(this.hasStyleClass("sapMSTIconPressed")){this._toggleAnimation();this.removeStyleClass("sapMSTIconPressed")}}};T.prototype.onmousedown=function(e){if(jQuery(e.target).hasClass("sapMSTIconClickTapArea")){this.addStyleClass("sapMSTIconPressed");this.mouseDown=true}};T.prototype.setScope=function(e){if(this.getScope()!==e){if(e===d.Actions){this.setProperty("scope",e,true);this._bNeedInvalidate=true;this._stopAnimation(this._bNeedInvalidate)}else{this.setProperty("scope",e)}this._setTilePressState()}return this};T.prototype._setupResizeClassHandler=function(){var e=function(){var e=this.getParent();if(e&&e.isA("sap.f.GridContainer")){this._applyNewDim()}if(this.getSizeBehavior()===p.Small||window.matchMedia("(max-width: 374px)").matches||this._hasStretchTiles()){this.$().addClass("sapMTileSmallPhone")}else{this.$().removeClass("sapMTileSmallPhone")}}.bind(this);jQuery(window).on("resize",e);e()};T.prototype._attachEvents=function(){var e=this.getDomRef();var t=this._oLeftScroll.getDomRef();var i=this._oRightScroll.getDomRef();var s=[this.getId(),this._oLeftScroll.getId(),this._oRightScroll.getId()];if(e){e.addEventListener("focusin",function(t){var i=t.target.id===e.id;if(!this.mouseDown){this.bIsPrevStateNormal=this.getDomRef().classList.contains("sapMSTPauseIcon");this._stopAnimation(null,!i);this._updatePausePlayIcon()}}.bind(this));e.addEventListener("focusout",function(e){var t=s.find(t=>t===e?.relatedTarget?.id);if(!this.mouseDown){if(this.bIsPrevStateNormal){this._startAnimation(true,!t);this._updatePausePlayIcon()}}this.mouseDown=false;if(this.getTiles().length===1||!t){this._tabKeyPressedTile=false;this._tabKeyPressedButton=false}}.bind(this))}if(t){t.addEventListener("focusin",()=>{if(!this._tabKeyPressedTile&&!this._tabKeyPressedButton&&!this._focusToggled){this._setInvisibleText(this._getPrefixText(true))}else{this._setInvisibleText()}this._focusToggled=false});t.addEventListener("focusout",e=>{var t=s.find(t=>t===e.relatedTarget?.id);if(!t){this._tabKeyPressedTile=false;this._tabKeyPressedButton=false}})}if(i){i.addEventListener("focusin",()=>{if(!this._tabKeyPressedTile&&!this._tabKeyPressedButton&&!this._focusToggled){this._setInvisibleText(this._getPrefixText(true))}else{this._setInvisibleText()}this._focusToggled=false});i.addEventListener("focusout",e=>{var t=s.find(t=>t===e.relatedTarget?.id);if(!t){this._tabKeyPressedTile=false;this._tabKeyPressedButton=false}})}};T.prototype._removeChildAria=function(){this.getTiles().forEach(function(e){e.getDomRef().removeAttribute("role");e.getDomRef().removeAttribute("aria-roledescription")})};T.prototype._hasStretchTiles=function(){return this.getTiles().some(function(e){return e._isSmallStretchTile()})};T.prototype._isFocusInsideST=function(){return this.$()[0]===document.activeElement||this.$().find(document.activeElement).length};T.prototype._toggleAnimation=function(){if(this.getTiles().length>1){if(this._bAnimationPause){this._startAnimation()}else{this._stopAnimation()}}this._updatePausePlayIcon()};T.prototype._stopAnimation=function(e,t){this._iCurrAnimationTime+=Date.now()-this._iStartTime;clearTimeout(this._sTimerId);this._bAnimationPause=true;if(this._iCurrAnimationTime>this.getDisplayTime()){this._scrollToNextTile(true,null,null,t)}else{if(this.getTiles()[this._iCurrentTile]){this._setAriaDescriptor(t)}if(e){this.invalidate()}}};T.prototype._startAnimation=function(e,t){var i=this.getDisplayTime()-this._iCurrAnimationTime;clearTimeout(this._sTimerId);this._sTimerId=setTimeout(function(){this._scrollToNextTile()}.bind(this),i);this._iStartTime=Date.now();this._bAnimationPause=false;if(this.getTiles()[this._iCurrentTile]&&!e){this._setAriaDescriptor(t)}};T.prototype._scrollToTile=function(e){if(e>=0){var i=this.$("wrapper-"+e);var s=t.getRTL()?"right":"left";this._changeSizeTo(e);i.css(s,"0rem");this._iCurrentTile=e;if(this.getTiles()[e]){this._setAriaDescriptor()}this._updateTilesIndicator()}};T.prototype._scrollToNextTile=function(e,i,s,n){var r=this._iCurrAnimationTime-this.getDisplayTime(),a,o,l,h,c,d,p,u,f,_;r=this.getTransitionTime()-(r>0?r:0);a=r===this.getTransitionTime();if(a){if(i){o=this._getPreviousTileIndex(this._iCurrentTile)}else{o=this._getNextTileIndex(this._iCurrentTile)}this._iPreviousTile=this._iCurrentTile;this._iCurrentTile=o}if(s&&s>=0){this._iCurrentTile=s}h=this.$("wrapper-"+this._iCurrentTile);f=t.getRTL()?"right":"left";var T=this.getTiles()[this._iCurrentTile];if(T&&T._isNavigateActionEnabled()){T._oNavigateAction._bExcludeFromTabChain=false;T._oNavigateAction.invalidate()}if(this._iPreviousTile!=undefined){var g=this.getTiles()[this._iPreviousTile];if(g&&g._isNavigateActionEnabled()){g._oNavigateAction._bExcludeFromTabChain=true;g._oNavigateAction.invalidate()}l=this.$("wrapper-"+this._iPreviousTile);c=l.css("width");d=parseFloat(h.css("width"));p=parseFloat(c);u=p<d;if(u){this._changeSizeTo(this._iCurrentTile)}if(a){h.css(f,c)}_={};if(i){_[f]=c}else{_[f]="-"+c}l.animate(_,{duration:r,done:function(){if(!u){this._changeSizeTo(this._iCurrentTile)}l.css(f,"")}.bind(this)});if(i){_[f]="-"+c;h.animate(_,0)}_[f]="0rem";h.animate(_,{duration:r,done:function(){this._iCurrAnimationTime=0;if(this._bNeedInvalidate){this.invalidate()}if(!e){this._startAnimation()}}.bind(this)})}else{this._changeSizeTo(this._iCurrentTile);h.css(f,"0rem")}if(this.getTiles()[this._iCurrentTile]){this._setAriaDescriptor(n)}this._updateTilesIndicator();this._enableIndicatorScrolling(i)};T.prototype._enableIndicatorScrolling=function(e){var t=e===undefined?null:!e;setTimeout(()=>{this._oLeftScroll.setEnabled(this._iCurrentTile===this._iIndexOfStartIndicator?false:true);this._oRightScroll.setEnabled(this._iCurrentTile===this._iIndexOfEndIndicator?false:true)},200);var{overflow:i}=this._getIndicatorLastIndexInfo();if(this._iCurrentTile===0&&i){this._resetIndicator(true)}else if(this._iCurrentTile===this._iIndexOfEndIndicator&&i){this._resetIndicator(false)}else if(t===null&&this._iCurrentTile>this._iIndexOfVisibleEndIndicator||t&&this._iCurrentTile>this._iIndexOfVisibleEndIndicator){this._iIndexOfVisibleEndIndicator++;this._iIndexOfVisibleStartIndicator++;this._iIndicatorScrolling-=_;this._scrollIndicator()}else if(!t&&this._iCurrentTile<this._iIndexOfVisibleStartIndicator){this._iIndexOfVisibleEndIndicator--;this._iIndexOfVisibleStartIndicator--;this._iIndicatorScrolling+=_;this._scrollIndicator()}};T.prototype.onfocusfail=function(){setTimeout(()=>{var e=this._oLeftScroll.getEnabled()?this._oLeftScroll:this._oRightScroll;this._focusToggled=true;e.getDomRef().focus()},100)};T.prototype._resetIndicator=function(e){this._iIndexOfStartIndicator=0;this._iIndexOfEndIndicator=this.getTiles().length-1;var{index:t,overflow:i}=this._getIndicatorLastIndexInfo();if(e){this._iIndexOfVisibleStartIndicator=0;this._iIndexOfVisibleEndIndicator=t;this._iIndicatorScrolling=0}else if(i){var s=this._iIndexOfEndIndicator-t;this._iIndicatorScrolling=-1*_*s;this._iIndexOfVisibleStartIndicator=this._iIndexOfEndIndicator-t;this._iIndexOfVisibleEndIndicator=this._iIndexOfEndIndicator}this._scrollIndicator()};T.prototype._scrollIndicator=function(){for(var e=0;e<=this._iIndexOfEndIndicator;e++){this.getDomRef("indicatorTap-"+e).style.transform=`translateX(${this._iIndicatorScrolling}px)`}};T.prototype._getIndicatorLastIndexInfo=function(){var e=this.getTiles()[0]?.getFrameType();var t=this.getTiles()[0]?.getSizeBehavior();if(e===f.TwoByOne||e===f.Stretch){return this._iIndexOfEndIndicator>4?{index:4,overflow:true}:{index:this._iIndexOfEndIndicator,overflow:false}}else if(e===f.OneByOne&&(t===p.Small||this.getDomRef().classList.contains("sapMTileSmallPhone"))){return this._iIndexOfEndIndicator>2?{index:2,overflow:true}:{index:this._iIndexOfEndIndicator,overflow:false}}else if(e===f.OneByOne){return this._iIndexOfEndIndicator>3?{index:3,overflow:true}:{index:this._iIndexOfEndIndicator,overflow:false}}return{}};T.prototype._setAriaDescriptor=function(e){if(e){return}var t="",i,s=this.getScope();i=this.getTiles();t+=this._getPrefixText();if(s===d.Actions){t=this._oRb.getText("GENERICTILE_ACTIONS_ARIA_TEXT")+"\n"+t}else if(i.length>1&&s===d.Display){t+="\n"+this._oRb.getText("SLIDETILE_MULTIPLE_CONTENT")+"\n"+this._oRb.getText("SLIDETILE_TOGGLE_SLIDING");if(this._bAnimationPause){t+="\n"+this._oRb.getText("SLIDETILE_SCROLL_BACK")+"\n"+this._oRb.getText("SLIDETILE_SCROLL_FORWARD")}}t+="\n"+this._oRb.getText("SLIDETILE_ACTIVATE");this._setInvisibleText(t)};T.prototype._getPrefixText=function(e){var t="",i,s,n,r,a;i=this.getTiles();n=i.length;a=e||this._bAnimationPause?"SLIDETILE_INSTANCE_FOCUS_PAUSE":"SLIDETILE_INSTANCE_FOCUS_SCROLL";r=this._oRb.getText(a,[this._iCurrentTile+1,n]);t+=r;s=i[this._iCurrentTile];t+=s._getAriaText(true).replace(/\s/g," ");return t};T.prototype._setInvisibleText=function(e){this.getAggregation("_invisibleText").setText(e)};T.prototype._changeSizeTo=function(e){var t=this.getTiles()[e];if(!t){return}if(this._sFrameType){this.$().removeClass(this._sFrameType)}this.$().addClass(t.getFrameType());this._sFrameType=t.getFrameType()};T.prototype._getPreviousTileIndex=function(e){if(e>0){return e-1}else{return this.getTiles().length-1}};T.prototype._getNextTileIndex=function(e){if(e+1<this.getTiles().length){return e+1}else{return 0}};T.prototype._updateTilesIndicator=function(){var e;for(var t=0;t<this.getTiles().length;t++){e=this.$("tileIndicator-"+t);if(t===this._iCurrentTile){e.addClass("sapMSTActive")}else{e.removeClass("sapMSTActive")}}};T.prototype._updatePausePlayIcon=function(){if(this.getAggregation("_pausePlayIcon")){if(this._bAnimationPause){this.getAggregation("_pausePlayIcon").setSrc("sap-icon://media-play");this.$().removeClass("sapMSTPauseIcon")}else{this.getAggregation("_pausePlayIcon").setSrc("sap-icon://media-pause");this.$().addClass("sapMSTPauseIcon")}}};T.prototype._setTilePressState=function(){var e=this.getTiles(),t=this.getScope()===d.Display;for(var i=0;i<e.length;i++){e[i].setPressEnabled(t)}};T.prototype._hasNewsContent=function(e){var t=this.getTiles()[e].getTileContent();for(var i=0;i<t.length;i++){if(t[i]._getContentType()==="News"){return true}}return false};T.prototype._applyNewDim=function(){var e=this.getParent();var t=e.getActiveLayoutSettings().getGap();var i=t==="16px"||t==="1rem";if(i){this.addStyleClass("sapMSTGridContainerOneRemGap")}else if(!i&&this.hasStyleClass("sapMSTGridContainerOneRemGap")){this.removeStyleClass("sapMSTGridContainerOneRemGap")}this.getTiles().forEach(function(t){t._applyNewDim(e)})};T.prototype._getEventParams=s.prototype._getEventParams;return T});
//# sourceMappingURL=SlideTile.js.map