/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(e,r){var t;if(typeof e!=="string"||typeof r!=="string"){return false}if(r===""){return true}while(e){if(e.toLowerCase().indexOf(r.toLowerCase())===0){return true}t=e.indexOf(" ");if(t===-1){break}e=e.substring(t+1)}return false};return e});
//# sourceMappingURL=wordStartsWithValue.js.map