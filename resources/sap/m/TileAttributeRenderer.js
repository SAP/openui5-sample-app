/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,n){e.openStart("div",n.getId());e.class("sapMElementWrapper");e.openEnd();this._renderLabel(e,n);this._renderValue(e,n);e.close("div")};e._renderLabel=function(e,n){var t="sapMATCLabel",r="-label",a=n.getLabel();e.openStart("div",n.getId()+"-"+r);e.class(t);e.openEnd();e.text(a);e.close("div")};e._renderValue=function(e,n){var t="sapMATCValue",r="-value";e.openStart("div",n.getId()+"-"+r);e.class(t);e.openEnd();var a=n.getContentConfig();if(a){e.renderControl(a._getConfigInstance())}e.close("div")};return e},true);
//# sourceMappingURL=TileAttributeRenderer.js.map