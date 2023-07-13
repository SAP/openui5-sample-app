/*
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/odata/ODataModel"],function(e){"use strict";return{parse:function(t,a){if(!this._index){this._index=0}var n="/annotationhandler"+this._index+++"/";var r=sap.ui.require("sap/ui/core/util/MockServer");var i=new r({rootUri:n,requests:[{method:"GET",path:new RegExp("\\$metadata"),response:function(e){e.respond(200,{"Content-Type":"application/xml;charset=utf-8"},a)}}]});i.start();var o={annotationURI:[n+"$metadata"],json:true};var s=new e(n,o);var u=s.getServiceAnnotations();i.destroy();return u}}},true);
//# sourceMappingURL=MockServerAnnotationsHandler.js.map