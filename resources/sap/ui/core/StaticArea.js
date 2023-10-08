/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/Localization","./UIArea","sap/ui/dom/_ready"],(e,t,i)=>{"use strict";let r;let n=false;i().then(()=>{n=true});const a={STATIC_UIAREA_ID:"sap-ui-static",getUIArea:()=>{if(!r){r=t.registry.get(a.STATIC_UIAREA_ID)||t.create(o());r.bInitial=false}return r},getDomRef:()=>a.getUIArea().getRootNode(),contains:e=>a.getDomRef().contains(e)};const o=()=>{if(!n){throw new Error("DOM is not ready yet. Static UIArea cannot be created.")}let t=document.getElementById(a.STATIC_UIAREA_ID);if(!t){t=document.createElement("div");var i=document.createElement("span");t.setAttribute("id",a.STATIC_UIAREA_ID);Object.assign(t.style,{height:"0",width:"0",overflow:"hidden",float:e.getRTL()?"right":"left"});i.setAttribute("id",a.STATIC_UIAREA_ID+"-firstfe");i.setAttribute("tabindex",-1);i.style.fontSize=0;t.appendChild(i);document.body.insertBefore(t,document.body.firstChild)}return t};return a});
//# sourceMappingURL=StaticArea.js.map