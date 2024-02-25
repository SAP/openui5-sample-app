/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/Configuration","sap/f/shellBar/CoPilotRenderer","sap/ui/core/ControlBehavior"],function(e,o,r,t){"use strict";var n=e.extend("sap.f.shellBar.CoPilot",{metadata:{library:"sap.f",events:{press:{}}},renderer:r});n.prototype.ontap=function(e){e.setMarked();this.firePress({})};n.prototype.getAnimation=function(){return t.getAnimationMode()!==o.AnimationMode.none};return n});
//# sourceMappingURL=CoPilot.js.map