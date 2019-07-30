/* ------------------------------------------------------------------------------
 *
 *  # Basic markers
 *
 *  Specific JS code additions for maps_google_markers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapMarkerBasic = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapMarkerBasic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

		// Setup map
		function initialize() {

            // Define map element
            var map_marker_simple_element = document.getElementById('map_marker_simple');

			// Set coordinates
			var myLatlng = new google.maps.LatLng(52.374,4.898);

			// Options
			var mapOptions = {
				zoom: 10,
				center: myLatlng
			};

			// Apply options
			var map = new google.maps.Map(map_marker_simple_element, mapOptions);
			var contentString = 'Amsterdam';

			// Add info window
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			// Add marker
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: 'Hello World!'
			});

			// Attach click event
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		};

		// Initialize map on window load
		google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapMarkerBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapMarkerBasic.init();
});
