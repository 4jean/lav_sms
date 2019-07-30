/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - pie chart
 *
 *  Google Visualization pie chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GooglePieBasic = function() {


    //
    // Setup module components
    //

    // Pie chart
    var _googlePieBasic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawPie();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawPie);

                // Resize on window resize
                var resizePieBasic;
                $(window).on('resize', function() {
                    clearTimeout(resizePieBasic);
                    resizePieBasic = setTimeout(function () {
                        drawPie();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings    
        function drawPie() {

            // Define charts element
            var pie_chart_element = document.getElementById('google-pie');

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
            var options_pie = {
                fontName: 'Roboto',
                height: 300,
                width: 500,
                chartArea: {
                    left: 50,
                    width: '90%',
                    height: '90%'
                }
            };

            // Instantiate and draw our chart, passing in some options.
            var pie = new google.visualization.PieChart(pie_chart_element);
            pie.draw(data, options_pie);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googlePieBasic();
        }
    }
}();


// Initialize module
// ------------------------------

GooglePieBasic.init();
