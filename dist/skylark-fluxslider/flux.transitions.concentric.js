/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,t){t.transitions.concentric=function(n,e){return new t.transition(n,i.extend({blockSize:60,delay:150,alternate:!1,setup:function(){for(var t=this.slider.image1.width(),n=this.slider.image1.height(),e=Math.sqrt(t*t+n*n),o=Math.ceil((e-this.options.blockSize)/2/this.options.blockSize)+1,s=document.createDocumentFragment(),a=0;a<o;a++){var r=2*a*this.options.blockSize+this.options.blockSize,c=i("<div></div>").attr("class","block block-"+a).css({width:r+"px",height:r+"px",position:"absolute",top:(n-r)/2+"px",left:(t-r)/2+"px","z-index":o-a+100,"background-image":this.slider.image1.css("background-image"),"background-position":"center center"}).css3({"border-radius":r+"px","transition-duration":"800ms","transition-timing-function":"linear","transition-property":"all","transition-delay":(o-a)*this.options.delay+"ms"});s.appendChild(c.get(0))}this.slider.image1.get(0).appendChild(s)},execute:function(){var n=this,e=this.slider.image1.find("div.block");i(e[0]).transitionEnd(function(){n.finished()}),setTimeout(function(){e.each(function(e,o){i(o).css({opacity:"0"}).css3({transform:t.browser.rotateZ((!n.options.alternate||e%2?"":"-")+"90")})})},50)}},e))}});
//# sourceMappingURL=sourcemaps/flux.transitions.concentric.js.map
