/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/ElementUtil"],function(e){"use strict";return{isVisible:function(e){return e.getVisible()},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl",getLabel:function(t){return e.getLabelForElement(t.getHeader())}}}}});
//# sourceMappingURL=Column.designtime.js.map