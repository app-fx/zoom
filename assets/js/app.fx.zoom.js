/* replace with component lib */

(function( APP ){

	APP = APP || window.APP;

	var Parent = APP.View;

	var View = Parent.extend({

		options: {
		},

		state: {
			zoom: false
		},

		initialize: function( options ){
			// add class to element
			$(this.el).addClass("fx-zoom");
			//
			Parent.prototype.initialize.call( this, options );
		},

		// states
		zoomOut: function( e ){
			$(this.el).removeClass("fx-zoom-in").addClass("fx-zoom-out");
			this.state.zoom = "out";
		},

		zoomIn: function( e ){
			//$(e.target)
			$(this.el).removeClass("fx-zoom-out").addClass("fx-zoom-in");
			this.state.zoom = "in";
		},

		zoomRestore: function(){
			$(this.el).removeClass("fx-zoom-out").removeClass("fx-zoom-in");
			this.state.zoom = false;
		},

		// events
		updateState: function( type ){
			switch( type ){
				case "zoom-in":
					this.zoomIn();
				break;
				case "zoom-out":
					this.zoomOut();
				break;
				default:
					this.zoomRestore();
				break;
			}
		}
	});

	APP.FX = APP.FX || {};
	APP.FX.Zoom = View;

})( this.APP );
