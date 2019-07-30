/* ------------------------------------------------------------------------------
 *
 *  # Detailed task view
 *
 *  Demo JS code for task_manager_detailed.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TaskManagerDetailed = function () {


    //
    // Setup components
    //

    // Datepicker
    var _componentUiDatepicker = function() {
        if (!$().datepicker) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Datepicker
        $('.datepicker').datepicker({
            showOtherMonths: true,
            dateFormat: 'd MM, y'
        });


        // Inline datepicker
        $('.datepicker-inline').datepicker({
            showOtherMonths: true,
            defaultDate: '07/26/2015'
        });
    };

    // CKEditor
    var _componentCKEditor = function() {
        if (typeof CKEDITOR == 'undefined') {
            console.warn('Warning - ckeditor.js is not loaded.');
            return;
        }

        // Initialize
        CKEDITOR.replace( 'add-comment', {
            height: '200px',
            removeButtons: 'Subscript,Superscript',
            toolbarGroups: [
                { name: 'styles' },
                { name: 'editing',     groups: [ 'find', 'selection' ] },
                { name: 'forms' },
                { name: 'basicstyles', groups: [ 'basicstyles' ] },
                { name: 'paragraph',   groups: [ 'list', 'blocks', 'align' ] },
                { name: 'links' },
                { name: 'insert' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] }
            ]
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUiDatepicker();
            _componentCKEditor();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    TaskManagerDetailed.init();
});
