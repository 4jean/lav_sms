/* ------------------------------------------------------------------------------
 *
 *  # jQuery UI Widgets
 *
 *  Demo JS code for jqueryui_components.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var JqueryUiComponents = function() {


    //
    // Setup module components
    //

    // Button
    var _componentUiButton = function() {
        if (!$().button) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic button
        $('.jui-button').button();


        //
        // With icons
        //

        // Left icon
        $('.jui-button-icon-left').button({
            icon: 'icon-twitter'
        });

        // Right icon
        $('.jui-button-icon-right').button({
            icon: 'icon-dribbble3',
            iconPosition: 'end'
        });

        // Single icon only
        $('.jui-button-icon-only').button({
            icon: 'icon-vimeo',
            showLabel: false
        });
    };

    // Button set
    var _componentUiButtonset = function() {
        if (!$().buttonset) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic button set
        $('.jui-button-set').buttonset();
    };

    // Control group
    var _componentUiControlgroup = function() {
        if (!$().controlgroup || !$().selectmenu) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic example
        $('.jui-controlgroup').controlgroup();


        // Split button
        $('.jui-combo').selectmenu({
            classes: {
                'ui-selectmenu-button': 'ui-button-icon-only'
            },
            position: {
                my: 'right top',
                at: 'right bottom',
                collision: 'none'
            }
        });
    };

    // Progress bar
    var _componentUiProgress = function() {
        if (!$().progressbar) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic example
        $('.jui-progressbar').progressbar({
            value: 60
        });

        // Maximum value
        $('.jui-progressbar-max').progressbar({
            max: 1000,
            value: 400
        });

        // Indeterminate progress bar
        $('.jui-progressbar-indeterminate').progressbar({
            value: false
        }).on('create', function (event) {
            var target = $(event.target),
            progressbar = $('.jui-progressbar-indeterminate'),
            progressbarValue = progressbar.find('.ui-progressbar-value');
            progressbar.progressbar('option', 'value', false);
        });


        //
        // Custom label
        //

        // Define elements
        var progressbar = $( '.jui-progressbar-custom' ),
            progressLabel = $('.ui-progress-label');

        // Initialize progress bar
        progressbar.progressbar({
            value: false,
            change: function() {
                progressLabel.text(progressbar.progressbar('value') + '%');
            },
            complete: function() {
                progressLabel.text('Complete!');
            }
        });

        // Custom progress function
        function progress() {
            var val = progressbar.progressbar('value') || 0;
            progressbar.progressbar('value', val + 2);

            if (val < 99) {
                setTimeout(progress, 80);
            }
        }

        // Update progress after 2000ms
        setTimeout(progress, 2000);
    };

    // Dialog
    var _componentUiDialog = function() {
        if (!$().dialog) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic example
        $('#jui-dialog-basic').dialog({
            autoOpen: false,
            width: 400
        });

        // With overlay
        $('#jui-dialog-overlay').dialog({
            autoOpen: false,
            modal: true,
            width: 400
        });

        // Animated
        $('#jui-dialog-animated').dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            show: {
                effect: 'fade',
                duration: 500
            },
            hide: {
                effect: 'fade',
                duration: 500
            }
        });

        // With buttons
        $('#jui-dialog-buttons').dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            buttons: {
                Save: function() {
                    $(this).dialog('close');
                },
                Cancel: function() {
                    $(this).dialog('close');
                }
            }
        });

        // Buttons with icons
        $('#jui-dialog-buttons-icons').dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            buttons: [
                {
                    text: 'Submit',
                    icons: {
                        primary: 'icon-checkmark5'
                    },
                    click: function() {
                        $(this).dialog('close');
                    }
                },
                {
                    text: 'Cancel',
                    icons: {
                        primary: 'icon-cross3'
                    },
                    click: function() {
                        $(this).dialog('close');
                    }
                }
            ]
        });

        // Disable resize
        $('#jui-dialog-resize').dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            resizable: false
        });

        // Disable close on escape
        $('#jui-dialog-close-escape').dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            closeOnEscape: false
        });

        // Disable drag
        $('#jui-dialog-drag-disabled').dialog({
            autoOpen: false,
            modal: true,
            width: 400,
            draggable: false
        });

        // Append to element
        $('#jui-dialog-append').dialog({
            appendTo: '#modal-append-target',
            autoOpen: false,
            modal: true,
            width: 400
        });


        //
        // With forms
        //

        // Vertical form dialog
        $('#jui-dialog-form-vertical').dialog({
            autoOpen: false,
            modal: true,
            width: 500,
            buttons: {
                Submit: function() {
                    $(this).dialog('close');
                },
                Cancel: function() {
                    $(this).dialog('close');
                }
            }
        });

        // Horizontal form dialog
        $('#jui-dialog-form-horizontal').dialog({
            autoOpen: false,
            modal: true,
            width: 500,
            buttons: {
                Submit: function() {
                    $(this).dialog('close');
                },
                Cancel: function() {
                    $(this).dialog('close');
                }
            }
        });

        // Inline form dialog
        $('#jui-dialog-form-inline').dialog({
            autoOpen: false,
            modal: true,
            width: 555,
            buttons: {
                Submit: function() {
                    $(this).dialog('close');
                },
                Cancel: function() {
                    $(this).dialog('close');
                }
            }
        });


        //
        // Optional widths
        //

        // Default width
        $('#jui-dialog-width-default').dialog({
            autoOpen: false,
            modal: true
        });

        // Pixel width
        $('#jui-dialog-width-pixel').dialog({
            autoOpen: false,
            modal: true,
            width: 400
        });

        // Percentage width
        $('#jui-dialog-width-percentage').dialog({
            autoOpen: false,
            modal: true,
            width: '50%'
        });

        // Full width
        $('#jui-dialog-width-full').dialog({
            autoOpen: false,
            modal: true,
            width: '96%'
        });


        //
        // Dialog openers
        //


        $('#jui-dialog-basic-opener').on('click', function() {
            $('#jui-dialog-basic').dialog('open');
        });

        $('#jui-dialog-overlay-opener').on('click', function() {
            $('#jui-dialog-overlay').dialog('open');
        });

        $('#jui-dialog-animated-opener').on('click', function() {
            $('#jui-dialog-animated').dialog('open');
        });

        $('#jui-dialog-buttons-opener').on('click', function() {
            $('#jui-dialog-buttons').dialog('open');
        });

        $('#jui-dialog-buttons-icons-opener').on('click', function() {
            $('#jui-dialog-buttons-icons').dialog('open');
        });

        $('#jui-dialog-resize-opener').on('click', function() {
            $('#jui-dialog-resize').dialog('open');
        });

        $('#jui-dialog-close-escape-opener').on('click', function() {
            $('#jui-dialog-close-escape').dialog('open');
        });

        $('#jui-dialog-drag-disabled-opener').on('click', function() {
            $('#jui-dialog-drag-disabled').dialog('open');
        });

        $('#jui-dialog-append-opener').on('click', function() {
            $('#jui-dialog-append').dialog('open');
        });


        $('#jui-dialog-form-vertical-opener').on('click', function() {
            $('#jui-dialog-form-vertical').dialog('open');
        });

        $('#jui-dialog-form-horizontal-opener').on('click', function() {
            $('#jui-dialog-form-horizontal').dialog('open');
        });

        $('#jui-dialog-form-inline-opener').on('click', function() {
            $('#jui-dialog-form-inline').dialog('open');
        });


        $('#jui-dialog-width-default-opener').on('click', function() {
            $('#jui-dialog-width-default').dialog('open');
        });

        $('#jui-dialog-width-pixel-opener').on('click', function() {
            $('#jui-dialog-width-pixel').dialog('open');
        });

        $('#jui-dialog-width-percentage-opener').on('click', function() {
            $('#jui-dialog-width-percentage').dialog('open');
        });

        $('#jui-dialog-width-full-opener').on('click', function() {
            $('#jui-dialog-width-full').dialog('open');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUiButton();
            _componentUiButtonset();
            _componentUiControlgroup();
            _componentUiProgress();
            _componentUiDialog();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    JqueryUiComponents.init();
});
