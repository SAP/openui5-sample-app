/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,s){var n=s._getInnerControl(),r=s._isIconVisible()&&!s._isTextVisible(),i;e.openStart("span",s);e.class("sapMObjectMarker");e.openEnd();if(n){n.setIconOnly(r);if(s.hasListeners("press")){i=n._getIconAggregation();if(r&&i&&!i.hasListeners("press")){i.attachPress(s._firePress,s)}}}e.renderControl(n);e.close("span")};return e},true);
//# sourceMappingURL=ObjectMarkerRenderer.js.map