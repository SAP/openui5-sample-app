/*
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";class l{#l;#e;constructor(l){this.#l=l;this.#e=l?[]:null}register(l){if(typeof l!=="function"){throw new Error("Registered callback must be a function.")}if(this.#l){this.#e.push(l)}else{if(this.#e){throw new Error(`Callback is already registered. The hooks are restricted to the 'sap.ui.fl' library only.`)}this.#e=l}}isRegistered(){return this.#l?this.#e.length>0:!!this.#e}deregister(){this.#e=this.#l?[]:null}execute(...l){return this.#l?this.#e.map(e=>e(...l)):this.#e?.(...l)}}const e={onModelCreated:new l(false),onInstanceCreated:new l(true),onPreprocessManifest:new l(false),onComponentLoaded:new l(false)};return e});
//# sourceMappingURL=ComponentHooks.js.map