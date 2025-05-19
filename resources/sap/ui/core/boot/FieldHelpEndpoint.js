/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";let n;function e(){n??=new Promise((n,e)=>{sap.ui.require(["sap/ui/core/fieldhelp/FieldHelp"],n,e)});return n}function t(n){const e={service:"sap.companion.services.UpdateHotspots",type:"request",body:{hotspots:n}};window.postMessage(JSON.stringify(e),document.location.origin)}const i={"sap.companion.services.StartCompanion":async function(){const n=await e();n.getInstance().activate(t)},"sap.companion.services.StopCompanion":async function(){const n=await e();n.getInstance().deactivate()}};window.addEventListener("message",n=>{if(n.origin!==document.location.origin){return}let e=n.data;if(typeof e==="string"){try{e=JSON.parse(e)}catch(n){}}const t=e?.service;if(!t){return}const o=i[t];if(o){o()}});return{run:function(){return Promise.resolve()}}});
//# sourceMappingURL=FieldHelpEndpoint.js.map