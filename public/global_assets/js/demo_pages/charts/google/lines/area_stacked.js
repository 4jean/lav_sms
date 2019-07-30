/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - stacked area
 *
 *  Google Visualization stacked area chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleAreaStacked = function() {


    //
    // Setup module components
    //

    // Stacked area chart
    var _googleAreaStacked = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawAreaStackedChart();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawAreaStackedChart);

                // Resize on window resize
                var resizeAreaStacked;
                $(window).on('resize', function() {
                    clearTimeout(resizeAreaStacked);
                    resizeAreaStacked = setTimeout(function () {
                        drawAreaStackedChart();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawAreaStackedChart() {

            // Define charts element
            var area_stacked_element = document.getElementById('google-area-stacked');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Year', 'Cars', 'Trucks', 'Drones', 'Segways'],
                ['2013',  870,  460, 310, 220],
                ['2014',  460,   720, 220, 460],
                ['2015',  930,  640, 340, 330],
                ['2016',  1000,  400, 180, 500]
            ]);

            // Options
            var options_area_stacked = {
                fontName: 'Roboto',
                height: 400,
                curveType: 'function',
                fontSize: 12,
                areaOpacity: 0.4,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                isStacked: true,
                pointSize: 4,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                lineWidth: 1.5,
                vAxis: {
                    title: 'Number values',
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
                    alignment: 'end',
                    textStyle: {
                        fontSize: 12
                    }
                }
            };

            // Draw chart
            var area_stacked_chart = new google.visualization.AreaChart(area_stacked_element);
            area_stacked_chart.draw(data, options_area_stacked);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleAreaStacked();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleAreaStacked.init();
