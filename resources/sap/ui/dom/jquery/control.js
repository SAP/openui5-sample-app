/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/Global"],function(jQuery){"use strict";jQuery.fn.control=function(t,a){var i=this.map(function(){var t;if(a){var i=jQuery(this).closest("[data-sap-ui],[data-sap-ui-related]");t=i.attr("data-sap-ui-related")||i.attr("id")}else{t=jQuery(this).closest("[data-sap-ui]").attr("id")}return sap.ui.getCore().byId(t)});return i.get(t)};return jQuery});
//# sourceMappingURL=control.js.map