/*!
 * jQuery UI Effects Drop 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,t){e.effects.effect.drop=function(t,o){var i=e(this),s=["position","top","bottom","left","right","opacity","height","width"],f=e.effects.setMode(i,t.mode||"hide"),c=f==="show",p=t.direction||"left",r=p==="up"||p==="down"?"top":"left",a=p==="up"||p==="left"?"pos":"neg",n={opacity:c?1:0},d;e.effects.save(i,s);i.show();e.effects.createWrapper(i);d=t.distance||i[r==="top"?"outerHeight":"outerWidth"](true)/2;if(c){i.css("opacity",0).css(r,a==="pos"?-d:d)}n[r]=(c?a==="pos"?"+=":"-=":a==="pos"?"-=":"+=")+d;i.animate(n,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(f==="hide"){i.hide()}e.effects.restore(i,s);e.effects.removeWrapper(i);o()}})}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-drop.js.map