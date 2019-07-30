/* ------------------------------------------------------------------------------
 *
 *  # Buttons extension for Datatables. Init examples
 *
 *  Demo JS code for datatable_extension_buttons_init.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DatatableButtons = function() {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableButtons = function() {
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
        $('.datatable-button-init-basic').DataTable({
            buttons: {
                dom: {
                    button: {
                        className: 'btn btn-light'
                    }
                },
                buttons: [
                    {extend: 'copy'},
                    {extend: 'csv'},
                    {extend: 'excel'},
                    {extend: 'pdf'},
                    {extend: 'print'}
                ]
            }
        });


        // Custom button
        $('.datatable-button-init-custom').DataTable({
            buttons: [
                {
                    text: 'Custom button',
                    className: 'btn bg-teal-400',
                    action: function(e, dt, node, config) {
                        swal({
                            title: "Good job!",
                            text: "Custom button activated",
                            confirmButtonColor: "#66BB6A",
                            type: "success"
                        });
                    }
                }
            ]
        });


        // Buttons collection
        $('.datatable-button-init-collection').DataTable({
            buttons: [
                {
                    extend: 'collection',
                    text: '<i class="icon-three-bars"></i>',
                    className: 'btn bg-blue btn-icon dropdown-toggle',
                    buttons: [
                        {
                            text: 'Toggle first name',
                            action: function ( e, dt, node, config ) {
                                dt.column( 0 ).visible( ! dt.column( 0 ).visible() );
                            }
                        },
                        {
                            text: 'Toggle status',
                            action: function ( e, dt, node, config ) {
                                dt.column( -2 ).visible( ! dt.column( -2 ).visible() );
                            }
                        }
                    ]
                }
            ]
        });


        // Page length
        $('.datatable-button-init-length').DataTable({
            dom: '<"datatable-header"fB><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            lengthMenu: [
                [ 10, 25, 50, -1 ],
                [ '10 rows', '25 rows', '50 rows', 'Show all' ]
            ],
            buttons: [
                {
                    extend: 'pageLength',
                    className: 'btn bg-slate-600'
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
            _componentDatatableButtons();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DatatableButtons.init();
});
