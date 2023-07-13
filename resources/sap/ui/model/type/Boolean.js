/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/SimpleType","sap/ui/model/FormatException","sap/ui/model/ParseException"],function(e,t,o){"use strict";var n=e.extend("sap.ui.model.type.Boolean",{constructor:function(){e.apply(this,arguments);this.sName="Boolean"}});n.prototype.formatValue=function(e,o){if(e==undefined||e==null){return null}switch(this.getPrimitiveType(o)){case"any":case"boolean":return e;case"string":return e.toString();default:throw new t("Don't know how to format Boolean to "+o)}};n.prototype.parseValue=function(e,t){var n;switch(this.getPrimitiveType(t)){case"boolean":return e;case"string":if(e.toLowerCase()=="true"||e=="X"){return true}if(e.toLowerCase()=="false"||e==""||e==" "){return false}n=sap.ui.getCore().getLibraryResourceBundle();throw new o(n.getText("Boolean.Invalid"));default:throw new o("Don't know how to parse Boolean from "+t)}};n.prototype.validateValue=function(){};return n});
//# sourceMappingURL=Boolean.js.map