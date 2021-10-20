/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.blinds=function(t,s){return new n.transitions.bars(t,i.extend({execute:function(){var n=this,t=(this.slider.image1.height(),this.slider.image1.find("div.tile"));i(t[t.length-1]).transitionEnd(function(){n.finished()}),setTimeout(function(){t.css({opacity:"0.5"}).css3({transform:"scalex(0.0001)"})},50)}},s))}});
//# sourceMappingURL=sourcemaps/flux.transitions.blinds.js.map
