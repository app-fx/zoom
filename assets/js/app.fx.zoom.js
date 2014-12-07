/* replace with component lib */

(function( APP ){

	APP = APP || window.APP;

	var Parent = APP.View;

	var View = Parent.extend({

		options: {},

		events: {
			"click .map": "zoomOut",
			"click .stage": "zoomIn",
		},

		zoomOut: function( e ){
			console.log("Hey 1");
			$(e.target).addClass("fx-zoom-out").siblings().removeClass("fx-zoom-in");
		},

		zoomIn: function( e ){
			console.log("Hey 2");
			$(e.target).addClass("fx-zoom-in").siblings().removeClass("fx-zoom-out");
		}
	});

	APP.FX = APP.FX || {};
	APP.FX.Zoom = View;

})( this.APP );
