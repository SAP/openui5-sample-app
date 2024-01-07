/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(){"use strict";var e=document.querySelector("[src$='runTest.js']");if(e&&!e.id&&document.getElementById("sap-ui-bootstrap")==null){e.id="sap-ui-bootstrap"}var a=new URLSearchParams(window.location.search);var r=a.has("coverage");var o=r&&a.get("coverage-mode")==="blanket";sap.ui.loader.config({async:!o})})();
//# sourceMappingURL=_configureLoader.js.map