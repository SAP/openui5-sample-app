/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/test/matchers/_Visitor"],function(e,t){"use strict";var r=e.getLogger("sap.ui.test.matchers.Ancestor");var n=new t;return function(e,t){return function(s){if(!e){r.debug("No ancestor was defined so no controls will be filtered.");return true}var i=n.isMatching(s,function(t){if(t===s){return false}if(typeof e==="string"){return t&&t.getId()===e}return t===e},t);r.debug("Control '"+s+(i?"' has ":"' does not have ")+(t?"direct ":"")+"ancestor '"+e);return i}}},true);
//# sourceMappingURL=Ancestor.js.map