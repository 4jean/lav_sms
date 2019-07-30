/* ------------------------------------------------------------------------------
 *
 *  # jQuery UI sliders
 *
 *  Demo JS code for jqueryui_sliders.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JqueryUiSliders = function() {


    //
    // Setup module components
    //

    // Sliders
    var _componentUiSlider = function() {
        if (!$().slider) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        //
        // Horizontal sliders
        //

        // Basic slider
        $('.jui-slider').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });

        // Custom start value
        $('.jui-slider-value').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            value: 20,
            min: 0,
            max: 40
        });

        // Snap to increments
        $('.jui-slider-increments').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            value: 100,
            min: 0,
            max: 500,
            step: 50
        });

        // Range slider
        $('.jui-slider-range').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: true,
            min: 0,
            max: 60,
            values: [10, 50]
        });

        // Fixed minimum
        $('.jui-slider-range-min').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'min',
            value: 37,
            min: 1,
            max: 700,
        });

        // Fixed maximum
        $('.jui-slider-range-max').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'max',
            min: 1,
            max: 10,
            value: 2
        });

        // Animated slider
        $('.jui-slider-animated').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'max',
            value: 50,
            animate: true
        });

        // Slider methods
        $('.jui-slider-methods').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: true,
            min: 0,
            max: 60,
            values: [ 15, 45 ]
        });

        var sliderMethods = document.querySelector('.switchery');
        var sliderMethodsInit = new Switchery(sliderMethods);
        sliderMethods.onchange = function() {
            if(sliderMethods.checked) {
                $('.jui-slider-methods').slider('enable');
            }
            else {
                $('.jui-slider-methods').slider('disable'); 
            }
        };

        // Disabled slider
        $('.jui-slider-disabled').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            range: 'min',
            value: 50,
            disabled: true
        });


        //
        // Vertical sliders
        //

        // Basic
        $('.jui-slider-vertical-default > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                animate: true,
                orientation: 'vertical'
            });
        });

        // Range slider
        $('.jui-slider-vertical-range-min > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: 'min',
                animate: true,
                orientation: 'vertical'
            });
        });

        // Fixed maximum
        $('.jui-slider-vertical-range-max > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: 'max',
                animate: true,
                orientation: 'vertical'
            });
        });

        // Default handle
        $('.jui-slider-vertical-handle-default > span').each(function() {

            // Read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: 'min',
                animate: true,
                orientation: 'vertical'
            });
        });


        // Slider pips
        // ------------------------------

        //
        // Horizontal sliders
        //

        // Basic
        $('.jui-slider-pips').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 14,
            value: 7
        });
        $('.jui-slider-pips').slider('pips');


        // With tooltip
        $('.jui-slider-floats').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 14,
            value: 7
        });
        $('.jui-slider-floats').slider('pips');
        $('.jui-slider-floats').slider('float');


        // Both pips and tooltip
        $('.jui-slider-floats-labels').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 6,
            value: 3
        });
        $('.jui-slider-floats-labels').slider('pips');
        $('.jui-slider-floats-labels').slider('float', {
            pips: true
        });


        // Label with pips
        $('.jui-slider-labels').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 8,
            value: 4
        });
        $('.jui-slider-labels').slider('pips' , {
            rest: 'label'
        });


        // Hide rest of the points
        $('.jui-slider-limits').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 20,
            range: true,
            values: [ 4, 16 ]
        });
        $('.jui-slider-limits').slider('pips' , {
            rest: false
        });


        // Display pips only
        $('.jui-slider-pips-only').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 20
        });
        $('.jui-slider-pips-only').slider('pips', {
            first: 'pip',
            last: 'pip'
        });


        // Suffix and prefix
        $('.jui-slider-suffix-prefix').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            max: 4,
            value: 2
        });
        $('.jui-slider-suffix-prefix').slider('pips', {
            rest: 'label', 
            prefix: '$',
            suffix: '.00'
        });


        // Custom label text
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        $('.jui-slider-labels-custom').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            min: 0,
            max: 11,
            value: 5
        });
        $('.jui-slider-labels-custom').slider('pips' , {
            rest: 'label',
            labels: months
        });
        $('.jui-slider-labels-custom').on('slidechange', function(e,ui) {
            $('#jui-slider-labels-custom-output').html('You selected ' + '<span class="text-danger">' + months[ui.value] + '</span>');
        });


        // Label localization
        var hanziNums = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

        $('.jui-slider-local').slider({
            isRTL: $('html').attr('dir') == 'rtl' ? true : false,
            min: 1,
            max: 10,
            value: 5
        });
        $('.jui-slider-local').slider('pips' , {
            labels: hanziNums,
            rest: 'label'
        });
        $('.jui-slider-local').slider('float' , {
            labels: hanziNums
        });


        //
        // Vertical sliders
        //

        // Basic
        $('.jui-slider-vertical-pips > span').each(function() {
            var value = parseInt($(this).text());
            $(this).empty().slider({
                min: 0,
                max: 10,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });
        $('.jui-slider-vertical-pips > span').slider('pips');


        // With labels
        $('.jui-slider-vertical-labels > span').each(function() {
            var value = parseInt($(this).text());
            $(this).empty().slider({
                min: 0,
                max: 4,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });
        $('.jui-slider-vertical-labels > span').slider('pips' , {
            rest: 'label'
        });


        // With tooltip and handle
        $( '.jui-slider-vertical-minmax > span' ).each(function() {
            var value = parseInt($(this).text());
            $(this).empty().slider({
                min: 0,
                max: 10,
                value: value,
                animate: true,
                range: 'min',
                orientation: 'vertical'
            });
        });
        $('.jui-slider-vertical-minmax > span').slider('pips');
        $('.jui-slider-vertical-minmax > span').slider('float');
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUiSlider();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JqueryUiSliders.init();
});
