/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers"],function(e){"use strict";var t=function(t,i){var a=t.item;var r=a.data(e.CSS_CLASS+"ListItem");var s;var l;var p;var n={text:"title",enabled:"visible",tooltip:"tooltip"};var o=t.propName;var v=t.propValue;if(!r){return}if(a.isA("sap.ui.core.Item")&&o==="enabled"){a._bSelectable=!!v}if(n[o]){l=n[o];p="set"+l.charAt(0).toUpperCase()+l.slice(1);r[p](v)}if(o==="additionalText"){s=i?v:"";r.setInfo(s)}};return t});
//# sourceMappingURL=forwardItemProperties.js.map