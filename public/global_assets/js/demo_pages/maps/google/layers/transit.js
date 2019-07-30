/* ------------------------------------------------------------------------------
 *
 *  # Transit layer
 *
 *  Specific JS code additions for maps_google_layers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapLayerTransit = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapLayerTransit = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

		// Initialize
		function initialize() {

            // Define map element
            var map_layer_transit_element = document.getElementById('map_layer_transit');

			// Set coordinates
			var myLatlng = new google.maps.LatLng(51.501904,-0.115871);

			// Options
			var mapOptions = {
				zoom: 14,
				center: myLatlng
			}

			// Apply options
			var map = new google.maps.Map(map_layer_transit_element, mapOptions);

			// Add layers
			var transitLayer = new google.maps.TransitLayer();
				transitLayer.setMap(map);
		}

		// Load map
		google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapLayerTransit();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapLayerTransit.init();
});
