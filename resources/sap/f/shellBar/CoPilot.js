/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/Configuration","sap/f/shellBar/CoPilotRenderer"],function(e,t,n){"use strict";var r=e.extend("sap.f.shellBar.CoPilot",{metadata:{library:"sap.f",events:{press:{}}},renderer:n});r.prototype.ontap=function(e){e.setMarked();this.firePress({})};r.prototype.getAnimation=function(){return t.getAnimationMode()!==t.AnimationMode.none};return r});
//# sourceMappingURL=CoPilot.js.map