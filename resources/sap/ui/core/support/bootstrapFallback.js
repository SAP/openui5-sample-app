/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(){"use strict";function t(t){console.error(t)}if(globalThis.sap?.ui){return}var e=/sap-ui-xx-support-bootstrap=([^&]*)/.exec(location.search);if(!e||e.length<2){t("Could not load 'sap-ui-core.js'. Please provide a URI-Parameter with the boostrap script. 'sap-ui-xx-support-bootstrap=file.js'");return}var r=decodeURIComponent(e[1]);if(r.indexOf("/")!==-1){t("Only local (same directory) boostrap script in URI-Parameter is allowed! 'sap-ui-xx-support-bootstrap="+r+"'");return}var o=document.getElementById("sap-ui-bootstrap");if(!o){t("Could not find existing sap-ui-boostrap script tag!");return}var a=document.createElement("script");a.setAttribute("id","sap-ui-bootstrap");a.setAttribute("src","../../../../"+r);o.parentNode.replaceChild(a,o)})();
//# sourceMappingURL=bootstrapFallback.js.map