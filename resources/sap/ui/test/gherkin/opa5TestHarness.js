/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/ObjectPath","sap/base/future","sap/ui/test/opaQunit","sap/ui/test/Opa5","sap/ui/test/gherkin/GherkinTestGenerator","sap/ui/test/gherkin/dataTableUtils","sap/ui/test/gherkin/StepDefinitions","sap/ui/test/launchers/componentLauncher","sap/ui/test/launchers/iFrameLauncher","sap/ui/qunit/qunit-junit","sap/ui/qunit/qunit-coverage"],function(Log,ObjectPath,future,opaTest,Opa5,GherkinTestGenerator,dataTableUtils,StepDefinitions,componentLauncher,iFrameLauncher){"use strict";QUnit.config.urlConfig.splice(0,0,{id:"closeFrame",label:"Close Frame",tooltip:"Closes the application-under-test's frame after all tests have executed",value:"true"});QUnit.done(function(){if(new URLSearchParams(window.location.search).has("closeFrame")){Opa5.emptyQueue()}});var opa5TestHarness={_oOpa5:new Opa5,_opaTest:opaTest,_fnAlternateTestStepGenerator:function(oStep){var sContext=oStep.keyword;var sFinalFunction=oStep.text;var aMatch=oStep.text.match(/(.*?)\s*:\s*(.*)/);if(aMatch){sContext+="."+dataTableUtils.normalization.camelCase(aMatch[1]);sFinalFunction=aMatch[2]}sFinalFunction=dataTableUtils.normalization.camelCase(sFinalFunction);var sToEval=sContext+"."+sFinalFunction+"();";var func;if(/^(Given|When|Then)(\.[a-zA-Z_$][a-zA-Z0-9_$]*)*$/.test(sContext)&&/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(sFinalFunction)){func=function(e,t,a){Log.info("[GHERKIN] Generated Step: "+sToEval);var n=ObjectPath.get(sContext,{Given:e,When:t,Then:a});if(n&&typeof n[sFinalFunction]==="function"){n[sFinalFunction]()}else{throw new TypeError(sContext+"."+sFinalFunction+" is not a function")}}}else{func=function(Given,When,Then){future.errorThrows("[GHERKIN]: Deprecated Step Generation method (eval) detected! Replace the following with an OPA5 page object call: "+sToEval);eval(sToEval)}}return{isMatch:true,text:oStep.text,regex:/Generated Step/,parameters:[],func:func,_sToEval:sToEval}},test:function(e){if(!e||typeof e!=="object"){throw new Error("opa5TestHarness.test: input all arguments via a single object")}if(typeof e.featurePath!=="string"&&!(e.featurePath instanceof String)){throw new Error("opa5TestHarness.test: parameter 'featurePath' must be a valid string")}if(e.steps&&(typeof e.steps!=="function"||!(new e.steps)._generateTestStep)){throw new Error("opa5TestHarness.test: if specified, parameter 'steps' must be a valid StepDefinitions constructor")}if(!e.steps&&e.generateMissingSteps!==true){throw new Error("opa5TestHarness.test: if parameter 'generateMissingSteps' is not true then parameter 'steps' must be a valid StepDefinitions constructor")}if(e.generateMissingSteps&&typeof e.generateMissingSteps!=="boolean"){throw new Error("opa5TestHarness.test: if specified, parameter 'generateMissingSteps' must be a valid boolean")}if(!e.steps){e.steps=StepDefinitions}var t=e.generateMissingSteps?this._fnAlternateTestStepGenerator:null;var a=new GherkinTestGenerator(e.featurePath,e.steps,t);var n=a.generate();QUnit.module(n.name,{beforeEach:function(){a.setUp()},afterEach:function(){if(this._oOpa5.hasAppStarted()){this._oOpa5.iTeardownMyApp()}a.tearDown()}.bind(this)});Log.info("[GHERKIN] Running feature: '"+n.name+"'");n.testScenarios.forEach(function(e){var t=!n.skip&&!e.skip?this._opaTest:QUnit.skip;t(e.name,function(t,n,s){Log.info("[GHERKIN] Running scenario: '"+e.name+"'");e.testSteps.forEach(function(e){this._oOpa5.waitFor({viewName:"",success:function(){Log.info("[GHERKIN] Running step: text='"+e.text+"' regex='"+e.regex+"'");Opa5.assert.ok(e.isMatch,e.text);if(e.isMatch){QUnit.config.current.assertions.pop()}e.parameters=(e.parameters||[]).concat([t,n,s]);a.execute(e,Opa5.assert)}})}.bind(this))}.bind(this))}.bind(this))}};return opa5TestHarness},true);
//# sourceMappingURL=opa5TestHarness.js.map