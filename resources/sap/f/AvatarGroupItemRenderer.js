/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/library"],function(t){"use strict";var r={apiVersion:2};r.render=function(t,r){var a=r.getTooltip_AsString();t.openStart("div",r).class("sapFAvatarGroupItem").class("sapFAvatarGroupItem"+r._sAvatarDisplaySize);if(r._getInteractive()&&r._getGroupType()==="Individual"){t.attr("tabindex",0)}if(a){t.attr("title",a)}t.openEnd();t.renderControl(r._getAvatar());t.close("div")};return r},true);
//# sourceMappingURL=AvatarGroupItemRenderer.js.map