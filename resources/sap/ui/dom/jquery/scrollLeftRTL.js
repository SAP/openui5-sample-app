/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dom/denormalizeScrollLeftRTL","sap/ui/util/_FeatureDetection","sap/ui/thirdparty/jquery"],function(t,e,jQuery){"use strict";var i;if(e.initialScrollPositionIsZero()){i=function(t){return t.scrollWidth+t.scrollLeft-t.clientWidth}}else{i=function(t){return t.scrollLeft}}var r=function(e){var r=this.get(0);if(r){if(e===undefined){return i(r)}else{r.scrollLeft=t(e,r);return this}}};jQuery.fn.scrollLeftRTL=r;return jQuery});
//# sourceMappingURL=scrollLeftRTL.js.map