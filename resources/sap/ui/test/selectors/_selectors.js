/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/extend","sap/ui/test/selectors/_BindingPath","sap/ui/test/selectors/_DropdownItem","sap/ui/test/selectors/_GlobalID","sap/ui/test/selectors/_ControlType","sap/ui/test/selectors/_LabelFor","sap/ui/test/selectors/_Properties","sap/ui/test/selectors/_Selector","sap/ui/test/selectors/_TableRowItem","sap/ui/test/selectors/_ViewID"],function(e){"use strict";function t(){return Array.prototype.slice.call(arguments,1).reduce(function(t,s){var r={};var a=s.getMetadata()._sClassName.split(".").pop();var o=a.charAt(1).toLowerCase()+a.substring(2);r[o]=new s;return e(t,r)},{})}return t.apply(this,arguments)});
//# sourceMappingURL=_selectors.js.map