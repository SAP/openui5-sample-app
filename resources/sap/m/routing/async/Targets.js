/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_display:function(){var t,i;this._oLastDisplayedTarget=null;var e=this._super._display.apply(this,arguments);return e.then(function(e){if(this._oLastDisplayedTarget){t=this._getLevel(this._oLastDisplayedTarget);i=this._oLastDisplayedTarget._oOptions._name}this._oTargetHandler.navigate({level:t,navigationIdentifier:i,askHistory:true});return e}.bind(this))},_displaySingleTarget:function(t){var i=this.getTarget(t.name);return this._super._displaySingleTarget.apply(this,arguments).then(function(t){if(i){this._oLastDisplayedTarget=i}return t}.bind(this))}}},true);
//# sourceMappingURL=Targets.js.map