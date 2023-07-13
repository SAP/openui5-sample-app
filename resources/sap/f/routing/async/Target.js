/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_place:function(t){var n=this._super._place.apply(this,arguments),e=t&&t.routeConfig||{},i=this;return this._oTargetHandler._chainNavigation(function(){return n.then(function(n){i._oTargetHandler.addNavigation({navigationIdentifier:i._oOptions._name,transition:i._oOptions.transition,transitionParameters:i._oOptions.transitionParameters,eventData:t,targetControl:n.control,view:n.view,layout:e.layout,placeholderConfig:n.placeholderConfig});return n})},this._oOptions._name)},showPlaceholder:function(t){return this._oTargetHandler.showPlaceholder(t)},hidePlaceholder:function(t){}}},true);
//# sourceMappingURL=Target.js.map