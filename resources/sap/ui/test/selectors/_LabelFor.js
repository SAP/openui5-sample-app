/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/core/LabelEnablement"],function(e,t){"use strict";var s=e.extend("sap.ui.test.selectors._LabelFor",{_generate:function(e){var s=t.getReferencingLabels(e);if(s.length){var a=sap.ui.getCore().byId(s[0]);this._oLogger.debug("Control "+e+" has an associated label with ID "+s[0]);return{labelFor:{text:a.getText()}}}else{this._oLogger.debug("Control "+e+" has no associated labels")}}});return s});
//# sourceMappingURL=_LabelFor.js.map