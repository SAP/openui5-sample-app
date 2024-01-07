/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/matchers"],function(e){"use strict";var n={errorMessage:"string",timeout:"numeric",debugTimeout:"numeric",pollingInterval:"numeric",_stackDropCount:"numeric",asyncPolling:"bool"};var r=Object.assign({error:"func",check:"func",success:"func"},n);var t=Object.assign({visible:"bool",enabled:"bool",editable:"bool",viewNamespace:"string",viewName:"string",viewId:"string",fragmentId:"string",autoWait:"any"},n);var a=Object.assign({_stack:"string",matchers:"any",actions:"any",id:"any",controlType:"any",searchOpenDialogs:"bool"},t,r);var i=Object.assign({},a,c());var s=Object.assign({sOriginalControlType:"string",interaction:"any"},a);function c(){return Object.keys(e).reduce(function(e,n){e[n]="any";return e},{})}return{OPA_WAITFOR_CONFIG:n,OPA_WAITFOR:r,OPA5_WAITFOR_CONFIG:t,OPA5_WAITFOR:i,OPA5_WAITFOR_DECORATED:s}});
//# sourceMappingURL=_ValidationParameters.js.map