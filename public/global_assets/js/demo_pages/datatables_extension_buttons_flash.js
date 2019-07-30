/* ------------------------------------------------------------------------------
 *
 *  # Buttons extension for Datatables. Flash examples
 *
 *  Demo JS code for datatable_extension_buttons_flash.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableButtonsFlash = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableButtonsFlash = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            dom: '<"datatable-header"fBl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });


        // Basic initialization
        $('.datatable-button-flash-basic').DataTable({
            buttons: {
                dom: {
                    button: {
                        className: 'btn btn-light'
                    }
                },
                buttons: [
                    {extend: 'copyFlash'},
                    {extend: 'csvFlash'},
                    {extend: 'excelFlash'},
                    {extend: 'pdf'}
                ]
            }
        });


        // Custom file name
        $('.datatable-button-flash-name').DataTable({
            buttons: {
                dom: {
                    button: {
                        className: 'btn btn-light'
                    }
                },
                buttons: [
                    {
                        extend: 'excelFlash',
                        title: 'Data export in Excel'
                    },
                    {
                        extend: 'pdfFlash',
                        title: 'Data export in PDF'
                    }
                ]
            }
        });


        // Custom message
        $('.datatable-button-flash-message').DataTable({
            buttons: [
                {
                    extend: 'pdfFlash',
                    text: 'Export to PDF',
                    className: 'btn bg-blue',
                    message: 'This is a custom text added in table configuration.'
                }
            ]
        });


        // File size and orientation
        $('.datatable-button-flash-size').DataTable({
            buttons: [
                {
                    extend: 'pdfFlash',
                    text: 'Export to PDF',
                    className: 'btn bg-blue',
                    orientation: 'landscape',
                    pageSize: 'LEGAL'
                }
            ]
        });
    };

    // Select2 for length menu styling
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
            _componentDatatableButtonsFlash();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableButtonsFlash.init();
});
