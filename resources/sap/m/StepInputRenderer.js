/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var n=e._getInput(),a=e.getWidth(),s=e.getEnabled(),p=e.getEditable(),r=e.getValueState();t.openStart("div",e);t.style("width",a);t.class("sapMStepInput");t.class("sapMStepInput-CTX");!s&&t.class("sapMStepInputReadOnly");!p&&t.class("sapMStepInputNotEditable");if(r==="Error"||r==="Warning"){t.class("sapMStepInput"+r)}t.openEnd();t.renderControl(n);t.close("div")};return t},true);
//# sourceMappingURL=StepInputRenderer.js.map