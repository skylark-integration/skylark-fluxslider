/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux","./flux.transitions"],function(i,t){t.transitions.slide=function(s,e){return new t.transition(s,i.extend({direction:"left",setup:function(){var t=this.slider.image1.width(),s=this.slider.image1.height(),e=i('<div class="current"></div>').css({height:s+"px",width:t+"px",position:"absolute",top:"0px",left:"0px",background:this.slider["left"==this.options.direction?"image1":"image2"].css("background-image")}).css3({"backface-visibility":"hidden"}),n=i('<div class="next"></div>').css({height:s+"px",width:t+"px",position:"absolute",top:"0px",left:t+"px",background:this.slider["left"==this.options.direction?"image2":"image1"].css("background-image")}).css3({"backface-visibility":"hidden"});this.slideContainer=i('<div class="slide"></div>').css({width:2*t+"px",height:s+"px",position:"relative",left:"left"==this.options.direction?"0px":-t+"px","z-index":101}).css3({"transition-duration":"600ms","transition-timing-function":"ease-in","transition-property":"all"}),this.slideContainer.append(e).append(n),this.slider.image1.append(this.slideContainer)},execute:function(){var i=this,s=this.slider.image1.width();"left"==this.options.direction&&(s=-s),this.slideContainer.transitionEnd(function(){i.finished()}),setTimeout(function(){i.slideContainer.css3({transform:t.browser.translate(s)})},50)}},e))}});
//# sourceMappingURL=sourcemaps/flux.transitions.slide.js.map
