/*!
 * jQuery UI Effects Highlight 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,o){e.effects.effect.highlight=function(o,c){var f=e(this),a=["backgroundImage","backgroundColor","opacity"],n=e.effects.setMode(f,o.mode||"show"),i={backgroundColor:f.css("backgroundColor")};if(n==="hide"){i.opacity=0}e.effects.save(f,a);f.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(i,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(n==="hide"){f.hide()}e.effects.restore(f,a);c()}})}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-highlight.js.map