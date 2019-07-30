/* ------------------------------------------------------------------------------
 *
 *  # Input groups
 *
 *  Demo JS code for form_input_groups.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputGroups = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-styled').uniform();

        // Update uniform when select between styled and unstyled
        $('.input-group-prepend input[type=radio]').on('change', function() {
            $.uniform.update('[name=addon-radio]');
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-control-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Touchspin
    var _componentTouchspin = function() {
        if (!$().TouchSpin) {
            console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.touchspin-basic').TouchSpin({
            postfix: '<i class="icon-paragraph-justify3"></i>'
        });

        // Postfix
        $('.touchspin-postfix').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
        });

        // Prefix
        $('.touchspin-prefix').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            prefix: '$'
        });

        // Init with empty values
        $('.touchspin-empty').TouchSpin();

        // Disable mousewheel
        $('.touchspin-no-mousewheel').TouchSpin({
            mousewheel: false
        });

        // Incremental/decremental steps
        $('.touchspin-step').TouchSpin({
            step: 10
        });

        // Set value
        $('.touchspin-set-value').TouchSpin({
            initval: 40
        });

        // Inside button group
        $('.touchspin-button-group').TouchSpin({
            prefix: 'pre',
            postfix: 'post'
        });

        // Vertical spinners
        $('.touchspin-vertical').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'icon-arrow-up22',
            verticaldownclass: 'icon-arrow-down22'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSwitchery();
            _componentTouchspin();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InputGroups.init();
});
