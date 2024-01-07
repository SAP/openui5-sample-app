/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/URI","sap/base/util/isPlainObject"],function(r,t){"use strict";function e(){var t=new Error;var e="No stack trace available";var n=(new r).search(true);var a=["false",undefined].indexOf(n.opaFrameIEStackTrace)<0;if(t.stack){e=t.stack}else if(a){try{throw t}catch(r){e=r.stack}}return e.replace(/^Error\s/,"")}function n(r){return"'"+r.toString().replace(/\"/g,"'")+"'"}function a(r){try{return Array.prototype.map.call(r,e).join("; ")}catch(t){return"'"+r+"'"}function e(r){if(typeof r==="function"){return n(r)}if(Array.isArray(r)){var a=Array.prototype.map.call(r,e);return"["+a.join(", ")+"]"}if(t(r)){return JSON.stringify(r)}return"'"+r.toString()+"'"}}function i(r,t){var e=document.querySelector(r);if(e){t(e)}else{setTimeout(function(){i(r,t)},100)}}return{resolveStackTrace:e,functionToString:n,argumentsToString:a,onElementAvailable:i}},true);
//# sourceMappingURL=_utils.js.map