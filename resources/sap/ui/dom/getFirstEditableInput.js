/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/isHidden"],function(jQuery,t){"use strict";function e(t,e){var n="textarea[readonly],input[type=hidden],input[type=button],input[type=submit],input[type=reset],input[type=image],button",i=":enabled:visible:first";if(e){return jQuery(t).find("input, textarea").not(n).filter(i)[0]}else{return jQuery(t).find("input, textarea").not("input[readonly],"+n).filter(i)[0]}}function n(n,i){var u;if(!n||t(n)){return null}if(i){u=i.includeReadOnly}return e(n,u)}return n});
//# sourceMappingURL=getFirstEditableInput.js.map