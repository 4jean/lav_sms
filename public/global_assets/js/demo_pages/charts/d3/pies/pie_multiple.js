/* ------------------------------------------------------------------------------
 *
 *  # D3.js - multiple pie charts
 *
 *  Demo d3.js multiple pie charts setup
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3PieMultiple = function() {


    //
    // Setup module components
    //

    // Chart
    var _pieMultiple = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-pie-multiple'),
            radius = 110,
            margin = 10;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define the data as a two-dimensional array of numbers
            var data = [
                [11975,  5871, 8916, 2868],
                [ 1951, 10048, 2060, 6171],
                [ 8010, 16145, 8090, 8045],
                [ 1013,   990,  940, 6907]
            ];

            // Colors
            var colors = d3.scale.category10();


            // Create chart
            // ------------------------------

            // Insert an svg element (with margin) for each row in our dataset
            var svg = d3.select(element)
                .selectAll("svg")
                .data(data)
                .enter()
                .append("svg")
                    .attr("width", (radius + margin) * 2)
                    .attr("height", (radius + margin) * 2)
                    .append("g")
                        .attr("class", "d3-arc")
                        .attr("transform", "translate(" + (radius + margin) + "," + (radius + margin) + ")");


            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .innerRadius(0)
                .outerRadius(radius);


            //
            // Append chart elements
            //

            // The data for each svg element is a row of numbers (an array)
            svg.selectAll("path")
                .data(d3.layout.pie())
                .enter()
                .append("path")
                    .attr("d", arc)
                    .style("stroke", "#fff")
                    .style("fill", function(d, i) { return colors(i); });

        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _pieMultiple();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3PieMultiple.init();
});
