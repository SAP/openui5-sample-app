/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/model/odata/type/ODataType"],function(t,e,o,a){"use strict";var p=a.extend("sap.ui.model.odata.type.Raw",{constructor:function(t,e){a.apply(this,arguments);if(t!==undefined||e!==undefined||arguments.length>2){throw new Error("Unsupported arguments")}}});p.prototype.formatValue=function(e,o){if(o==="any"){return e}throw new t("Type 'sap.ui.model.odata.type.Raw' does not support formatting")};p.prototype.getName=function(){return"sap.ui.model.odata.type.Raw"};p.prototype.parseValue=function(){throw new e("Type 'sap.ui.model.odata.type.Raw' does not support parsing")};p.prototype.validateValue=function(){throw new o("Type 'sap.ui.model.odata.type.Raw' does not support validating")};return p});
//# sourceMappingURL=Raw.js.map