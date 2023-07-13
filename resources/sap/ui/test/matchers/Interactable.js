/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/Visible","sap/ui/test/matchers/_Busy","sap/ui/test/matchers/_Visitor"],function(e,i,t,r){"use strict";var a=new i;var s=new t;var n=new r;return e.extend("sap.ui.test.matchers.Interactable",{isMatching:function(e){if(!a.isMatching(e)){return false}if(s.isMatching(e)){return false}var i=n.isMatching(e,function(e){return e.isA("sap.ui.core.UIArea")&&e.bNeedsRerendering});if(i){this._oLogger.debug("Control '"+e+"' is currently in a UIArea that needs a new rendering");return false}var t=this._getApplicationWindow().jQuery;var r=this._getApplicationWindow().sap.ui.require("sap/ui/core/Core").getStaticAreaRef();var u=t.contains(r,e.getDomRef());var c=t("#sap-ui-blocklayer-popup").is(":visible");if(!u&&c){this._oLogger.debug("The control '"+e+"' is hidden behind a blocking popup layer");return false}return true}})});
//# sourceMappingURL=Interactable.js.map