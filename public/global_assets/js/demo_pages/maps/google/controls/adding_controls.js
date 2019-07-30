/* ------------------------------------------------------------------------------
 *
 *  # Adding controls
 *
 *  Specific JS code additions for maps_google_controls.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapControls = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapControls = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

		// Initialize
		function initialize() {

            // Define map element
            var map_controls_element = document.getElementById('map_adding_controls');

			// Options
			var mapOptions = {
				zoom: 11,
				center: new google.maps.LatLng(48.136, 11.574),
				panControl: false,
				zoomControl: false,
				scaleControl: true
			}

			// Apply options
			var map = new google.maps.Map(map_controls_element, mapOptions);
		}

		// Load map
		google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapControls();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapControls.init();
});
