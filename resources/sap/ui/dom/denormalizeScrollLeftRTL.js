/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/util/_FeatureDetection"],function(i){"use strict";var t;if(i.initialScrollPositionIsZero()){t=function(i,t){return t.clientWidth+i-t.scrollWidth}}else{t=function(i,t){return i}}var n=function(i,n){if(n){return t(i,n)}};return n});
//# sourceMappingURL=denormalizeScrollLeftRTL.js.map