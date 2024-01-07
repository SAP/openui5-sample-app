/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/m/p13n/Popup"],function(e,t){"use strict";let n;const o=e.extend("sap.m.upload.p13n.modules.PersPopupManager",{constructor:function(){e.call(this);this._oRb=sap.ui.getCore().getLibraryResourceBundle("sap.m")}});o.getInstance=function(){if(!n){n=new o}return n};o.prototype.openP13nPopup=function(e,n,o,s){return this.createP13nPanels(e,n,o).then(n=>{const o=new t({title:this._oRb.getText("p13n.VIEW_SETTINGS"),panels:n,close:e=>{const t=e.getParameter("reason");s(t=="Ok");o._oPopup.attachAfterClose(function(){o.destroy()})}});e.addDependent(o);o.open();return o})};o.prototype.createP13nPanels=function(e,t,n){const o=[];n.forEach(e=>{const n=t[e];o.push(n.createPanel())});return Promise.all(o)};return o});
//# sourceMappingURL=PersPopupManager.js.map