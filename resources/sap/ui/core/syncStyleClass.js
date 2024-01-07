/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/Object","sap/base/assert"],function(jQuery,e,s){"use strict";var t=function(t,r,a){if(!t){return a}if(e.isObjectA(r,"sap.ui.core.Control")){r=r.$()}else if(typeof r==="string"){r=jQuery(document.getElementById(r))}else if(!(r instanceof jQuery)){s(false,"sap/ui/core/syncStyleClass(): vSource must be a jQuery object or a Control or a string");return a}var o=!!r.closest("."+t).length;if(a instanceof jQuery){a.toggleClass(t,o)}else if(e.isObjectA(a,"sap.ui.core.Control")){a.toggleStyleClass(t,o)}else{s(false,"sap/ui/core/syncStyleClass(): vDestination must be a jQuery object or a Control")}return a};return t});
//# sourceMappingURL=syncStyleClass.js.map