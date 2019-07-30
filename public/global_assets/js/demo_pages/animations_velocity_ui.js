/* ------------------------------------------------------------------------------
 *
 *  # Velocity animations - UI effects
 *
 *  Demo JS code for animations_velocity_ui.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AnimationsVelocityUi = function() {


    //
    // Setup module components
    //

    // Velocity UI
    var _componentAnimationVelocityUi = function() {
        if (!$().velocity) {
            console.warn('Warning - velocity.min.js is not loaded.');
            return;
        }

        // Run animations
        $('.velocity-animation').on('click', function (e) {

            // Get animation class and card
            var animation = $(this).data('animation');

            // Add animation class to card element
            $(this).parents('.card').velocity('callout.' + animation, { stagger: 500 });
            e.preventDefault();
        });

        // Run transitions
        $('.velocity-transition').on('click', function (e) {

            // Get animation class and card
            var transition = $(this).data('transition');

            // Add animation class to card element
            $(this).parents('.card').velocity('transition.' + transition, { 
                stagger: 1000,
                duration: 1000
            });

            e.preventDefault();
        });

        // Clear styles after 2 seconds
        window.setInterval(function(){
            $('.velocity-transition').parents('.card').removeAttr('style');
        }, 2000);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAnimationVelocityUi();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AnimationsVelocityUi.init();
});
