/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/library"],function(e){"use strict";var t={};t.applyChange=function(e,t,n){var r=n.modifier;var i=e.getContent();t._bFireSelectEvent=i.fireEvent;r.setProperty(t,"selectedKey",i.selectedKey);t._bFireSelectEvent=false;e.setRevertData({key:i.previousSelectedKey,fireEvent:i.fireEvent})};t.revertChange=function(e,t,n){var r=n.modifier;var i=e.getRevertData();t._bFireSelectEvent=i.fireEvent;r.setProperty(t,"selectedKey",i.key);t._bFireSelectEvent=false;e.resetRevertData()};t.completeChangeContent=function(e,t,n){};t.getCondenserInfo=function(t){return{affectedControl:t.getSelector(),classification:e.condenser.Classification.LastOneWins,uniqueKey:t.getContent().selectedKey}};return t});
//# sourceMappingURL=SelectIconTabBarFilter.js.map