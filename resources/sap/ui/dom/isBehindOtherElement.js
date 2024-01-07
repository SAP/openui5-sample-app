/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";function t(t){if(!t){return false}var n=t.getBoundingClientRect(),i=n.left+1,o=n.right-1,r=n.top+1,m=n.bottom-1;if(i<0||o<0||r<0||m<0){e.warning("isBehindOtherElement :: Element with id "+t.id+" is outside the visible viewport, cannot determine whether it is behind another DOM element",this);return false}if(document.elementFromPoint(i,r)!==t&&!t.contains(document.elementFromPoint(i,r))){return true}if(document.elementFromPoint(o,r)!==t&&!t.contains(document.elementFromPoint(o,r))){return true}if(document.elementFromPoint(i,m)!==t&&!t.contains(document.elementFromPoint(i,m))){return true}if(document.elementFromPoint(o,m)!==t&&!t.contains(document.elementFromPoint(o,m))){return true}return false}return t});
//# sourceMappingURL=isBehindOtherElement.js.map