/*!
 * jQuery UI Effects Bounce 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,t){e.effects.effect.bounce=function(t,i){var f=e(this),o=["position","top","bottom","left","right","height","width"],c=e.effects.setMode(f,t.mode||"effect"),a=c==="hide",s=c==="show",p=t.direction||"up",n=t.distance,u=t.times||5,r=u*2+(s||a?1:0),h=t.duration/r,d=t.easing,m=p==="up"||p==="down"?"top":"left",l=p==="up"||p==="left",y,g,w,q=f.queue(),v=q.length;if(s||a){o.push("opacity")}e.effects.save(f,o);f.show();e.effects.createWrapper(f);if(!n){n=f[m==="top"?"outerHeight":"outerWidth"]()/3}if(s){w={opacity:1};w[m]=0;f.css("opacity",0).css(m,l?-n*2:n*2).animate(w,h,d)}if(a){n=n/Math.pow(2,u-1)}w={};w[m]=0;for(y=0;y<u;y++){g={};g[m]=(l?"-=":"+=")+n;f.animate(g,h,d).animate(w,h,d);n=a?n*2:n/2}if(a){g={opacity:0};g[m]=(l?"-=":"+=")+n;f.animate(g,h,d)}f.queue(function(){if(a){f.hide()}e.effects.restore(f,o);e.effects.removeWrapper(f);i()});if(v>1){q.splice.apply(q,[1,0].concat(q.splice(v,r+1)))}f.dequeue()}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-bounce.js.map