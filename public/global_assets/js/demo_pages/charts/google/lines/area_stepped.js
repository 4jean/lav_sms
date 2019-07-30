/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - stepped area
 *
 *  Google Visualization stepped area chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleAreaStepped = function() {


    //
    // Setup module components
    //

    // Stepped area chart
    var _googleAreaStepped = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawSteppedAreaChart();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawSteppedAreaChart);

                // Resize on window resize
                var resizeSteppedAreaChart;
                $(window).on('resize', function() {
                    clearTimeout(resizeSteppedAreaChart);
                    resizeSteppedAreaChart = setTimeout(function () {
                        drawSteppedAreaChart();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawSteppedAreaChart() {

            // Define charts element
            var area_stepped_element = document.getElementById('google-area-stepped');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
                ['Alfred Hitchcock (1935)', 8.4,         7.9],
                ['Ralph Thomas (1959)',     6.9,         6.5],
                ['Don Sharp (1978)',        6.5,         6.4],
                ['James Hawes (2008)',      4.4,         6.2]
            ]);

            // Options
            var options = {
                fontName: 'Roboto',
                height: 400,
                isStacked: true,
                fontSize: 12,
                areaOpacity: 0.4,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                lineWidth: 1,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                pointSize: 5,
                vAxis: {
                    title: 'Accumulated Rating',
                    titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    },
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                legend: {
                    position: 'top',
                    alignment: 'center',
                    textStyle: {
                        fontSize: 12
                    }
                }
            };

            // Draw chart 
            var stepped_area_chart = new google.visualization.SteppedAreaChart(document.getElementById('google-area-stepped'));
            stepped_area_chart.draw(data, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleAreaStepped();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleAreaStepped.init();
