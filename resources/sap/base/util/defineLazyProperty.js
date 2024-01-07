/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(e,t,n,r){var u={configurable:true,get:function(){delete e[t];e[t]=n();return e[t]},set:function(n){delete e[t];e[t]=n}};if(r){u.get[r]=true}Object.defineProperty(e,t,u)};return e});
//# sourceMappingURL=defineLazyProperty.js.map