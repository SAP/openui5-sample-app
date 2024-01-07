/*!
* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define([],function(){"use strict";var e={};e.visitPanes=function(i,t){var n,s;if(!i){return}n=i.getPanes();for(var a=0;a<n.length;a++){s=n[a];if(s&&s.isA("sap.ui.layout.SplitPane")){t(s)}else{e.visitPanes(s,t)}}};e.splitterInterval=function(i,t,n){this.iFrom=i;this.iTo=t;this.iPagesCount=0;var s=[],a=[s];e.visitPanes(n,function(e){var t=e.getRequiredParentWidth();var n={demandPane:e.getDemandPane()};if(t<=i){s.push(n)}else{a.push(n)}});if(s.length==0){a.splice(0,1)}this.iPagesCount=a.length;this.aPages=a};return e},true);
//# sourceMappingURL=ResponsiveSplitterUtilities.js.map