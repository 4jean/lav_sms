/* ------------------------------------------------------------------------------
 *
 *  # Context menu
 *
 *  Demo JS code for extra_context_menu.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ContextMenu = function() {


    //
    // Setup module components
    //

    // Context menu
    var _componentContextMenu = function() {
        if (!$().contextmenu) {
            console.warn('Warning - contextmenu.js is not loaded.');
            return;
        }

        // Initialize using JS
        $('.context-js').contextmenu({
            target: '.context-js-menu'
        });

        // Exclude elements
        $('.context-deactivate').contextmenu({
            target: '.context-deactivate-menu',
            before: function (e, element, target) {
                e.preventDefault();
                if (e.target.tagName == 'CODE') {
                    e.preventDefault();
                    this.closemenu();
                    return false;
                }
                return true;
            }
        });

        // Dynamic replacement
        $('.context-dynamic').contextmenu({
            target: '.context-dynamic-menu',
            before: function(e) { 
                this.getMenu().find('a').eq(2).html('<i class="icon-stack"></i> Item has been changed');
                return true;
            }
        });

        // Name on selection
        $('.context-selection').contextmenu({
            target: '.context-selection-menu',
            onItem: function(context, e) {
                alert($(e.target).text());
            }
        });

        // Dropdown submenu
        $('.context-submenu').contextmenu({
            target: '.context-sub-menu'
        }).on('hidden.bs.context',function () {
            $(this).find('.context-sub-menu .show').removeClass('show');
        });


        //
        // Callbacks
        //

        // onShow callback
        $('.context-show-menu').on('show.bs.context',function () {
            alert('onShow event fired');
        });

        // onShown callback
        $('.context-shown-menu').on('shown.bs.context',function () {
            alert('onShown event fired');
        });

        // onHide callback
        $('.context-hide-menu').on('hide.bs.context',function () {
            alert('onHide event fired');
        });

        // onHidden callback
        $('.context-hidden-menu').on('hidden.bs.context',function () {
            alert('onHidden event fired');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentContextMenu();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ContextMenu.init();
});
