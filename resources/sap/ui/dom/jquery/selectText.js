/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var t=function t(e,r){var i=this.get(0);try{if(typeof i.selectionStart==="number"){i.setSelectionRange(e>0?e:0,r)}}catch(t){}return this};jQuery.fn.selectText=t;return jQuery});
//# sourceMappingURL=selectText.js.map