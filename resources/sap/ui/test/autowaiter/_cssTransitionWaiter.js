/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./WaiterBase","./_utils","sap/ui/thirdparty/jquery","sap/base/util/isEmptyObject"],function(e,t,jQuery,i){"use strict";var n=1e3;var r=e.extend("sap.ui.test.autowaiter._cssTransitionWaiter",{constructor:function(){e.apply(this,arguments);this._oTrackedTransitions=new Map;t.onElementAvailable("body",function(e){jQuery(e).on("webkitTransitionRun webkitTransitionStart transitionrun transitionstart",function(e){this._register({element:e.target,propertyName:e.originalEvent.propertyName,reason:e.originalEvent.type})}.bind(this));jQuery(e).on("webkitTransitionEnd webkitTransitionCancel transitionend transitioncancel",function(e){this._deregister({element:e.target,propertyName:e.originalEvent.propertyName,reason:e.originalEvent.type})}.bind(this))}.bind(this))},hasPending:function(){var e=this._oTrackedTransitions.size>0;this._oLogger.trace("hasPending",e);if(e){this._oHasPendingLogger.debug("transition in progress")}return e},_register:function(e){var t=e.element,i=e.propertyName;this._log("register",e);if(!this._oTrackedTransitions.has(t)){this._oTrackedTransitions.set(t,{})}this._oTrackedTransitions.get(t)[e.propertyName]=e.propertyName;setTimeout(function(){if(this._oTrackedTransitions.has(t)){this._deregister({element:t,propertyName:i,reason:"timed out"})}}.bind(this),n,"TIMEOUT_WAITER_IGNORE")},_deregister:function(e){var t=e.element,n=e.propertyName;this._log("deregister",e);if(this._oTrackedTransitions.has(t)){var r=this._oTrackedTransitions.get(t);delete r[n];if(i(r)){this._oTrackedTransitions.delete(t)}}},_log:function(e,t){this._oLogger.trace(e,"ElementId: "+t.element.id+" Reason: "+t.reason+" PropertyName: "+t.propertyName)}});return new r});
//# sourceMappingURL=_cssTransitionWaiter.js.map