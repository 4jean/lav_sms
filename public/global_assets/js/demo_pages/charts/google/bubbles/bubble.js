/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - bubbles
 *
 *  Google Visualization bubble chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleBubbleChart = function() {


    //
    // Setup module components
    //

    // Bubble chart
    var _googleBubbleChart = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawBubbleChart();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawBubbleChart);

                // Resize on window resize
                var resizeBubbleChart;
                $(window).on('resize', function() {
                    clearTimeout(resizeBubbleChart);
                    resizeBubbleChart = setTimeout(function () {
                        drawBubbleChart();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawBubbleChart() {

            // Define charts element
            var bubble_chart_element = document.getElementById('google-bubble');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region'],
                ['CAN',    82.66,              1.67,      'North America'],
                ['DEU',    79.84,              1.36,      'Europe'],
                ['DNK',    70.6,               1.84,      'Europe'],
                ['EGY',    72.73,              2.78,      'Middle East'],
                ['GBR',    75.05,              2,         'Europe'],
                ['IRN',    72.49,              0.7,       'Middle East'],
                ['IRQ',    68.09,              4.77,      'Middle East'],
                ['ISR',    81.55,              3.96,      'Middle East'],
                ['RUS',    68.6,               1.54,      'Europe'],
                ['USA',    78.09,              3.05,      'North America']
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
                vAxis: {
                    title: 'Fertility Rate',
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
                bubble: {
                  textStyle: {
                    auraColor: 'none',
                    color: '#fff'
                  },
                  stroke: '#fff'
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
            var bubble = new google.visualization.BubbleChart(bubble_chart_element);
            bubble.draw(data, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleBubbleChart();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleBubbleChart.init();
