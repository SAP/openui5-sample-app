/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Date","sap/ui/core/format/DateFormat"],function(t,o){"use strict";var e=t.extend("sap.ui.model.type.Time",{constructor:function(){t.apply(this,arguments);this.sName="Time"}});e.prototype._createFormats=function(){this.oOutputFormat=o.getTimeInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=o.getTimeInstance(this.oFormatOptions.source)}};return e});
//# sourceMappingURL=Time.js.map