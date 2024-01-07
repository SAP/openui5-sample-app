/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Element","sap/ui/Global"],function(jQuery,t){"use strict";jQuery.fn.control=function(a,e){var i=this.map(function(){var a;if(e){var i=jQuery(this).closest("[data-sap-ui],[data-sap-ui-related]");a=i.attr("data-sap-ui-related")||i.attr("id")}else{a=jQuery(this).closest("[data-sap-ui]").attr("id")}return t.getElementById(a)});return i.get(a)};return jQuery});
//# sourceMappingURL=control.js.map