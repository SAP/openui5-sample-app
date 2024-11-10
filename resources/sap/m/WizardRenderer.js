/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/core/Element","sap/ui/core/Lib"],function(e,t,r){"use strict";var n={apiVersion:2};n.render=function(e,t){this.startWizard(e,t);this.renderProgressNavigator(e,t);this.renderWizardSteps(e,t);this.endWizard(e)};n.startWizard=function(e,t){var n=r.getResourceBundleFor("sap.m").getText("WIZARD_LABEL");e.openStart("div",t).class("sapMWizard").class("sapMWizardMode"+t.getRenderMode()).class("sapMWizardBg"+t.getBackgroundDesign()).style("width",t.getWidth()).style("height",t.getHeight()).accessibilityState({role:"region",label:n}).openEnd()};n.renderProgressNavigator=function(e,t){e.renderControl(t.getAggregation("_progressNavigator"))};n.renderWizardSteps=function(t,r){t.openStart("section",r.getId()+"-step-container").class("sapMWizardStepContainer").openEnd();if(r.getRenderMode()===e.WizardRenderMode.Scroll){this._getStepsRenderingOrder(r).forEach(t.renderControl,t)}t.close("section")};n.endWizard=function(e){e.close("div")};n._getStepsRenderingOrder=function(e){if(!e.getEnableBranching()){return e.getSteps()}var r=e.getSteps().slice(),n,i,s,a;var d=function(e,n,i){var s=t.getElementById(e);if(r.indexOf(s)<r.indexOf(i)){var a=r.indexOf(s),d=r[a];r[a]=i;r[n]=d;n=0}return n};for(n=0;n<r.length;n++){i=r[n];a=i.getSubsequentSteps();if(a.length<1&&i.getNextStep()){a=[i.getNextStep()]}for(s=0;s<a.length;s++){n=d(a[s],n,i)}}return r};return n},true);
//# sourceMappingURL=WizardRenderer.js.map