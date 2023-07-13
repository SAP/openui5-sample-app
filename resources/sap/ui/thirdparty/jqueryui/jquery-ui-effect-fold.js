/*!
 * jQuery UI Effects Fold 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,t){e.effects.effect.fold=function(t,i){var h=e(this),f=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(h,t.mode||"hide"),o=s==="show",d=s==="hide",r=t.size||15,c=/([0-9]+)%/.exec(r),n=!!t.horizFirst,a=o!==n,g=a?["width","height"]:["height","width"],w=t.duration/2,p,m,u={},v={};e.effects.save(h,f);h.show();p=e.effects.createWrapper(h).css({overflow:"hidden"});m=a?[p.width(),p.height()]:[p.height(),p.width()];if(c){r=parseInt(c[1],10)/100*m[d?0:1]}if(o){p.css(n?{height:0,width:r}:{height:r,width:0})}u[g[0]]=o?m[0]:r;v[g[1]]=o?m[1]:0;p.animate(u,w,t.easing).animate(v,w,t.easing,function(){if(d){h.hide()}e.effects.restore(h,f);e.effects.removeWrapper(h);i()})}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-fold.js.map