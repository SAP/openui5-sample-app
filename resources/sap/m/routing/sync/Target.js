/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_place:function(t,e){var i=this._super._place.apply(this,arguments);this._oTargetHandler.addNavigation({navigationIdentifier:this._oOptions._name,transition:this._oOptions.transition,transitionParameters:this._oOptions.transitionParameters,eventData:e,targetControl:i.oTargetControl,aggregationName:this._oOptions.controlAggregation,view:i.oTargetParent,preservePageInSplitContainer:this._oOptions.preservePageInSplitContainer});if(e){delete e.routeConfig}return i}}},true);
//# sourceMappingURL=Target.js.map