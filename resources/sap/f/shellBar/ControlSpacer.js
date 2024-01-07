/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/f/shellBar/ControlSpacerRenderer"],function(e,r){"use strict";var t=e.extend("sap.f.shellBar.ControlSpacer",{metadata:{library:"sap.f",properties:{width:{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:""}}},renderer:r});t.prototype.setWidth=function(e){if(this.$().length){this.$().width(e)}return this.setProperty("width",e,true)};return t});
//# sourceMappingURL=ControlSpacer.js.map