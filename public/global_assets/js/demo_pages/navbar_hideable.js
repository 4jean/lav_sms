/* ------------------------------------------------------------------------------
 *
 *  # Hideable navbar
 *
 *  Demo JS code for navbar_hideable.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NavbarHideable = function() {


    //
    // Setup module components
    //

    // Headroom.js
    var _componentHeadroom = function() {
        if (typeof Headroom == 'undefined') {
            console.warn('Warning - headroom.min.js is not loaded.');
            return;
        }

        // Define elements
        var navbarTop = document.querySelector('.navbar-slide-top'),
            navbarBottom = document.querySelector('.navbar-slide-bottom');


        //
        // Top navbar
        //

        if (navbarTop) {

            // Construct an instance of Headroom, passing the element
            var headroomTop = new Headroom(navbarTop, {
                offset: navbarTop.offsetHeight,
                tolerance: {
                    up: 10,
                    down: 10
                },
                onUnpin : function() {
                    $('.headroom').find('.show').removeClass('show');
                }
            });

            // Initialise
            headroomTop.init(); 
        }



        //
        // Bottom navbar
        //

        if (navbarBottom) {
            
            // Construct an instance of Headroom, passing the element
            var headroomBottom = new Headroom(navbarBottom, {
                offset: navbarBottom.offsetHeight,
                tolerance: {
                    up: 10,
                    down: 10
                },
                onUnpin : function() {
                    $('.headroom').find('.show').removeClass('show');
                }
            });

            // Initialise
            headroomBottom.init();
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentHeadroom();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    NavbarHideable.init();
});
