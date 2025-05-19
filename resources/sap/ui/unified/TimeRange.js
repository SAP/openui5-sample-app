/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/format/DateFormat","sap/ui/core/Configuration","sap/base/i18n/Formatting","sap/ui/core/Locale"],function(t,e,a,r,n){"use strict";var i=t.extend("sap.ui.unified.TimeRange",{metadata:{library:"sap.ui.unified",properties:{start:{type:"string",group:"Misc",defaultValue:null},end:{type:"string",group:"Misc",defaultValue:null},valueFormat:{type:"string",group:"Misc",defaultValue:"hh:mm"}}}});i.prototype._getFormatInstance=function(){const t={pattern:this.getValueFormat(),strictParsing:true};return e.getTimeInstance(t,new n(r.getLanguageTag()))};i.prototype.getStartDate=function(){return this._getFormatInstance().parse(this.getStart())};i.prototype.getEndDate=function(){return this._getFormatInstance().parse(this.getEnd())};return i});
//# sourceMappingURL=TimeRange.js.map