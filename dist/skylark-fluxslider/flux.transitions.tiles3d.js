/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(e,i){i.transitions.tiles3d=function(s,t){return new i.transition_grid(s,e.extend({requires3d:!0,forceSquare:!0,columns:5,perspective:600,delayBetweenBarsX:200,delayBetweenBarsY:150,renderTile:function(s,t,n,r,o,a,d){var c=e("<div></div>").css({width:r+"px",height:o+"px",position:"absolute",top:"0px",left:"0px","background-image":this.slider.image1.css("background-image"),"background-position":"-"+a+"px -"+d+"px","background-repeat":"no-repeat","-moz-transform":"translateZ(1px)"}).css3({"backface-visibility":"hidden"}),p=e(c.get(0).cloneNode(!1)).css({"background-image":this.slider.image2.css("background-image")}).css3({transform:i.browser.rotateY(180),"backface-visibility":"hidden"});e(s).css({"z-index":(t>this.options.columns/2?500-t:500)+(n>this.options.rows/2?500-n:500)}).css3({"transition-duration":"800ms","transition-timing-function":"ease-out","transition-property":"all","transition-delay":t*this.options.delayBetweenBarsX+n*this.options.delayBetweenBarsY+"ms","transform-style":"preserve-3d"}).append(c).append(p)},execute:function(){this.slider.image1.css3({perspective:this.options.perspective,"perspective-origin":"50% 50%"});var e=this,s=this.slider.image1.find("div.tile");this.slider.image2.hide(),s.last().transitionEnd(function(i){e.slider.image2.show(),e.finished()}),setTimeout(function(){s.css3({transform:i.browser.rotateY(180)})},50)}},t))}});
//# sourceMappingURL=sourcemaps/flux.transitions.tiles3d.js.map
