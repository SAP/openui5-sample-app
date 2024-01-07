/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./fetch","sap/ui/base/SyncPromise"],function(n,t){"use strict";function e(){var n=this.text;var t=this.json;this.text=function(){return n().unwrap()};this.json=function(){return t().unwrap()}}function i(i,r){return n(i,r,{promiseImpl:t,responseMixin:e}).unwrap()}i.ContentTypes=n.ContentTypes;return i});
//# sourceMappingURL=syncFetch.js.map