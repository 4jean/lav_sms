/* ------------------------------------------------------------------------------
 *
 *  # Events
 *
 *  Specific JS code additions for maps_google_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleMapClickEvent = function() {


    //
    // Setup module components
    //

    // Line chart
    var _googleMapClickEvent = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Maps library is not loaded.');
            return;
        }

        // Map settings
        function initialize() {

            // Define map element
            var map_click_event_element = document.getElementById('map_click_event');

            // Options
            var mapOptions = {
                zoom: 10,
                center: new google.maps.LatLng(53.5336847, 10.0054124)
            };

            // Apply options
            var map = new google.maps.Map(map_click_event_element, mapOptions);

            // Add markers
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                map: map,
                title: 'Click to zoom'
            });

            // "Change" event
            google.maps.event.addListener(map, 'center_changed', function() {

                // 3 seconds after the center of the map has changed, pan back to the marker
                window.setTimeout(function() {
                    map.panTo(marker.getPosition());
                }, 3000);
            });

            // "Click" event
            google.maps.event.addListener(marker, 'click', function() {
                map.setZoom(14);
                map.setCenter(marker.getPosition());
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
            _googleMapClickEvent();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    GoogleMapClickEvent.init();
});
