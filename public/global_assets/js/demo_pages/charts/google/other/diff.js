/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - diff chart
 *
 *  Google Visualization diff chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleDiffChart = function() {


    //
    // Setup module components
    //

    // Diff chart
    var _googleDiffChart = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawDiff();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawDiff);

                // Resize on window resize
                var resizeDiffChart;
                $(window).on('resize', function() {
                    clearTimeout(resizeDiffChart);
                    resizeDiffChart = setTimeout(function () {
                        drawDiff();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawDiff() {

            // Define charts element
            var diff_chart_element = document.getElementById('google-diff');

            // Old data
            var oldData = google.visualization.arrayToDataTable([
                ['Name', 'Popularity'],
                ['Cesar', 425],
                ['Rachel', 420],
                ['Patrick', 290],
                ['Eric', 620],
                ['Eugene', 520],
                ['John', 460],
                ['Greg', 420],
                ['Matt', 410]
            ]);

            // New data
            var newData = google.visualization.arrayToDataTable([
                ['Name', 'Popularity'],
                ['Cesar', 307],
                ['Rachel', 360],
                ['Patrick', 200],
                ['Eric', 550],
                ['Eugene', 460],
                ['John', 320],
                ['Greg', 390],
                ['Matt', 360]
            ]);

            // Options
            var options = {
                fontName: 'Roboto',
                height: 400,
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                colors: ['#4CAF50'],
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                vAxis: {
                    title: 'Popularity',
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

            // Attach chart to the DOM element
            var diff = new google.visualization.ColumnChart(diff_chart_element);

            // Set data
            var diffData = diff.computeDiff(oldData, newData);

            // Draw our chart, passing in some options
            diff.draw(diffData, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleDiffChart();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleDiffChart.init();
