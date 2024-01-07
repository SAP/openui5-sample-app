/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/test/pipelines/PipelineFactory"],function(e,n){"use strict";var t=new n({name:"Action",functionName:"executeOn"});return e.extend("sap.ui.test.matcherPipeline",{process:function(e){var n,i=e.control;var a=t.create(e.actions);if(!Array.isArray(i)){n=[i]}else{n=i}n.forEach(function(e){a.forEach(function(n){n.executeOn(e)})})}})});
//# sourceMappingURL=ActionPipeline.js.map