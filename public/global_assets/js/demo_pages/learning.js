/* ------------------------------------------------------------------------------
 *
 *  # Learning page kit
 *
 *  Demo JS code for learning html page kit
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var LearningKit = function () {


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
    LearningKit.init();
});
