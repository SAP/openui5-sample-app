/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/base/Log","sap/base/util/isPlainObject"],function(e,t,a){"use strict";var i=e.extend("sap.m.SelectionDetailsItemLine",{metadata:{library:"sap.m",properties:{label:{type:"string",group:"Data"},value:{type:"any",group:"Data"},displayValue:{type:"string",defaultValue:null,group:"Data"},unit:{type:"string",defaultValue:null,group:"Data"},lineMarker:{type:"string",defaultValue:null,group:"Data"}}}});i.prototype._getValueToRender=function(){var e="",i=this.getValue();if(typeof i==="string"||i instanceof String){e=i}else if(typeof i==="number"){e=i.toString()}else if(a(i)){if(i.day&&i.day.length>0){e=i.day}if(i.time&&i.time.length>0){e=e.length>0?i.time+" "+e:i.time}}else{t.warning("Value '"+i+"' is not supported. Expected type is a string, number or a plain object, including date and time properties of type string.")}return e};return i});
//# sourceMappingURL=SelectionDetailsItemLine.js.map