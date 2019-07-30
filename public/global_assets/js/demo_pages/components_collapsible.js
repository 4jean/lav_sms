/* ------------------------------------------------------------------------------
 *
 *  # Collapsible, accordion and other navs
 *
 *  Demo JS code for components_navs.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ComponentsCollapsible = function() {


    //
    // Setup module components
    //

    // Pickadate picker
    var _componentSortable = function() {
        if (!$().sortable) {
            console.warn('Warning - interactions.min.js from jQuery UI library is not loaded.');
            return;
        }

        // Accordion component sorting
        $('.accordion-sortable').sortable({
            connectWith: '.accordion-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]:not(.disabled)',
            revert: 100,
            containment: '.content',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });


        // Collapsible component sorting
        $('.collapsible-sortable').sortable({
            connectWith: '.collapsible-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]:not(.disabled)',
            revert: 100,
            containment: '.content',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSortable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ComponentsCollapsible.init();
});
