/* ------------------------------------------------------------------------------
 *
 *  # Mega menu component
 *
 *  Demo JS code for navigation_horizontal_mega.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var HorizontalMegaMenu = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform();
    };

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

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Slinky
    var _componentSlinky = function() {
        if (!$().slinky) {
            console.warn('Warning - slinky.min.js is not loaded.');
            return;
        };

        // Attach drill down menu to menu list with child levels
        $('.nav-item-multi').one('shown.bs.dropdown', function () {
            $('.dropdown-item-group').each(function() {
                $(this).slinky({
                    title: true,
                    speed: 200
                });
            });
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
            _componentSwitchery();
            _componentSelect2();
            _componentSlinky();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    HorizontalMegaMenu.initComponents();
});
