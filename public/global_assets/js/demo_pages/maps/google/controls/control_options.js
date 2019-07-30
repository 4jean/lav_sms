/* ------------------------------------------------------------------------------
 *
 *  # Control options
 *
 *  Specific JS code additions for maps_google_controls.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapControlOptions = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapControlOptions = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // Initialize
        function initialize() {

            // Define map element
            var map_control_options_element = document.getElementById('map_control_options');

            // Options
            var mapOptions = {
                zoom: 6,
                center: new google.maps.LatLng(51.164, 10.454),
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                },
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                }
            }

            // Apply options
            var map = new google.maps.Map(map_control_options_element, mapOptions);
        }

        // Load map
        google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapControlOptions();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapControlOptions.init();
});
