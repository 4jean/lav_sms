/* ------------------------------------------------------------------------------
 *
 *  # CSS3 animations
 *
 *  Demo JS code for animations_css3.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AnimationsCSS3 = function() {


    //
    // Setup module components
    //

    // CSS3 animations
    var _componentAnimationCSS = function() {

        // Toggle animations
        $('body').on('click', '.animation', function (e) {

            // Get animation class from 'data' attribute
            var animation = $(this).data('animation');

            // Apply animation once per click
            $(this).parents('.card').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated ' + animation);
            });
            e.preventDefault();
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAnimationCSS();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AnimationsCSS3.init();
});
