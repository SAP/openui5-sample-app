/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","./Configuration","./UIArea","sap/ui/dom/_ready"],function(t,e,n,r){"use strict";var i=false;r().then(function(){i=true});var a={};a.STATIC_UIAREA_ID="sap-ui-static";var o;a.getUIArea=function(){if(!o){o=n.registry.get(a.STATIC_UIAREA_ID)||n.create(s());o.bInitial=false}return o};function s(){if(!i){throw new Error("DOM is not ready yet. Static UIArea cannot be created.")}var t=document.getElementById(a.STATIC_UIAREA_ID);if(!t){t=document.createElement("div");var n=document.createElement("span");t.setAttribute("id",a.STATIC_UIAREA_ID);Object.assign(t.style,{height:"0",width:"0",overflow:"hidden",float:e.getRTL()?"right":"left"});n.setAttribute("id",a.STATIC_UIAREA_ID+"-firstfe");n.setAttribute("tabindex",-1);n.style.fontSize=0;t.appendChild(n);document.body.insertBefore(t,document.body.firstChild)}return t}a.getDomRef=function(){return a.getUIArea().getRootNode()};a.contains=function(t){return a.getDomRef().contains(t)};return a});
//# sourceMappingURL=StaticArea.js.map