/* ------------------------------------------------------------------------------
 *
 *  # Task grid view
 *
 *  Demo JS code for task_manager_grid.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TaskManagerGrid = function () {


    //
    // Setup components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
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
    TaskManagerGrid.init();
});
