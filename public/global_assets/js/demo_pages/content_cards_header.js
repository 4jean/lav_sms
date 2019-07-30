/* ------------------------------------------------------------------------------
 *
 *  # Card header elements
 *
 *  Demo JS code for content_cards_header.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardHeader = function() {


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
        };

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

        // Initialize
        $('.form-control-touchspin').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
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

        // Define element
        var noui_slider_demo = document.getElementById('noui-slider-demo');

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

    // jQuery UI Sortable
    var _componentSortable = function() {
        if (!$().sortable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Sortable demo
        $('.row-sortable').sortable({
            connectWith: '.row-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]:not(.disabled)',
            revert: 100,
            containment: '.row-sortable',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };

    // jQuery UI slider
    var _componentJuiSlider = function() {
        if (!$().slider) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Initialize
        $('.jui-slider').slider({
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
            _componentSortable();
            _componentUniform();
            _componentJuiSlider();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardHeader.init();
});
