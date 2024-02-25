/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/test/matchers/_Visitor"],function(e,t){"use strict";var n=e.getLogger("sap.ui.test.matchers.Descendant");var r=new t;return function(e,t){return function(i){if(!e){n.debug("No descendant was defined so no controls will be filtered.");return true}var s;if(typeof e==="string"){var a=r._getApplicationWindow();s=a.sap.ui.require("sap/ui/test/OpaPlugin").getElementById(e)}else{s=e}var u=r.isMatching(s,function(e){return i===e},t);if(!u){n.debug("Control '"+i+"' does not have "+(t?"direct ":"")+"descendant '"+s)}return u}}},true);
//# sourceMappingURL=Descendant.js.map