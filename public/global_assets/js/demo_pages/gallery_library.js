/* ------------------------------------------------------------------------------
 *
 *  # Media library
 *
 *  Demo JS code for gallery_library.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var MediaLibrary = function() {


    //
    // Setup module components
    //

    // Datatable
    var _componentDatatable = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Initialize table
        var media_library = $('.media-library').DataTable({
            autoWidth: false,
            columnDefs: [
                {
                    orderable: false,
                    width: 20,
                    targets: 0
                },
                {
                    orderable: false,
                    width: 100,
                    targets: 1
                },
                { 
                    orderable: false,
                    width: 90,
                    targets: 6
                }
            ],
            order: [[ 2, 'asc' ]],
            lengthMenu: [ 25, 50, 75, 100 ],
            displayLength: 25,
            dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });

        // Toggle success class
        $('.media-library tbody td input[type=checkbox]').on('change', function () {
            if ($(this).is(':checked')) {
                $(this).parents('tr').addClass('table-success');
                $.uniform.update();
            }
            else {
                $(this).parents('tr').removeClass('table-success');
                $.uniform.update();
            }
        });
    };

    // Lightbox
    var _componentFancybox = function() {
        if (!$().fancybox) {
            console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
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

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth: true,
            width: 'auto'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDatatable();
            _componentFancybox();
            _componentUniform();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    MediaLibrary.init();
});
