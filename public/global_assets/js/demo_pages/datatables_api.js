/* ------------------------------------------------------------------------------
 *
 *  # Datatables API
 *
 *  Demo JS code for datatable_api.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableAPI = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableAPI = function() {
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


        // Single row selection
        var singleSelect = $('.datatable-selection-single').DataTable();
        $('.datatable-selection-single tbody').on('click', 'tr', function() {
            if ($(this).hasClass('table-success')) {
                $(this).removeClass('table-success');
            }
            else {
                singleSelect.$('tr.table-success').removeClass('table-success');
                $(this).addClass('table-success');
            }
        });


        // Multiple rows selection
        $('.datatable-selection-multiple').DataTable();
        $('.datatable-selection-multiple tbody').on('click', 'tr', function() {
            $(this).toggleClass('table-success');
        });


        // Individual column searching with text inputs
        $('.datatable-column-search-inputs tfoot td').not(':last-child').each(function () {
            var title = $('.datatable-column-search-inputs thead th').eq($(this).index()).text();
            $(this).html('<input type="text" class="form-control input-sm" placeholder="Search '+title+'" />');
        });
        var table = $('.datatable-column-search-inputs').DataTable();
        table.columns().every( function () {
            var that = this;
            $('input', this.footer()).on('keyup change', function () {
                that.search(this.value).draw();
            });
        });


        // Individual column searching with selects
        $('.datatable-column-search-selects').DataTable({
            initComplete: function () {
                this.api().columns().every(function() {
                    var column = this;
                    var select = $('<select class="form-control filter-select" data-placeholder="Filter"><option value=""></option></select>')
                        .appendTo($(column.footer()).not(':last-child').empty())
                        .on('change', function() {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
     
                            column
                                .search( val ? '^'+val+'$' : '', true, false )
                                .draw();
                        });
     
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="'+d.replace(/<(?:.|\n)*?>/gm, '')+'">'+d.replace(/<(?:.|\n)*?>/gm, '')+'</option>')
                    });
                });
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

        // Enable Select2 select for individual column searching
        $('.filter-select').select2();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDatatableAPI();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableAPI.init();
});
