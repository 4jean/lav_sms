/* ------------------------------------------------------------------------------
 *
 *  # Noty and jGrowl notifications
 *
 *  Demo JS code for extra_jgrowl_noty.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var NotyJgrowl = function() {


    //
    // Setup module components
    //

    // Noty.js examples
    var _componentNoty = function() {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }

        // Override Noty defaults
        Noty.overrideDefaults({
            theme: 'limitless',
            layout: 'topRight',
            type: 'alert',
            timeout: 2500
        });


        //
        // Notification types
        //

        // Error
        $('#noty_error').on('click', function() {
            new Noty({
                text: 'Change a few things up and try submitting again.',
                type: 'error'
            }).show();
        });

        // Success
        $('#noty_success').on('click', function() {
            new Noty({
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });

        // Warning
        $('#noty_warning').on('click', function() {
            new Noty({
                text: 'Warning! Best check yo self, you\'re not looking too good.',
                type: 'warning'
            }).show();
        });

        // Info
        $('#noty_info').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Alert
        $('#noty_alert').on('click', function() {
            new Noty({
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Confirmation
        $('#noty_confirm').on('click', function() {
            var notyConfirm = new Noty({
                text: '<h6 class="mb-3">Please confirm your action</h6><label>Enter comment (optional)</label> <input type="text" class="form-control" placeholder="Enter comment">',
                timeout: false,
                modal: true,
                layout: 'center',
                closeWith: 'button',
                type: 'confirm',
                buttons: [
                    Noty.button('Cancel', 'btn btn-link', function () {
                        notyConfirm.close();
                    }),

                    Noty.button('Submit <i class="icon-paperplane ml-2"></i>', 'btn bg-blue ml-1', function () {
                            alert('Submitted!');
                            notyConfirm.close();
                        },
                        {id: 'button1', 'data-status': 'ok'}
                    )
                ]
            }).show();
        });


        //
        // Top position
        //

        // Top
        $('#noty_top').on('click', function() {
            new Noty({
                layout: 'top',
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Left
        $('#noty_top_left').on('click', function() {
            new Noty({
                layout: 'topLeft',
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Center
        $('#noty_top_center').on('click', function() {
            new Noty({
                layout: 'topCenter',
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });

        // Right (default)
        $('#noty_top_right').on('click', function() {
            new Noty({
                text: 'Best check yourself, you\'re not looking too good.',
                type: 'alert'
            }).show();
        });


        //
        // Center position
        //

        // Left
        $('#noty_center_left').on('click', function() {
            new Noty({
                layout: 'centerLeft',
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });

        // Center
        $('#noty_center').on('click', function() {
            new Noty({
                layout: 'center',
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });

        // Right
        $('#noty_center_right').on('click', function() {
            new Noty({
                layout: 'centerRight',
                text: 'You successfully read this important alert message.',
                type: 'success'
            }).show();
        });


        //
        // Bottom position
        //

        // Bottom
        $('#noty_bottom').on('click', function() {
            new Noty({
                layout: 'bottom',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Left
        $('#noty_bottom_left').on('click', function() {
            new Noty({
                layout: 'bottomLeft',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Center
        $('#noty_bottom_center').on('click', function() {
            new Noty({
                layout: 'bottomCenter',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });

        // Right (default)
        $('#noty_bottom_right').on('click', function() {
            new Noty({
                layout: 'bottomRight',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info'
            }).show();
        });


        //
        // Other examples
        //

        // Overlay
        $('#noty_overlay').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                modal: true
            }).show();
        });

        // Sticky
        $('#noty_sticky').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                timeout: false
            }).show();
        });

        // Close button
        $('#noty_close').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                closeWith: ['button']
            }).show();
        });

        // No progress
        $('#noty_progress').on('click', function() {
            new Noty({
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                progressBar: false
            }).show();
        });

        // Styled
        $('#noty_styled').on('click', function() {
            new Noty({
                theme: ' alert alert-danger alert-styled-left p-0',
                text: 'Change a few things up and try submitting again.',
                type: 'error',
                progressBar: false,
                closeWith: ['button']
            }).show();
        });

        // Styled with white background
        $('#noty_styled_white').on('click', function() {
            new Noty({
                theme: ' alert alert-success alert-styled-left p-0 bg-white',
                text: 'You successfully read this important alert message.',
                type: 'success',
                progressBar: false,
                closeWith: ['button']
            }).show();
        });

        // Solid styled
        $('#noty_solid_styled').on('click', function() {
            new Noty({
                theme: ' alert bg-info text-white alert-styled-left p-0',
                text: 'This alert needs your attention, but it\'s not super important.',
                type: 'info',
                progressBar: false,
                closeWith: ['button']
            }).show();
        });
    };

    // jGrowl examples
    var _componentJgrowl = function() {
        if (!$().jGrowl) {
            console.warn('Warning - jgrowl.min.js is not loaded.');
            return;
        }

        // Defaults override - hide "close all" button
        $.jGrowl.defaults.closer = false;


        //
        // Contextual options
        //

        // Solid color theme
        $('#jgrowl-default').on('click', function () {
            $.jGrowl('We are glad to see you again', {
                header: 'Good morning!',
                theme: 'bg-primary'
            });
        });

        // Danger notification
        $('#jgrowl-danger').on('click', function () {
            $.jGrowl('Change a few things up and try submitting again', {
                header: 'Oh snap!',
                theme: 'bg-danger'
            });
        });

        // Success notification
        $('#jgrowl-success').on('click', function () {
            $.jGrowl('You successfully read this important alert message', {
                header: 'Well done!',
                theme: 'bg-success'
            });
        });

        // Warning notification
        $('#jgrowl-warning').on('click', function () {
            $.jGrowl('Better check yourself, you\'re not looking too good', {
                header: 'Attention Here!',
                theme: 'bg-warning'
            });
        });

        // Info notification
        $('#jgrowl-info').on('click', function () {
            $.jGrowl('This alert needs your attention, but it\'s not super important.', {
                header: 'Heads up!',
                theme: 'bg-info'
            });
        });


        //
        // Notification styling
        //

        // Solid left
        $('#jgrowl-solid-styled-left').on('click', function () {
            $.jGrowl('Solid color notification with left icon', {
                header: 'Left icon',
                theme: 'alert-styled-left bg-danger'
            });
        });

        // Solid right
        $('#jgrowl-solid-styled-right').on('click', function () {
            $.jGrowl('Solid color notification with right icon', {
                header: 'Right icon',
                theme: 'alert-styled-right bg-info'
            });
        });

        // Solid custom
        $('#jgrowl-solid-custom-styled').on('click', function () {
            $.jGrowl('Notification with custom colors', {
                header: 'Custom styling',
                theme: 'bg-teal alert-styled-left alert-styled-custom'
            });
        });


        // Styled left
        $('#jgrowl-styled-left').on('click', function () {
            $.jGrowl('Notification with left contextual icon', {
                header: 'Left icon',
                theme: 'alert-bordered alert-styled-left alert-danger'
            });
        });

        // Styled right
        $('#jgrowl-styled-right').on('click', function () {
            $.jGrowl('Notification with right contextual icon', {
                header: 'Right icon',
                theme: 'alert-bordered alert-styled-right alert-danger'
            });
        });

        // Custom style
        $('#jgrowl-custom-styled').on('click', function () {
            $.jGrowl('Notification with custom style', {
                header: 'Custom style',
                theme: 'alert-styled-left alert-styled-custom alpha-teal text-teal-900 border-teal'
            });
        });

        // Styled with arrow
        $('#jgrowl-styled-arrow').on('click', function () {
            $.jGrowl('Styled alert with arrow', {
                header: 'Styled with arrow',
                theme: 'alert-styled-left alert-arrow-left alert-primary'
            });
        });


        // Rounded
        $('#jgrowl-rounded').on('click', function () {
            $.jGrowl('Alert with rounded corners', {
                theme: 'bg-primary alert-rounded'
            });
        });

        // Basic style
        $('#jgrowl-alert-default').on('click', function () {
            $.jGrowl('Default alert style example', {
                header: 'Default alert style',
                theme: 'alert-bordered alert-primary'
            });
        });


        //
        // Options
        //

        // Sticky notification
        $('#jgrowl-sticky').on('click', function () {
            $.jGrowl('I am a sticky message', {
                header: 'Sticky message',
                sticky: true,
                theme: 'bg-slate-600'
            });
        });

        // Long life message
        $('#jgrowl-long-life').on('click', function () {
            $.jGrowl('A message that will live a little longer.', {
                header: 'Long life message',
                life: 10000,
                theme: 'bg-slate-600'
            });
        });

        // Callbacks
        $('#jgrowl-callbacks').on('click', function () {
            $.jGrowl('Check out your console', {
                theme: 'bg-slate-600',
                life: 5000,
                header: 'Callbacks',
                beforeOpen: function(e,m,o) {
                    console.log("I am going to be opened!", this);
                },
                afterOpen: function(e,m,o) {
                    console.log("I am opened!", this);
                },
                close: function(e,m,o) {
                    console.log("I am closed!", this);
                }
            });
        });

        // Animation options
        $('#jgrowl-animation').on('click', function () {
            $.jGrowl('I am a notice!', {
                speed: 100,
                theme: 'bg-danger',
                header: 'Fast animation speed'
            });
        });


        //
        // Positions
        //

        // Top left
        $('#jgrowl-top-left').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'top-left',
                theme: 'bg-teal',
                header: 'Top Left position'
            });
        });

        // Top center
        $('#jgrowl-top-center').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'top-center',
                theme: 'bg-teal',
                header: 'Top Center position'
            });
        });

        // Top right
        $('#jgrowl-top-right').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'top-right',
                theme: 'bg-teal',
                header: 'Top Right position'
            });
        });


        // Center
        $('#jgrowl-center').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'center',
                theme: 'bg-danger',
                header: 'Center position'
            });
        });


        // Bottom left
        $('#jgrowl-bottom-left').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'bottom-left',
                theme: 'bg-info',
                header: 'Bottom Left position'
            });
        });

        // Bottom right
        $('#jgrowl-bottom-right').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'bottom-right',
                theme: 'bg-info',
                header: 'Bottom Right position'
            });
        });

        // Bottom center
        $('#jgrowl-bottom-center').on('click', function () {
            $('body').find('.jGrowl').attr('class', '').attr('id', '').hide();
            $.jGrowl('I am a jGrowl notice!', {
                position: 'bottom-center',
                theme: 'bg-info',
                header: 'Bottom Center position'
            });
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentNoty();
            _componentJgrowl();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    NotyJgrowl.init();
});
