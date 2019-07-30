/* ------------------------------------------------------------------------------
 *
 *  # Sticky navbar with floating action button
 *
 *  Demo JS code for navbar_multiple_sticky.html pages
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NavbarMultipleStickyFab = function() {


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
        $('.navbar-sticky').stick_in_parent({
            parent: 'body'
        });
    };

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
                $('.fab-menu-bottom-right').addClass('reached-bottom');
            }
            else {
                $('.fab-menu-bottom-right').removeClass('reached-bottom');
            }
        });

        // Initialize sticky button
        $('.fab-menu-sticky-right').stick_in_parent({
            offset_top: 22,
            parent: 'body'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSticky();
            _componentFab();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    NavbarMultipleStickyFab.init();
});
