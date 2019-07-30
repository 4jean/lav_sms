/* ------------------------------------------------------------------------------
 *
 *  # Dimple.js - pies as scatter
 *
 *  Demo of scatter chart with pies. Data stored in .tsv file format
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DimplePieScatter = function() {


    //
    // Setup module components
    //

    // Chart
    var _pieScatter = function() {
        if (typeof dimple == 'undefined') {
            console.warn('Warning - dimple.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('dimple-pie-scatter');


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Construct chart
            var svg = dimple.newSvg(element, "100%", 500);


            // Chart setup
            // ------------------------------

            d3.tsv("../../../../global_assets/demo_data/dimple/demo_data.tsv", function (data) {

                // Filter data
                data = dimple.filterData(data, "Date", "01/12/2011");


                // Create chart
                // ------------------------------

                // Define chart
                var myChart = new dimple.chart(svg, data);

                // Set bounds
                myChart.setBounds(0, 0, "100%", "100%");

                // Set margins
                myChart.setMargins(60, 35, 10, 45);


                // Add axes
                // ------------------------------

                // Horizontal
                var x = myChart.addMeasureAxis("x", "Price Monthly Change");

                // Vertical
                var y = myChart.addMeasureAxis("y", "Unit Sales Monthly Change");

                // Other axes
                myChart.addMeasureAxis("p", "Operating Profit");


                // Construct layout
                // ------------------------------

                // Add pie
                var pies = myChart.addSeries(["Owner", "Channel"], dimple.plot.pie);

                // Radius
                pies.radius = 40;


                // Add legend
                // ------------------------------

                var myLegend = myChart.addLegend(0, 5, "100%", 0, "right");


                // Add styles
                // ------------------------------

                // Font size
                x.fontSize = "12";
                y.fontSize = "12";

                // Font family
                x.fontFamily = "Roboto";
                y.fontFamily = "Roboto";

                // Legend font style
                myLegend.fontSize = "12";
                myLegend.fontFamily = "Roboto";


                //
                // Draw chart
                //

                // Draw
                myChart.draw();


                // Resize chart
                // ------------------------------

                // Add a method to draw the chart on resize of the window
                $(window).on('resize', resize);
                $('.sidebar-control').on('click', resize);

                // Resize function
                function resize() {

                    // Redraw chart
                    myChart.draw(0, true);
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _pieScatter();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DimplePieScatter.init();
});
