/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Element","./library","./Lib","sap/base/assert"],function(e,t,r,n){"use strict";var a=t.ValueState;var u={};var i=null;var o=function(){if(!i){i={};var e=r.getResourceBundleFor("sap.ui.core");i[a.Error]=e.getText("VALUE_STATE_ERROR");i[a.Warning]=e.getText("VALUE_STATE_WARNING");i[a.Success]=e.getText("VALUE_STATE_SUCCESS");i[a.Information]=e.getText("VALUE_STATE_INFORMATION")}};u.enrichTooltip=function(t,r){n(t instanceof e,"oElement must be an Element");if(!r&&t.getTooltip()){return undefined}var a=u.getAdditionalText(t);if(a){return(r?r+" - ":"")+a}return r};u.getAdditionalText=function(e){var t=null;if(e&&e.getValueState){t=e.getValueState()}else if(a[e]){t=e}if(t&&t!=a.None){o();return i[t]}return null};u.formatValueState=function(e){switch(e){case 1:return a.Warning;case 2:return a.Success;case 3:return a.Error;case 4:return a.Information;default:return a.None}};return u},true);
//# sourceMappingURL=ValueStateSupport.js.map