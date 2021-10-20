/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,n){n.transitions.zip=function(t,e){return new n.transitions.bars(t,i.extend({execute:function(){var t=this,e=this.slider.image1.height(),s=this.slider.image1.find("div.tile");i(s[s.length-1]).transitionEnd(function(){t.finished()}),setTimeout(function(){s.each(function(t,s){i(s).css({opacity:"0.3"}).css3({transform:n.browser.translate(0,t%2?"-"+2*e:e)})})},20)}},e))}});
//# sourceMappingURL=sourcemaps/flux.transitions.zip.js.map
