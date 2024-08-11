/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/config","sap/base/util/Version","sap/base/strings/camelize"],(e,t,s)=>{"use strict";const a=t("1.14");const n="1.127.0";var i={"xx-test":"1.15",flexBoxPolyfill:"1.14",sapMeTabContainer:"1.14",sapMeProgessIndicator:"1.14",sapMGrowingList:"1.14",sapMListAsTable:"1.14",sapMDialogWithPadding:"1.14",sapCoreBindingSyntax:"1.24"};const o=o=>{const r="sapUiCompatVersion";const p=e.get({name:r,type:e.Type.String});function g(o){var g=!o?p||a.toString():e.get({name:s(r+"-"+o.toLowerCase()),type:e.Type.String})||p||i[o]||a.toString();g=t(g.toLowerCase()==="edge"?n:g);return t(g.getMajor(),g.getMinor())}return i.hasOwnProperty(o)?g(o):g()};return o});
//# sourceMappingURL=getCompatibilityVersion.js.map