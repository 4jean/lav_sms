/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - rotated pie
 *
 *  Google Visualization rotated pie chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GooglePieRotate = function() {


    //
    // Setup module components
    //

    // Rotated pie
    var _googlePieRotate = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawPieRotated();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawPieRotated);

                // Resize on window resize
                var resizePieRotate;
                $(window).on('resize', function() {
                    clearTimeout(resizePieRotate);
                    resizePieRotate = setTimeout(function () {
                        drawPieRotated();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawPieRotated() {

            // Define charts element
            var pie_rotate_element = document.getElementById('google-pie-rotate');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work',     11],
                ['Eat',      2],
                ['Commute',  2],
                ['Watch TV', 2],
                ['Sleep',    7]
            ]);

            // Options
            var options_pie_rotate = {
                fontName: 'Roboto',
                pieStartAngle: 180,
                height: 300,
                width: 500,
                chartArea: {
                    left: 50,
                    width: '90%',
                    height: '90%'
                }
            };

            // Instantiate and draw our chart, passing in some options.
            var pie_rotate = new google.visualization.PieChart(pie_rotate_element);
            pie_rotate.draw(data, options_pie_rotate);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googlePieRotate();
        }
    }
}();


// Initialize module
// ------------------------------

GooglePieRotate.init();
