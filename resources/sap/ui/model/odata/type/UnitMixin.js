/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/model/ParseException","sap/ui/model/ValidateException"],function(t,i,e){"use strict";var n=new Map,s=/\.(\d+)$/,o=/\.$/,r=/0+$/;function a(i,e){return t.getResourceBundleFor("sap.ui.core").getText(i,e)}return function(t,u,m,l){function c(t,i){var e,s=this;if(this.mCustomUnits===undefined&&t&&t[2]!==undefined){if(t[2]===null){this.mCustomUnits=null}else{this.mCustomUnits=n.get(t[2]);if(!this.mCustomUnits){this.mCustomUnits={};Object.keys(t[2]).forEach(function(i){s.mCustomUnits[i]=s.getCustomUnitForKey(t[2],i)});n.set(t[2],this.mCustomUnits)}e={};e[m]=this.mCustomUnits;u.prototype.setFormatOptions.call(this,Object.assign(e,this.oFormatOptions))}}if(!t||t[0]===undefined||t[1]===undefined||this.mCustomUnits===undefined&&t[2]===undefined){return null}return u.prototype.formatValue.call(this,t.slice(0,2),i)}function p(){var t=u.prototype.getFormatOptions.call(this);delete t[m];return t}function h(){if(!this.bShowMeasure){return[1,2]}else if(!this.bShowNumber){return[0,2]}return[2]}function f(t){var i;if(!this.bShowNumber){i=t?a(l+".WithDecimals",[t]):a(l+".WithoutDecimals")}else{i=t?a("EnterNumberFraction",[t]):a("EnterInt")}return new e(i)}function d(t,e){var n;if(this.mCustomUnits===undefined){throw new i("Cannot parse value without customizing")}n=u.prototype.parseValue.apply(this,arguments);if(n[0]&&typeof n[0]==="string"&&n[0].includes(".")){n[0]=n[0].replace(r,"").replace(o,"")}return n}function w(t){var i,n,o,a=t[0],u=t[1];if(this.mCustomUnits===undefined){throw new e("Cannot validate value without customizing")}if(!a||!u||!this.mCustomUnits||this.oConstraints.skipDecimalsValidation){return}o=s.exec(a);n=o?o[1].replace(r,"").length:0;i=this.mCustomUnits[u].decimals;if(n>i){throw this.getValidateException(i)}}function g(t,i){var e=i?Object.keys(i):[];function n(t){if(t!=="skipDecimalsValidation"){throw new Error("Only 'skipDecimalsValidation' constraint is supported")}}if(t&&t[m]){throw new Error("Format option "+m+" is not supported")}e.forEach(n);if(arguments.length>2){throw new Error("Only parameters oFormatOptions and oConstraints are supported")}t=Object.assign({emptyString:0,parseAsString:true,unitOptional:!t||["showMeasure","showNumber"].every(function(i){return!(i in t)||t[i]})},t);i=Object.assign({},i);u.call(this,t,i);this.mCustomUnits=undefined;this.setConstraints=function(){throw new Error("Constraints are immutable")};this.setFormatOptions=function(){throw new Error("Format options are immutable")}}t._applyUnitMixin=g;t.formatValue=c;t.getFormatOptions=p;t.getPartsIgnoringMessages=h;t.getValidateException=f;t.parseValue=d;t.validateValue=w}});
//# sourceMappingURL=UnitMixin.js.map