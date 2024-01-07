/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";function i(i,t,r){var e=this.attr(i);if(!e){return this.attr(i,t)}var n=e.split(" ");if(n.indexOf(t)==-1){r?n.unshift(t):n.push(t);this.attr(i,n.join(" "))}return this}function t(i,t){var r=this.attr(i)||"",e=r.split(" "),n=e.indexOf(t);if(n==-1){return this}e.splice(n,1);if(e.length){this.attr(i,e.join(" "))}else{this.removeAttr(i)}return this}jQuery.fn.addAriaLabelledBy=function(t,r){return i.call(this,"aria-labelledby",t,r)};jQuery.fn.removeAriaLabelledBy=function(i){return t.call(this,"aria-labelledby",i)};jQuery.fn.addAriaDescribedBy=function(t,r){return i.call(this,"aria-describedby",t,r)};jQuery.fn.removeAriaDescribedBy=function(i){return t.call(this,"aria-describedby",i)};return jQuery});
//# sourceMappingURL=Aria.js.map