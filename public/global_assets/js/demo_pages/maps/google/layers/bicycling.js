/* ------------------------------------------------------------------------------
 *
 *  # Bicycle layer
 *
 *  Specific JS code additions for maps_google_layers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapLayerBicycling = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapLayerBicycling = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

		// Initialize
		function initialize() {

            // Define map element
            var map_layer_bicycling_element = document.getElementById('map_layer_bicycling');

			// Set coordinates
			var myLatlng = new google.maps.LatLng(47.377455, 8.536715);

			// Options
			var mapOptions = {
				zoom: 14,
				center: myLatlng
			};

			// Apply options
			var map = new google.maps.Map(map_layer_bicycling_element, mapOptions);

			// Add layers
			var bikeLayer = new google.maps.BicyclingLayer();
				bikeLayer.setMap(map);
		}

		// Load map
		google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapLayerBicycling();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapLayerBicycling.init();
});
