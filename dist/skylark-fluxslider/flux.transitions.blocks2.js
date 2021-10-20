/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.blocks2=function(t,e){return new n.transition_grid(t,i.extend({cols:12,forceSquare:!0,delayBetweenDiagnols:150,renderTile:function(n,t,e,s,a,o,r){Math.floor(10*Math.random()*this.options.delayBetweenBars);i(n).css({"background-image":this.slider.image1.css("background-image"),"background-position":"-"+o+"px -"+r+"px"}).css3({"transition-duration":"350ms","transition-timing-function":"ease-in","transition-property":"all","transition-delay":(t+e)*this.options.delayBetweenDiagnols+"ms","backface-visibility":"hidden"})},execute:function(){var n=this,t=this.slider.image1.find("div.tile");t.last().transitionEnd(function(){n.finished()}),setTimeout(function(){t.each(function(n,t){i(t).css({opacity:"0"}).css3({transform:"scale(0.8)"})})},50)}},e))}});
//# sourceMappingURL=sourcemaps/flux.transitions.blocks2.js.map
