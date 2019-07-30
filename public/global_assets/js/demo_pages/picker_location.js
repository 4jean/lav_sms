/* ------------------------------------------------------------------------------
 *
 *  # Location pickers
 *
 *  Demo JS code for picker_location.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var LocationPicker = function() {


    //
    // Setup module components
    //

    // Location picker
    var _componentLocation = function() {
        if (!$().locationpicker) {
            console.warn('Warning - location.js is not loaded.');
            return;
        }

        // Basic functionality
        $('.locationpicker-default').locationpicker({
            radius: 150,
            scrollwheel: false,
            zoom: 10
        });

        // Manipulating from callback
        $('.locationpicker-manipulate').locationpicker({
            location: {
                latitude: 46.15242437752303,
                longitude: 2.7470703125
            },
            radius: 300,
            onchanged: function(currentLocation, radius, isMarkerDropped) {
                var mapContext = $(this).locationpicker('map');
                mapContext.map.setZoom(20);
            }
        });

        // Binding UI with the widget
        $('#us2').locationpicker({
            location: {latitude: 44.1219256, longitude: 15.2357175}, 
            radius: 300,
            scrollwheel: false,
            inputBinding: {
                latitudeInput: $('#us2-lat'),
                longitudeInput: $('#us2-lon'),
                radiusInput: $('#us2-radius'),
                locationNameInput: $('#us2-address')
            }
        });

        // Subscribing for events
        $('#us3').locationpicker({
            location: {latitude: 47.494293, longitude: 19.054151899999965}, 
            radius: 300,
            scrollwheel: false,
            inputBinding: {
                latitudeInput: $('#us3-lat'),
                longitudeInput: $('#us3-lon'),
                radiusInput: $('#us3-radius'),
                locationNameInput: $('#us3-address')        
            },
            enableAutocomplete: true,
            onchanged: function(currentLocation, radius, isMarkerDropped) {
                alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
            }
        });
    };

    // Typeahead address picker
    var _componentAddressTypeahead = function() {
        if (typeof AddressPicker == 'undefined' || !$().typeahead) {
            console.warn('Warning - typeahead_addresspicker.js and/or typeahead.bundle.min.js is not loaded.');
            return;
        }

        // Instantiate the addressPicker suggestion engine (based on bloodhound)
        var addressPicker = new AddressPicker({
            map: {
                id: '#map',
                scrollwheel: false,
                zoom: 10,
                center: new google.maps.LatLng(53.5510846, 9.99368179999999)
            },
            reverseGeocoding: true,
            autocompleteService: {
                types: ['(cities)'],
                componentRestrictions: {
                    country: 'DE'
                }
            }
        });

        // Instantiate the typeahead UI
        $('#address').typeahead(null, {
            displayKey: 'description',
            limit: 20,
            source: addressPicker.ttAdapter()
        });

        // Bind event
        addressPicker.bindDefaultTypeaheadEvent($('#address'));

        // When address is selected
        $(addressPicker).on('addresspicker:selected', function (event, result) {
            Prism.highlightAll();
            html = ["Address: " + result.address()]
            html.push("Latitude: " + result.lat())
            html.push("Longitude: " + result.lng())
            html.push("Long names:")
            result.addressTypes().forEach(function(type) {
                html.push("  " + type + ": " + result.nameForType(type))
            });
            html.push("Short names:")
            result.addressTypes().forEach(function(type) {
                html.push("  " + type + ": " + result.nameForType(type, true))
            });
            $('#response code').html( html.join('\n'));
        });
    };

    // Autocomplete address picker
    var _componentAddressAutocomplete = function() {
        if (!$().addresspicker ) {
            console.warn('Warning - typeahead_addresspicker.js is not loaded.');
            return;
        }
    
        // Initialization
        var addresspickerMap = $('#addresspicker_map').addresspicker({
            regionBias: 'fr',
            updateCallback: showCallback,
            mapOptions: {
                zoom: 10,
                center: new google.maps.LatLng(48.856614, 2.3522219000000177),
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            elements: {
                map: '#map2'
            }
        });

        // Add markers
        var gmarker = addresspickerMap.addresspicker('marker');
        gmarker.setVisible(true);
        addresspickerMap.addresspicker('updatePosition');

        // Reverse Geocode after Marker Drag
        $('#reverseGeocode').on('change', function(){
            $('#addresspicker_map').addresspicker('option', 'reverseGeocode', ($(this).val() === 'true'));
        });

        // Callback
        function showCallback(geocodeResult, parsedGeocodeResult){
            $('#response2 code').text(JSON.stringify(parsedGeocodeResult, null, 4));
            Prism.highlightAll();
        }

        // Update zoom field
        var map = $('#addresspicker_map').addresspicker('map');
        google.maps.event.addListener(map, 'idle', function(){
            $('#zoom').val(map.getZoom());
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentLocation();
            _componentAddressTypeahead();
            _componentAddressAutocomplete();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    LocationPicker.init();
});
