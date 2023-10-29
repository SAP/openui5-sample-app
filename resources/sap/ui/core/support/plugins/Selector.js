/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/Popup","../Plugin","../Support","sap/ui/thirdparty/jquery","sap/base/util/uid"],function(t,e,o,i,jQuery,n){"use strict";var s=o.extend("sap.ui.core.support.plugins.Selector",{constructor:function(t){o.apply(this,["sapUiSupportSelector","",t]);this._aEventIds=[this.getId()+"Highlight"];this._oPopup=new e}});s.prototype.isToolPlugin=function(){return false};s.prototype.onsapUiSupportSelectorHighlight=function(t){r(t.getParameter("id"),this,t.getParameter("sendInfo"))};s.prototype.init=function(e){o.prototype.init.apply(this,arguments);var i;if(!this._sPopupId){this._sPopupId=this.getId()+"-"+n();var s=t.createRenderManager();s.openStart("div",this._sPopupId).style("border","2px solid rgb(0, 128, 0)").style("background-color","rgba(0, 128, 0, .55)").openEnd().close("div");s.flush(t.getStaticAreaRef(),false,true);s.destroy();i=jQuery(document.getElementById(this._sPopupId));this._oPopup.setContent(i[0])}else{i=jQuery(document.getElementById(this._sPopupId))}var p=this;this._fSelectHandler=function(t){if(!t.shiftKey||!t.altKey||!t.ctrlKey){return}var e=jQuery(t.target).closest("[data-sap-ui]").attr("id");if(r(e,p,true)){t.stopPropagation();t.preventDefault()}};this._fCloseHandler=function(t){p._oPopup.close(0)};i.on("click",this._fCloseHandler);jQuery(document).on("mousedown",this._fSelectHandler)};s.prototype.exit=function(t){this._oPopup.close(0);if(this._fCloseHandler){jQuery(document.getElementById(this._sPopupId)).off("click",this._fCloseHandler);this._fCloseHandler=null}if(this._fSelectHandler){jQuery(document).off("mousedown",this._fSelectHandler);this._fSelectHandler=null}o.prototype.exit.apply(this,arguments)};function r(t,e,o){if(t){var n=Element.getElementById(t);if(n){var s=jQuery(document.getElementById(e._sPopupId));var r=n.$();if(r.is(":visible")){s.width(r.outerWidth());s.height(r.outerHeight());e._oPopup.open(0,"BeginTop","BeginTop",r[0],"0 0","none");if(o){i.getStub().sendEvent(e.getId()+"Select",p(n,e))}setTimeout(function(){e._oPopup.close(0)},1e3);return true}}}return false}function p(t,e){return{id:t.getId()}}return s});
//# sourceMappingURL=Selector.js.map