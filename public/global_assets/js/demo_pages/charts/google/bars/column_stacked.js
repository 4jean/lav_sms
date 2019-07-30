/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - stacked columns
 *
 *  Google Visualization stacked column chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleColumnStacked = function() {


    //
    // Setup module components
    //

    // Stacked column chart
    var _googleColumnStacked = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawColumnStacked();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawColumnStacked);

                // Resize on window resize
                var resizeColumnStacked;
                $(window).on('resize', function() {
                    clearTimeout(resizeColumnStacked);
                    resizeColumnStacked = setTimeout(function () {
                        drawColumnStacked();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawColumnStacked() {

            // Define charts element
            var column_stacked_element = document.getElementById('google-column-stacked');

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
            var options_column_stacked = {
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
                vAxis: {
                    title: 'Sales and Expenses',
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
            var column_stacked = new google.visualization.ColumnChart(column_stacked_element);
            column_stacked.draw(data, options_column_stacked);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleColumnStacked();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleColumnStacked.init();
