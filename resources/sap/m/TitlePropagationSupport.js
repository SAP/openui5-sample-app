/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ControlBehavior"],function(t){"use strict";return function(i,e){if(!this.isA("sap.ui.core.Element")){return}this._propagateTitleIdToChildControl=function(){var r=this.getMetadata().getAggregation(i),o=r&&r.get(this),s=e&&e.call(this),a;if(!t.isAccessibilityEnabled()||!s||!o||o.length===0){return false}a=o[0];if(a&&a._suggestTitleId&&a.isA(["sap.ui.layout.form.SimpleForm","sap.ui.layout.form.Form","sap.ui.comp.smartform.SmartForm"])){a._suggestTitleId(s);return true}return false};this._initTitlePropagationSupport=function(){this.addEventDelegate({onBeforeRendering:this._propagateTitleIdToChildControl.bind(this)})}}});
//# sourceMappingURL=TitlePropagationSupport.js.map