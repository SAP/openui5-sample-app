/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./DateInterval","sap/ui/core/format/DateFormat"],function(t,e){"use strict";var o=t.extend("sap.ui.model.type.DateTimeInterval",{constructor:function(){t.apply(this,arguments);this.sName="DateTimeInterval"}});o.prototype._createFormats=function(){this.oFormatOptions.interval=true;this.oOutputFormat=e.getDateTimeInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=e.getDateTimeInstance(this.oFormatOptions.source)}};return o});
//# sourceMappingURL=DateTimeInterval.js.map