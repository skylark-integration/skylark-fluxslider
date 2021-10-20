/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.bars=function(t,s){return new n.transition_grid(t,i.extend({columns:10,rows:1,delayBetweenBars:40,renderTile:function(n,t,s,e,r,a,o){i(n).css({"background-image":this.slider.image1.css("background-image"),"background-position":"-"+a+"px 0px"}).css3({"transition-duration":"400ms","transition-timing-function":"ease-in","transition-property":"all","transition-delay":t*this.options.delayBetweenBars+"ms"})},execute:function(){var t=this,s=this.slider.image1.height(),e=this.slider.image1.find("div.tile");i(e[e.length-1]).transitionEnd(function(){t.finished()}),setTimeout(function(){e.css({opacity:"0.5"}).css3({transform:n.browser.translate(0,s)})},50)}},s))}});
//# sourceMappingURL=sourcemaps/flux.transitions.bars.js.map
