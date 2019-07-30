/* ------------------------------------------------------------------------------
 *
 *  # Draggable cards
 *
 *  Demo JS code for content_cards_draggable.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardsDraggable = function() {


    //
    // Setup module components
    //

    // jQuery UI Sortable
    var _componentSortable = function() {
        if (!$().sortable) {
            console.warn('Warning - jquery_ui.js components are not loaded.');
            return;
        }

        // Sortable rows
        $('.row-sortable').sortable({
            connectWith: '.row-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Sortable column
        $('.column-card-sortable').sortable({
            connectWith: '.column-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Exclude element from sort
        $('.sortable-exclude').sortable({
            connectWith: '.custom-sortable',
            items: '.card:not(.skip-sort)',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Change sort handle
        $('.sortable-heading').sortable({
            connectWith: '.heading-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '.card-title, [data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Sortable card
        $('.sortable-card').sortable({
            connectWith: '.card-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Sortable elements
        $('.elements-sortable').sortable({
            connectWith: '.elements-sortable',
            items: '.card-heading, .table-responsive',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
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
    CardsDraggable.init();
});
