/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Lib"],function(I,t){"use strict";var T=I.IndicationColor;var e={};var i=null;var n=function(){if(!i){i={};var I=t.get("sap.ui.core").getResourceBundle();i[T.Indication01]=I.getText("INDICATION_STATE_INDICATION01");i[T.Indication02]=I.getText("INDICATION_STATE_INDICATION02");i[T.Indication03]=I.getText("INDICATION_STATE_INDICATION03");i[T.Indication04]=I.getText("INDICATION_STATE_INDICATION04");i[T.Indication05]=I.getText("INDICATION_STATE_INDICATION05");i[T.Indication06]=I.getText("INDICATION_STATE_INDICATION06");i[T.Indication07]=I.getText("INDICATION_STATE_INDICATION07");i[T.Indication08]=I.getText("INDICATION_STATE_INDICATION08")}};e.getAdditionalText=function(I){var t=null;if(I&&I.getValueState){t=I.getIndicationColor()}else if(T[I]){t=I}if(t){n();return i[t]}return null};return e},true);
//# sourceMappingURL=IndicationColorSupport.js.map