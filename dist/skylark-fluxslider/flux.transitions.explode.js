/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(e,i){i.transitions.explode=function(t,s){return new i.transition_grid(t,e.extend({columns:6,forceSquare:!0,delayBetweenBars:30,perspective:800,requires3d:!0,renderTile:function(i,t,s,n,a,r,o){var d=Math.floor(10*Math.random()*this.options.delayBetweenBars);e(i).css({"background-image":this.slider.image1.css("background-image"),"background-position":"-"+r+"px -"+o+"px"}).css3({"transition-duration":"500ms","transition-timing-function":"ease-in","transition-property":"all","transition-delay":d+"ms"}),void 0===this.maxDelay&&(this.maxDelay=0),d>this.maxDelay&&(this.maxDelay=d,this.maxDelayTile=i)},execute:function(){this.slider.image1.css3({perspective:this.options.perspective,"perspective-origin":"50% 50%"}).css({"-moz-transform":"perspective("+this.options.perspective+"px)","-moz-perspective":"none","-moz-transform-style":"preserve-3d"});var t=this,s=this.slider.image1.find("div.tile");this.maxDelayTile.transitionEnd(function(){t.slider.image1.css3({"transform-style":"flat"}),t.finished()}),setTimeout(function(){s.each(function(t,s){e(s).css({opacity:"0"}).css3({transform:i.browser.translate(0,0,700)+" rotate3d("+(Math.round(2*Math.random())-1)+", "+(Math.round(2*Math.random())-1)+", "+(Math.round(2*Math.random())-1)+", 90deg) "})})},50)}},s))}});
//# sourceMappingURL=sourcemaps/flux.transitions.explode.js.map
