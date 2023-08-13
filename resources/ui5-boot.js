/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(e){"use strict";var r,t,i,s,o,c,u=false;c=document.getElementById("sap-ui-bootstrap");if(c){i=c.getAttribute("src");s=i.match(/^(?:[^?#]*\/)?resources\//i);if(s){o=s[0]}}if(o==null){r=document.getElementsByTagName("script");for(t=0;t<r.length;t++){i=r[t].getAttribute("src");if(i){s=i.match(/^([^?#]*\/)sap-ui-core\.js(?:[?#]|$)/i);if(s){o=s[1];break}}}}if(o==null){throw new Error("sap-ui-core.js: could not identify script tag!")}for(t=0;t<e.length;t++){i=e[t];if(i.indexOf("raw:")===0){i=o+i.slice(4);document.write('<script src="'+i+'"><\/script>')}else if(i.indexOf("require:")===0){i=i.slice(8);u=u||i==="sap/ui/core/Core";document.write('<script>sap.ui.require(["'+i+'"]);<\/script>')}}})(["raw:ui5loader.js","raw:ui5loader-autoconfig.js","raw:sap/ui/core/boot/_runBoot.js"]);
//# sourceMappingURL=ui5-boot.js.map