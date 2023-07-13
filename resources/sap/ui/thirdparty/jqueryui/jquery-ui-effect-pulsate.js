/*!
 * jQuery UI Effects Pulsate 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,i){e.effects.effect.pulsate=function(i,t){var s=e(this),a=e.effects.setMode(s,i.mode||"show"),c=a==="show",o=a==="hide",f=c||a==="hide",n=(i.times||5)*2+(f?1:0),u=i.duration/n,h=0,p=s.queue(),d=p.length,l;if(c||!s.is(":visible")){s.css("opacity",0).show();h=1}for(l=1;l<n;l++){s.animate({opacity:h},u,i.easing);h=1-h}s.animate({opacity:h},u,i.easing);s.queue(function(){if(o){s.hide()}t()});if(d>1){p.splice.apply(p,[1,0].concat(p.splice(d,n+1)))}s.dequeue()}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-pulsate.js.map