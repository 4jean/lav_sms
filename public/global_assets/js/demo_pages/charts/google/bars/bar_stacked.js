/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - stacked bars
 *
 *  Google Visualization stacked bar chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleBarStacked = function() {


    //
    // Setup module components
    //

    // Stacked bar chart
    var _googleBarStacked = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawBarStacked();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawBarStacked);

                // Resize on window resize
                var resizeBarStacked;
                $(window).on('resize', function() {
                    clearTimeout(resizeBarStacked);
                    resizeBarStacked = setTimeout(function () {
                        drawBarStacked();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawBarStacked() {

            // Define charts element
            var bar_stacked_element = document.getElementById('google-bar-stacked');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', { role: 'annotation' } ],
                ['2000', 20, 30, 35, 40, 45, 30, ''],
                ['2005', 14, 20, 25, 30, 48, 30, ''],
                ['2010', 10, 24, 20, 32, 18, 5, ''],
                ['2015', 15, 25, 30, 35, 20, 15, ''],
                ['2020', 16, 22, 23, 30, 16, 9, ''],
                ['2025', 12, 26, 20, 40, 20, 30, ''],
                ['2030', 28, 19, 29, 30, 12, 13, '']
            ]);


            // Options
            var options_bar_stacked = {
                fontName: 'Roboto',
                height: 400,
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                isStacked: true,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                hAxis: {
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
            var bar_stacked = new google.visualization.BarChart(bar_stacked_element);
            bar_stacked.draw(data, options_bar_stacked);
        }

    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleBarStacked();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleBarStacked.init();
