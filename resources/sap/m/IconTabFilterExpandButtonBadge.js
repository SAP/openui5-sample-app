/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BadgeEnabler","sap/ui/core/Control","sap/ui/core/Lib"],function(e,t,a){"use strict";var n=a.getResourceBundleFor("sap.m");var r=t.extend("sap.m.IconTabFilterExpandButtonBadge",{metadata:{library:"sap.m",interfaces:["sap.m.IBadge"]},renderer:{apiVersion:2,render:function(e,t){e.openStart("div",t).class("sapMITFExpandButtonBadge").openEnd().close("div")}}});e.call(r.prototype);r.prototype.init=function(){this.initBadgeEnablement({style:"Attention"})};r.prototype.getAriaLabelBadgeText=function(){return n.getText("ICONTABFILTER_SUB_ITEMS_BADGES")};r.prototype.onBadgeUpdate=function(){var e=this.getParent();e.onBadgeUpdate.apply(e,arguments)};return r});
//# sourceMappingURL=IconTabFilterExpandButtonBadge.js.map