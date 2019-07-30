/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - scatter
 *
 *  Google Visualization scatter chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleScatterBasic = function() {


    //
    // Setup module components
    //

    // Scatter chart
    var _googleScatterBasic = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawScatter();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawScatter);

                // Resize on window resize
                var resizeScatterBasic;
                $(window).on('resize', function() {
                    clearTimeout(resizeScatterBasic);
                    resizeScatterBasic = setTimeout(function () {
                        drawScatter();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawScatter() {

            // Define charts element
            var scatter_chart_element = document.getElementById('google-scatter');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Age', 'Weight'],
                [ 8,      12],
                [ 4,      6],
                [ 11,     14],
                [ 4,      5],
                [ 3,      3.5],
                [ 6.5,    7],
                [ 7,    10],
                [ 6.5,    12],
                [ 6,    13],
                [ 8,    16],
                [ 12,    17],
                [ 18,    8],
                [ 18,    9],
                [ 16,    12]
            ]);

            // Options
            var options = {
                fontName: 'Roboto',
                height: 450,
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 400
                },
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                hAxis: {
                    minValue: 0,
                    maxValue: 15
                },
                vAxis: {
                    title: 'Weight',
                    titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    },
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0,
                    maxValue: 15
                },
                legend: 'none',
                pointSize: 10,
                colors: ['#E53935']
            };

            // Draw chart
            var scatter = new google.visualization.ScatterChart(scatter_chart_element);
            scatter.draw(data, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleScatterBasic();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleScatterBasic.init();
