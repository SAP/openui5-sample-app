/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Core","sap/ui/core/Control","sap/ui/core/EnabledPropagator","sap/ui/core/delegate/ItemNavigation","sap/ui/core/InvisibleText","sap/ui/core/ResizeHandler","sap/ui/Device","sap/m/Button","sap/m/IconTabFilter","sap/m/IconTabSeparator","sap/m/IconTabBarDragAndDropUtil","sap/ui/core/library","sap/m/IconTabHeaderRenderer","sap/ui/thirdparty/jquery","sap/base/Log","sap/ui/events/KeyCodes"],function(e,t,i,s,r,o,a,n,l,d,h,f,p,g,jQuery,c,u){"use strict";var v=p.dnd.DropPosition;var I=e.BackgroundDesign;var m=e.IconTabHeaderMode;var _=e.IconTabDensityMode;var y=e.TabsOverflowMode;var b=i.extend("sap.m.IconTabHeader",{metadata:{library:"sap.m",properties:{showSelection:{type:"boolean",group:"Misc",defaultValue:true,deprecated:true},selectedKey:{type:"string",group:"Data",defaultValue:null},visible:{type:"boolean",group:"Behavior",defaultValue:true},mode:{type:"sap.m.IconTabHeaderMode",group:"Appearance",defaultValue:m.Standard},showOverflowSelectList:{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:I.Solid},enableTabReordering:{type:"boolean",group:"Behavior",defaultValue:false},maxNestingLevel:{type:"int",group:"Behavior",defaultValue:0},tabDensityMode:{type:"sap.m.IconTabDensityMode",group:"Appearance",defaultValue:_.Cozy},ariaTexts:{type:"object",group:"Accessibility",defaultValue:null},tabsOverflowMode:{type:"sap.m.TabsOverflowMode",group:"Behavior",defaultValue:y.End}},aggregations:{items:{type:"sap.m.IconTab",multiple:true,singularName:"item",dnd:{draggable:true,droppable:true,layout:"Horizontal"}},_overflow:{type:"sap.m.IconTabFilter",multiple:false,visibility:"hidden"},_startOverflow:{type:"sap.m.IconTabFilter",multiple:false,visibility:"hidden"}},events:{select:{parameters:{item:{type:"sap.m.IconTabFilter"},key:{type:"string"},previousKey:{type:"string"}}}}},renderer:g});var T=t.getLibraryResourceBundle("sap.m");s.apply(b.prototype,[true]);b.prototype.init=function(){this._bFireSelectEvent=false;this._aTabKeys=[];this._oAriaHeadText=null;this._bIsRendered=false};b.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}if(this._sResizeListenerId){a.deregister(this._sResizeListenerId);this._sResizeListenerId=null}if(this._aTabKeys){this._aTabKeys=null}if(this._oOverflow){this._oOverflow.removeEventDelegate(this._oOverflowEventDelegate);this._oOverflowEventDelegate=null;this._oOverflow=null}if(this._oStartOverflow){this._oStartOverflow.removeEventDelegate(this._oStartOverflowEventDelegate);this._oStartOverflowEventDelegate=null;this._oStartOverflow=null}if(this._oAriaHeadText){this._oAriaHeadText.destroy();this._oAriaHeadText=null}this._bRtl=null};b.prototype.onBeforeRendering=function(){this._bIsRendered=false;this._bRtl=t.getConfiguration().getRTL();if(this._sResizeListenerId){a.deregister(this._sResizeListenerId);this._sResizeListenerId=null}this._updateSelection();this.destroyDragDropConfig();this._setsDragAndDropConfigurations()};b.prototype.onAfterRendering=function(){this._applyTabDensityMode();if(this.oSelectedItem){this._applySelectionToFilters();this.oSelectedItem._hideBadge()}if(t.isThemeApplied()){this._setItemsForStrip()}else{t.attachThemeChanged(this._handleThemeLoad,this)}this._initItemNavigation();this._sResizeListenerId=a.register(this.getDomRef(),jQuery.proxy(this._fnResize,this));this.getItems().forEach(function(e){if(e._onAfterParentRendering){e._onAfterParentRendering()}});this._bIsRendered=true};b.prototype._isRendered=function(){return this._bIsRendered};b.prototype._getSelectList=function(){return this._getOverflow()._getSelectList()};b.prototype._getOverflow=function(){var e=this.getAggregation("_overflow");if(!e){e=new d({id:this.getId()+"-overflow",text:T.getText("ICONTABHEADER_OVERFLOW_MORE")});e._bIsOverflow=true;this._oOverflowEventDelegate={onsapnext:e.onsapdown};e.addEventDelegate(this._oOverflowEventDelegate,e);this.setAggregation("_overflow",e);this._oOverflow=e}return e};b.prototype._getStartOverflow=function(){var e=this.getAggregation("_startOverflow");if(!e){e=new d({id:this.getId()+"-startOverflow",text:T.getText("ICONTABHEADER_OVERFLOW_MORE")});e._bIsStartOverflow=true;this._oStartOverflowEventDelegate={onsapprevious:e.onsapdown};e.addEventDelegate(this._oStartOverflowEventDelegate,e);this.setAggregation("_startOverflow",e);this._oStartOverflow=e}return e};b.prototype._getInvisibleHeadText=function(){var e=this.getAriaTexts()||{};if(!this._oAriaHeadText){this._oAriaHeadText=new o({id:this.getId()+"-ariaHeadText"})}this._oAriaHeadText.setText(e.headerDescription);return this._oAriaHeadText};b.prototype._onItemNavigationFocusLeave=function(){if(!this.oSelectedItem){return}var e=this._oItemNavigation.getItemDomRefs().indexOf(this.oSelectedItem._getRootTab().getDomRef());this._oItemNavigation.setFocusedIndex(e)};b.prototype.getTabFilters=function(){var e=[];this.getItems().forEach(function(t){if(t instanceof d){e.push(t)}});return e};b.prototype._setsDragAndDropConfigurations=function(){if(this.getEnableTabReordering()&&!this.getDragDropConfig().length){f.setDragDropAggregations(this,"Horizontal",this._getDropPosition())}};b.prototype._getDropPosition=function(){return this.getMaxNestingLevel()===0?v.Between:v.OnOrBetween};b.prototype.setSelectedKey=function(e){if(e===this.getSelectedKey()){if(this._isInsideIconTabBar()){this.getParent().setProperty("selectedKey",e,true)}return this}var t=this.getTabFilters(),i=this._isInsideIconTabBar(),s=true,r;if(t.length>0){e=e||t[0]._getNonEmptyKey()}if(this.$().length){r=this._findItemByKey(e);if(r){this.setSelectedItem(r,s)}else if(!i&&e){this.setSelectedItem(null)}}this.setProperty("selectedKey",e,true);return this};b.prototype.setSelectedItem=function(e,t){if(!e){if(this.oSelectedItem){this._removeSelectionFromFilters();this.oSelectedItem=null}return this}if(this._isUnselectable(e)){return this}var i=this.getParent();var s=this._isInsideIconTabBar();var r=this.getSelectedKey();var o=false;if(e.getContent().length===0&&this.oSelectedItem&&this.oSelectedItem.getContent().length===0){o=true}if(this.oSelectedItem&&this.oSelectedItem.getVisible()&&(!t&&s&&i.getExpandable()||this.oSelectedItem!==e)){this._removeSelectionFromFilters()}if(e.getVisible()){if(this.oSelectedItem===e){if(!t&&s&&i.getExpandable()){i._toggleExpandCollapse()}}else{if(s){i.$("content").attr("aria-labelledby",e._getRootTab().getId())}this.oSelectedItem=e;this._applySelectionToFilters();this.setProperty("selectedKey",this.oSelectedItem._getNonEmptyKey(),true);if(s&&(i.getExpandable()||i.getExpanded())){var a=this.oSelectedItem.getContent();if(a.length>0){i._rerenderContent(a)}else{if(!o){i._rerenderContent(i.getContent())}}if(!t&&i.getExpandable()&&!i.getExpanded()){i._toggleExpandCollapse(true)}}}}this.oSelectedItem=e;var n=this.oSelectedItem._getNonEmptyKey();this.setProperty("selectedKey",n,true);if(s){i.setProperty("selectedKey",n,true)}if(s){t=t&&!i._bFireSelectEvent}else{t=t&&!this._bFireSelectEvent}if(!t){if(s){i.fireSelect({selectedItem:this.oSelectedItem,selectedKey:n,item:this.oSelectedItem,key:n,previousKey:r})}else{this.fireSelect({selectedItem:this.oSelectedItem,selectedKey:n,item:this.oSelectedItem,key:n,previousKey:r})}}this.oSelectedItem._startBadgeHiding();var l=this.oSelectedItem._getRootTab().getDomRef();if(!l||l.classList.contains("sapMITBFilterHidden")||this.getTabsOverflowMode()===y.End){this._setItemsForStrip()}return this};b.prototype.getVisibleTabFilters=function(){return this.getTabFilters().filter(function(e){return e.getVisible()})};b.prototype._initItemNavigation=function(){var e=[],t=-1,i=this.oSelectedItem&&this.oSelectedItem._getRootTab();if(this.$().hasClass("sapMITHStartOverflowList")){var s=this._getStartOverflow().getFocusDomRef();s.setAttribute("tabindex","-1");e.push(s)}this.getTabFilters().forEach(function(s){var r=this.getFocusDomRef(s);if(!r){return}r.setAttribute("tabindex","-1");e.push(r);if(s===i||s===this.oSelectedItem){t=e.indexOf(r)}}.bind(this));if(this.$().hasClass("sapMITHEndOverflowList")){var o=this._getOverflow().getFocusDomRef();o.setAttribute("tabindex","-1");e.push(o)}if(!this._oItemNavigation){this._oItemNavigation=(new r).setCycling(false).attachEvent(r.Events.FocusLeave,this._onItemNavigationFocusLeave,this).setDisabledModifiers({sapnext:["alt","meta"],sapprevious:["alt","meta"]});this.addDelegate(this._oItemNavigation)}this._oItemNavigation.setRootDomRef(this.getDomRef()).setItemDomRefs(e).setPageSize(e.length).setSelectedIndex(t)};b.prototype.onThemeChanged=function(){this._applyTabDensityMode()};b.prototype._applyTabDensityMode=function(){var e=this.getTabDensityMode();this.$().removeClass("sapUiSizeCompact");switch(e){case _.Compact:this.$().addClass("sapUiSizeCompact");break;case _.Inherit:if(this.$().closest(".sapUiSizeCompact").length){this.$().addClass("sapUiSizeCompact")}break}};b.prototype._handleThemeLoad=function(){setTimeout(this._setItemsForStrip.bind(this),350);t.detachThemeChanged(this._handleThemeLoad,this)};b.prototype.destroyItems=function(){this.oSelectedItem=null;this._aTabKeys=[];this.destroyAggregation("items");return this};b.prototype.addItem=function(e){if(!(e instanceof h)){var t=e.getKey();if(this._aTabKeys.indexOf(t)!==-1){c.warning("sap.m.IconTabHeader: duplicate key '"+t+"' inside the IconTabFilter. Please use unique keys.")}this._aTabKeys.push(t)}this.addAggregation("items",e);this._invalidateParentIconTabBar();return this};b.prototype.insertItem=function(e,t){if(!(e instanceof h)){var i=e.getKey();if(this._aTabKeys.indexOf(i)!==-1){c.warning("sap.m.IconTabHeader: duplicate key '"+i+"' inside the IconTabFilter. Please use unique keys.")}this._aTabKeys.push(i)}this.insertAggregation("items",e,t);this._invalidateParentIconTabBar()};b.prototype.removeAllItems=function(){var e=this.removeAllAggregation("items");this._aTabKeys=[];this.oSelectedItem=null;this._invalidateParentIconTabBar();return e};b.prototype.removeItem=function(e){e=this.removeAggregation("items",e);if(e&&!(e instanceof h)){var t=e.getKey();this._aTabKeys.splice(this._aTabKeys.indexOf(t),1)}if(this.oSelectedItem===e){this.oSelectedItem=null}this._invalidateParentIconTabBar();return e};b.prototype.updateAggregation=function(){this.oSelectedItem=null;i.prototype.updateAggregation.apply(this,arguments);this.invalidate()};b.prototype.removeAggregation=function(e,t,s){var r=this.getTabFilters();var o=i.prototype.removeAggregation.apply(this,arguments);if(s){return o}if(!this._getPreserveSelection()&&o&&o==this.oSelectedItem&&e=="items"){var a=r?Array.prototype.indexOf.call(r,o):-1;r=this.getTabFilters();a=Math.max(0,Math.min(a,r.length-1));var n=r[a];if(n){this.setSelectedItem(n,true)}else{var l=this.getParent();if(this._isInsideIconTabBar()&&l.getExpanded()){l.$("content").children().remove()}}}return o};b.prototype.removeAllAggregation=function(e,t){if(e=="items"){var s=this.getParent();if(this._isInsideIconTabBar()&&s.getExpanded()){s.$("content").children().remove()}}return i.prototype.removeAllAggregation.apply(this,arguments)};b.prototype._getPreserveSelection=function(){return this._bPreserveSelection};b.prototype._setPreserveSelection=function(e){this._bPreserveSelection=e};b.prototype._getDisplayText=function(e){var t=e.getText();if(this.isInlineMode()){var i=e.getCount();if(i){if(this._bRtl){t="("+i+") "+t}else{t+=" ("+i+")"}}}return t};b.prototype.isInlineMode=function(){return this.getMode()===m.Inline};b.prototype._checkTextOnly=function(){this._bTextOnly=this.getItems().every(function(e){return e instanceof h||!e.getIcon()});return this._bTextOnly};b.prototype._checkNoText=function(e){if(e.length>0){for(var t=0;t<e.length;t++){if(!(e[t]instanceof h)){if(e[t].getText().length>0){return false}}}}return true};b.prototype._checkInLine=function(e){var t;if(e.length>0){for(var i=0;i<e.length;i++){t=e[i];if(!(t instanceof h)){if(t.getIcon()||t.getCount()){this._bInLine=false;return false}}}}this._bInLine=true;return true};b.prototype._getItemsInStrip=function(){return this.getItems().filter(function(e){var t=e.getDomRef();return t&&!t.classList.contains("sapMITBFilterHidden")})};b.prototype._setItemsForStrip=function(){var e=this.getVisibleTabFilters();if(!t.isThemeApplied()||!e.length){return}var i=this.getDomRef("head");if(!i){return}var s=this._getStartOverflow(),r=this._getOverflow(),o=this.getItems().filter(function(e){return e.getDomRef()}).map(function(e){return e.getDomRef()}),a=this.oSelectedItem&&this.oSelectedItem.getVisible()?this.oSelectedItem:e[0],n=(a._getRootTab()||a).getDomRef();if(!o.length||!n){return}s.$().removeClass("sapMITHOverflowVisible");r.$().removeClass("sapMITHOverflowVisible");this.$().removeClass("sapMITHStartOverflowList");this.$().removeClass("sapMITHEndOverflowList");o.forEach(function(e){e.classList.remove("sapMITBFilterHidden")});var l=o.reduce(function(e,t){return e+jQuery(t).outerWidth(true)},0),d=l>i.offsetWidth;if(!d){return}switch(this.getTabsOverflowMode()){case y.StartAndEnd:this._updateStartAndEndOverflow(o,n);break;case y.End:default:this._updateEndOverflow(o,n);break}};b.prototype._updateEndOverflow=function(e,t){var i=this._getOverflow(),s=this.getDomRef("head"),r,o,a,n;i.$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHEndOverflowList");r=s.offsetWidth;a=this._getSelectedItemIndexAndSize(e,t);o=this._findLastVisibleItem(e,r,a.width);for(n=o+1;n<e.length;n++){e[n].classList.add("sapMITBFilterHidden")}i._updateExpandButtonBadge()};b.prototype._updateStartAndEndOverflow=function(e,t){var i=this._getStartOverflow(),s=this._getOverflow(),r=this.getDomRef("head"),o=r.offsetWidth,a=this._getSelectedItemIndexAndSize(e,t),n=this._hasStartOverflow(o,e,a),l=this._hasEndOverflow(o,e,a),d,h,f;if(!n){s.$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHEndOverflowList");o=r.offsetWidth;h=this._findLastVisibleItem(e,o,a.width);for(f=h+1;f<e.length;f++){e[f].classList.add("sapMITBFilterHidden")}s._updateTabCountText();s._updateExpandButtonBadge();return}if(!l){i.$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHStartOverflowList");o=r.offsetWidth;d=this._findFirstVisibleItem(e,o,a.width);for(f=d-1;f>=0;f--){e[f].classList.add("sapMITBFilterHidden")}i._updateTabCountText();i._updateExpandButtonBadge();return}i.$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHStartOverflowList");s.$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHEndOverflowList");o=r.offsetWidth;d=this._findFirstVisibleItem(e,o,a.width,a.index-1);h=this._findLastVisibleItem(e,o,a.width,d);for(f=d-1;f>=0;f--){e[f].classList.add("sapMITBFilterHidden")}for(f=h+1;f<e.length;f++){e[f].classList.add("sapMITBFilterHidden")}i._updateExpandButtonBadge();i._updateTabCountText();s._updateTabCountText();s._updateExpandButtonBadge()};b.prototype._hasStartOverflow=function(e,t,i){if(i.index===0){return false}var s,r=0;for(s=i.index-1;s>=0;s--){r+=this._getItemSize(t[s])}var o=e<r+i.width;if(!o){this._getOverflow().$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHEndOverflowList");e=this.getDomRef("head").offsetWidth;o=e<r+i.width;this._getOverflow().$().removeClass("sapMITHOverflowVisible");this.$().removeClass("sapMITHEndOverflowList")}return o};b.prototype._hasEndOverflow=function(e,t,i){if(i.index>=t.length){return false}var s,r=0;for(s=i.index;s<t.length;s++){r+=this._getItemSize(t[s])}var o=e<r+i.width;if(!o){this._getStartOverflow().$().addClass("sapMITHOverflowVisible");this.$().addClass("sapMITHStartOverflowList");e=this.getDomRef("head").offsetWidth;o=e<r+i.width;this._getStartOverflow().$().removeClass("sapMITHOverflowVisible");this.$().removeClass("sapMITHStartOverflowList")}return o};b.prototype._getSelectedItemIndexAndSize=function(e,t){var i=e.indexOf(t),s=this._getItemSize(t),r;if(e[i-1]&&e[i-1].classList.contains("sapMITBSep")){r=e[i-1];s+=this._getItemSize(r)}e.splice(i,1);if(r){e.splice(i-1,1);i--}return{index:i,width:s}};b.prototype._findFirstVisibleItem=function(e,t,i,s){var r,o,a;if(s===undefined){s=e.length-1}r=s+1;for(o=s;o>=0;o--){a=this._getItemSize(e[o]);if(t<i+a){break}i+=a;r=o}return r};b.prototype._findLastVisibleItem=function(e,t,i,s){var r,o,a;s=s||0;r=s-1;for(o=s;o<e.length;o++){a=this._getItemSize(e[o]);if(t<i+a){break}i+=a;r=o}var n=e[o-1];if(n&&n.classList.contains("sapMITBSep")){r-=1}return r};b.prototype._getItemSize=function(e){var t=window.getComputedStyle(e),i=e.offsetWidth,s=Number.parseInt(t.marginLeft)+Number.parseInt(t.marginRight);return i+s};b.prototype._hasSubItems=function(){var e=this.getTabFilters(),t;for(t=0;t<e.length;t++){if(e[t].getItems().length>0){return true}}return false};b.prototype._handleActivation=function(e){var i=e.target.id,s=e.srcControl,r,o=jQuery(e.target);if(s instanceof l){return}var a=jQuery(document.getElementById(i));if(a.parents()&&Array.prototype.indexOf.call(a.parents(),this.$("content")[0])>-1){}else{if(i){e.preventDefault();if(o.hasClass("sapMITBFilterIcon")||o.hasClass("sapMITBCount")||o.hasClass("sapMITBText")||o.hasClass("sapMITBTab")||o.hasClass("sapMITBContentArrow")||o.hasClass("sapMITBSep")||o.hasClass("sapMITBSepIcon")){r=e.srcControl.getId().replace(/-icon$/,"");s=t.byId(r);if(s.getMetadata().isInstanceOf("sap.m.IconTab")&&!(s instanceof h)){if(this._isUnselectable(s)){if(s.getItems().length||s._isOverflow()){s._expandButtonPress()}return}if(s===this._getOverflow()||s===this._getStartOverflow()){s._expandButtonPress();return}this.setSelectedItem(s)}}else if(s.getMetadata().isInstanceOf("sap.m.IconTab")&&!(s instanceof h)){if(this._isUnselectable(s)){if(s.getItems().length||s._isOverflow()){s._expandButtonPress()}return}if(s===this._getOverflow()||s===this._getStartOverflow()){s._expandButtonPress();return}this.setSelectedItem(s)}}else{if(s.getMetadata().isInstanceOf("sap.m.IconTab")&&!(s instanceof h)){if(this._isUnselectable(s)){if(s.getItems().length||s._isOverflow()){s._expandButtonPress()}return}if(s===this._getOverflow()||s===this._getStartOverflow()){s._expandButtonPress();return}this.setSelectedItem(s)}}}};b.prototype._fnResize=function(){if(this._getOverflow()._oPopover){this._getOverflow()._oPopover.close()}if(this._getStartOverflow()._oPopover){this._getStartOverflow()._oPopover.close()}this._setItemsForStrip();this._initItemNavigation()};b.prototype._isUnselectable=function(e){var t=e._getRealTab();return!t.getEnabled()||this._isInsideIconTabBar()&&!this.getParent().getContent().length&&t._getNestedLevel()===1&&t.getItems().length&&!t.getContent().length||t._isOverflow()};b.prototype._isInsideIconTabBar=function(){var e=this.getParent();return e instanceof i&&e.isA("sap.m.IconTabBar")};b.prototype._isInsideToolHeader=function(){var e=this.getParent();return e instanceof i&&e.isA("sap.tnt.ToolHeader")};b.prototype._invalidateParentIconTabBar=function(){if(this._isInsideIconTabBar()){this.getParent().invalidate()}};b.prototype.getFocusDomRef=function(e){var t=e||this.oSelectedItem;if(!t){return null}return t.getDomRef()};b.prototype.applyFocusInfo=function(e){if(e.focusDomRef){jQuery(e.focusDomRef).trigger("focus")}};b.prototype._updateSelection=function(){var e=this.getItems(),t=this.getSelectedKey(),i=0,s=this._isInsideIconTabBar(),r=this._isInsideToolHeader();if(!e.length){return}if(!this.oSelectedItem||t&&t!==this.oSelectedItem._getNonEmptyKey()){if(t){this.oSelectedItem=this._findItemByKey(t)}if(!this.oSelectedItem&&(s||!t)){for(i=0;i<e.length;i++){if(!(e[i]instanceof h)&&e[i].getVisible()){this.oSelectedItem=e[i];break}}}}if(!r&&this.oSelectedItem&&!this.oSelectedItem.getVisible()){for(i=0;i<e.length;i++){if(!(e[i]instanceof h)&&e[i].getVisible()){this.oSelectedItem=e[i];break}}}if(!this.oSelectedItem){return}if(this._isUnselectable(this.oSelectedItem)){this.setSelectedItem(this.oSelectedItem._getFirstAvailableSubFilter(),true);return}this.setProperty("selectedKey",this.oSelectedItem._getNonEmptyKey(),true)};b.prototype._findItemByKey=function(e){var t=this.getTabFilters(),i;for(var s=0;s<t.length;s++){if(t[s]._getNonEmptyKey()===e){return t[s]}i=t[s]._getAllSubFilters();for(var r=0;r<i.length;r++){if(i[r]._getNonEmptyKey()===e){return i[r]}}}};b.prototype._applySelectionToFilters=function(){if(this._isInsideIconTabBar()&&!this.getParent().getExpanded()){return}this.oSelectedItem.$().addClass("sapMITBSelected").attr({"aria-selected":true});if(this.oSelectedItem._getNestedLevel()!==1){var e=this.oSelectedItem._getRootTab();e.$().addClass("sapMITBSelected").attr({"aria-selected":true})}};b.prototype._removeSelectionFromFilters=function(){this.oSelectedItem.$().removeClass("sapMITBSelected").attr({"aria-selected":false});if(this.oSelectedItem._getNestedLevel()!==1){var e=this.oSelectedItem._getRootTab();e.$().removeClass("sapMITBSelected").attr({"aria-selected":false})}};b.prototype._getItemsForOverflow=function(e,t){var i=this._getItemsInStrip(),s=this.getTabsOverflowMode()===y.StartAndEnd,r,o=this.getItems(),a=[];if(s){r=o.indexOf(i[0]);o=e?o.slice(0,r):o.slice(r,o.length)}o.forEach(function(e){if(!n.system.phone&&i.indexOf(e)>-1){return}a.push(e);if(e.isA("sap.m.IconTabFilter")&&!t){e._getAllSubItems().forEach(function(e){a.push(e)})}});return a};b.prototype.ontouchstart=function(e){var t=e.targetTouches[0];this._iActiveTouch=t.identifier};b.prototype.ontouchend=function(e){if(this._iActiveTouch===undefined){return}var t=0;var i=1;var s;if(e.which===s||e.which===t||e.which===i){this._handleActivation(e)}this._iActiveTouch=undefined};b.prototype.ontouchcancel=b.prototype.ontouchend;b.prototype.onkeydown=function(e){switch(e.which){case u.ENTER:this._handleActivation(e);e.preventDefault();break;case u.SPACE:e.preventDefault();break}};b.prototype.onkeyup=function(e){if(e.which===u.SPACE){this._handleActivation(e)}};b.prototype._handleDragAndDrop=function(e){var t=e.getParameter("dropPosition"),i=e.getParameter("draggedControl"),s=e.getParameter("droppedControl"),r=this,o=this.getMaxNestingLevel();if(t===v.On){r=s._getRealTab()}f.handleDrop(r,t,i._getRealTab(),s,false,o);if(i._getNestedLevel()>1){i._getRootTab()._closePopover()}this._setItemsForStrip();this._initItemNavigation();this._getOverflow()._setSelectListItems();this._getStartOverflow()._setSelectListItems();this._getSelectList()._initItemNavigation();i._getRealTab().$().trigger("focus");if(t===v.On){s._getRealTab().$().trigger("focus")}};b.prototype._moveTab=function(e,t,i){f.moveItem.call(this,e,t,i);this._setItemsForStrip();this._initItemNavigation()};b.prototype.ondragrearranging=function(e){if(!this.getEnableTabReordering()){return}var t=e.srcControl,i=this.indexOfItem(this._getItemsInStrip().pop());e.preventDefault();this._moveTab(t,e.keyCode,i);t.$().trigger("focus")};b.prototype.onsaphomemodifiers=b.prototype.ondragrearranging;b.prototype.onsapendmodifiers=b.prototype.ondragrearranging;b.prototype.onsapincreasemodifiers=b.prototype.ondragrearranging;b.prototype.onsapdecreasemodifiers=b.prototype.ondragrearranging;return b});
//# sourceMappingURL=IconTabHeader.js.map