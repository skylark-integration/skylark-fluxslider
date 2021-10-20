/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.blocks=function(t,e){return new n.transition_grid(t,i.extend({forceSquare:!0,delayBetweenBars:100,renderTile:function(n,t,e,a,s,o,r){var l=Math.floor(10*Math.random()*this.options.delayBetweenBars);i(n).css({"background-image":this.slider.image1.css("background-image"),"background-position":"-"+o+"px -"+r+"px"}).css3({"transition-duration":"350ms","transition-timing-function":"ease-in","transition-property":"all","transition-delay":l+"ms"}),void 0===this.maxDelay&&(this.maxDelay=0),l>this.maxDelay&&(this.maxDelay=l,this.maxDelayTile=n)},execute:function(){var n=this,t=this.slider.image1.find("div.tile");this.maxDelayTile.transitionEnd(function(){n.finished()}),setTimeout(function(){t.each(function(n,t){i(t).css({opacity:"0"}).css3({transform:"scale(0.8)"})})},50)}},e))}});
//# sourceMappingURL=sourcemaps/flux.transitions.blocks.js.map
