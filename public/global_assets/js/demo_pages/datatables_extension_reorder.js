/* ------------------------------------------------------------------------------
 *
 *  # Reorder Columns extension for Datatables
 *
 *  Demo JS code for datatable_extension_reorder.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableColumnReorder = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableColumnReorder = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            columnDefs: [{ 
                orderable: false,
                width: 100,
                targets: [ 5 ]
            }],
            colReorder: true,
            dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });


        // Basic column reorder
        $('.datatable-reorder').DataTable();


        // Realtime updating
        $('.datatable-reorder-realtime').DataTable({
            colReorder: {
                realtime: true
            }
        });


        // Save state after reorder
        $('.datatable-reorder-state-saving').DataTable({
            stateSave: true
        });


        // Predefined column ordering
        $('.datatable-reorder-predefined').DataTable({
            colReorder: {
                order: [1, 3, 2, 4, 0, 5]
            }
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
            _componentDatatableColumnReorder();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableColumnReorder.init();
});
