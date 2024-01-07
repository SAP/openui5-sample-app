/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,r){var n=r._getSearchField(),t=r._getCancelButton(),a=r._getSearchButton(),o=r.getIsOpen(),l=r.getPhoneMode();e.openStart("div",r);if(o){e.class("sapFShellBarSearch")}if(l){e.class("sapFShellBarSearchFullWidth")}e.openEnd();e.openStart("div");e.class("sapFShellBarSearchWrap");e.openEnd();if(o){e.renderControl(n)}e.renderControl(a);if(o){e.renderControl(t)}e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=SearchRenderer.js.map