/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - 3D pie
 *
 *  Google Visualization 3D pie chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GooglePie3d = function() {


    //
    // Setup module components
    //

    // 3D pie chart
    var _googlePie3d = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawPie3d();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawPie3d);

                // Resize on window resize
                var resizePie3d;
                $(window).on('resize', function() {
                    clearTimeout(resizePie3d);
                    resizePie3d = setTimeout(function () {
                        drawPie3d();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawPie3d() {

            // Define charts element
            var pie_3d_element = document.getElementById('google-pie-3d');

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
            var options_pie_3d = {
                fontName: 'Roboto',
                is3D: true,
                height: 300,
                width: 540,
                chartArea: {
                    left: 50,
                    width: '95%',
                    height: '95%'
                }
            };

            // Instantiate and draw our chart, passing in some options.
            var pie_3d = new google.visualization.PieChart(pie_3d_element);
            pie_3d.draw(data, options_pie_3d);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googlePie3d();
        }
    }
}();


// Initialize module
// ------------------------------

GooglePie3d.init();
