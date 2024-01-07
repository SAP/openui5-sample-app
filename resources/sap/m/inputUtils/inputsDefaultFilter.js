/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/wordStartsWithValue"],function(t){"use strict";var e=function(e,i,r){if(!i){return false}if(i.isA("sap.ui.core.ListItem")&&r&&t(i.getAdditionalText(),e)){return true}return t(i.getText(),e)};return e});
//# sourceMappingURL=inputsDefaultFilter.js.map