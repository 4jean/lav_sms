/* ------------------------------------------------------------------------------
 *
 *  # Table elements
 *
 *  Demo JS code for table_elements.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TableElements = function() {


    //
    // Setup module components
    //

    // Default file input style
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // Default file input style
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Basic select
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });


        //
        // Select2 with icons
        //

        // Format icon
        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) { return icon.text; }
            var $icon = "<i class='icon-" + $(icon.element).data('icon') + "'></i>" + icon.text;

            return $icon;
        }

        // Initialize with options
        $('.form-control-select2-actions').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Styled checkboxes, radios
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-warning-400'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });


        //
        // "Display controls" switch
        //

        // Initialize Switchery
        var controls = document.querySelector('.form-input-switchery-controls');
        var controlsInit = new Switchery(controls);

        // Change select state on toggle
        controls.onchange = function() {
            if(controls.checked) {
                $('#available_controls').prop('disabled', false);
            }
            else {
                $('#available_controls').prop('disabled', true);
            }
        };
    };

    // Bootstrap file upload
    var _componentFileUpload = function() {
        if (!$().fileinput) {
            console.warn('Warning - fileinput.min.js is not loaded.');
            return;
        }

        // Multiple files uploader
        $('.bootstrap-uploader').fileinput({
            browseLabel: 'Browse',
            browseIcon: '<i class="icon-file-plus mr-2"></i>',
            uploadIcon: '<i class="icon-file-upload2 mr-2"></i>',
            removeIcon: '<i class="icon-cross2 font-size-base mr-2"></i>',
            layoutTemplates: {
                icon: '<i class="icon-file-check"></i>'
            },
            initialCaption: 'No file selected'
        });
    };

    // Touchspin spinners
    var _componentTouchspin = function() {
        if (!$().TouchSpin) {
            console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-touchspin').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            prefix: '$'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentMultiselect();
            _componentSelect2();
            _componentUniform();
            _componentSwitchery();
            _componentFileUpload();
            _componentTouchspin();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    TableElements.init();
});
