/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher"],function(t){"use strict";return t.extend("sap.ui.test.matchers._Visitor",{isMatching:function(t,e,r){if(e(t)){return true}var i=t.getParent();if(r){return e(i)}while(i){if(e(i)){return true}i=i.isA("sap.ui.core.UIComponent")&&!this._isInStaticArea(t.getDomRef())?i.oContainer:i.getParent()}return false}})});
//# sourceMappingURL=_Visitor.js.map