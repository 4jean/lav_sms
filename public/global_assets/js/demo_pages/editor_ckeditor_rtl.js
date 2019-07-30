/* ------------------------------------------------------------------------------
 *
 *  # CKEditor editor
 *
 *  Demo JS code for editor_ckeditor.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CKEditor = function() {


    //
    // Setup module components
    //

    // CKEditor
    var _componentCKEditor = function() {
        if (typeof CKEDITOR == 'undefined') {
            console.warn('Warning - ckeditor.js is not loaded.');
            return;
        }

        // RTL version uses different config file
        CKEDITOR.config.customConfig = 'config_rtl.js';


        // Full featured editor
        // ------------------------------

        // Setup
        CKEDITOR.replace('editor-full', {
            height: 400,
            extraPlugins: 'forms'
        });


        // Readonly editor
        // ------------------------------

        // Setup
        var editorReadOnly;

        // Setup
        var editorReadOnly = CKEDITOR.replace('editor-readonly', {
            height: 400,
            extraPlugins: 'forms'
        });

        // The instanceReady event is fired when an instance of CKEditor has finished
        // its initialization.
        editorReadOnly.on('instanceReady', function (ev) {
            editorReadOnly = ev.editor;

            // Show this "on" button.
            document.getElementById('readOnlyOn').style.display = '';

            // Event fired when the readOnly property changes.
            editorReadOnly.on('readOnly', function () {
                document.getElementById('readOnlyOn').style.display = this.readOnly ? 'none' : '';
                document.getElementById('readOnlyOff').style.display = this.readOnly ? '' : 'none';
            });
        });

        // Toggle readonly state
        function toggleReadOnly(isReadOnly) {
            // Change the read-only state of the editor.
            // http://docs.ckeditor.com/#!/api/CKEDITOR.editor-method-setReadOnly
            editorReadOnly.setReadOnly(isReadOnly);
        }
        document.getElementById('readOnlyOn').onclick = function() {
            toggleReadOnly();
        }
        document.getElementById('readOnlyOff').onclick = function() {
            toggleReadOnly(false);
        }


        // Enter key configuration
        // ------------------------------

        // Define editor
        var editorKey;

        // Setup editor
        function changeEnter() {

            // If an editor instance exists, destroy it first.
            if (editorKey)
                editorKey.destroy(true);

            // Create an editor instance again, with appropriate settings.
            editorKey = CKEDITOR.replace('editor-enter', {
                height: 400,
                enterMode: Number(document.getElementById('xEnter').value),
                shiftEnterMode: Number(document.getElementById('xShiftEnter').value)
            });
        }

        // Trigger initialization
        changeEnter();

        // // Change configuration
        document.getElementById('xEnter').onchange = function() {
            changeEnter();
        }
        document.getElementById('xShiftEnter').onchange = function() {
            changeEnter();
        }



        // Inline editor
        // ------------------------------

        // We need to turn off the automatic editor creation first
        CKEDITOR.disableAutoInline = true;

        // The inline editor should be enabled on an element with "contenteditable" attribute set to "true".
        // Otherwise CKEditor will start in read-only mode.
        var introduction = document.getElementById('editor-inline');
        introduction.setAttribute('contenteditable', true);

        // Initialize
        CKEDITOR.inline('editor-inline', {
            // Allow some non-standard markup that we used in the introduction.
            extraAllowedContent: 'a(documentation);abbr[title];code',
            removePlugins: 'stylescombo'
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        };

        // Default initialization
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentCKEditor();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CKEditor.init();
});
