/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";const e={canSkipRendering:true,onmouseover:e=>{const t=e.srcControl;if(t.getTooltip()){return}const n=t.getDomRef("inner")||t.getDomRef();if(!n){return}if(n.offsetWidth<n.scrollWidth||n.offsetHeight<n.scrollHeight){n.title=t.getText()}else{n.title=""}}};function t(t){t.addEventDelegate(e)}return t});
//# sourceMappingURL=addTooltipIfTruncated.js.map