/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./WaiterBase","../OpaPlugin"],function(e,i){"use strict";var n=e.extend("sap.ui.test.autowaiter._UIUpdatesWaiter",{hasPending:function(){var e=i.isUIDirty();if(e){this._oHasPendingLogger.debug("The UI needs rerendering")}return e}});return new n});
//# sourceMappingURL=_UIUpdatesWaiter.js.map