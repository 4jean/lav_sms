/* ------------------------------------------------------------------------------
 *
 *  # Fixed Header extension for Datatables
 *
 *  Demo JS code for datatable_extension_fixed_header.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableFixedHeader = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableFixedHeader = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            columnDefs: [{ 
                orderable: false,
                targets: [ 5 ]
            }],
            dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            language: {
                search: '<span>Filter:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            }
        });


        // Basic initialization
        var table_basic = $('.datatable-header-basic').DataTable({
            fixedHeader: true
        });


        // Header and footer fixed
        var table_footer = $('.datatable-header-footer').DataTable({
            fixedHeader: {
                header: true,
                footer: true
            }
        });


        // Offset
        var table_offset = $('.datatable-header-offset').DataTable({
            fixedHeader: {
                header: true,
                
            }
        });

        // Init offset toggle
        var toggleType = document.querySelector('.toggle-offset');
        var toggleTypeInit = new Switchery(toggleType, { secondaryColor: '#FF7043'});

        // Toggle offset and fixed navbar
        toggleType.onchange = function() {
            if(toggleType.checked) {

                // Toggle necessary body and navbar classes
                $('body').children('.navbar').first().addClass('fixed-top');
                $('body').addClass('navbar-top');

                // Add offset to all
                table_basic.fixedHeader.headerOffset($('.fixed-top').height());
                table_footer.fixedHeader.headerOffset($('.fixed-top').height());
                table_reorder.fixedHeader.headerOffset($('.fixed-top').height());
                table_offset.fixedHeader.headerOffset($('.fixed-top').height());
            }
            else {

                // Toggle necessary body and navbar classes
                $('body').children('.navbar').first().removeClass('fixed-top');
                $('body').removeClass('navbar-top');

                // Remove offset from all
                table_basic.fixedHeader.headerOffset(0);
                table_footer.fixedHeader.headerOffset(0);
                table_reorder.fixedHeader.headerOffset(0);
                table_offset.fixedHeader.headerOffset(0);
            }
        };


        // ColReorder integration
        var table_reorder = $('.datatable-header-reorder').DataTable({
            fixedHeader: true,
            colReorder: true
        });


        // Adjust table header if sidebar toggler is clicked
        $('.sidebar-control').on('click', function() {
            table_basic.fixedHeader.adjust();
            table_footer.fixedHeader.adjust();
            table_offset.fixedHeader.adjust();
            table_reorder.fixedHeader.adjust();
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
            _componentDatatableFixedHeader();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableFixedHeader.init();
});
