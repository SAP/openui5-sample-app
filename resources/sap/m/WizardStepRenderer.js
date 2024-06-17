/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={apiVersion:2};e.render=function(e,t){this.startWizardStep(e,t);this.renderWizardStepTitle(e,t);this.renderContent(e,t);this.endWizardStep(e)};e.startWizardStep=function(e,t){e.openStart("div",t).accessibilityState(t,{labelledby:t._getNumberInvisibleText().getId(),role:"region"}).class("sapMWizardStep").openEnd()};e.renderWizardStepTitle=function(e,t){var r=t.getProperty("_titleLevel").toLowerCase();e.openStart(r,t.getId()+"-Title").class("sapMWizardStepTitle").openEnd().text(this._resolveOrder(t)).text(t.getTitle()).close(r)};e.renderContent=function(e,t){t.getContent().forEach(e.renderControl,e);e.renderControl(t.getAggregation("_nextButton"))};e.endWizardStep=function(e){e.close("div")};e._resolveOrder=function(e){var t=e.getCustomData().filter(function(e){return e.getKey()==="stepIndex"})[0];return t?t.getValue()+". ":""};return e},true);
//# sourceMappingURL=WizardStepRenderer.js.map