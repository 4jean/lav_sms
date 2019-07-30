/* ------------------------------------------------------------------------------
 *
 *  # Disable default UI
 *
 *  Specific JS code additions for maps_google_controls.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapDisableUi = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapDisableUi = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

		// Initialize
		function initialize() {

            // Define map element
            var map_disable_ui_element = document.getElementById('map_ui_disabled');

			// Options
			var mapOptions = {
				zoom: 12,
				center: new google.maps.LatLng(48.858, 2.347),
				disableDefaultUI: true
			}

			// Apply options
			var map = new google.maps.Map(map_disable_ui_element, mapOptions);
		}

		// Load map
		google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapDisableUi();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapDisableUi.init();
});
