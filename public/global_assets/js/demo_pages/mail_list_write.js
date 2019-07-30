/* ------------------------------------------------------------------------------
 *
 *  # Inbox page - Writing
 *
 *  Demo JS code for mail_list_write.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var MailListWrite = function() {


    //
    // Setup module components
    //

    // Summernote
    var _componentSummernote = function() {
        if (!$().summernote) {
            console.warn('Warning - summernote.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.summernote').summernote();
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.note-image-input').uniform({
            fileButtonClass: 'action btn bg-warning-400'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSummernote();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    MailListWrite.init();
});
