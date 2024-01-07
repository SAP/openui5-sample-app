/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListBase","./NotificationListRenderer"],function(t,e){"use strict";var o=t.extend("sap.m.NotificationList",{metadata:{library:"sap.m"},renderer:e});o.prototype.onItemFocusIn=function(){};o.prototype._startItemNavigation=function(){t.prototype._startItemNavigation.call(this);if(this._oItemNavigation){this._oItemNavigation.setTableMode(false)}};o.prototype.setNavigationItems=function(t,e){var o=[],a=e.querySelectorAll(":scope > .sapMNLGroup"),i=e.querySelectorAll(":scope > .sapMNLI");a.forEach(function(t){o.push(t);o=o.concat(Array.from(t.querySelectorAll(".sapMNLI")))});o=o.concat(Array.from(i));t.setItemDomRefs(o)};return o});
//# sourceMappingURL=NotificationList.js.map