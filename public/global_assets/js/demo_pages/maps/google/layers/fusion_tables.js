/* ------------------------------------------------------------------------------
 *
 *  # Fusion table
 *
 *  Specific JS code additions for maps_google_layers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapFusionTable = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapFusionTable = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // Initialize
        function initialize() {

            // Define map element
            var map_fusion_table_element = document.getElementById('map_layer_fusion_tables');

            // Set coordinates
            var chicago = new google.maps.LatLng(41.850036, -87.6800523);

            // Options
            var mapOptions = {
                center: chicago,
                zoom: 12
            };

            // Apply options
            var map = new google.maps.Map(map_fusion_table_element, mapOptions);

            // Add layers
            var layer = new google.maps.FusionTablesLayer({
                query: {
                    select: '\'Geocodable address\'',
                    from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
                }
            });
            layer.setMap(map);
        }

        // Load map
        google.maps.event.addDomListener(window, 'load', initialize);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleMapFusionTable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapFusionTable.init();
});
