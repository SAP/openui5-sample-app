/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var t="XHRInterceptor";var r=Object.create(null);var n=Object.create(null);function i(e){r[e]=Object.create(null);n[e]=window.XMLHttpRequest.prototype[e];window.XMLHttpRequest.prototype[e]=function(){var t=arguments;n[e].apply(this,t);for(var i in r[e]){r[e][i].apply(this,t)}}}var u={register:function(n,u,o){e.debug("Register '"+n+"' for XHR function '"+u+"'",t);if(!r[u]){i(u)}r[u][n]=o},unregister:function(n,i){var u=delete r[i][n];e.debug("Unregister '"+n+"' for XHR function '"+i+(u?"'":"' failed"),t);return u},isRegistered:function(e,t){return r[t]&&r[t][e]}};return u});
//# sourceMappingURL=XHRInterceptor.js.map