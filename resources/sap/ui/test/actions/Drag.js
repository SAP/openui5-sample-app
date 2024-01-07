/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/actions/Action","sap/ui/thirdparty/jquery"],function(t,e){"use strict";var a=t.extend("sap.ui.test.actions.Drag",{metadata:{publicMethods:["executeOn"]},executeOn:function(t){var a=this.$(t)[0];if(a){this._tryOrSimulateFocusin(e(a),t);this._createAndDispatchMouseEvent("mousedown",a);this._createAndDispatchDragEvent("dragstart",a);this._createAndDispatchDragEvent("drag",a)}else{this.oLogger.debug("Cannot drag control "+t+": control has no DOM focus reference")}}});return a});
//# sourceMappingURL=Drag.js.map