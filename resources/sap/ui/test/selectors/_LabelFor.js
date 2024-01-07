/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/core/Element","sap/ui/core/LabelEnablement"],function(e,t,s){"use strict";var a=e.extend("sap.ui.test.selectors._LabelFor",{_generate:function(e){var a=s.getReferencingLabels(e);if(a.length){var r=t.getElementById(a[0]);this._oLogger.debug("Control "+e+" has an associated label with ID "+a[0]);return{labelFor:{text:r.getText()}}}else{this._oLogger.debug("Control "+e+" has no associated labels")}}});return a});
//# sourceMappingURL=_LabelFor.js.map