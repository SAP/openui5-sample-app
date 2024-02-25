/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Avatar","sap/m/AvatarRenderer","sap/ui/core/Lib","./library"],function(e,r,t){"use strict";var a=e.extend("sap.f.Avatar",{metadata:{library:"sap.f",deprecated:true,properties:{},designtime:"sap/f/designtime/Avatar.designtime"},renderer:r});a.prototype._getDefaultTooltip=function(){return t.getResourceBundleFor("sap.f").getText("AVATAR_TOOLTIP")};return a});
//# sourceMappingURL=Avatar.js.map