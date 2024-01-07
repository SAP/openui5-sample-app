/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/routing/Target","sap/f/FlexibleColumnLayout","./async/Target"],function(t,a,o){"use strict";var r=t.extend("sap.f.routing.Target",{constructor:function(a,r,e,n){this._oTargetHandler=n;t.prototype.constructor.apply(this,arguments);var i=o;this._super={};for(var s in i){this._super[s]=this[s];this[s]=i[s]}},_beforePlacingViewIntoContainer:function(o){var r=o.container;var e=o.data&&o.data.routeConfig;if(r instanceof a&&e&&e.layout){r.setLayout(e.layout)}t.prototype._beforePlacingViewIntoContainer.apply(this,arguments)}});return r});
//# sourceMappingURL=Target.js.map