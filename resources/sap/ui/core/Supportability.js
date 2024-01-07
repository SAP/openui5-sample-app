/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config"],e=>{"use strict";const t={isDebugModeEnabled(){let t=window["sap-ui-debug"]===true||e.get({name:"sapUiDebug",type:e.Type.Boolean,external:true});try{t=t||/^(?:true|x|X)$/.test(window.localStorage.getItem("sap-ui-debug"))}catch(e){}return t},isControlInspectorEnabled(){return e.get({name:"sapUiInspect",type:e.Type.Boolean,external:true})},isStatisticsEnabled(){var t=e.get({name:"sapUiStatistics",type:e.Type.Boolean,defaultValue:e.get({name:"sapStatistics",type:e.Type.Boolean,external:true}),external:true});try{t=t||window.localStorage.getItem("sap-ui-statistics")=="X"}catch(e){}return t},getSupportSettings(){return e.get({name:"sapUiSupport",type:e.Type.StringArray,defaultValue:null,external:true})},getTestRecorderSettings(){return e.get({name:"sapUiTestRecorder",type:e.Type.StringArray,defaultValue:null,external:true})},collectOriginInfo(){return e.get({name:"sapUiOriginInfo",type:e.Type.Boolean,external:true})}};return t});
//# sourceMappingURL=Supportability.js.map