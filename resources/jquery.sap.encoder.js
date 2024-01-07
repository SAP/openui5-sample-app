/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/base/security/encodeXML","sap/base/security/encodeJS","sap/base/security/encodeURL","sap/base/security/encodeURLParameters","sap/base/security/encodeCSS","sap/base/security/URLListValidator","sap/base/security/URLWhitelist","sap/base/security/sanitizeHTML"],function(jQuery,e,s,a,t,i,r,c,p){"use strict";jQuery.sap.encodeHTML=e;jQuery.sap.encodeXML=e;jQuery.sap.escapeHTML=e;jQuery.sap.encodeJS=s;jQuery.sap.escapeJS=s;jQuery.sap.encodeURL=a;jQuery.sap.encodeURLParameters=t;jQuery.sap.encodeCSS=i;jQuery.sap.clearUrlWhitelist=r.clear;jQuery.sap.addUrlWhitelist=r.add.bind(c);jQuery.sap.removeUrlWhitelist=function(e){r._delete(r.entries()[e])};jQuery.sap.getUrlWhitelist=r.entries;jQuery.sap.validateUrl=r.validate;jQuery.sap._sanitizeHTML=p;return jQuery});
//# sourceMappingURL=jquery.sap.encoder.js.map