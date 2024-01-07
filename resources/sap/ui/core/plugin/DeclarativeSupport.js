/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/DeclarativeSupport","sap/ui/core/Core"],function(o,t){"use strict";var i=function(){};i.prototype.startPlugin=function(i,e){o.info("Starting DeclarativeSupport plugin.");this.oCore=i;this.oWindow=window;t.compile(document.body)};i.prototype.stopPlugin=function(){o.info("Stopping DeclarativeSupport plugin.");this.oCore=null};sap.ui.getCore().registerPlugin(new i);return i},true);
//# sourceMappingURL=DeclarativeSupport.js.map