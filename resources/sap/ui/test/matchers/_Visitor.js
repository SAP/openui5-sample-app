/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher"],function(e){"use strict";return e.extend("sap.ui.test.matchers._Visitor",{isMatching:function(e,t,r){if(t(e)){return true}var i=this._getApplicationWindow(),n=i.jQuery,a=i.sap.ui.require("sap/ui/core/Core").getStaticAreaRef();var s=e.getParent();if(r){return t(s)}while(s){if(t(s)){return true}s=s.isA("sap.ui.core.UIComponent")&&!n.contains(a,e.getDomRef())?s.oContainer:s.getParent()}return false}})});
//# sourceMappingURL=_Visitor.js.map