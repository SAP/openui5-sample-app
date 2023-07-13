/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/support/Plugin","sap/base/Log"],function(t,e){"use strict";var o=t.extend("sap.ui.core.support.plugins.LocalStorage",{constructor:function(e){t.apply(this,["sapUiSupportLocalStorage","",e]);this._oStub=e;this._aEventIds=[this.getId()+"GetItem",this.getId()+"SetItem"]}});o.prototype.isToolPlugin=function(){return false};o.prototype.onsapUiSupportLocalStorageGetItem=function(t){var o=t.getParameter("id"),a=t.getParameter("passThroughData"),r="";try{r=window.localStorage.getItem(o);if(!r||r==="undefined"){r=""}}catch(t){e.error("Could not get item '"+o+"' from localStorage: "+t.message);r=""}this._oStub.sendEvent(t.getParameter("callback"),{value:r,passThroughData:a})};o.prototype.onsapUiSupportLocalStorageSetItem=function(t){var o=t.getParameter("id"),a=t.getParameter("value");try{window.localStorage.setItem(o,a)}catch(t){e.error("Could not write to localStorage: '"+o+"' : '"+a+"': "+t.message)}};return o});
//# sourceMappingURL=LocalStorage.js.map