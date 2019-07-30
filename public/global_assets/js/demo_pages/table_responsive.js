/* ------------------------------------------------------------------------------
 *
 *  # Responsive tables
 *
 *  Demo JS code for table_responsive.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TableFootable = function() {


    //
    // Setup module components
    //

    // Default file input style
    var _componentFootable = function() {
        if (!$().footable) {
            console.warn('Warning - footable.min.js is not loaded.');
            return;
        }

		// Initialize responsive functionality
	    $('.table-togglable').footable();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFootable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    TableFootable.init();
});
