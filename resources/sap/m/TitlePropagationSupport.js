/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Configuration"],function(t){"use strict";return function(i,e){if(!this.isA("sap.ui.core.Element")){return}this._propagateTitleIdToChildControl=function(){var r=this.getMetadata().getAggregation(i),o=r&&r.get(this),n=e&&e.call(this),s;if(!t.getAccessibility()||!n||!o||o.length===0){return false}s=o[0];if(s&&s._suggestTitleId&&s.isA(["sap.ui.layout.form.SimpleForm","sap.ui.layout.form.Form","sap.ui.comp.smartform.SmartForm"])){s._suggestTitleId(n);return true}return false};this._initTitlePropagationSupport=function(){this.addEventDelegate({onBeforeRendering:this._propagateTitleIdToChildControl.bind(this)})}}});
//# sourceMappingURL=TitlePropagationSupport.js.map