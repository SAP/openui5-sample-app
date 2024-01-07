/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(r){"use strict";var e=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g;var t=function(t,n){r(typeof t==="string"||t instanceof String,"pattern must be string");if(arguments.length>2||n!=null&&!Array.isArray(n)){n=Array.prototype.slice.call(arguments,1)}n=n||[];return t.replace(e,function(r,e,t,s,a){if(e){return"'"}else if(t){return t.replace(/''/g,"'")}else if(s){return String(n[parseInt(s)])}throw new Error("formatMessage: pattern syntax error at pos. "+a)})};return t});
//# sourceMappingURL=formatMessage.js.map