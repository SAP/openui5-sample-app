/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/model/SimpleType"],function(t,e){"use strict";var o=e.extend("sap.ui.model.odata.type.ODataType",{constructor:function(t,e){},metadata:{abstract:true}});o.prototype.checkParseEmptyValueToZero=function(){if(this.oFormatOptions&&this.oFormatOptions.parseEmptyValueToZero&&(!this.oConstraints||this.oConstraints.nullable!==false)){t.warning("The parseEmptyValueToZero format option is ignored as the nullable constraint"+" is not false.",null,this.getName())}};o.prototype.getEmptyValue=function(t,e){if(t!==null&&t!==""){return undefined}if(this.oFormatOptions&&this.oFormatOptions.parseEmptyValueToZero&&this.oConstraints&&this.oConstraints.nullable===false){return e?0:"0"}return null};o.prototype.getPlaceholderText=function(){return this.getFormat&&this.getFormat().getPlaceholderText&&this.getFormat().getPlaceholderText()};o.prototype.setConstraints=function(t){};o.prototype.setFormatOptions=function(t){};return o});
//# sourceMappingURL=ODataType.js.map