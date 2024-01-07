/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/routing/Target","./async/Target","./sync/Target","sap/base/Log"],function(r,t,n,a){"use strict";var e=r.extend("sap.m.routing.Target",{constructor:function(e,i,s,o){this._oTargetHandler=o;function u(){if(new URLSearchParams(window.location.search).get("sap-ui-xx-asyncRouting")==="true"){a.warning("Activation of async view loading in routing via url parameter is only temporarily supported and may be removed soon","MobileTarget");return true}return false}if(e._async===undefined){e._async=u()}r.prototype.constructor.apply(this,arguments);var c=e._async?t:n;this._super={};for(var p in c){this._super[p]=this[p];this[p]=c[p]}}});return e});
//# sourceMappingURL=Target.js.map