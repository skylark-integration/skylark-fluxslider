/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.swipe=function(t,s){return new n.transition(t,i.extend({setup:function(){var n=i("<div></div>").css({width:"100%",height:"100%","background-image":this.slider.image1.css("background-image")}).css3({"transition-duration":"1600ms","transition-timing-function":"ease-in","transition-property":"all","mask-image":"-webkit-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(0,0,0,1) 52%, rgba(0,0,0,1) 100%)","mask-position":"70%","mask-size":"400%"});this.slider.image1.append(n)},execute:function(){var n=this,t=this.slider.image1.find("div");i(t).transitionEnd(function(){n.finished()}),setTimeout(function(){i(t).css3({"mask-position":"30%"})},50)},compatibilityCheck:function(){return n.browser.supportsCSSProperty("MaskImage")}},s))}});
//# sourceMappingURL=sourcemaps/flux.transitions.swipe.js.map
