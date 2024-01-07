/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";const e={};e.createRevertData=function(e){const n={targetAggregation:e.targetAggregation};if(e.deleted){n.inserted=e.deleted.map(e=>({key:e.key,index:e.prevIndex,descending:e.prevDescending}))}if(e.moved){n.moved=e.moved.map(e=>({key:e.key,index:e.prevIndex,prevIndex:e.index,descending:e.prevDescending,prevDescending:e.descending}))}if(e.inserted){n.deleted=e.inserted.map(e=>({key:e.key,prevIndex:e.index,prevDescending:e.descending}))}return n};return e});
//# sourceMappingURL=SortStateChangeHandler.js.map