/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./MonthRenderer","./DatesRowRenderer"],function(e,r,a){"use strict";var n=e.extend(a);n.apiVersion=2;["getClass","renderMonth","renderDays","renderHeader"].forEach(function(e){n[e]=function(n,s){if(s.iMode<2){return r[e].apply(r,arguments)}else{if(e==="getClass"){var t=["sapUiCalDatesRow","sapUiCalRow","sapUiCalOneMonthDatesRow"];if(!s.getShowDayNamesLine()){t.push("sapUiCalNoNameLine")}return t}return a[e].apply(a,arguments)}}});return n},true);
//# sourceMappingURL=OneMonthDatesRowRenderer.js.map