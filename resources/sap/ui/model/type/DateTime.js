/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Date","sap/ui/core/format/DateFormat"],function(t,e){"use strict";var o=t.extend("sap.ui.model.type.DateTime",{constructor:function(){t.apply(this,arguments);this.sName="DateTime"}});o.prototype._createFormats=function(){this.oOutputFormat=e.getDateTimeInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=e.getDateTimeInstance(this.oFormatOptions.source)}};return o});
//# sourceMappingURL=DateTime.js.map