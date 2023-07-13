/*!
 * jQuery UI Effects Shake 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,t){e.effects.effect.shake=function(t,i){var a=e(this),f=["position","top","bottom","left","right","height","width"],n=e.effects.setMode(a,t.mode||"effect"),s=t.direction||"left",o=t.distance||20,c=t.times||3,r=c*2+1,u=Math.round(t.duration/r),p=s==="up"||s==="down"?"top":"left",d=s==="up"||s==="left",h={},m={},g={},l,q=a.queue(),v=q.length;e.effects.save(a,f);a.show();e.effects.createWrapper(a);h[p]=(d?"-=":"+=")+o;m[p]=(d?"+=":"-=")+o*2;g[p]=(d?"-=":"+=")+o*2;a.animate(h,u,t.easing);for(l=1;l<c;l++){a.animate(m,u,t.easing).animate(g,u,t.easing)}a.animate(m,u,t.easing).animate(h,u/2,t.easing).queue(function(){if(n==="hide"){a.hide()}e.effects.restore(a,f);e.effects.removeWrapper(a);i()});if(v>1){q.splice.apply(q,[1,0].concat(q.splice(v,r+1)))}a.dequeue()}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-shake.js.map