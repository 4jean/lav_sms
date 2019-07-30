/* ------------------------------------------------------------------------------
 *
 *  # Floating action buttons
 *
 *  Demo JS code for extra_fab.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FloatingActionButton = function() {


    //
    // Setup module components
    //

    // FAB
    var _componentFab = function() {
        if (!$().stick_in_parent) {
            console.warn('Warning - sticky.min.js is not loaded.');
            return;
        }

        // Add bottom spacing if reached bottom,
        // to avoid footer overlapping
        // -------------------------
        
        $(window).on('scroll', function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 40) {
                $('.fab-menu-bottom-left, .fab-menu-bottom-right').addClass('reached-bottom');
            }
            else {
                $('.fab-menu-bottom-left, .fab-menu-bottom-right').removeClass('reached-bottom');
            }
        });

        // Initialize sticky button
        $('#fab-menu-affixed-demo-left, #fab-menu-affixed-demo-right').stick_in_parent({
            offset_top: 20
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFab();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FloatingActionButton.init();
});
