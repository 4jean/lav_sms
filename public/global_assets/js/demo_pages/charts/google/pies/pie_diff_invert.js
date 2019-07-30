/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - diff pie
 *
 *  Google Visualization diff pie chart with inverted behaviour demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GooglePieDiffInvert = function() {


    //
    // Setup module components
    //

    // Pie with inverted behaviour
    var _googlePieDiffInvert = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawPieDiffInvert();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawPieDiffInvert);

                // Resize on window resize
                var resizePieDiffInvert;
                $(window).on('resize', function() {
                    clearTimeout(resizePieDiffInvert);
                    resizePieDiffInvert = setTimeout(function () {
                        drawPieDiffInvert();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawPieDiffInvert() {

            // Define charts element
            var pie_diff_invert_element = document.getElementById('google-pie-diff-invert');

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
                    oldData: {
                        inCenter: false
                    }
                }
            };

            // Attach chart to the DOM element
            var chartRadius = new google.visualization.PieChart(pie_diff_invert_element);

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
            _googlePieDiffInvert();
        }
    }
}();


// Initialize module
// ------------------------------

GooglePieDiffInvert.init();
