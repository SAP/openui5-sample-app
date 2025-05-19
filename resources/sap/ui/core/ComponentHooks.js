/*
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";class e{#e;#l;constructor(e){this.#e=e;this.#l=e?[]:null}register(e){if(typeof e!=="function"){throw new Error("Registered callback must be a function.")}if(this.#e){this.#l.push(e)}else{if(this.#l){throw new Error(`Callback is already registered. The hooks are restricted to the 'sap.ui.fl' library only.`)}this.#l=e}}isRegistered(){return this.#e?this.#l.length>0:!!this.#l}deregister(){this.#l=this.#e?[]:null}execute(...e){return this.#e?this.#l.map(l=>l(...e)):this.#l?.(...e)}}const l={onModelCreated:new e(false),onInstanceCreated:new e(true),onPreprocessManifest:new e(false),onComponentLoaded:new e(false),onUIComponentInstanceInitialized:new e(false),onUIComponentInstanceDestroy:new e(false)};return l});
//# sourceMappingURL=ComponentHooks.js.map