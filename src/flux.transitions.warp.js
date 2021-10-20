define([
	"skylark-jquery",
	"./flux",
	"./flux.transitions"
],function($,flux) {
	flux.transitions.warp = function(fluxslider, opts) {
		return new flux.transitions.concentric(fluxslider, $.extend({
			delay: 30,
			alternate: true
		}, opts));
	};
});