/* ------------------------------------------------------------------------------
 *
 *  # Idle timeout
 *
 *  Demo JS code for extra_idle_timeout.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var IdleTimeout = function() {


    //
    // Setup module components
    //

    // Idle timeout
    var _componentIdleTimeout = function() {
        if (!$.sessionTimeout) {
            console.warn('Warning - session_timeout.min.js is not loaded.');
            return;
        }

        // Idle timeout
        $.sessionTimeout({
            heading: 'h5',
            title: 'Idle Timeout',
            message: 'Your session is about to expire. Do you want to stay connected?',
            warnAfter: 5000,
            redirAfter: 15000,
            keepAliveUrl: '/',
            redirUrl: 'login_unlock.html',
            logoutUrl: 'login_advanced.html'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentIdleTimeout();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    IdleTimeout.init();
});
