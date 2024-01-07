/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert","sap/base/security/URLListValidator","sap/ui/thirdparty/caja-html-sanitizer"],function(i,t){"use strict";var a=function(a,e){i(window.html&&window.html.sanitize,"Sanitizer should have been loaded");e=e||{uriRewriter:function(i){if(t.validate(i)){return i}}};var r=e.tagPolicy||window.html.makeTagPolicy(e.uriRewriter,e.tokenPolicy);return window.html.sanitizeWithPolicy(a,r)};return a});
//# sourceMappingURL=sanitizeHTML.js.map