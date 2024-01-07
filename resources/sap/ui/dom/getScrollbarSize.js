/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var i={};var e=function(e,t){if(typeof e==="boolean"){t=e;e=null}var r=e||"#DEFAULT";if(t){if(e){delete i[e]}else{i={}}}if(i[r]){return i[r]}if(!document.body){return{width:0,height:0}}var s=jQuery("<DIV></DIV>").css("visibility","hidden").css("height","0").css("width","0").css("overflow","hidden");if(e){s.addClass(e)}s.prependTo(document.body);var d=jQuery("<div></div>");d[0].style="visibility:visible;position:absolute;height:100px;width:100px;overflow:scroll;opacity:0;";s.append(d);var o=d.get(0);var h=o.offsetWidth-o.scrollWidth;var l=o.offsetHeight-o.scrollHeight;s.remove();if(h===0||l===0){return{width:h,height:l}}i[r]={width:h,height:l};return i[r]};return e});
//# sourceMappingURL=getScrollbarSize.js.map