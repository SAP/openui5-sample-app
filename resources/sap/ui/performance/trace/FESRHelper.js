/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={FESR_NAMESPACE:"http://schemas.sap.com/sapui5/extension/sap.ui.core.FESR/1",setSemanticStepname:function(t,s,i){var a=t.data("sap-ui-custom-settings");if(a===null){a={}}if(!a[this.FESR_NAMESPACE]){a[this.FESR_NAMESPACE]={}}a[this.FESR_NAMESPACE][s]=i;t.data("sap-ui-custom-settings",a)},getSemanticStepname:function(t,s){var i=t&&t.data("sap-ui-custom-settings")&&t.data("sap-ui-custom-settings")[this.FESR_NAMESPACE];if(!i){return}return i[s]}};return t});
//# sourceMappingURL=FESRHelper.js.map