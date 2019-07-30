/* ------------------------------------------------------------------------------
 *
 *  # Dimple.js - pie with legend
 *
 *  Demo of pie chart with legend. Data stored in .tsv file format
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DimplePieLegend = function() {


    //
    // Setup module components
    //

    // Chart
    var _pieLegend = function() {
        if (typeof dimple == 'undefined') {
            console.warn('Warning - dimple.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('dimple-pie-legend');


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Construct chart
            var svg = dimple.newSvg(element, 420, 300);


            // Chart setup
            // ------------------------------

            d3.tsv("../../../../global_assets/demo_data/dimple/demo_data.tsv", function (data) {


                // Create chart
                // ------------------------------

                // Define chart
                var myChart = new dimple.chart(svg, data);

                // Set bounds
                myChart.setBounds(0, 0, "100%", "100%")

                // Set margins
                myChart.setMargins(5, 5, 100, 5);


                // Add axes
                // ------------------------------

                myChart.addMeasureAxis("p", "Unit Sales");


                // Construct layout
                // ------------------------------

                // Add pie
                myChart.addSeries("Owner", dimple.plot.pie);


                // Add legend
                // ------------------------------

                var myLegend = myChart.addLegend("100%", 0, 0, "100%", "right");


                // Add styles
                // ------------------------------

                // Font size
                myLegend.fontSize = "12";

                // Font family
                myLegend.fontFamily = "Roboto";


                //
                // Draw chart
                //

                // Draw
                myChart.draw();
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _pieLegend();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DimplePieLegend.init();
});
