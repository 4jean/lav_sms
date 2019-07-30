/* ------------------------------------------------------------------------------
 *
 *  # Page header
 *
 *  Demo JS code for components_page_header.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var PageHeader = function () {


    //
    // Setup module components
    //

	// Daterange picker
    var _componentDateRange = function() {
        if (!$().daterangepicker) {
            console.warn('Warning - daterangepicker.min.js is not loaded.');
            return;
        }

	    //
	    // Custom display
	    //

        // Initialize with options
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
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
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


	    //
	    // As a button
	    //

	    // Setup
	    $('.daterange-ranges').daterangepicker(
	        {
	            startDate: moment().subtract(29, 'days'),
	            endDate: moment(),
	            minDate: '01/01/2014',
	            maxDate: '12/31/2016',
	            dateLimit: { days: 60 },
	            ranges: {
	                'Today': [moment(), moment()],
	                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	                'This Month': [moment().startOf('month'), moment().endOf('month')],
	                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	            },
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
	            applyClass: 'btn-small btn-primary btn-block',
	            cancelClass: 'btn-small btn-light btn-block',
                locale: {
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
	        },
	        function(start, end) {

	            // Format date
	            $('.daterange-ranges span').html(end.format('MMM D, YYYY') + ' - ' + start.format('MMM D, YYYY'));
	        }
	    );

	    // Format date
	    $('.daterange-ranges span').html(moment().format('MMM D, YYYY') + ' - ' + moment().subtract(29, 'days').format('MMM D, YYYY'));
    };

	// Select2 selects
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

    // Bootstrap multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
	    $('.form-control-multiselect').multiselect({
	        dropRight: true
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
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
		$('.form-input-styled').uniform({
	        fileButtonClass: 'action btn bg-warning-400 btn-icon',
	        fileButtonHtml: '<i class="icon-upload"></i>'
		});
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
        	_componentDateRange();
        	_componentSelect2();
        	_componentMultiselect();
            _componentSwitchery();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    PageHeader.initComponents();
});
