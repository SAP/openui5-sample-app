/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(()=>{"use strict";const t=Symbol("parameters");class e{#t;constructor(e,s){for(const t in s){this[t]=s[t];Object.defineProperty(this,t,{configurable:false,writable:false})}this[t]=s;this.#t=e}get type(){return this.#t}static getParameters(e){return Object.assign({},e[t])}}return e});
//# sourceMappingURL=Event.js.map