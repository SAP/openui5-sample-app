/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],e=>{"use strict";const t=new Set;const n=e=>{if(i(e.target)){e.preventDefault()}};let s=false;function i(e){return!!e.closest(".sapUiLoSplitterBar")}function u(){document.addEventListener("touchstart",n,{passive:false})}function a(){document.removeEventListener("touchstart",n)}function c(n){t.add(n);if(e.support.touch&&!s){u();s=true}}function o(e){t.delete(e);if(t.size===0){a();s=false}}return{addInstance:c,removeInstance:o}});
//# sourceMappingURL=_SplitterRegistry.js.map