/* ------------------------------------------------------------------------------
 *
 *  # Control positioning
 *
 *  Specific JS code additions for maps_google_controls.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapControlPosition = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapControlPosition = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // Initialize
        function initialize() {

            // Define map element
            var map_control_position_element = document.getElementById('map_control_positioning');

            // Optinos
            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(-28.643387, 153.612224),
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                panControl: true,
                panControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                scaleControl: true,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }
            }

            // Apply options
            var map = new google.maps.Map(map_control_position_element, mapOptions);
        }

        // Load map
        google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapControlPosition();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapControlPosition.init();
});
