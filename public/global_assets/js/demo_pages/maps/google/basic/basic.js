/* ------------------------------------------------------------------------------
 *
 *  # Basic map
 *
 *  Specific JS code additions for maps_google_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapBasic = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapBasic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // Map settings
        function initialize() {

            // Define map element
            var map_basic_element = document.getElementById('map_basic');

            // Optinos
            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(47.496, 19.037)
            };

            // Apply options
            var map = new google.maps.Map(map_basic_element, mapOptions);
        }

        // Load map
        google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapBasic.init();
});
