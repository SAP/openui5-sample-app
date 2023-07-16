/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./InstanceManager","sap/ui/core/Popup","sap/ui/core/library","sap/ui/core/Control","sap/ui/Device","sap/ui/core/Core","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/core/Configuration"],function(e,t,o,i,n,s,a,jQuery,r){"use strict";var l=o.Dock;var u=o.CSSSize;var f={};var d="0 -64",c="sapMMessageToast",p="sapUiSelectable",m="sapContrast",v="sapContrastPlus";f._mSettings={duration:3e3,width:"15em",my:"center bottom",at:"center bottom",of:document.defaultView,offset:"0 0",collision:"fit fit",onClose:null,animationTimingFunction:"ease",animationDuration:1e3,autoClose:true,closeOnBrowserNavigation:true};f._aPopups=[];f._iOpenedPopups=0;f._bBoundedEvents=false;f._mOptions={};f._sMessage="";f._validateSettings=function(e){f._isFiniteInteger(e.duration);f._validateWidth(e.width);f._validateDockPosition(e.my);f._validateDockPosition(e.at);f._validateOf(e.of);f._validateOffset(e.offset);f._validateCollision(e.collision);f._validateOnClose(e.onClose);f._validateAutoClose(e.autoClose);f._validateAnimationTimingFunction(e.animationTimingFunction);f._isFiniteInteger(e.animationDuration)};f._isFiniteInteger=function(e){if(typeof e!=="number"||!isFinite(e)||!(Math.floor(e)===e)||e<=0){a.error('"iNumber" needs to be a finite positive nonzero integer on '+f+"._isFiniteInteger")}};f._validateWidth=function(e){if(!u.isValid(e)){a.error(e+" is not of type "+'"sap.ui.core.CSSSize" for property "width" on '+f+"._validateWidth")}};f._validateDockPosition=function(e){if(!l.isValid(e)){a.error('"'+e+'"'+" is not of type "+'"sap.ui.core.Popup.Dock" on '+f+"._validateDockPosition")}};f._validateOf=function(e){if(!(e instanceof jQuery)&&!(e&&e.nodeType===1)&&!(e instanceof i)&&e!==window){a.error('"of" needs to be an instance of sap.ui.core.Control or an Element or a jQuery object or the window on '+f+"._validateOf")}};f._validateOffset=function(e){if(typeof e!=="string"){a.error(e+" is of type "+typeof e+', expected "string" for property "offset" on '+f+"._validateOffset")}};f._validateCollision=function(e){var t=/^(fit|flip|none|flipfit|flipflip|flip flip|flip fit|fitflip|fitfit|fit fit|fit flip)$/i;if(!t.test(e)){a.error('"collision" needs to be a single value “fit”, “flip”, or “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none", "flipfit" on '+f+"._validateOffset")}};f._validateOnClose=function(e){if(typeof e!=="function"&&e!==null){a.error('"onClose" should be a function or null on '+f+"._validateOnClose")}};f._validateAutoClose=function(e){if(typeof e!=="boolean"){a.error('"autoClose" should be a boolean on '+f+"._validateAutoClose")}};f._validateAnimationTimingFunction=function(e){var t=/^(ease|linear|ease-in|ease-out|ease-in-out)$/i;if(!t.test(e)){a.error('"animationTimingFunction" should be a string, expected values: '+"ease, linear, ease-in, ease-out, ease-in-out on "+f+"._validateAnimationTimingFunction")}};function _(e){for(var t=["my","at","of","offset"],o=0;o<t.length;o++){if(e[t[o]]!==undefined){return false}}return true}function g(e){var t=document.createElement("div");t.className=c+" "+p+" "+m+" "+v;if(r.getAccessibility()){t.setAttribute("role","alert")}t.style.width=e.width;t.appendChild(document.createTextNode(e.message));return t}function y(e){if(e){if(_(e)){e.offset=d}if(e.of&&e.of.nodeType===9){e.of=document.defaultView}}else{e={offset:d}}return e}f._handleResizeEvent=function(){if(n.system.phone||n.system.tablet){f._resetPosition(f._aPopups)}setTimeout(f["_applyPositions"].bind(f,f._aPopups),0)};f._handleMouseDownEvent=function(e){var t=e.target.hasAttribute("class")&&e.target.getAttribute("class").indexOf(c)!==-1;if(t||e.isMarked("delayedMouseEvent")){return}f._aPopups.forEach(function(e){e&&e.__bAutoClose&&e.close()})};f._resetPosition=function(e){for(var t=0,o;t<e.length;t++){o=e[t]&&e[t].getContent();if(o){o.style.visibility="hidden";o.style.left=0}}};f._applyPositions=function(e){for(var t=0,o,i;t<e.length;t++){o=e[t];if(o){i=o._oPosition;if(n.system.phone||n.system.tablet){setTimeout(f["_applyPosition"].bind(f,o,i),0)}else{o.setPosition(i.my,i.at,i.of,i.offset)}}}};f._applyPosition=function(e,t){t=t||e._oPosition;var o=e.getContent();e.setPosition(t.my,t.at,t.of,t.offset);o.style.visibility="visible"};f._setCloseAnimation=function(e,t,o,i){var n="opacity "+i.animationTimingFunction+" "+i.animationDuration+"ms",s="webkitTransitionEnd."+c+" transitionend."+c,a=r.getAnimationMode(),l=a!==r.AnimationMode.none&&a!==r.AnimationMode.minimal;if(l&&i.animationDuration>0){e[0].style.webkitTransition=n;e[0].style.transition=n;e[0].style.opacity=0;e.on(s,function t(){e.off(s);o()})}else{o()}};f._fnKeyDown=function(e){var t;var o=this._aPopups[0];var i=e.altKey;var n=e.ctrlKey;if(o&&o.isOpen()&&i&&n&&e.code==="KeyM"){t=document.querySelector(".sapMMessageToastHiddenFocusable");o.getContent().classList.add("sapMFocus");t.focus();clearTimeout(this._iCloseTimeoutId)}};function h(e){var t=e.altKey;var o=e.ctrlKey;var i=this._aPopups[0];if(e.code==="Escape"||t&&o&&e.code==="KeyM"){setTimeout(function(){this._mSettings.opener&&this._mSettings.opener.focus()}.bind(this),0);i.close()}}f.show=function(o,i){var a=s.byId(s.getCurrentFocusedControlId())||sap.ui.core.Element.closestTo(document.activeElement);var r=a&&a.getUIArea&&a.getUIArea()||sap.ui.core.UIArea.registry.all()["body"]||sap.ui.core.UIArea.registry.all()["content"];var l=a&&a.getUIArea&&a.getUIArea();var u;var d=f,p=jQuery.extend({},f._mSettings,{message:o}),m=new t,v,_,b="mousedown."+c+" touchstart."+c,C;f._mSettings.opener=a;if(!this._oRootNode||this._oRootNode&&l&&l.getRootNode()!==this._oRootNode){this._oRootNode=r?r.getRootNode():null}i=y(i);jQuery.extend(p,i);f._validateSettings(p);_=g(p);v=f._aPopups.push(m)-1;m.setContent(_);m.setPosition(p.my,p.at,p.of,p.offset,p.collision);m.setAnimations(function e(t,o,i){i()},function e(t,o,i){d._setCloseAnimation(t,o,i,p)});m.setShadow(false);m.__bAutoClose=p.autoClose;if(p.closeOnBrowserNavigation){e.addPopoverInstance(m)}if(!f._bBoundedEvents){jQuery(window).on("resize."+c,f._handleResizeEvent.bind(f));jQuery(document).on(b,f._handleMouseDownEvent.bind(f));f._bBoundedEvents=true}u=document.createElement("span");u.setAttribute("tabIndex",0);u.setAttribute("class","sapMMessageToastHiddenFocusable");m.getContent().prepend(u);if(this._oRootNode){this._oRootNode.removeEventListener("keydown",d._fnKeyDown.bind(d));this._oRootNode.addEventListener("keydown",d._fnKeyDown.bind(d));u.addEventListener("keydown",h.bind(this))}m.open();f._iOpenedPopups++;function P(){e.removePopoverInstance(d._aPopups[v]);jQuery(d._aPopups[v].getContent()).remove();d._aPopups[v].detachClosed(P);d._aPopups[v].destroy();d._aPopups[v]=null;d._iOpenedPopups--;if(d._iOpenedPopups===0){d._aPopups=[];jQuery(window).off("resize."+c);jQuery(document).off(b);d._bBoundedEvents=false}if(typeof p.onClose==="function"){p.onClose.call(d)}}m.attachClosed(P);this._iCloseTimeoutId=setTimeout(m["close"].bind(m),p.duration);function w(){clearTimeout(this._iCloseTimeoutId);this._iCloseTimeoutId=null;function e(){C=setTimeout(m["close"].bind(m),p.duration);m.getContent().removeEventListener("mouseleave",e)}m.getContent().addEventListener("mouseleave",e);clearTimeout(C);C=null}m.getContent().addEventListener("touchstart",w);m.getContent().addEventListener("mouseover",w);if(n.system.desktop){m.getContent().addEventListener("mouseleave",function(){if(document.activeElement!==m.getContent()){this._iCloseTimeoutId=setTimeout(m["close"].bind(m),p.duration)}})}};f.toString=function(){return"sap.m.MessageToast"};return f},true);
//# sourceMappingURL=MessageToast.js.map