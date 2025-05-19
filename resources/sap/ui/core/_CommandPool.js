/*
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";const t={"sap:share":{shortcut:"Ctrl+Shift+S",description:"{{SAP_SHARE}}"},"sap:create":{shortcut:"Ctrl+Enter",description:"{{SAP_CREATE}}"},"sap:edit":{shortcut:"Ctrl+E",description:"{{SAP_EDIT}}"},"sap:save":{shortcut:"Ctrl+S",description:"{{SAP_SAVE}}"},"sap:delete":{shortcut:"Ctrl+D",description:"{{SAP_DELETE}}"}};const r=/\{\{([^\}\}]+)\}\}/g;return{resolve(s){const i=s.getEntry("/sap.ui5/commands")||{};Object.keys(i).forEach(s=>{const o=i[s];if(o.ref){if(o.shortcut){throw new TypeError(`If a command reference 'ref' is specified in the 'sap.ui5/commands' section of the manifest, the 'shortcut' property must be omitted.`)}const s=o.ref;const i=t[s];if(!i){throw new TypeError(`The given reference '${s}' in the 'sap.ui5/commands' section of the manifest is not valid.`)}o.ref=undefined;o.shortcut=i.shortcut;if(!o.description){const t=e.getResourceBundleFor("sap.ui.core");o.description=i.description.replace(r,(e,r)=>t.getText(r))}}})}}});
//# sourceMappingURL=_CommandPool.js.map