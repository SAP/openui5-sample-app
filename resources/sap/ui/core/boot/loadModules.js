/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config"],function(e){"use strict";var n=Promise.resolve();var i=Promise.resolve();var r=[];var u=e.get({name:"sapUiModules",type:e.Type.StringArray});var a=e.get({name:"sapUiLibs",type:e.Type.StringArray});if(a.length>0){i=new Promise(function(e,n){sap.ui.require(["sap/ui/core/Lib"],function(n){e(n)},n)}).then(function(e){var n=[];a.forEach(function(i){n.push(e.load({name:i}))});return Promise.all(n)})}r.push(new Promise(function(e,n){sap.ui.require(["sap/ui/events/jquery/EventSimulation"],function(){e()})}));if(u.length>0){u.forEach(function(e){var n=/^\[([^\[\]]+)?\]$/.exec(e);r.push(new Promise(function(i,r){sap.ui.require([n&&n[1]||e],function(){i()},n?i:r)}))})}n=Promise.all(r);return{run:function(){return Promise.all([n,i])}}});
//# sourceMappingURL=loadModules.js.map