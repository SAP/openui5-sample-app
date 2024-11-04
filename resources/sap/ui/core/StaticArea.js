/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","./UIArea","./UIAreaRegistry","sap/ui/dom/_ready"],(e,t,i,r)=>{"use strict";let n;let a=false;r().then(()=>{a=true});const o={STATIC_UIAREA_ID:"sap-ui-static",getUIArea:()=>{if(!n){n=i.get(o.STATIC_UIAREA_ID)||t.create(s());n.bInitial=false}return n},getDomRef:()=>o.getUIArea().getRootNode(),contains:e=>o.getDomRef().contains(e)};const s=()=>{if(!a){throw new Error("DOM is not ready yet. Static UIArea cannot be created.")}let t=document.getElementById(o.STATIC_UIAREA_ID);if(!t){t=document.createElement("div");var i=document.createElement("span");t.setAttribute("id",o.STATIC_UIAREA_ID);Object.assign(t.style,{height:"0",width:"0",overflow:"hidden",float:e.getRTL()?"right":"left"});i.setAttribute("id",o.STATIC_UIAREA_ID+"-firstfe");i.setAttribute("tabindex",-1);i.style.fontSize=0;t.appendChild(i);document.body.insertBefore(t,document.body.firstChild)}return t};return o});
//# sourceMappingURL=StaticArea.js.map