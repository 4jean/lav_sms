/* ------------------------------------------------------------------------------
 *
 *  # Dimple.js - vertical grouped line
 *
 *  Demo of a grouped line chart. Data stored in .tsv file format
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DimpleLineVerticalSingleGrouped = function() {


    //
    // Setup module components
    //

    // Chart
    var _lineVerticalSingleGrouped = function() {
        if (typeof dimple == 'undefined') {
            console.warn('Warning - dimple.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('dimple-line-vertical-single-grouped');


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Construct chart
            var svg = dimple.newSvg(element, "100%", 500);


            // Chart setup
            // ------------------------------

            d3.tsv("../../../../global_assets/demo_data/dimple/demo_data.tsv", function (data) {

                // Filter data
                data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"])


                // Create chart
                // ------------------------------

                // Define chart
                var myChart = new dimple.chart(svg, data);

                // Set bounds
                myChart.setBounds(0, 0, "100%", "100%");

                // Set margins
                myChart.setMargins(70, 0, 20, 30);


                // Create axes
                // ------------------------------

                // Horizontal
                var x = myChart.addMeasureAxis("x", "Unit Sales");

                // Vertical
                var y = myChart.addCategoryAxis("y", ["Owner", "Month"]);
                    y.addGroupOrderRule("Date");


                // Construct layout
                // ------------------------------

                // Add line
                var s = myChart
                    .addSeries("Owner", dimple.plot.line)
                    .interpolation = "cardinal";

                // Bar space
                s.barGap = 0.05;


                // Add styles
                // ------------------------------

                // Font size
                x.fontSize = "12";
                y.fontSize = "12";

                // Font family
                x.fontFamily = "Roboto";
                y.fontFamily = "Roboto";


                //
                // Draw chart
                //

                // Draw
                myChart.draw();

                // Remove axis titles
                x.titleShape.remove();
                y.titleShape.remove();


                // Resize chart
                // ------------------------------

                // Add a method to draw the chart on resize of the window
                $(window).on('resize', resize);
                $('.sidebar-control').on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                        // Redraw chart
                        myChart.draw(0, true);

                        // Remove axis titles
                        x.titleShape.remove();
                        y.titleShape.remove();
                    }, 100)
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _lineVerticalSingleGrouped();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DimpleLineVerticalSingleGrouped.init();
});
