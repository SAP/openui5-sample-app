/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/Visible","sap/ui/test/matchers/_Busy","sap/ui/test/matchers/_Visitor"],function(e,t,i,r){"use strict";var s=new t;var a=new i;var n=new r;return e.extend("sap.ui.test.matchers.Interactable",{isMatching:function(e){if(!s.isMatching(e)){return false}if(a.isMatching(e)){return false}var t=n.isMatching(e,function(e){return e.isA("sap.ui.core.UIArea")&&e.bNeedsRerendering});if(t){this._oLogger.debug("Control '"+e+"' is currently in a UIArea that needs a new rendering");return false}var i=this._getApplicationWindowJQuery();var r=this._isInStaticArea(e.getDomRef());var u=i("#sap-ui-blocklayer-popup").is(":visible");if(!r&&u){this._oLogger.debug("The control '"+e+"' is hidden behind a blocking popup layer");return false}return true}})});
//# sourceMappingURL=Interactable.js.map