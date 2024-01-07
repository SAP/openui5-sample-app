/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/base/ManagedObjectMetadata"],function(e,t){"use strict";var s=e.extend("sap.ui.test.selectors._GlobalID",{_generate:function(e){var s=e.getId();if(t.isGeneratedId(s)){this._oLogger.debug("Control ID "+s+" is generated")}else{this._oLogger.debug("Control ID "+s+" is not generated");return{id:s,skipBasic:true}}}});return s});
//# sourceMappingURL=_GlobalID.js.map