/* ------------------------------------------------------------------------------
 *
 *  # Layout - fixed navbar and sidebar with custom scrollbar
 *
 *  Demo JS code for layout_fixed_sidebar_custom.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FixedSidebarCustomScroll = function() {


    //
    // Setup module components
    //

    // Perfect scrollbar
    var _componentPerfectScrollbar = function() {
        if (typeof PerfectScrollbar == 'undefined') {
            console.warn('Warning - perfect_scrollbar.min.js is not loaded.');
            return;
        }

        // Initialize
        var ps = new PerfectScrollbar('.sidebar-fixed .sidebar-content', {
            wheelSpeed: 2,
            wheelPropagation: true
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentPerfectScrollbar();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FixedSidebarCustomScroll.init();
});
