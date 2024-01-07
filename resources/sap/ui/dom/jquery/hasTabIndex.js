/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var t=function(t){var n=jQuery.prop(t,"tabIndex");return n!=null&&n>=0&&(!jQuery.attr(t,"disabled")||jQuery.attr(t,"tabindex"))};jQuery.fn.hasTabIndex=function(){return t(this.get(0))};return jQuery});
//# sourceMappingURL=hasTabIndex.js.map