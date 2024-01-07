/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.CSS_CLASS="sapMMenuBtn";t.render=function(e,n){var o=n.getWidth();e.openStart("div",n);e.class(t.CSS_CLASS).class(t.CSS_CLASS+n.getButtonMode());if(o!=""){e.style("width",o)}e.openEnd();n._ensureBackwardsReference();e.renderControl(n._getButtonControl());n._activeButton=n._isSplitButton()?n._getButtonControl()._getArrowButton():n._getButtonControl();e.close("div")};return t},true);
//# sourceMappingURL=MenuButtonRenderer.js.map