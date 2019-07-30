/* ------------------------------------------------------------------------------
 *
 *  # Datatable sorting
 *
 *  Demo JS code for datatable_sorting.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableSorting = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableSorting = function() {
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
            dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });


        // Default ordering example
        $('.datatable-sorting').DataTable({
            order: [3, "desc"]
        });


        // Multi column ordering
        $('.datatable-multi-sorting').DataTable({
            columnDefs: [{
                targets: [0],
                orderData: [0, 1]
            }, {
                targets: [1],
                orderData: [1, 0]
            }, {
                targets: [4],
                orderData: [4, 0]
            }, {
                orderable: false,
                width: '100px',
                targets: [5]
            }]
        });


        // Complex headers with sorting
        $('.datatable-complex-header').DataTable({
            columnDefs: []
        });


        // Sequence control
        $('.datatable-sequence-control').dataTable( {
            "aoColumns": [
                null,
                null,
                {"orderSequence": ["asc"]},
                {"orderSequence": ["desc", "asc", "asc"]},
                {"orderSequence": ["desc"]},
                null
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
            _componentDatatableSorting();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableSorting.init();
});
