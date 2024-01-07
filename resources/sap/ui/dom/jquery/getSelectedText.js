/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var t=function(){var t=this.get(0);try{if(typeof t.selectionStart==="number"){return t.value.substring(t.selectionStart,t.selectionEnd)}}catch(t){}return""};jQuery.fn.getSelectedText=t;return jQuery});
//# sourceMappingURL=getSelectedText.js.map