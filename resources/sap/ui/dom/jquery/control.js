/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Element","sap/ui/Global"],function(jQuery,t){"use strict";jQuery.prototype.control=function(a,e){var r=this.map(function(){var a;if(e){var r=jQuery(this).closest("[data-sap-ui],[data-sap-ui-related]");a=r.attr("data-sap-ui-related")||r.attr("id")}else{a=jQuery(this).closest("[data-sap-ui]").attr("id")}return t.getElementById(a)});return r.get(a)};return jQuery});
//# sourceMappingURL=control.js.map