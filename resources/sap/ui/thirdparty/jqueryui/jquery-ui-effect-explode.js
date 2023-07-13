/*!
 * jQuery UI Effects Explode 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(e,i){e.effects.effect.explode=function(i,t){var o=i.pieces?Math.round(Math.sqrt(i.pieces)):3,s=o,f=e(this),d=e.effects.setMode(f,i.mode||"hide"),n=d==="show",c=f.show().css("visibility","hidden").offset(),h=Math.ceil(f.outerWidth()/s),l=Math.ceil(f.outerHeight()/o),a=[],p,r,u,v,b,y;function w(){a.push(this);if(a.length===o*s){M()}}for(p=0;p<o;p++){v=c.top+p*l;y=p-(o-1)/2;for(r=0;r<s;r++){u=c.left+r*h;b=r-(s-1)/2;f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-r*h,top:-p*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h,height:l,left:u+(n?b*h:0),top:v+(n?y*l:0),opacity:n?0:1}).animate({left:u+(n?0:b*h),top:v+(n?0:y*l),opacity:n?1:0},i.duration||500,i.easing,w)}}function M(){f.css({visibility:"visible"});e(a).remove();if(!n){f.hide()}t()}}})(jQuery);
//# sourceMappingURL=jquery-ui-effect-explode.js.map