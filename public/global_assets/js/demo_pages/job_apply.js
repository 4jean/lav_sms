/* ------------------------------------------------------------------------------
 *
 *  # Job search - apply
 *
 *  Demo JS code for job search page kit - apply
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JobApply = function () {


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
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-pink-400'
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2();
    };

    // Datepicker
    var _componentUiDatepicker = function() {
        if (!$().datepicker) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Initialize
        $('.datepicker').datepicker();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSelect2();
            _componentUiDatepicker();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JobApply.init();
});
