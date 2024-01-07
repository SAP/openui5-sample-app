/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(i){"use strict";return{display:function(i,t,e){this._display(i,t,e)},_display:function(i,t,e){var a=this;this._attachTitleChanged(i,e);if(Array.isArray(i)){i.forEach(function(i){a._displaySingleTarget(i,t)})}else{this._displaySingleTarget(i,t)}return this},_displaySingleTarget:function(t,e){var a=this.getTarget(t);if(a!==undefined){a.display(e)}else{i.error('The target with the name "'+t+'" does not exist!',this)}}}});
//# sourceMappingURL=Targets.js.map