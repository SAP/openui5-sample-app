/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers"],function(e){"use strict";var i=function(i,s,t,r,n,u){var a=[],l=[];s=s&&e.getEnabledItems(s);s.forEach(function(e){if(e.isA("sap.ui.core.SeparatorItem")){a.push({header:e,visible:false})}else if(!r||u.call(i,t,e,n)){if(a.length){a[a.length-1].visible=true}l.push(e)}});return{items:l,groups:a}};return i});
//# sourceMappingURL=filterItems.js.map