/*!
 * Mobiscroll v2.9.0
 * http://mobiscroll.com
 *
 * Copyright 2010-2013, Acid Media
 * Licensed under the MIT license.
 *
 */
(function(e){function t(e){var t;for(t in e){if(u[e[t]]!==undefined){return true}}return false}function r(){var e=["Webkit","Moz","O","ms"],r;for(r in e){if(t([e[r]+"Transform"])){return"-"+e[r].toLowerCase()+"-"}}return""}function n(e,t){var r=e.originalEvent,n=e.changedTouches;return n||r&&r.changedTouches?r?r.changedTouches[0]["page"+t]:n[0]["page"+t]:e["page"+t]}function o(t,r,n){var o=t;if(typeof r==="object"){return t.each(function(){if(!this.id){this.id="mobiscroll"+ ++s}if(l[this.id]){l[this.id].destroy()}new e.mobiscroll.classes[r.component||"Scroller"](this,r)})}if(typeof r==="string"){t.each(function(){var e,t=l[this.id];if(t&&t[r]){e=t[r].apply(this,Array.prototype.slice.call(n,1));if(e!==undefined){o=e;return false}}})}return o}function i(e){if(e.type=="touchstart"){c[e.target]=true}else if(c[e.target]){delete c[e.target];return false}return true}var s=+new Date,c={},l={},f=e.extend,u=document.createElement("modernizr").style,a=t(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),p=r(),h=p.replace(/^\-/,"").replace(/\-$/,"").replace("moz","Moz");e.fn.mobiscroll=function(t){f(this,e.mobiscroll.components);return o(this,t,arguments)};e.mobiscroll=e.mobiscroll||{util:{prefix:p,jsPrefix:h,has3d:a,getCoord:n,testTouch:i},presets:{},themes:{},i18n:{},instances:l,classes:{},components:{},defaults:{},setDefaults:function(e){f(defaults,e)},presetShort:function(e,t){this.components[e]=function(r){return o(this,f(r,{component:t,preset:e}),arguments)}}};e.scroller=e.scroller||e.mobiscroll;e.fn.scroller=e.fn.scroller||e.fn.mobiscroll})(jQuery);
//# sourceMappingURL=mobiscroll-core.js.map