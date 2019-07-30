/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - diff pie
 *
 *  Google Visualization diff pie chart with radius factor demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GooglePieDiff = function() {


    //
    // Setup module components
    //

    // Pie with radius factor
    var _googlePieDiff = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawPieDiff();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawPieDiff);

                // Resize on window resize
                var resizePieDiff;
                $(window).on('resize', function() {
                    clearTimeout(resizePieDiff);
                    resizePieDiff = setTimeout(function () {
                        drawPieDiff();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawPieDiff() {

            // Define charts element
            var pie_diff_element = document.getElementById('google-pie-diff-radius');

            // Old data
            var oldData = google.visualization.arrayToDataTable([
                ['Major', 'Degrees'],
                ['Business', 256070], ['Education', 108034],
                ['Social Sciences & History', 127101], ['Health', 81863],
                ['Psychology', 74194]
            ]);

            // New data
            var newData = google.visualization.arrayToDataTable([
                ['Major', 'Degrees'],
                ['Business', 358293], ['Education', 101265],
                ['Social Sciences & History', 172780], ['Health', 129634],
                ['Psychology', 97216]
            ]);

            // Options
            var options = {
                fontName: 'Roboto',
                height: 300,
                width: 500,
                chartArea: {
                    left: 50,
                    width: '90%',
                    height: '90%'
                },
                diff: {
                    innerCircle: {
                        radiusFactor: 0.8
                    }
                }
            };

            // Attach chart to the DOM element
            var chartRadius = new google.visualization.PieChart(pie_diff_element);

            // Set data
            var diffData = chartRadius.computeDiff(oldData, newData);

            // Draw our chart, passing in some options
            chartRadius.draw(diffData, options);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googlePieDiff();
        }
    }
}();


// Initialize module
// ------------------------------

GooglePieDiff.init();
