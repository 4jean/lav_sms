/* ------------------------------------------------------------------------------
 *
 *  # Basic form inputs
 *
 *  Demo JS code for form_inputs_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputsBasic = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // File input
		$('.form-control-uniform').uniform();

        // Custom select
        $('.form-control-uniform-custom').uniform({
            fileButtonClass: 'action btn bg-blue',
            selectClass: 'uniform-select bg-pink-400 border-pink-400'
        });
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
    InputsBasic.init();
});
