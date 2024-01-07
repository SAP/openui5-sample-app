/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r={};r.modifyUrls=function(r,u){function e(r,u){if(u===undefined){delete r.url}}[r.components,r.libs].forEach(function(r){if(Array.isArray(r)){r.forEach(function(r){if(typeof r!=="object"){return}if(typeof r.url==="string"){r.url=u(r.url);e(r,r.url)}else if(typeof r.url==="object"&&typeof r.url.url==="string"){r.url.url=u(r.url.url);e(r,r.url.url)}})}});return r};return r});
//# sourceMappingURL=AsyncHintsHelper.js.map