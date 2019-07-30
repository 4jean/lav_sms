/* ------------------------------------------------------------------------------
 *
 *  # Advanced datatables
 *
 *  Demo JS code for datatable_advanced.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableAdvanced = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableAdvanced = function() {
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

        // Datatable 'length' options
        $('.datatable-show-all').DataTable({
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]]
        });

        // DOM positioning
        $('.datatable-dom-position').DataTable({
            dom: '<"datatable-header length-left"lp><"datatable-scroll"t><"datatable-footer info-right"fi>',
        });

        // Highlighting rows and columns on mouseover
        var lastIdx = null;
        var table = $('.datatable-highlight').DataTable();
         
        $('.datatable-highlight tbody').on('mouseover', 'td', function() {
            var colIdx = table.cell(this).index().column;

            if (colIdx !== lastIdx) {
                $(table.cells().nodes()).removeClass('active');
                $(table.column(colIdx).nodes()).addClass('active');
            }
        }).on('mouseleave', function() {
            $(table.cells().nodes()).removeClass('active');
        });

        // Columns rendering
        $('.datatable-columns').dataTable({
            columnDefs: [ 
                {
                    // The `data` parameter refers to the data for the cell (defined by the
                    // `data` option, which defaults to the column being worked with, in
                    // this case `data: 0`.
                    render: function (data, type, row) {
                        return data +' ('+ row[3]+')';
                    },
                    targets: 0
                },
                { visible: false, targets: [ 3 ] }
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
            _componentDatatableAdvanced();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableAdvanced.init();
});
