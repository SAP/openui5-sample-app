/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/tmpl/Template","sap/ui/core/Core"],function(t){"use strict";var i=function(){};i.prototype.startPlugin=function(i,e){t.info("Starting TemplatingSupport plugin.");this.oCore=i;sap.ui.template()};i.prototype.stopPlugin=function(){t.info("Stopping TemplatingSupport plugin.");this.oCore=null};sap.ui.getCore().registerPlugin(new i);return i},true);
//# sourceMappingURL=TemplatingSupport.js.map