/* ------------------------------------------------------------------------------
 *
 *  # Predefined marker symbols
 *
 *  Specific JS code additions for maps_google_markers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapMarkerSymbolPredefined = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapMarkerSymbolPredefined = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // This example uses a symbol to add a vector-based icon to a marker.
        // The symbol uses one of the predefined vector paths ('CIRCLE') supplied by the
        // Google Maps JavaScript API.

        // Setup map
        function initialize() {

            // Define map element
            var map_marker_symbol_predefined_element = document.getElementById('map_symbol_predefined');

            // Options
            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng(48.220, 16.380)
            };

            // Apply options
            var map = new google.maps.Map(map_marker_symbol_predefined_element, mapOptions);

            // Setup markers
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10
                },
                draggable: true,
                map: map
            });
        }

        // Load map
        google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapMarkerSymbolPredefined();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapMarkerSymbolPredefined.init();
});
