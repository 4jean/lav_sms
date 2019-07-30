/* ------------------------------------------------------------------------------
 *
 *  # Sticky navbar
 *
 *  Demo JS code for navbar_multiple_sticky.html pages
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NavbarMultipleSticky = function() {


    //
    // Setup module components
    //

    // Sticky.js
    var _componentSticky = function() {
        if (!$().stick_in_parent) {
            console.warn('Warning - sticky.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.navbar-sticky').stick_in_parent();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSticky();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    NavbarMultipleSticky.init();
});
