/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";const e={};e.createRevertData=function(e){const r={targetAggregation:e.targetAggregation};if(e.deleted){r.inserted=e.deleted.map(e=>({key:e.key,index:e.prevIndex,path:e.prevPath,operator:e.prevOperator,value:e.prevValue}))}if(e.moved){r.moved=e.moved.map(e=>({key:e.key,index:e.prevIndex,prevIndex:e.index,path:e.prevPath,prevPath:e.path,operator:e.prevOperator,prevOperator:e.operator,value:e.prevValue,prevValue:e.value}))}if(e.inserted){r.deleted=e.inserted.map(e=>({key:e.key,prevIndex:e.index,prevPath:e.path,prevOperator:e.operator,prevValue:e.value}))}return r};return e});
//# sourceMappingURL=FilterStateChangeHandler.js.map