/* ------------------------------------------------------------------------------
 *
 *  # Job search - list
 *
 *  Demo JS code for job search page kit - list view
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JobList = function () {


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


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JobList.init();
});
