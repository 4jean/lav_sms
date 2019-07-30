/* ------------------------------------------------------------------------------
 *
 *  # Secondary sidebar
 *
 *  Demo JS code for secondary sidebar pages
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var SidebarSecondary = function () {


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
        $('.form-input-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    SidebarSecondary.initComponents();
});
