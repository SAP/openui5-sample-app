/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/Lib","sap/ui/core/RenderManager","sap/ui/core/format/NumberFormat","sap/m/library","sap/ui/model/ChangeReason","sap/ui/base/ManagedObjectMetadata","sap/ui/base/ManagedObjectObserver","sap/ui/core/HTML","sap/m/CustomListItem","sap/base/security/encodeXML","sap/ui/thirdparty/jquery"],function(t,e,i,s,o,r,n,a,l,h,g,jQuery){"use strict";var d=o.ListType;var u=o.ListGrowingDirection;var f=t.extend("sap.m.GrowingEnablement",{constructor:function(e){t.apply(this);this._oControl=e;this._oControl.bUseExtendedChangeDetection=true;this._oControl.addDelegate(this);var i=this._oControl.getItems(true).length;this._iRenderedDataItems=i;this._iLimit=i;this._bLoading=false;this._bDataRequested=false;this._bSkippedItemsUpdateUntilDataReceived=false;this._iLastItemsCount=0;this._iTriggerTimer=0;this._aChunk=[];this._oRM=null;this._aItemsPool=[]},destroy:function(){if(this._oTrigger){this._oTrigger.destroy();this._oTrigger=null}if(this._oScrollDelegate){this._oScrollDelegate.setGrowingList(null);this._oScrollDelegate=null}if(this._oRM){this._oRM.destroy();this._oRM=null}if(this._oObserver){this._oObserver.disconnect();this._oObserver=null}this.clearItemsPool();this._oControl.$("triggerList").remove();this._oControl.bUseExtendedChangeDetection=false;this._oControl.removeDelegate(this);this._oControl=null},render:function(t){t.openStart("div",this._oControl.getId()+"-triggerList");t.class("sapMListUl").class("sapMGrowingList");t.style("display","none");t.openEnd();t.renderControl(this._getTrigger());t.close("div")},onAfterRendering:function(){var t=this._oControl;if(t.getGrowingScrollToLoad()){var e=o.getScrollDelegate(t);if(e){this._oScrollDelegate=e;e.setGrowingList(this.onScrollToLoad.bind(this),t.getGrowingDirection(),this._updateTrigger.bind(this,false))}}else if(this._oScrollDelegate){this._oScrollDelegate.setGrowingList(null);this._oScrollDelegate=null}if(!this._bLoading){this._updateTriggerDelayed(false)}},onsapdown:function(t){var e=this._oControl;if(e._oItemNavigation&&!t.isMarked()){var i=e._oItemNavigation;var s=i.getItemDomRefs();var o=s[0];var r=s[s.length-i.iColumns];var n=e.getGrowingDirection();if(n!=u.Upwards&&t.type=="sapdown"&&t.target===r||n==u.Upwards&&t.type=="sapup"&&t.target===o){var a=e.$("trigger");a.trigger("focus");t.setMarked();t.stopImmediatePropagation()}else if((n==u.Upwards&&t.type=="sapdown"||n!=u.Upwards&&t.type=="sapup")&&t.target===e.getDomRef("trigger")){jQuery(t.type=="sapdown"?o:r).trigger("focus");t.setMarked();t.stopImmediatePropagation()}}},onsapup:function(t){return this.onsapdown(t)},setTriggerText:function(t){this._oControl.$("triggerText").text(t)},reset:function(t){this._iLimit=0;if(t){return}if(this._oObserver){this._oObserver.disconnect();this._oObserver=null}this.clearItemsPool();var e=this._oControl.getBindingInfo("items");this._oControl.oExtendedChangeDetectionConfig=!e||!e.template?null:{replace:true}},clearItemsPool:function(){this._aItemsPool.forEach(function(t){t.destroy()});this._aItemsPool=[]},shouldReset:function(t){var e=r;return t==e.Sort||t==e.Filter||t==e.Context},getInfo:function(){return{total:this._oControl.getMaxItemsCount(),actual:this._iRenderedDataItems}},onScrollToLoad:function(){if(this._bLoading){return}if(this._oControl.getGrowingDirection()==u.Upwards){var t=this._oScrollDelegate;this._oScrollPosition={left:t.getScrollLeft(),top:t.getScrollHeight()}}this.requestNewPage()},requestNewPage:function(){if(!this._oControl||this._bLoading){return}var t=this._oControl.getBinding("items");if(t&&!t.isLengthFinal()||this._iLimit<this._oControl.getMaxItemsCount()){this._oControl._bBusy=true;this._iLimit+=this._oControl.getGrowingThreshold();this._updateTriggerDelayed(true);this.updateItems("Growing")}},_onBeforePageLoaded:function(t){this._bLoading=true;this._oControl.onBeforePageLoaded(this.getInfo(),t)},_onAfterPageLoaded:function(t){if(!this._oControl){return}this._bLoading=false;this._updateTriggerDelayed(false);this._oControl.onAfterPageLoaded(this.getInfo(),t)},_getTrigger:function(){var t=this._oControl.getId()+"-trigger",i=this._oControl.getGrowingTriggerText();i=i||e.getResourceBundleFor("sap.m").getText("LOAD_MORE_DATA");this._oControl.addNavSection(t);if(this._oTrigger){this.setTriggerText(i);return this._oTrigger}this._oTrigger=new h({id:t,busyIndicatorDelay:0,type:d.Active,content:new l({content:'<div class="sapMGrowingListTrigger">'+'<div class="sapMSLIDiv sapMGrowingListTriggerText">'+'<span class="sapMSLITitle" id="'+t+'Text">'+g(i)+"</span>"+"</div>"+'<div class="sapMGrowingListDescription sapMSLIDescription" id="'+t+'Info"></div>'+'<div class="sapUiInvisibleText" id="'+t+'Message"></div>'+"</div>"})});this._oTrigger.getList=function(){};this._oTrigger.TagName="div";this._oTrigger.setGroupedItem=function(){};this._oTrigger.setParent(this._oControl,null,true).attachPress(this.requestNewPage,this).addDelegate({onsapenter:function(t){this.requestNewPage();t.preventDefault()},onsapspace:function(t){this._bSpaceKeyPressed=true;this._oTrigger.setActive(true);t.preventDefault()},onkeydown:function(t){this._bSpaceKeyCancelled=this._bSpaceKeyCancelled||(t.shiftKey||t.which==27)},onkeyup:function(t){this._bSpaceKeyPressed&&!this._bSpaceKeyCancelled&&this.requestNewPage();this._bSpaceKeyPressed=this._bSpaceKeyCancelled=false;this._oTrigger.setActive(false)},onAfterRendering:function(e){var i=this._oTrigger.$();i.removeAttr("aria-selected");i.removeAttr("aria-roledescription");i.removeAttr("aria-posinset").removeAttr("aria-setsize");i.attr({tabindex:0,role:"button","aria-labelledby":t+"Text","aria-describedby":t+"Message"})}},this);return this._oTrigger},_getListItemInfo:function(){var t=this._getItemCounts();var e=s.getFloatInstance();return"[ "+e.format(t[0])+" / "+e.format(t[1])+" ]"},_getItemCounts:function(){return[this._iRenderedDataItems,this._oControl.getMaxItemsCount()]},_getGroupingPath:function(t){var e=t.aSorters||[];var i=e[0]||{};return i.fnGroup?i.sPath||"":undefined},_getDomIndex:function(t){if(typeof t!="number"){return t}if(this._oControl.hasPopin&&this._oControl.hasPopin()){return t*2}return t},_getHasScrollbars:function(){if(!this._oScrollDelegate){return false}if(this._getDomIndex(this._iRenderedDataItems)>window.innerHeight/32){return true}return this._oScrollDelegate.getMaxScrollTop()>this._oControl.getDomRef("triggerList").offsetHeight},destroyListItems:function(t){this._oControl.destroyItems(t);this._iRenderedDataItems=0;this._aChunk=[]},addListItem:function(t,e,i){var s=this._oControl,o=e.binding,r=this.createListItem(t,e);if(o.isGrouped()){var n=s.getItems(true),a=n[n.length-1],l=e.model,h=o.getGroup(r.getBindingContext(l));if(a&&a.isGroupHeader()){s.removeAggregation("items",a,true);s.setLastGroupHeader(a);this._fnAppendGroupItem=this.appendGroupItem.bind(this,h,a,i);a=n[n.length-1]}if(!a||h.key!==o.getGroup(a.getBindingContext(l)).key){var g=e.groupHeaderFactory?e.groupHeaderFactory(h):s.getGroupHeaderTemplate(h);if(s.getGrowingDirection()==u.Upwards){this.applyPendingGroupItem();s.setLastGroupHeader(g);this._fnAppendGroupItem=this.appendGroupItem.bind(this,h,g,i)}else{this.appendGroupItem(h,g,i)}}var d=s.getLastGroupHeader();if(d){d.invalidate()}}s.addAggregation("items",r,i);if(i){this._aChunk.push(r)}},applyPendingGroupItem:function(){if(this._fnAppendGroupItem){this._fnAppendGroupItem();this._fnAppendGroupItem=undefined}},appendGroupItem:function(t,e,i){e=this._oControl.addItemGroup(t,e,i);if(i){this._aChunk.push(e)}},fillItemsPool:function(){if(!this._oControl||!this._iLimit||this._iRenderedDataItems||this._aItemsPool.length){return}var t=this._oControl.getBindingInfo("items");var e=t.template;if(!e){return}for(var i=0,s=Math.min(this._iLimit,100);i<s;i++){this._aItemsPool.push(t.factory())}if(e.getCells){this._oObserver=new a(this.clearItemsPool.bind(this));this._oObserver.observe(e,{aggregations:["cells"]})}},createListItem:function(t,e){this._iRenderedDataItems++;if(this._aItemsPool.length){return this._aItemsPool.shift().setBindingContext(t,e.model)}return f.createItem(t,e)},updateItemsBindingContext:function(t,e){if(!t.length){return}var i=this._oControl.getItems(true);for(var s=0,o=0,r;s<i.length;s++){r=i[s];if(!r.isGroupHeader()){r.setBindingContext(t[o++],e)}}},applyChunk:function(t,e,s){if(!this._oControl){return}this.applyPendingGroupItem();var o=this._iChunkTimer;var r=this._aChunk.length;var n=this._oControl.getItemsContainerDomRef();if(o){this._iChunkTimer=clearTimeout(o)}if(!n||!this._oControl.shouldRenderItems()){this._aChunk=[];return}if(!r){if(s){this._oControl.updateAccessbilityOfItems()}return}if(o&&!e){this._oControl.invalidate();this._aChunk=[];return}if(this._oControl.getGrowingDirection()==u.Upwards){this._aChunk.reverse();if(t===true){t=0}else if(typeof t=="number"){t=this._iRenderedDataItems-r-t}}this._oRM=this._oRM||new i;for(var a=0;a<r;a++){this._oRM.renderControl(this._aChunk[a])}this._bHadFocus=t==false&&n.contains(document.activeElement);this._oRM.flush(n,false,this._getDomIndex(t));this._bHadFocus&&this._oControl.focus();if(!this._oControl.getBusy()){this._bHadFocus=false}if(s){this._oControl.updateAccessbilityOfItems()}this._aChunk=[]},applyChunkAsync:function(t,e){if(this._bApplyChunkAsync){this._iChunkTimer=setTimeout(this.applyChunk.bind(this,t,true,e))}else{this.applyChunk(t,false,e)}},addListItems:function(t,e,i){for(var s=0;s<t.length;s++){this.addListItem(t[s],e,i)}},rebuildListItems:function(t,e,i){this.destroyListItems(i);this.addListItems(t,e,i);if(i){this.applyChunkAsync(false)}else{this.applyPendingGroupItem()}},insertListItem:function(t,e,i){var s=this.createListItem(t,e);this._oControl.insertAggregation("items",s,i,true);this._aChunk.push(s)},deleteListItem:function(t){var e=this._oControl.getItems(true)[t];if(e){this._oControl.getItems(true)[t].destroy(true);this._iRenderedDataItems--}},refreshItems:function(t){var e=this._oControl;var i=e.getBinding("items");this._bApplyChunkAsync=i.isA("sap.ui.model.odata.v4.ODataListBinding")&&e.checkGrowingFromScratch();if(!this._bDataRequested){this._bDataRequested=true;this._onBeforePageLoaded(t)}if(!this._iLimit||this.shouldReset(t)||!e.getItems(true).length){this._iLimit=e.getGrowingThreshold()}if(!i.isA("sap.ui.model.odata.ODataListBinding")){if(e._bBusy){setTimeout(this.fillItemsPool.bind(this))}else{i.attachEventOnce("dataRequested",function(){setTimeout(this.fillItemsPool.bind(this))},this)}}i.getContexts(0,this._iLimit)},updateItems:function(t){var e=this._oControl,i=e.getBinding("items"),s=e.getBindingInfo("items"),o=e.getItems(true),n=this._sGroupingPath,a=false;if(!this._iLimit||this.shouldReset(t)||!o.length){this._iLimit=e.getGrowingThreshold()}this._bSkippedItemsUpdateUntilDataReceived=false;if(this._bDataRequested){this._bDataRequested=false}else{this._onBeforePageLoaded(t)}var l=i.getContexts(0,this._iLimit)||[];if(l.dataRequested){this._bDataRequested=true;if(l.diff&&!l.diff.length){if(t===r.Context){this._bSkippedItemsUpdateUntilDataReceived=true}return}}this._sGroupingPath=this._getGroupingPath(i);var h=l.diff;if(!l.length){this.destroyListItems()}else if(!o.length&&!e.getItemsContainerDomRef()){this.rebuildListItems(l,s)}else if(!h||!o.length&&h.length){this.rebuildListItems(l,s,e.shouldGrowingSuppressInvalidation())}else{var g=false,d=true;const t=!e.isA("sap.m.Table");if(i.isGrouped()||e.checkGrowingFromScratch()){if(n!=this._sGroupingPath){g=true}else{for(var u=0;u<h.length;u++){var f=h[u],_=l[f.index];if(f.type=="delete"||f.type=="replace"){g=true;break}else if(f.index!=this._iRenderedDataItems){g=true;break}else{this.addListItem(_,s,true)}}}}else{if(n!=undefined&&this._sGroupingPath==undefined){e.removeGroupHeaders(true);a=true}d=-1;var p=-1;for(var u=0;u<h.length;u++){var f=h[u],c=f.index,_=l[c];if(!a&&f.type!="replace"&&this._iRenderedDataItems>0){if(t){a=true}else if(f.type=="insert"&&c!=this._iRenderedDataItems){a=true}else if(f.type=="delete"&&c!=this._iRenderedDataItems-1){a=true}}if(f.type=="delete"){if(d!=-1){this.applyChunk(d);p=-1;d=-1}this.deleteListItem(c)}else if(f.type=="insert"){if(d==-1){d=c}else if(p>-1&&c!=p+1){this.applyChunk(d);d=c}this.insertListItem(_,s,c);p=c}}}if(g){this.rebuildListItems(l,s,true)}else{this.updateItemsBindingContext(l,s.model);this.applyChunkAsync(d,a)}}if(!this._bDataRequested){this._onAfterPageLoaded(t)}},_onBindingDataReceivedListener:function(t){if(this._bSkippedItemsUpdateUntilDataReceived&&!t.getParameter("data")){this._bSkippedItemsUpdateUntilDataReceived=false;this.destroyListItems();this._onAfterPageLoaded()}},_updateTriggerDelayed:function(t){if(this._oControl.getGrowingScrollToLoad()){this._iTriggerTimer&&clearTimeout(this._iTriggerTimer);this._iTriggerTimer=setTimeout(this._updateTrigger.bind(this,t))}else{this._updateTrigger(t)}},_updateTrigger:function(t){var i=this._oTrigger,s=this._oControl,o=s&&s.getVisibleItems().length>0,r=s&&s.getBinding("items");if(!i||!s||!o||!r||!s.shouldRenderItems()||!s.getDomRef()){this._bHadFocus=false;return}i.setBusy(t);i.$().toggleClass("sapMGrowingListBusyIndicatorVisible",t);if(t){i.setActive(false);s.$("triggerList").css("display","")}else{var n=s.getItems(true),a=n.length,l=r.getLength()||0,h=r.isLengthFinal(),g=s.getGrowingScrollToLoad(),d=i.getDomRef();if(this._bHadFocus){this._bHadFocus=false;jQuery(this._oControl.getNavigationRoot()).trigger("focus")}else if(!this._iFocusTimer&&d&&d.contains(document.activeElement)){var f=n[this._iLastItemsCount]||n[a-1]||s;this._iFocusTimer=setTimeout(function(){this._iFocusTimer=0;f.focus()}.bind(this))}if(!a||!this._iLimit||!l||h&&this._iLimit>=l||g&&this._getHasScrollbars()){s.$("triggerList").css("display","none");s.$("listUl").removeClass("sapMListHasGrowing")}else{var _=e.getResourceBundleFor("sap.m");if(h){s.$("triggerInfo").css("display","block").text(this._getListItemInfo());var p=this._getItemCounts();s.$("triggerMessage").text(_.getText(s.isA("sap.m.Table")?"LOAD_MORE_ROWS_ACC_WITH_COUNT":"LOAD_MORE_DATA_ACC_WITH_COUNT",p))}else{s.$("triggerMessage").text(_.getText("LOAD_MORE_DATA_ACC"))}s.$("triggerList").css("display","");s.$("listUl").addClass("sapMListHasGrowing");i.$().removeClass("sapMGrowingListBusyIndicatorVisible");setTimeout(this.adaptTriggerButtonWidth.bind(this))}this._iLastItemsCount=this._oControl.getItems(true).length;if(g&&this._oScrollPosition===undefined&&s.getGrowingDirection()==u.Upwards){this._oScrollPosition={left:0,top:0}}if(a>0&&this._oScrollPosition){var c=this._oScrollDelegate,m=this._oScrollPosition;c.scrollTo(m.left,c.getScrollHeight()-m.top);this._oScrollPosition=null}}},adaptTriggerButtonWidth:function(){var t=this._oControl;if(!t||!t.isA("sap.m.Table")||t.hasPopin()||!t.shouldRenderDummyColumn()){return}window.requestAnimationFrame(function(){var e=this._oTrigger&&this._oTrigger.getDomRef();if(!e||!e.clientWidth){return}var i=Array.from(t.getDomRef("tblHeader").childNodes).slice(0,-1).map(function(t){var e=t.style.width;if(!e||!e.includes("%")){return t.getBoundingClientRect().width+"px"}else{return e}}).join(" + ");e.style.width="calc("+i+" + 1px)";e.classList.add("sapMGrowingListDummyColumn")}.bind(this))}});f.createItem=function(t,e,i){var s=e.factory(n.uid(i?i:"clone"),t);return s.setBindingContext(t,e.model)};return f});
//# sourceMappingURL=GrowingEnablement.js.map