/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/base/BindingInfo","sap/ui/base/ManagedObject","sap/ui/core/Element","sap/ui/core/ElementRegistry","sap/ui/core/LabelEnablement"],function(e,t,o,i,s,n){"use strict";const l="sap/ui/core/fieldhelp/FieldHelp";const a="com.sap.vocabularies.Common.v1.DocumentationRef";let r;const d="urn:sap-com:documentation:key?=";function p(e){if(e){r._updateProperty(this,e)}else{r._updateElement(this)}}class c{#e=false;#t=null;#o={};#i=null;static _requestDocumentationRef(t){if(t.isDestroyed()){return undefined}const o=t.getResolvedPath();if(!o||o.includes("#")||o.includes("@")){return undefined}const i=t.getModel()?.getMetaModel();if(!i||!i.getMetaContext){return undefined}let s;if(i.isA("sap.ui.model.odata.ODataMetaModel")){s=i.loaded().then(()=>i.getObject("",i.getMetaContext(o))?.[a])}else{s=i.requestObject("@"+a,i.getMetaContext(o))}return s.then(e=>e?.String).catch(t=>{e.error(`Failed to request '${a}' annotation for path '${o}'`,t,l);return undefined})}_getFieldHelpDisplayMapping(){const e={};for(const o in this.#o){const s=i.getElementById(o);if(!s){delete this.#o[o];continue}let n;let l=s;do{n=l.getAssociation("fieldHelpDisplay")||l[t.OriginalParent]?.getId();l=l.getParent()}while(!n&&l);if(n){e[o]=n}}return e}_getFieldHelpHotspots(){const t=this._getFieldHelpDisplayMapping();const o={};const s=[];Object.keys(this.#o).forEach(a=>{const r=t[a]||a;const p=i.getElementById(r);const c=n._getLabelTexts(p)[0];if(!c){e.error(`Cannot find a label for control '${a}'; ignoring field help`,JSON.stringify(this.#o[a]),l);return}const u=new Set;Object.values(this.#o[a]).forEach(e=>{e.forEach(u.add.bind(u))});Array.from(u).forEach(e=>{if(r!==a){if(o[r]?.[e]){return}o[r]??={};o[r][e]=true}const t=new URLSearchParams(e.slice(d.length));const i=t.get("origin");s.push({backendHelpKey:{id:t.get("id"),type:t.get("type"),...i&&{origin:i}},hotspotId:r,labelText:c})})});return s}_setFieldHelpDocumentationRefs(e,t,o){const i=e.getId();this.#o[i]||={};if(o.length>0){this.#o[i][t]=o}else{delete this.#o[i][t];if(Object.keys(this.#o[i]).length===0){delete this.#o[i]}}this._updateHotspots().catch(()=>{})}_updateElement(e,t){if(e.isDestroyed()||e.isDestroyStarted()){t=[]}else{t||=e.data("sap-ui-DocumentationRef")||[]}this._setFieldHelpDocumentationRefs(e,undefined,t)}_updateHotspots(){if(this.#i){return this.#i}let e,t;this.#i=new Promise((o,i)=>{e=o;t=i});setTimeout(()=>{if(this.isActive()){this.#t(this._getFieldHelpHotspots());e()}else{t()}this.#i=null},0);return this.#i}_updateProperty(e,t){if(e.getMetadata().getProperty(t)?.group!=="Data"){return}const o=e.getBinding(t);if(!o){return}let i;if(o.isA("sap.ui.model.CompositeBinding")){const e=o.getType()?.getPartsIgnoringMessages()||[];i=o.getBindings().filter((t,o)=>!e.includes(o))}else{i=[o]}Promise.all(i.map(e=>c._requestDocumentationRef(e))).then(o=>{o=o.filter(e=>e);this._setFieldHelpDocumentationRefs(e,t,o)})}static getInstance(){r||=new c;return r}activate(e){if(this.#e){if(this.#t!==e){throw new Error("The field help is active for a different update hotspots callback handler")}return}this.#e=true;this.#t=e;s.forEach(e=>{const t=e.data("sap-ui-DocumentationRef");if(t){this._updateElement(e,t)}else{Object.keys(e.getMetadata().getAllProperties()).forEach(t=>{this._updateProperty(e,t)})}});o.prototype.updateFieldHelp=p}deactivate(){this.#e=false;this.#o={};this.#t=null;o.prototype.updateFieldHelp=undefined}isActive(){return this.#e}}return c});
//# sourceMappingURL=FieldHelp.js.map