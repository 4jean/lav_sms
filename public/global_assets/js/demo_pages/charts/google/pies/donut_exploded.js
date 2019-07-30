/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - sliced donut
 *
 *  Google Visualization sliced donut chart demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleDonutExploded = function() {


    //
    // Setup module components
    //

    // Exploded donut
    var _googleDonutExploded = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawDonutExploded();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawDonutExploded);

                // Resize on window resize
                var resizeDonutExploded;
                $(window).on('resize', function() {
                    clearTimeout(resizeDonutExploded);
                    resizeDonutExploded = setTimeout(function () {
                        drawDonutExploded();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawDonutExploded() {

            // Define charts element
            var donut_exploded_element = document.getElementById('google-donut-exploded');

            // Data
            var data = google.visualization.arrayToDataTable([
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Gujarati', 46],
                ['Hindi', 90],
                ['Kannada', 38],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Marathi', 72],
                ['Oriya', 33],
                ['Punjabi', 29],
                ['Tamil', 61],
                ['Telugu', 74],
                ['Urdu', 52]
            ]);

            // Options
            var options_donut_exploded = {
                fontName: 'Roboto',
                height: 300,
                width: 540,
                chartArea: {
                    left: 50,
                    width: '90%',
                    height: '90%'
                },
                pieHole: 0.5,
                pieSliceText: 'label',
                slices: {  
                    2: {offset: 0.15},
                    8: {offset: 0.1},
                    10: {offset: 0.15},
                    11: {offset: 0.1}
                }
            };

            // Instantiate and draw our chart, passing in some options.
            var donut_exploded = new google.visualization.PieChart(donut_exploded_element);
            donut_exploded.draw(data, options_donut_exploded);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleDonutExploded();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleDonutExploded.init();
