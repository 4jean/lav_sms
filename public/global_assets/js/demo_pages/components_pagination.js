/* ------------------------------------------------------------------------------
 *
 *  # Pagination
 *
 *  Specific JS code additions for components_pagination.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Pagination = function () {


    //
    // Setup module components
    //

    // Dynamic pagination
    var _componentPaginationDynamic = function() {
        if (!$().twbsPagination) {
            console.warn('Warning - sweet_alert.min.js is not loaded.');
            return;
        }

        // Basic
        $('.twbs-default').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-default').text('Page #' + page + ' content');
            }
        });

        // Flat style
        $('.twbs-flat').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-flat').text('Page #' + page + ' content');
            }
        });

        // Separated style
        $('.twbs-separated').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-separated').text('Page #' + page + ' content');
            }
        });

        // Custom button text
        $('.twbs-prev-next').twbsPagination({
            totalPages: 35,
            visiblePages: 3,
            prev: '&#8672;',
            next: '&#8674;',
            first: '&#8676;',
            last: '&#8677;',
            onPageClick: function (event, page) {
                $('.twbs-content-prev-next').text('Page #' + page + ' content');
            }
        });

        // Custom start page
        $('.twbs-page-start').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            startPage: 3,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-page-start').text('Page #' + page + ' content');
            }
        });

        // Set number of visible pages
        $('.twbs-visible-pages').twbsPagination({
            totalPages: 35,
            visiblePages: 2,
            prev: '&larr;',
            next: '&rarr;',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-visible-pages').text('Page #' + page + ' content');
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentPaginationDynamic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Pagination.initComponents();
});
