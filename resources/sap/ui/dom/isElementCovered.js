/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";function t(t,n,e,i){const r=document.elementFromPoint(t,n);if(!r){return true}return r!==e&&!e.contains(r)&&!r.contains(e)&&(!i||!i.contains(r))}function n(n,e){if(!n){return false}var i=n.getBoundingClientRect(),r=i.left+1,o=i.right-1,u=i.top+1,c=i.bottom-1;return t(r,u,n,e)&&t(o,u,n,e)&&t(r,c,n,e)&&t(o,c,n,e)}return n});
//# sourceMappingURL=isElementCovered.js.map