/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(t){"use strict";var e={createTextField:function(t){var e=new sap.m.Input(t);return e},setTextFieldContent:function(t,e){t.setWidth(e)},createButton:function(t){var e=new sap.m.Button(t);return e},addFormClass:function(){return"sapUiFUM"}};var n={createTextField:function(t){var e=new sap.ui.commons.TextField(t);return e},setTextFieldContent:function(t,e){t.setWidth(e)},createButton:function(t){var e=new sap.ui.commons.Button(t);return e},addFormClass:function(){return"sapUiCFUM"}};var r={createTextField:function(t){throw new Error("no TextField control available!")},createTextFieldContent:function(t,e){throw new Error("no TextField control available!")},createButton:function(t){throw new Error("no Button control available!")},addFormClass:function(){return null}};var o={getHelper:function(){if(t.isLoaded("sap.m")){return e}else if(t.isLoaded("sap.ui.unified")){return n}return r}};return o});
//# sourceMappingURL=FileUploaderHelper.js.map