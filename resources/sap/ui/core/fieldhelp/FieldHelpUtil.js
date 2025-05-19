/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/fieldhelp/FieldHelpCustomData"],function(t){"use strict";class e{static setDocumentationRef(e,s){const a=Array.isArray(s)?s:[s];const o=t.DOCUMENTATION_REF_KEY;const n=e.getCustomData().find(t=>t.getKey()===o);if(n){if(!(n instanceof t)){throw new Error(`Unsupported custom data type for key "${o}"`)}n.setValue(a)}else{const s=new t({key:t.DOCUMENTATION_REF_KEY,value:a});e.addAggregation("customData",s,true)}}}return e});
//# sourceMappingURL=FieldHelpUtil.js.map