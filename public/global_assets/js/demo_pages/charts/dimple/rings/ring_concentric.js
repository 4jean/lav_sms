/* ------------------------------------------------------------------------------
 *
 *  # Dimple.js - concentric ring
 *
 *  Demo of concentric ring chart. Data stored in .tsv file format
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DimpleRingConcentric = function() {


    //
    // Setup module components
    //

    // Chart
    var _ringConcentric = function() {
        if (typeof dimple == 'undefined') {
            console.warn('Warning - dimple.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('dimple-ring-concentric');


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
                myChart.setMargins(5, 5, 90, 5);


                // Add axes
                // ------------------------------

                myChart.addMeasureAxis("p", "Unit Sales");


                // Construct layout
                // ------------------------------

                // Outer ring
                var outerRing = myChart.addSeries("Channel", dimple.plot.pie);

                // Inner ring
                var innerRing = myChart.addSeries("Price Tier", dimple.plot.pie);

                // Negatives are calculated from outside edge, positives from center
                outerRing.innerRadius = "-30px";
                innerRing.outerRadius = "-40px";
                innerRing.innerRadius = "-70px";


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
            _ringConcentric();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DimpleRingConcentric.init();
});
