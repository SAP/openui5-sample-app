/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObjectObserver"],function(e){"use strict";const t=new e(a);function a(e){e.object.updateFieldHelp?.()}class s{static setDocumentationRef(e,a){e.data("sap-ui-DocumentationRef",Array.isArray(a)?a:[a],false);e.setFieldHelpDisplay(e);e.updateFieldHelp?.();t.observe(e,{destroy:true})}}return s});
//# sourceMappingURL=FieldHelpUtil.js.map