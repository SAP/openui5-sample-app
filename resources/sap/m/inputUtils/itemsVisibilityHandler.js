/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers"],function(i){"use strict";return function(e,t){var s,r,n;if(!Array.isArray(e)||!e.length){return}t=t||{};s=t.items||[];r=t.groups||[];e.forEach(function(e){n=i.getListItem(e);if(!e.isA("sap.ui.core.SeparatorItem")&&n){n.setVisible(s.indexOf(e)!==-1)}});r.forEach(function(e){n=i.getListItem(e.header);n&&n.setVisible(e.visible)})}});
//# sourceMappingURL=itemsVisibilityHandler.js.map