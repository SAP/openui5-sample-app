/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/base/ManagedObjectMetadata"],function(e,t){"use strict";var i=e.extend("sap.ui.test.selectors._ViewID",{_generate:function(e){var i=e.getId();var a=this._getControlView(e);var r;if(a){var s=a.getId();var o=a.getViewName();var n;var g=s+"--";var d=i.indexOf(g);if(d>-1){n=i.substring(d+g.length);if(n.indexOf("-")===-1&&!n.match(/[0-9]$/)){this._oLogger.debug("Control with ID "+i+" has view-relative ID "+n);r={id:n,skipBasic:true};if(t.isGeneratedId(s)){this._oLogger.debug("Control "+e+" has view with viewName "+o);r.viewName=o}else{this._oLogger.debug("Control "+e+" has view with stable ID "+s);r.viewId=s}}}}else{this._oLogger.debug("Control "+e+" does not belong to a view")}return r}});return i});
//# sourceMappingURL=_ViewID.js.map