/* ------------------------------------------------------------------------------
 *
 *  # Invoice grid
 *
 *  Demo JS code for invoice_grid.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InvoiceGrid = function () {


    //
    // Setup module components
    //

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
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InvoiceGrid.initComponents();
});
