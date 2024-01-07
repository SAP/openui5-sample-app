/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={apiVersion:1};e.render=function(e,i){var n=i.isInline()||this.hasControlData;if(!n){e.openStart("div",i).openEnd()}var r=this.renderTemplate||i.getTemplateRenderer();if(r){r.apply(this,arguments)}if(!n){e.close("div")}};return e},true);
//# sourceMappingURL=TemplateControlRenderer.js.map