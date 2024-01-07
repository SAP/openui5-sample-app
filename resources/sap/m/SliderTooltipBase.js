/*!
* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/ui/core/Control","./library","./SliderTooltipBaseRenderer"],function(e,t,r){"use strict";var i=e.extend("sap.m.SliderTooltipBase",{metadata:{library:"sap.m"},renderer:r});i.prototype.init=function(){this.fValue=0};i.prototype.setValue=function(e){this.fValue=e;this.sliderValueChanged(e)};i.prototype.getValue=function(){return this.fValue};i.prototype.sliderValueChanged=function(e){};return i});
//# sourceMappingURL=SliderTooltipBase.js.map