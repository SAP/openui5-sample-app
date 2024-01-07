/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config"],e=>{"use strict";const t={isDesignModeEnabled(){return e.get({name:"sapUiXxDesignMode",type:e.Type.Boolean,external:true,freeze:true})},isControllerCodeDeactivationSuppressed(){return e.get({name:"sapUiXxSuppressDeactivationOfControllerCode",type:e.Type.Boolean,external:true,freeze:true})},isControllerCodeDeactivated(){return t.isDesignModeEnabled()&&!t.isControllerCodeDeactivationSuppressed()}};return t});
//# sourceMappingURL=DesignTime.js.map