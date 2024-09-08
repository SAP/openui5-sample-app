/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/MessageStrip","sap/ui/core/library","sap/ui/core/Lib","sap/ui/core/InvisibleMessage","sap/m/MessageStripRenderer"],(e,t,s,n,i)=>{"use strict";const{InvisibleMessageMode:p}=t;const a=e.extend("sap.m.p13n.MessageStrip",{metadata:{properties:{announceOnInit:{type:"boolean",defaultValue:true}}},renderer:i});a.prototype.applySettings=function(){e.prototype.applySettings.apply(this,arguments);if(this.getAnnounceOnInit()){const e=this.getType();const t=this.getText();const i=s.getResourceBundleFor("sap.m");n.getInstance().announce(i.getText("p13n.MESSAGE_STRIP_ANNOUNCEMENT",[e,t]),p.Assertive)}return this};return a});
//# sourceMappingURL=MessageStrip.js.map