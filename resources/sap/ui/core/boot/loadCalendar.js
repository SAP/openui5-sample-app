/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config","sap/base/i18n/Localization","sap/base/util/LoaderExtensions"],function(e,a,n){"use strict";var r=new Promise(function(a,n){sap.ui.require(["sap/ui/core/date/"+e.get({name:"sapUiCalendarType",type:"string",defaultValue:"Gregorian"})],function(e){a(e)},n)});var i=new Promise(function(e,r){var i=a.getLanguageTag().language;n.loadResource("sap/ui/core/cldr/"+i+".json",{async:true,dataType:"text"}).then(function(a){var n={};n["sap/ui/core/cldr/"+i+".json"]=a;sap.ui.require.preload(n);e()})});return{run:function(){return Promise.all([r,i])}}});
//# sourceMappingURL=loadCalendar.js.map