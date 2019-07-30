/* ------------------------------------------------------------------------------
 *
 *  # D3.js - basic pie chart
 *
 *  Demo d3.js pie chart setup with .csv data source
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3PieBasic = function() {


    //
    // Setup module components
    //

    // Chart
    var _pieBasic = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-pie-basic'),
            radius = 120;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Colors
            var color = d3.scale.category20();


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3.select(element).append("svg");

            // Add SVG group
            var svg = container
                .attr("width", radius * 2)
                .attr("height", radius * 2)
                .append("g")
                    .attr("transform", "translate(" + radius + "," + radius + ")");


            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(0);

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.population; });


            // Load data
            // ------------------------------

            d3.csv("../../../../global_assets/demo_data/d3/pies/pies_basic.csv", function(error, data) {

                // Pull out values
                data.forEach(function(d) {
                    d.population = +d.population;
                });


                //
                // Append chart elements
                //

                // Bind data
                var g = svg.selectAll(".d3-arc")
                    .data(pie(data))
                    .enter()
                    .append("g")
                        .attr("class", "d3-arc");

                // Add arc path
                g.append("path")
                    .attr("d", arc)
                    .style("stroke", "#fff")
                    .style("fill", function(d) { return color(d.data.age); });

                // Add text labels
                g.append("text")
                    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                    .attr("dy", ".35em")
                    .style("fill", "#fff")
                    .style("font-size", 12)
                    .style("text-anchor", "middle")
                    .text(function(d) { return d.data.age; });
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _pieBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3PieBasic.init();
});
