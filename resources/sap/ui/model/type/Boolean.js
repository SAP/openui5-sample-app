/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/model/SimpleType","sap/ui/model/FormatException","sap/ui/model/ParseException"],function(e,t,o,n){"use strict";var r=t.extend("sap.ui.model.type.Boolean",{constructor:function(){t.apply(this,arguments);this.sName="Boolean"}});r.prototype.formatValue=function(e,t){if(e==undefined||e==null){return null}switch(this.getPrimitiveType(t)){case"any":case"boolean":return e;case"string":return e.toString();default:throw new o("Don't know how to format Boolean to "+t)}};r.prototype.parseValue=function(t,o){var r;switch(this.getPrimitiveType(o)){case"boolean":return t;case"string":if(t.toLowerCase()=="true"||t=="X"){return true}if(t.toLowerCase()=="false"||t==""||t==" "){return false}r=e.getResourceBundleFor("sap.ui.core");throw new n(r.getText("Boolean.Invalid"));default:throw new n("Don't know how to parse Boolean from "+o)}};r.prototype.validateValue=function(){};return r});
//# sourceMappingURL=Boolean.js.map