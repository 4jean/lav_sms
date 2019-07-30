/* ------------------------------------------------------------------------------
 *
 *  # Sidebar components
 *
 *  Demo JS code for sidebar_components.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var SidebarComponents = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Checkboxes, radios
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn btn-icon bg-warning',
            fileButtonHtml: '<i class="icon-plus2"></i>'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Multiple switchery toggles
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // Color picker
    var _componentColorPicker = function() {
        if (!$().spectrum) {
            console.warn('Warning - spectrum.js is not loaded.');
            return;
        }

        // Initialize
        $('.colorpicker-flat-full').spectrum({
            flat: true,
            showInitial: true,
            showButtons: false,
            showInput: true,
            showAlpha: true,
            allowEmpty: true
        });
    };

    // Daterange picker
    var _componentDaterange = function() {
        if (!$().daterangepicker) {
            console.warn('Warning - daterangepicker.js is not loaded.');
            return;
        }

        // Initialize
        $('#reportrange').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2016',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'left' : 'right',
                buttonClasses: ['btn'],
                applyClass: 'btn-small btn-info btn-block',
                cancelClass: 'btn-small btn-light btn-block',
                locale: {
                    applyLabel: 'Submit',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom Range',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1,
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
            },
            function(start, end) {
                $('#reportrange .daterange-custom-display').html(start.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> &#8211; </em>' + end.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
            }
        );

        // Custom date display layout
        $('#reportrange .daterange-custom-display').html(moment().subtract(29, 'days').format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> &#8211; </em>' + moment().format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
    };

    // jQuery UI components
    var _componentsJqueryUI = function() {
        if (!$().datepicker || !$().slider || !$().sortable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Date picker
        $('.datepicker').datepicker();


        //
        // Sliders
        //

        // Range slider
        $('.ui-slider-range').slider({
            range: true,
            min: 0,
            max: 60,
            values: [ 10, 50 ]
        });


        //
        // Add pips to horizontal slider
        //

        // First we need a slider to work with
        $('.ui-slider-labels').slider({
            max: 9,
            range: true,
            values: [ 2, 7 ]
        });

        // And then we can apply pips to it!
        $('.ui-slider-labels').slider('pips' , {
            rest: 'labels'
        });
        $('.ui-slider-labels').slider('float');


        //
        // Add pips to vertical slider
        //

        // Add options
        $('.ui-slider-vertical-pips > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text());

            $(this).empty().slider({
                min: 0,
                max: 9,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });

        // Add pips
        $('.ui-slider-vertical-pips > span').slider('pips');


        //
        // Sortable
        //

        $('.sortable').sortable({
            connectWith: '.sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.sidebar-secondary',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };

    // Dual listbox
    var _componentDualListbox = function() {
        if (!$().bootstrapDualListbox) {
            console.warn('Warning - duallistbox.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-listbox').bootstrapDualListbox({
            preserveSelectionOnMove: 'moved',
            moveOnSelect: false
        });
    };

    // Fancytree
    var _componentFancytree = function() {
        if (!$().fancytree) {
            console.warn('Warning - fancytree_all.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.tree-default').fancytree();
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


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
            _componentSwitchery();
            _componentSelect2();
            _componentMultiselect();
            _componentColorPicker();
            _componentDaterange();
            _componentsJqueryUI();
            _componentDualListbox();
            _componentFancytree();
            _componentFancybox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    SidebarComponents.initComponents();
});
