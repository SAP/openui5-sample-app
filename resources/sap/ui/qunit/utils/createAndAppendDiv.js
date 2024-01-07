/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var r=function(n,e){if(!Array.isArray(n)){return r([n],e)[0]}e=e||document.body;return n.map(function(r){var n=document.createElement("div");n.id=r;return e.appendChild(n)})};return r});
//# sourceMappingURL=createAndAppendDiv.js.map