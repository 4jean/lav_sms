/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - trendlines
 *
 *  Google Visualization trendline chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleTrendline = function() {


    //
    // Setup module components
    //

    // Trendline chart
    var _googleTrendline = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawTrendline();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawTrendline);

                // Resize on window resize
                var resizeTrendline;
                $(window).on('resize', function() {
                    clearTimeout(resizeTrendline);
                    resizeTrendline = setTimeout(function () {
                        drawTrendline();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawTrendline() {

            // Define charts element
            var trendline_element = document.getElementById('google-trendline');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Week', 'Bugs', 'Tests'],
                [1, 175, 10],
                [2, 159, 20],
                [3, 126, 35],
                [4, 129, 40],
                [5, 108, 60],
                [6, 92, 70],
                [7, 55, 72],
                [8, 50, 97]
            ]);

            // Options
            var options = {
                fontName: 'Roboto',
                height: 400,
                curveType: 'function',
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '92%',
                    height: 350
                },
                hAxis: {
                    format: '#',
                    viewWindow: {min: 0, max: 9},
                    gridlines: {count: 10}
                },
                vAxis: {
                    title: 'Bugs and tests',
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
                colors: ['#6D4C41', '#FB8C00'],
                trendlines: {
                    0: {
                        labelInLegend: 'Bug line',
                        visibleInLegend: true,
                    },
                    1: {
                        labelInLegend: 'Test line',
                        visibleInLegend: true,
                    }
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
            var trendline = new google.visualization.ColumnChart(trendline_element);
            trendline.draw(data, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleTrendline();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleTrendline.init();
