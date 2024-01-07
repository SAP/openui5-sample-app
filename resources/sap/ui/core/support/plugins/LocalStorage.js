/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/support/Plugin","sap/base/Log"],function(t,e){"use strict";var a=t.extend("sap.ui.core.support.plugins.LocalStorage",{constructor:function(e){t.apply(this,["sapUiSupportLocalStorage","",e]);this._aEventIds=[this.getId()+"GetItem",this.getId()+"SetItem"]}});a.prototype.isToolPlugin=function(){return false};a.prototype.onsapUiSupportLocalStorageGetItem=function(t){var a=t.getParameter("id"),o=t.getParameter("passThroughData"),r="";try{r=window.localStorage.getItem(a);if(!r||r==="undefined"){r=""}}catch(t){e.error("Could not get item '"+a+"' from localStorage: "+t.message);r=""}this._oStub.sendEvent(t.getParameter("callback"),{value:r,passThroughData:o})};a.prototype.onsapUiSupportLocalStorageSetItem=function(t){var a=t.getParameter("id"),o=t.getParameter("value");try{window.localStorage.setItem(a,o)}catch(t){e.error("Could not write to localStorage: '"+a+"' : '"+o+"': "+t.message)}};return a});
//# sourceMappingURL=LocalStorage.js.map