/*!
 * copyright
 */
sap.ui.define(["sap/base/assert","sap/base/config","sap/base/Event","sap/base/Eventing","sap/base/Log","sap/base/i18n/Localization","sap/base/util/deepEqual","sap/ui/core/theming/ThemeHelper"],function(e,t,n,a,i,o,r,h){"use strict";var s=t.getWritableInstance();var c;var f;var g={getTheme:function(){var e=s.get({name:"sapTheme",type:s.Type.String,defaultValue:s.get({name:"sapUiTheme",type:s.Type.String,external:true}),external:true});if(e===""){const t=h.getDefaultThemeInfo();e=`${t.DEFAULT_THEME}${t.DARK_MODE?"_dark":""}`}var t=e.indexOf("@");if(t>=0){var n=d(e.slice(t+1));e=t>0?e.slice(0,t):e;if(n!==g.getThemeRoot(e)){g.setThemeRoot(e,n)}}e=h.validateAndFallbackTheme(e,g.getThemeRoot(e));return e},setTheme:function(e){if(e){if(e.indexOf("@")!==-1){throw new TypeError("Providing a theme root as part of the theme parameter is not allowed.")}var t=!c;c=c||{};var n=g.getTheme();s.set("sapTheme",e);var a=g.getTheme();var i=n!==a;if(i){c.theme={new:a,old:n}}else{c=undefined}if(t){l(c)}if(!f&&i){p({theme:a})}}return this},getThemeRoot:function(e,t){var n=s.get({name:"sapUiThemeRoots",type:s.Type.Object});var a;e=e||g.getTheme();if(n[e]&&typeof n[e]==="string"){a=n[e]}else if(n[e]&&typeof n[e]==="object"){a=n[e][t]||n[e][""]}return a},setThemeRoot:function(t,n,a,i){e(typeof t==="string","sThemeName must be a string");e(typeof n==="string","sThemeBaseUrl must be a string");var o=!c;c=c||{};var h={name:"sapUiThemeRoots",type:s.Type.Object};var f=s.get(Object.assign(h,{defaultValue:{}}));var p=s.get(Object.assign(h,{defaultValue:{}}));if(typeof a==="boolean"){i=a;a=undefined}p[t]=p[t]||{};if(typeof p[t]==="string"){p[t]={"":p[t]};f[t]={"":f[t]}}if(a){for(var m=0;m<a.length;m++){var d=a[m];p[t][d]=n}}else{p[t][""]=n}if(!r(f,p)){s.set("sapUiThemeRoots",p);if(a){c.themeRoots={new:Object.assign({},p[t]),old:Object.assign({},f[t])}}else{c.themeRoots={new:n,old:f[t]&&f[t][""]}}c.themeRoots.forceUpdate=i&&t===g.getTheme()}else{c=undefined}if(o){l()}},attachAppliedOnce:function(e){var t="applied";if(f){if(f.themeLoaded){e.call(g,new n(t,g,{theme:g.getTheme()}))}else{g.attachEventOnce(t,e)}}else{e.call(g,new n(t,g,{theme:g.getTheme()}))}},attachApplied:function(e){var t="applied";g.attachEvent(t,e);if(f){if(f.themeLoaded){e.call(g,new n(t,g,{theme:g.getTheme()}))}}else{e.call(g,new n(t,g,{theme:g.getTheme()}))}},detachApplied:function(e){g.detachEvent("applied",e)},attachChange:function(e){g.attachEvent("change",e)},detachChange:function(e){g.detachEvent("change",e)},attachThemeScopingChanged:function(e){g.attachEvent("themeScopingChanged",e)},detachThemeScopingChanged:function(e){g.detachEvent("themeScopingChanged",e)},fireThemeScopingChanged:function(e){g.fireEvent("themeScopingChanged",e)},notifyContentDensityChanged:function(){p({theme:g.getTheme()})},registerThemeManager:function(e){f=e;f.attachEvent("applied",function(e){p(n.getParameters(e))});o.attachChange(function(e){var t=e.rtl;if(t!==undefined){f._updateThemeUrls(g.getTheme())}})}};function l(){if(c){g.fireEvent("change",c);c=undefined}}function p(e){g.fireEvent("applied",e)}function m(e,t){var n=s.get({name:"sapAllowedThemeOrigins",type:s.Type.String});return!!n&&n.split(",").some(function(n){try{n=t&&!n.startsWith("//")?"//"+n:n;return n==="*"||e===new URL(n.trim(),globalThis.location.href).origin}catch(e){i.error("sapAllowedThemeOrigin provides invalid theme origin: "+n);return false}})}function d(e){var t=e.startsWith("//"),n,a;try{n=new URL(e,globalThis.location.href);n.search="";if(n.origin&&m(n.origin,t)){a=n.toString()}else{n=new URL(n.pathname,globalThis.location.href);a=n.toString()}if(t){a=a.replace(n.protocol,"")}return a+(a.endsWith("/")?"":"/")+"UI5/"}catch(e){}}a.apply(g);return g});
//# sourceMappingURL=Theming.js.map