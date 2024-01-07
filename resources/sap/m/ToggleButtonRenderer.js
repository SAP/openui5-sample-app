/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ButtonRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var s=t.extend(e);s.apiVersion=2;s.renderAccessibilityAttributes=function(e,t,s){s["pressed"]=t.getPressed()};s.renderButtonAttributes=function(e,t){if(t.getPressed()&&!t._isUnstyled()){e.class("sapMToggleBtnPressed")}};return s},true);
//# sourceMappingURL=ToggleButtonRenderer.js.map