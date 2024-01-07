/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Rendering","./WaiterBase"],function(e,n){"use strict";var i=n.extend("sap.ui.test.autowaiter._UIUpdatesWaiter",{hasPending:function(){var n=e.isPending();if(n){this._oHasPendingLogger.debug("The UI needs rerendering")}return n}});return new i});
//# sourceMappingURL=_UIUpdatesWaiter.js.map