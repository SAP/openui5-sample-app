/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/OpaPlugin","./WaiterBase"],function(n,i){"use strict";var e=i.extend("sap.ui.test.autowaiter._navigationContainerWaiter",{hasPending:function(){var i=sap.ui.require("sap/m/NavContainer");if(!i){return false}function e(n){return n instanceof i}return n.getElementRegistry().filter(e).some(function(n){if(n._bNavigating){this._oHasPendingLogger.debug("The NavContainer "+n+" is currently navigating")}return n._bNavigating}.bind(this))}});return new e});
//# sourceMappingURL=_navigationContainerWaiter.js.map