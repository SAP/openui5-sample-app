/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/actions/Action"],function(t){"use strict";var e=t.extend("sap.ui.test.actions.Scroll",{metadata:{publicMethods:["executeOn"],properties:{x:{type:"int",defaultValue:0},y:{type:"int",defaultValue:0}}},init:function(){t.prototype.init.apply(this,arguments)},executeOn:function(t){var e;if(t.getScrollDelegate){e=t.getScrollDelegate().getContainerDomRef()}if(!e){e=this.$(t)[0]}this.oLogger.timestamp("opa.actions.scroll");this.oLogger.debug("Scroll in the control "+t);if(e){this._createAndDispatchScrollEvent(e,{x:this.getX(),y:this.getY()})}}});return e});
//# sourceMappingURL=Scroll.js.map