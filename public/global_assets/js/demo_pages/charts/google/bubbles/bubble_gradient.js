/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - bubbles with color scale
 *
 *  Google Visualization bubble chart with color scale demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleBubbleGradientChart = function() {


    //
    // Setup module components
    //

    // Bubble chart with gradient
    var _googleBubbleGradientChart = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawBubbleGradientChart();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawBubbleGradientChart);

                // Resize on window resize
                var resizeBubbleGradientChart;
                $(window).on('resize', function() {
                    clearTimeout(resizeBubbleGradientChart);
                    resizeBubbleGradientChart = setTimeout(function () {
                        drawBubbleGradientChart();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawBubbleGradientChart() {

            // Define charts element
            var bubble_gradient_element = document.getElementById('google-bubble-gradient');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['ID', 'X', 'Y', 'Temperature'],
                ['',   80,  167,      120],
                ['',   79,  136,      130],
                ['',   78,  184,      50],
                ['',   72,  278,      230],
                ['',   81,  200,      210],
                ['',   72,  170,      100],
                ['',   68,  477,      80]
            ]);

            // Optinos
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
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                bubble: {
                  textStyle: {
                    fontSize: 11
                  },
                  stroke: '#fff'
                }
            };

            // Draw chart
            var gradient_bubble = new google.visualization.BubbleChart(bubble_gradient_element);
            gradient_bubble.draw(data, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleBubbleGradientChart();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleBubbleGradientChart.init();
