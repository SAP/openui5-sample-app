/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config"],function(e){"use strict";var i;var n=e.get({name:"sapUiOnInit",type:e.Type.String});if(n){i=n.split("@");if(i.length>1){var r={};var t=/^.*[\/\\]/.exec(i[0])[0];t=t.substr(0,t.length-1);r[t]=i[1];sap.ui.loader.config({paths:r})}}return{run:function(){var e=Promise.resolve();if(n){e=new Promise(function(e,n){sap.ui.require([i[0]],e,n)})}return e}}});
//# sourceMappingURL=onInit.js.map