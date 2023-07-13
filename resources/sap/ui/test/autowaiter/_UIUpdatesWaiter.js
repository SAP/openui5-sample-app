/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./WaiterBase"],function(e){"use strict";var t=e.extend("sap.ui.test.autowaiter._UIUpdatesWaiter",{hasPending:function(){var e=sap.ui.getCore().getUIDirty();if(e){this._oHasPendingLogger.debug("The UI needs rerendering")}return e}});return new t});
//# sourceMappingURL=_UIUpdatesWaiter.js.map