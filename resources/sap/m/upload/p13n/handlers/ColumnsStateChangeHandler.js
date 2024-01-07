/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";const e={};e.createRevertData=function(e){const t={targetAggregation:e.targetAggregation};if(e.deleted){t.inserted=e.deleted.map(e=>({key:e.key,index:e.prevIndex}))}if(e.moved){t.moved=e.moved.map(e=>({key:e.key,index:e.prevIndex,prevIndex:e.index}))}if(e.inserted){t.deleted=e.inserted.map(e=>({key:e.key,prevIndex:e.index}))}return t};return e});
//# sourceMappingURL=ColumnsStateChangeHandler.js.map