/* ------------------------------------------------------------------------------
 *
 *  # Buttons and button dropdowns
 *
 *  Demo JS code for components_buttons.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Buttons = function() {


    //
    // Setup module components
    //

    // Progress buttons
    var _componentLadda = function() {
        if (typeof Ladda == 'undefined') {
            console.warn('Warning - ladda.min.js is not loaded.');
            return;
        }

        // Button with spinner
        Ladda.bind('.btn-ladda-spinner', {
            dataSpinnerSize: 16,
            timeout: 2000
        });

        // Button with progress
        Ladda.bind('.btn-ladda-progress', {
            callback: function(instance) {
                var progress = 0;
                var interval = setInterval(function() {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance.setProgress(progress);

                    if( progress === 1 ) {
                        instance.stop();
                        clearInterval(interval);
                    }
                }, 200);
            }
        });
    };

    // Loading button
    var _componentLoadingButton = function() {
        $('.btn-loading').on('click', function () {
            var btn = $(this),
                initialText = btn.data('initial-text'),
                loadingText = btn.data('loading-text');
            btn.html(loadingText).addClass('disabled');
            setTimeout(function () {
                btn.html(initialText).removeClass('disabled');
            }, 3000)
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentLadda();
            _componentLoadingButton();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Buttons.init();
});
