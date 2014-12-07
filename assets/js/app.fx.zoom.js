/* replace with component lib */

(function( APP ){

	APP = APP || window.APP;

	var Parent = APP.View;

	APP.Views.Zoom = Parent.extend({

		el: ".main",

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

	// APP.UI = APP.UI || {};
	// APP.UI.Component = View;
})( this.APP );
