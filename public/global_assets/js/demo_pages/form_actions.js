/* ------------------------------------------------------------------------------
 *
 *  # Form actions
 *
 *  Demo JS code for form_actions.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FormActions = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function(element) {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-styled').uniform();
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

    // Select2
    var _componentSelect2 = function(element) {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSwitchery();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FormActions.init();
});
