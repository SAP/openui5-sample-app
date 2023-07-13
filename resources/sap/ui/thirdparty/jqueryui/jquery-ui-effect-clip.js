/*!
 * jQuery UI Effects Clip 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,t){e.effects.effect.clip=function(t,i){var f=e(this),s=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(f,t.mode||"hide"),c=o==="show",r=t.direction||"vertical",a=r==="vertical",n=a?"height":"width",h=a?"top":"left",d={},p,l,u;e.effects.save(f,s);f.show();p=e.effects.createWrapper(f).css({overflow:"hidden"});l=f[0].tagName==="IMG"?p:f;u=l[n]();if(c){l.css(n,0);l.css(h,u/2)}d[n]=c?u:0;d[h]=c?0:u/2;l.animate(d,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(!c){f.hide()}e.effects.restore(f,s);e.effects.removeWrapper(f);i()}})}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-clip.js.map