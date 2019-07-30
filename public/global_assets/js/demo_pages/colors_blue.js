/* ------------------------------------------------------------------------------
 *
 *  # Blue color palette showcase
 *
 *  Demo JS code for colors_blue.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var BluePalette = function() {


    //
    // Setup module components
    //

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2();
    };

    // Multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect({
            buttonClass: 'btn bg-blue',
            nonSelectedText: 'Select your state'
        });

        // Material theme example
        $('.form-control-multiselect-material').multiselect({
            buttonClass: 'btn btn-light text-blue'
        });
    };

    // jGrowl
    var _componentJgrowl = function() {
        if (!$().jGrowl) {
            console.warn('Warning - jgrowl.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.growl-launch').on('click', function () {
            $.jGrowl('Check me out! I\'m a jGrowl notice.', {
                header: 'Well highlighted',
                theme: 'bg-blue-400'
            });
        });
    };

    // PNotify
    var _componentPnotify = function() {
        if (typeof PNotify == 'undefined') {
            console.warn('Warning - pnotify.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.pnotify-launch').on('click', function () {
            new PNotify({
                title: 'Notification',
                text: 'Check me out! I\'m a PNotify notice.',
                icon: 'icon-info22',
                addclass: 'bg-blue-400 border-blue'
            });
        });
    };

    // Noty
    var _componentNoty = function() {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.noty-launch').on('click', function() {
            new Noty({
                layout: 'topRight',
                theme: ' alert bg-blue text-white p-0',
                text: 'Check me out! I\'m a Noty notice.',
                timeout: 2500
            }).show();
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var switchery = document.querySelector('.form-input-switchery');
        var init = new Switchery(switchery, {color: '#03A9F4'});
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            wrapperClass: 'border-blue text-blue-600',
            selectClass: 'uniform-select bg-blue border-blue',
            fileButtonClass: 'action btn bg-blue'
        });

        // Material theme example
        $('.form-input-styled-material').uniform({
            selectClass: 'uniform-select text-blue'
        });
    };

    // Tooltips and popovers
    var _componentPopups = function() {

        // Tooltip
        $('[data-popup=tooltip-custom]').tooltip({
            template: '<div class="tooltip"><div class="arrow border-blue"></div><div class="tooltip-inner bg-blue"></div></div>'
        });


        // Popover title
        $('[data-popup=popover-custom]').popover({
            template: '<div class="popover border-blue"><div class="arrow"></div><h3 class="popover-header bg-blue"></h3><div class="popover-body"></div></div>'
        });


        // Popover background color
        $('[data-popup=popover-solid]').popover({
            template: '<div class="popover bg-blue border-blue"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-white"></div></div>'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSelect2();
            _componentMultiselect();
            _componentJgrowl();
            _componentPnotify();
            _componentNoty();
            _componentSwitchery();
            _componentUniform();
            _componentPopups();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    BluePalette.init();
});
