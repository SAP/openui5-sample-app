/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./encodeURL"],function(n){"use strict";var r=function(r){if(!r){return""}var t=[];Object.keys(r).forEach(function(e){var i=r[e];if(i instanceof String||typeof i==="string"){i=n(i)}t.push(n(e)+"="+i)});return t.join("&")};return r});
//# sourceMappingURL=encodeURLParameters.js.map