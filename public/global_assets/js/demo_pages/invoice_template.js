/* ------------------------------------------------------------------------------
 *
 *  # Invoice template
 *
 *  Demo JS code for invoice_template.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InvoiceTemplate = function() {


    //
    // Setup module components
    //

    // CKEditor
    var _componentCKEditor = function() {
        if (typeof CKEDITOR == 'undefined') {
            console.warn('Warning - ckeditor.js is not loaded.');
            return;
        }

	    // Apply options
	    CKEDITOR.disableAutoInline = true;
	    CKEDITOR.dtd.$removeEmpty['i'] = false;
	    CKEDITOR.config.startupShowBorders = false;
	    CKEDITOR.config.extraAllowedContent = 'table(*)';
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentCKEditor();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InvoiceTemplate.init();
});
