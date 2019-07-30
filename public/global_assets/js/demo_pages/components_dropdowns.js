/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap dropdowns
 *
 *  Demo configuration of Dropdown component showcase
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Dropdowns = function () {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var toggle = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        
        toggle.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSwitchery();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Dropdowns.initComponents();
});
