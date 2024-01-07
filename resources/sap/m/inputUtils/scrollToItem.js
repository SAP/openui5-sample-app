/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(e,t){var o=e&&e.getDomRef&&e.getDomRef(),f=t&&t.getDomRef&&t.getDomRef("cont");if(!f||!o){return}var i=f.scrollTop,r=o.offsetTop,c=f.clientHeight,l=o.offsetHeight;if(i>r){f.scrollTop=r}else if(r+l>i+c){f.scrollTop=Math.ceil(r+l-c)}};return e});
//# sourceMappingURL=scrollToItem.js.map