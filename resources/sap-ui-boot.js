/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(){"use strict";var e,t,r;e=document.getElementById("sap-ui-bootstrap");if(e){t=/^(?:.*\/)?resources\//.exec(e.getAttribute("src"));if(t){r=t[0]}}if(r==null){throw new Error("sap-ui-boot.js: could not identify script tag!")}function n(e,t){var n=e.length,o=0;if(n===0){t();return}function i(e){n--;if(e.type==="error"){o++}e.target.removeEventListener("load",i);e.target.removeEventListener("error",i);if(n===0&&o===0&&t){t()}}for(var a=0;a<e.length;a++){var s=document.createElement("script");s.addEventListener("load",i);s.addEventListener("error",i);s.src=r+e[a];document.head.appendChild(s)}}n(["ui5loader.js"],function(){sap.ui.loader.config({async:true});n(["ui5loader-autoconfig.js"])})})();
//# sourceMappingURL=sap-ui-boot.js.map