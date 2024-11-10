/*!
 * jQuery UI Resizable 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(i,t){function e(i){return parseInt(i,10)||0}function s(i){return!isNaN(parseInt(i,10))}i.widget("ui.resizable",i.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,e,s,h,n,o=this,a=this.options;this.element.addClass("ui-resizable");i.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(i("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!i(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}t=this.handles.split(",");this.handles={};for(e=0;e<t.length;e++){s=t[e].trim();n="ui-resizable-"+s;h=i("<div class='ui-resizable-handle "+n+"'></div>");h.css({zIndex:a.zIndex});if("se"===s){h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[s]=".ui-resizable-"+s;this.element.append(h)}}this._renderAxis=function(t){var e,s,h,n;t=t||this.element;for(e in this.handles){if(this.handles[e].constructor===String){this.handles[e]=i(this.handles[e],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){s=i(this.handles[e],this.element);n=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth();h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join("");t.css(h,n);this._proportionallyResize()}if(!i(this.handles[e]).length){continue}}};this._renderAxis(this.element);this._handles=i(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!o.resizing){if(this.className){h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}o.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();i(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(a.disabled){return}i(this).removeClass("ui-resizable-autohide");o._handles.show()}).mouseleave(function(){if(a.disabled){return}if(!o.resizing){i(this).addClass("ui-resizable-autohide");o._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,e=function(t){i(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);t=this.element;this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t);t.remove()}this.originalElement.css("resize",this.originalResizeStyle);e(this.originalElement);return this},_mouseCapture:function(t){var e,s,h=false;for(e in this.handles){s=i(this.handles[e])[0];if(s===t.target||i.contains(s,t.target)){h=true}}return!this.options.disabled&&h},_mouseStart:function(t){var s,h,n,o=this.options,a=this.element.position(),l=this.element;this.resizing=true;if(/absolute/.test(l.css("position"))){l.css({position:"absolute",top:l.css("top"),left:l.css("left")})}else if(l.is(".ui-draggable")){l.css({position:"absolute",top:a.top,left:a.left})}this._renderProxy();s=e(this.helper.css("left"));h=e(this.helper.css("top"));if(o.containment){s+=i(o.containment).scrollLeft()||0;h+=i(o.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:s,top:h};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:l.width(),height:l.height()};this.originalSize=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()};this.originalPosition={left:s,top:h};this.sizeDiff={width:l.outerWidth()-l.width(),height:l.outerHeight()-l.height()};this.originalMousePosition={left:t.pageX,top:t.pageY};this.aspectRatio=typeof o.aspectRatio==="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1;n=i(".ui-resizable-"+this.axis).css("cursor");i("body").css("cursor",n==="auto"?this.axis+"-resize":n);l.addClass("ui-resizable-resizing");this._propagate("start",t);return true},_mouseDrag:function(t){var e,s=this.helper,h={},n=this.originalMousePosition,o=this.axis,a=this.position.top,l=this.position.left,r=this.size.width,p=this.size.height,f=t.pageX-n.left||0,d=t.pageY-n.top||0,g=this._change[o];if(!g){return false}e=g.apply(this,[t,f,d]);this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey){e=this._updateRatio(e,t)}e=this._respectSize(e,t);this._updateCache(e);this._propagate("resize",t);if(this.position.top!==a){h.top=this.position.top+"px"}if(this.position.left!==l){h.left=this.position.left+"px"}if(this.size.width!==r){h.width=this.size.width+"px"}if(this.size.height!==p){h.height=this.size.height+"px"}s.css(h);if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!i.isEmptyObject(h)){this._trigger("resize",t,this.ui())}return false},_mouseStop:function(t){this.resizing=false;var e,s,h,n,o,a,l,r=this.options,p=this;if(this._helper){e=this._proportionallyResizeElements;s=e.length&&/textarea/i.test(e[0].nodeName);h=s&&i.ui.hasScroll(e[0],"left")?0:p.sizeDiff.height;n=s?0:p.sizeDiff.width;o={width:p.helper.width()-n,height:p.helper.height()-h};a=parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left)||null;l=parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top)||null;if(!r.animate){this.element.css(i.extend(o,{top:l,left:a}))}p.helper.height(p.size.height);p.helper.width(p.size.width);if(this._helper&&!r.animate){this._proportionallyResize()}}i("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",t);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(i){var t,e,h,n,o,a=this.options;o={minWidth:s(a.minWidth)?a.minWidth:0,maxWidth:s(a.maxWidth)?a.maxWidth:Infinity,minHeight:s(a.minHeight)?a.minHeight:0,maxHeight:s(a.maxHeight)?a.maxHeight:Infinity};if(this._aspectRatio||i){t=o.minHeight*this.aspectRatio;h=o.minWidth/this.aspectRatio;e=o.maxHeight*this.aspectRatio;n=o.maxWidth/this.aspectRatio;if(t>o.minWidth){o.minWidth=t}if(h>o.minHeight){o.minHeight=h}if(e<o.maxWidth){o.maxWidth=e}if(n<o.maxHeight){o.maxHeight=n}}this._vBoundaries=o},_updateCache:function(i){this.offset=this.helper.offset();if(s(i.left)){this.position.left=i.left}if(s(i.top)){this.position.top=i.top}if(s(i.height)){this.size.height=i.height}if(s(i.width)){this.size.width=i.width}},_updateRatio:function(i){var t=this.position,e=this.size,h=this.axis;if(s(i.height)){i.width=i.height*this.aspectRatio}else if(s(i.width)){i.height=i.width/this.aspectRatio}if(h==="sw"){i.left=t.left+(e.width-i.width);i.top=null}if(h==="nw"){i.top=t.top+(e.height-i.height);i.left=t.left+(e.width-i.width)}return i},_respectSize:function(i){var t=this._vBoundaries,e=this.axis,h=s(i.width)&&t.maxWidth&&t.maxWidth<i.width,n=s(i.height)&&t.maxHeight&&t.maxHeight<i.height,o=s(i.width)&&t.minWidth&&t.minWidth>i.width,a=s(i.height)&&t.minHeight&&t.minHeight>i.height,l=this.originalPosition.left+this.originalSize.width,r=this.position.top+this.size.height,p=/sw|nw|w/.test(e),f=/nw|ne|n/.test(e);if(o){i.width=t.minWidth}if(a){i.height=t.minHeight}if(h){i.width=t.maxWidth}if(n){i.height=t.maxHeight}if(o&&p){i.left=l-t.minWidth}if(h&&p){i.left=l-t.maxWidth}if(a&&f){i.top=r-t.minHeight}if(n&&f){i.top=r-t.maxHeight}if(!i.width&&!i.height&&!i.left&&i.top){i.top=null}else if(!i.width&&!i.height&&!i.top&&i.left){i.left=null}return i},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var i,t,e,s,h,n=this.helper||this.element;for(i=0;i<this._proportionallyResizeElements.length;i++){h=this._proportionallyResizeElements[i];if(!this.borderDif){this.borderDif=[];e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")];s=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")];for(t=0;t<e.length;t++){this.borderDif[t]=(parseInt(e[t],10)||0)+(parseInt(s[t],10)||0)}}h.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset();if(this._helper){this.helper=this.helper||i("<div></div>");this.helper.addClass(this._helper).css({overflow:"hidden",width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(i,t){return{width:this.originalSize.width+t}},w:function(i,t){var e=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:e.width-t}},n:function(i,t,e){var s=this.originalSize,h=this.originalPosition;return{top:h.top+e,height:s.height-e}},s:function(i,t,e){return{height:this.originalSize.height+e}},se:function(t,e,s){return i.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,s]))},sw:function(t,e,s){return i.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,s]))},ne:function(t,e,s){return i.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,s]))},nw:function(t,e,s){return i.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,s]))}},_propagate:function(t,e){i.ui.plugin.call(this,t,[e,this.ui()]);t!=="resize"&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});i.ui.plugin.add("resizable","animate",{stop:function(t){var e=i(this).data("ui-resizable"),s=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&i.ui.hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null,p=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null;e.element.animate(i.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(e.element.css("width"),10),height:parseInt(e.element.css("height"),10),top:parseInt(e.element.css("top"),10),left:parseInt(e.element.css("left"),10)};if(h&&h.length){i(h[0]).css({width:s.width,height:s.height})}e._updateCache(s);e._propagate("resize",t)}})}});i.ui.plugin.add("resizable","containment",{start:function(){var t,s,h,n,o,a,l,r=i(this).data("ui-resizable"),p=r.options,f=r.element,d=p.containment,g=d instanceof i?d.get(0):/parent/.test(d)?f.parent().get(0):d;if(!g){return}r.containerElement=i(g);if(/document/.test(d)||d===document){r.containerOffset={left:0,top:0};r.containerPosition={left:0,top:0};r.parentData={element:i(document),left:0,top:0,width:i(document).width(),height:i(document).height()||document.body.parentNode.scrollHeight}}else{t=i(g);s=[];i(["Top","Right","Left","Bottom"]).each(function(i,h){s[i]=e(t.css("padding"+h))});r.containerOffset=t.offset();r.containerPosition=t.position();r.containerSize={height:t.innerHeight()-s[3],width:t.innerWidth()-s[1]};h=r.containerOffset;n=r.containerSize.height;o=r.containerSize.width;a=i.ui.hasScroll(g,"left")?g.scrollWidth:o;l=i.ui.hasScroll(g)?g.scrollHeight:n;r.parentData={element:g,left:h.left,top:h.top,width:a,height:l}}},resize:function(t){var e,s,h,n,o=i(this).data("ui-resizable"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||t.shiftKey,f={top:0,left:0},d=o.containerElement;if(d[0]!==document&&/static/.test(d.css("position"))){f=l}if(r.left<(o._helper?l.left:0)){o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-f.left);if(p){o.size.height=o.size.width/o.aspectRatio}o.position.left=a.helper?l.left:0}if(r.top<(o._helper?l.top:0)){o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top);if(p){o.size.width=o.size.height*o.aspectRatio}o.position.top=o._helper?l.top:0}o.offset.left=o.parentData.left+o.position.left;o.offset.top=o.parentData.top+o.position.top;e=Math.abs((o._helper?o.offset.left-f.left:o.offset.left-f.left)+o.sizeDiff.width);s=Math.abs((o._helper?o.offset.top-f.top:o.offset.top-l.top)+o.sizeDiff.height);h=o.containerElement.get(0)===o.element.parent().get(0);n=/relative|absolute/.test(o.containerElement.css("position"));if(h&&n){e-=Math.abs(o.parentData.left)}if(e+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-e;if(p){o.size.height=o.size.width/o.aspectRatio}}if(s+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-s;if(p){o.size.width=o.size.height*o.aspectRatio}}},stop:function(){var t=i(this).data("ui-resizable"),e=t.options,s=t.containerOffset,h=t.containerPosition,n=t.containerElement,o=i(t.helper),a=o.offset(),l=o.outerWidth()-t.sizeDiff.width,r=o.outerHeight()-t.sizeDiff.height;if(t._helper&&!e.animate&&/relative/.test(n.css("position"))){i(this).css({left:a.left-h.left-s.left,width:l,height:r})}if(t._helper&&!e.animate&&/static/.test(n.css("position"))){i(this).css({left:a.left-h.left-s.left,width:l,height:r})}}});i.ui.plugin.add("resizable","alsoResize",{start:function(){var t=i(this).data("ui-resizable"),e=t.options,s=function(t){i(t).each(function(){var t=i(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};if(typeof e.alsoResize==="object"&&!e.alsoResize.parentNode){if(e.alsoResize.length){e.alsoResize=e.alsoResize[0];s(e.alsoResize)}else{i.each(e.alsoResize,function(i){s(i)})}}else{s(e.alsoResize)}},resize:function(t,e){var s=i(this).data("ui-resizable"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},l=function(t,s){i(t).each(function(){var t=i(this),h=i(this).data("ui-resizable-alsoresize"),n={},o=s&&s.length?s:t.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];i.each(o,function(i,t){var e=(h[t]||0)+(a[t]||0);if(e&&e>=0){n[t]=e||null}});t.css(n)})};if(typeof h.alsoResize==="object"&&!h.alsoResize.nodeType){i.each(h.alsoResize,function(i,t){l(i,t)})}else{l(h.alsoResize)}},stop:function(){i(this).removeData("resizable-alsoresize")}});i.ui.plugin.add("resizable","ghost",{start:function(){var t=i(this).data("ui-resizable"),e=t.options,s=t.size;t.ghost=t.originalElement.clone();t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost==="string"?e.ghost:"");t.ghost.appendTo(t.helper)},resize:function(){var t=i(this).data("ui-resizable");if(t.ghost){t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})}},stop:function(){var t=i(this).data("ui-resizable");if(t.ghost&&t.helper){t.helper.get(0).removeChild(t.ghost.get(0))}}});i.ui.plugin.add("resizable","grid",{resize:function(){var t=i(this).data("ui-resizable"),e=t.options,s=t.size,h=t.originalSize,n=t.originalPosition,o=t.axis,a=typeof e.grid==="number"?[e.grid,e.grid]:e.grid,l=a[0]||1,r=a[1]||1,p=Math.round((s.width-h.width)/l)*l,f=Math.round((s.height-h.height)/r)*r,d=h.width+p,g=h.height+f,u=e.maxWidth&&e.maxWidth<d,c=e.maxHeight&&e.maxHeight<g,m=e.minWidth&&e.minWidth>d,z=e.minHeight&&e.minHeight>g;e.grid=a;if(m){d=d+l}if(z){g=g+r}if(u){d=d-l}if(c){g=g-r}if(/^(se|s|e)$/.test(o)){t.size.width=d;t.size.height=g}else if(/^(ne)$/.test(o)){t.size.width=d;t.size.height=g;t.position.top=n.top-f}else if(/^(sw)$/.test(o)){t.size.width=d;t.size.height=g;t.position.left=n.left-p}else{if(g-r>0){t.size.height=g;t.position.top=n.top-f}else{t.size.height=r;t.position.top=n.top+h.height-r}if(d-l>0){t.size.width=d;t.position.left=n.left-p}else{t.size.width=l;t.position.left=n.left+h.width-l}}}})})(jQuery);
//# sourceMappingURL=jquery-ui-resizable.js.map