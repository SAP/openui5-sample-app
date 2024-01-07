/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/util/_FeatureDetection","sap/ui/thirdparty/jquery"],function(t,jQuery){"use strict";var i;if(t.initialScrollPositionIsZero()){i=function(t){return-t.scrollLeft}}else{i=function(t){return t.scrollWidth-t.scrollLeft-t.clientWidth}}var r=function(){var t=this.get(0);if(t){return i(t)}};jQuery.fn.scrollRightRTL=r;return jQuery});
//# sourceMappingURL=scrollRightRTL.js.map