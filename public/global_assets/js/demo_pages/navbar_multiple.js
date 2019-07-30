/* ------------------------------------------------------------------------------
 *
 *  # Multiple navbars
 *
 *  Demo JS code for Multiple Navbars pages
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NavbarMultiple = function() {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var rememberMe = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        rememberMe.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSwitchery();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    NavbarMultiple.init();
});
