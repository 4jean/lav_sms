/* ------------------------------------------------------------------------------
 *
 *  # Card footer elements
 *
 *  Demo JS code for content_cards_footer.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardFooter = function() {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-switch').bootstrapSwitch();
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Touchspin
    var _componentTouchSpin = function() {
        if (!$().TouchSpin) {
            console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Horizontal
        $('.form-control-touchspin').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
        });

        // Vertical
        $('.form-control-touchspin-vertical').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'icon-arrow-up22',
            verticaldownclass: 'icon-arrow-down22'
        });
    };

    // Multiselect
    var _componentMulti = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // NoUI slider
    var _componentNouiSlider = function() {
        if (typeof noUiSlider == 'undefined') {
            console.warn('Warning - nouislider.min.js is not loaded.');
            return;
        }


        //
        // Connect lower side
        //

        // Define element
        var slider_connect_lower = document.getElementById('noui-slider-demo');

        // Create slider
        noUiSlider.create(slider_connect_lower, {
            start: 60,
            connect: 'lower',
            tooltips: true,
            range: {
              'min': 0,
              'max': 100
            }
        });


        //
        // Drag behaviour
        //

        // Define element
        var noui_slider_demo = document.getElementById('noui-slider-demo2');

        // Create slider
        noUiSlider.create(noui_slider_demo, {
            start: [ 20, 80 ],
            behaviour: 'drag',
            connect: true,
            tooltips: true,
            range: {
                'min':  0,
                'max':  100
            }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-pink-400 btn-icon',
            fileButtonHtml: '<i class="icon-plus2"></i>'
        });
    };

    // jQuery UI slider
    var _componentJuiSlider = function() {
        if (!$().slider) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic slider
        $('.jui-slider-basic').slider({
            range: 'min',
            value: 50,
            disabled: true
        });

        // Range slider
        $('.jui-slider-range').slider({
            range: true,
            min: 0,
            max: 60,
            values: [10, 50]
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSwitchery();
            _componentBootstrapSwitch();

            _componentSelect2();
            _componentTouchSpin();
            _componentMulti();
            _componentNouiSlider();
            _componentUniform();
            _componentJuiSlider();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardFooter.init();
});
