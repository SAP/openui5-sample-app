/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/m/p13n/Popup","sap/ui/core/Lib"],function(e,t,n){"use strict";let o;const s=e.extend("sap.m.upload.p13n.modules.PersPopupManager",{constructor:function(){e.call(this);this._oRb=n.getResourceBundleFor("sap.m")}});s.getInstance=function(){if(!o){o=new s}return o};s.prototype.openP13nPopup=function(e,n,o,s){return this.createP13nPanels(e,n,o).then(n=>{const o=new t({title:this._oRb.getText("p13n.VIEW_SETTINGS"),panels:n,close:e=>{const t=e.getParameter("reason");s(t=="Ok");o._oPopup.attachAfterClose(function(){o.destroy()})}});e.addDependent(o);o.open();return o})};s.prototype.createP13nPanels=function(e,t,n){const o=[];n.forEach(e=>{const n=t[e];o.push(n.createPanel())});return Promise.all(o)};return s});
//# sourceMappingURL=PersPopupManager.js.map