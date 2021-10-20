/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.dissolve=function(t,s){return new n.transition(t,i.extend({setup:function(){var n=i('<div class="image"></div>').css({width:"100%",height:"100%","background-image":this.slider.image1.css("background-image")}).css3({"transition-duration":"600ms","transition-timing-function":"ease-in","transition-property":"opacity"});this.slider.image1.append(n)},execute:function(){var n=this,t=this.slider.image1.find("div.image");i(t).transitionEnd(function(){n.finished()}),setTimeout(function(){i(t).css({opacity:"0.0"})},50)}},s))}});
//# sourceMappingURL=sourcemaps/flux.transitions.dissolve.js.map
