/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(e){"use strict";var r=e.ObjectMarkerType;var s=e.ReactiveAreaMode;var a={apiVersion:2};a.render=function(e,a){var t=a._getInnerControl(),i=a._isIconVisible()&&!a._isTextVisible(),n;e.openStart("span",a);e.class("sapMObjectMarker");if(a.hasListeners("press")&&a.getReactiveAreaMode()===s.Overlay&&(a.getType()===r.Flagged||a.getType()===r.Favorite)){e.class("sapMLnkLargeReactiveArea")}e.openEnd();if(t){t.setIconOnly(i);if(a.hasListeners("press")){n=t._getIconAggregation();if(i&&n&&!n.hasListeners("press")){n.attachPress(a._firePress,a)}}}e.renderControl(t);e.close("span")};return a},true);
//# sourceMappingURL=ObjectMarkerRenderer.js.map