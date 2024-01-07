/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/strings/capitalize","sap/base/util/each","sap/base/util/isPlainObject"],function(e,r,t,a){"use strict";var s=e.getLogger("sap.ui.test.matchers.Properties");return function(e){return function(u){var n=true;t(e,function(e,t){var i=u["get"+r(e,0)];if(!i){n=false;s.error("Control '"+u+"' does not have a property '"+e+"'");return false}var o=i.call(u);if(t instanceof RegExp){n=t.test(o)}else if(a(t)&&t.regex&&t.regex.source){var l=new RegExp(t.regex.source,t.regex.flags);n=l.test(o)}else{n=o===t}if(!n){s.debug("Control '"+u+"' property '"+e+"' has value '"+o+"' but should have value '"+t+"'");return false}});return n}}},true);
//# sourceMappingURL=Properties.js.map