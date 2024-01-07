/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FlexBox","./library","./VBoxRenderer"],function(e,i,t){"use strict";var r=i.FlexDirection;var n=e.extend("sap.m.VBox",{metadata:{library:"sap.m",properties:{direction:{type:"sap.m.FlexDirection",group:"Appearance",defaultValue:r.Column}},designtime:"sap/m/designtime/VBox.designtime"},renderer:t});n.prototype.init=function(){this.setDirection(r.Column);e.prototype.init.apply(this,arguments)};return n});
//# sourceMappingURL=VBox.js.map