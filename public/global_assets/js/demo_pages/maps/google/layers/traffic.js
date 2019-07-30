/* ------------------------------------------------------------------------------
 *
 *  # Traffic layer
 *
 *  Specific JS code additions for maps_google_layers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapLayerTraffic = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapLayerTraffic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

		// Initialize
		function initialize() {

            // Define map element
            var map_layer_traffic_element = document.getElementById('map_layer_traffic');

			// Set coordinates
			var myLatlng = new google.maps.LatLng(40.4122142, -3.7059725);

			// Options
			var mapOptions = {
				zoom: 12,
				center: myLatlng
			}

			// Apply options
			var map = new google.maps.Map(map_layer_traffic_element, mapOptions);

			// Add layers
			var trafficLayer = new google.maps.TrafficLayer();
				trafficLayer.setMap(map);
		}

		// Load map
		google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapLayerTraffic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapLayerTraffic.init();
});
