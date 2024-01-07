/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers","sap/m/inputUtils/getTokenByItem"],function(e,t){"use strict";var r=function(e){var r=e.item;var i=e.propName;var a=e.propValue;var s=t(r);if(!s){return}if(i==="enabled"){s.setVisible(a)}else if(s.getMetadata().hasProperty(i)){s.setProperty(i,a)}};return r});
//# sourceMappingURL=forwardItemPropertiesToToken.js.map