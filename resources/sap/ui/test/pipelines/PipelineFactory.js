/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/base/Log"],function(n,e){"use strict";return n.extend("sap.ui.test.pipelines.PipelineFactory",{constructor:function(e){n.call(this);this._oOptions=e},create:function(n){var t=[];if(Array.isArray(n)){t=n}else if(n){t=[n]}else{e.error(this._oOptions.name+" were defined, but they were neither an array nor a single element: "+n)}t=t.map(function(n){var t;if(n[this._oOptions.functionName]){return n}else if(typeof n=="function"){t={};t[this._oOptions.functionName]=n;return t}e.error("A "+this._oOptions.name+" was defined, but it is no function and has no '"+this._oOptions.functionName+"' function: "+n)}.bind(this)).filter(function(n){return!!n});return t}})});
//# sourceMappingURL=PipelineFactory.js.map