/**
 * skylark-fluxslider - A version of fluxslider that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-fluxslider/
 * @license MIT
 */
define(["skylark-jquery","./flux"],function(t,e){t.widget("joelambert.flux",{_create:function(){this.slider=new e.slider(this.element,this.options)},start:function(){this.slider.start()},stop:function(){this.slider.stop()},isPlaying:function(){return this.slider.isPlayer()},next:function(t,e){this.slider.next(t,e)},prev:function(t,e){this.slider.prev(t,e)},showImage:function(t,e,i){this.slider.showImage(t,e,i)},getImage:function(t){return this.slider.getImage(t)}})});
//# sourceMappingURL=sourcemaps/flux.jquery.js.map
