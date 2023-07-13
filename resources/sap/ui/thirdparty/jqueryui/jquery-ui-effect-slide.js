/*!
 * jQuery UI Effects Slide 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,t){e.effects.effect.slide=function(t,i){var o=e(this),f=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(o,t.mode||"show"),r=s==="show",c=t.direction||"left",n=c==="up"||c==="down"?"top":"left",a=c==="up"||c==="left",d,h={};e.effects.save(o,f);o.show();d=t.distance||o[n==="top"?"outerHeight":"outerWidth"](true);e.effects.createWrapper(o).css({overflow:"hidden"});if(r){o.css(n,a?isNaN(d)?"-"+d:-d:d)}h[n]=(r?a?"+=":"-=":a?"-=":"+=")+d;o.animate(h,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(s==="hide"){o.hide()}e.effects.restore(o,f);e.effects.removeWrapper(o);i()}})}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-slide.js.map