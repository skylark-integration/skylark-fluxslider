define([
	"skylark-jquery",
	"./flux"
],function($,flux) {
	$.widget("joelambert.flux", {
		_create: function() {
			var _this = this;
			this.slider = new flux.slider(this.element, this.options);
		},
		
		start: function() {
			this.slider.start();
		},
		stop: function() {
			this.slider.stop();
		},
		isPlaying: function() {
			return this.slider.isPlayer();
		},
		
		next: function(t, o) {
			this.slider.next(t, o);
		},
		prev: function(t, o) {
			this.slider.prev(t, o);
		},
		showImage: function(i, t, o) {
			this.slider.showImage(i, t, o);
		},
		
		getImage: function(i) {
			return this.slider.getImage(i);
		}
	});
});