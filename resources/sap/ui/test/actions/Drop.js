/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/actions/Action"],function(t){"use strict";var e=t.extend("sap.ui.test.actions.Drop",{metadata:{properties:{aggregationName:"string",before:"boolean",after:"boolean"},publicMethods:["executeOn"]},executeOn:function(t){var e;if(this.getIdSuffix()){e=t.$(this.getIdSuffix())[0]}else if(this.getAggregationName()){e=t.getDomRefForSetting(this.getAggregationName())}else{var i=t.getMetadata().getAggregations();var a=Object.keys(i).filter(function(t){return i[t].dnd.droppable})[0];if(a){e=t.getDomRefForSetting(a)||t["get"+a]()[0]}}e=e||this.$(t)[0];if(e){var r={};if(this.getBefore()){r.position=this.dropPosition.BEFORE}else if(this.getAfter()){r.position=this.dropPosition.AFTER}else{r.position=this.dropPosition.CENTER}this._createAndDispatchDragEvent("dragenter",e,r);this._createAndDispatchDragEvent("dragover",e,r);this._createAndDispatchDragEvent("drop",e,r);this._createAndDispatchDragEvent("dragend",e,r)}}});return e});
//# sourceMappingURL=Drop.js.map