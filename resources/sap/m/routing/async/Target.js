/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_place:function(e){var n=this._super._place.apply(this,arguments),t=this;return this._oTargetHandler._chainNavigation(function(){return n.then(function(n){t._oTargetHandler.addNavigation({navigationIdentifier:t._oOptions._name,transition:t._oOptions.transition,transitionParameters:t._oOptions.transitionParameters,eventData:e,targetControl:n.control,aggregationName:t._oOptions.controlAggregation,view:n.view,preservePageInSplitContainer:t._oOptions.preservePageInSplitContainer,placeholderConfig:n.placeholderConfig,placeholderShown:n.placeholderShown});if(e){delete e.routeConfig}return n})},this._oOptions._name)},showPlaceholder:function(e){return this._oTargetHandler.showPlaceholder(e)},hidePlaceholder:function(){}}},true);
//# sourceMappingURL=Target.js.map