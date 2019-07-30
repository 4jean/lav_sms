/* ------------------------------------------------------------------------------
 *
 *  # D3.js - bubble chart
 *
 *  Demo of a bubble chart setup with tooltip and .json data source
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3Bubbles = function() {


    //
    // Setup module components
    //

    // Chart
    var _bubbles = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-bubbles'),
            diameter = 700;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Format data
            var format = d3.format(",d");

            // Color scale
            color = d3.scale.category10();



            // Create chart
            // ------------------------------

            var svg = d3.select(element).append("svg")
                .attr("width", diameter)
                .attr("height", diameter)
                .attr("class", "bubble");



            // Create chart
            // ------------------------------

            // Add tooltip
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-5, 0])
                .html(function(d) {
                    return d.className + ": " + format(d.value);;
                });

            // Initialize tooltip
            svg.call(tip);



            // Construct chart layout
            // ------------------------------

            // Pack
            var bubble = d3.layout.pack()
                .sort(null)
                .size([diameter, diameter])
                .padding(1.5);



            // Load data
            // ------------------------------

            d3.json("../../../../global_assets/demo_data/d3/other/bubble.json", function(error, root) {


                //
                // Append chart elements
                //

                // Bind data
                var node = svg.selectAll(".d3-bubbles-node")
                    .data(bubble.nodes(classes(root))
                    .filter(function(d) { return !d.children; }))
                    .enter()
                    .append("g")
                        .attr("class", "d3-bubbles-node")
                        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

                // Append circles
                node.append("circle")
                    .attr("r", function(d) { return d.r; })
                    .style("fill", function(d) { return color(d.packageName); })
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);

                // Append text
                node.append("text")
                    .attr("dy", ".3em")
                    .style("fill", "#fff")
                    .style("font-size", 12)
                    .style("text-anchor", "middle")
                    .text(function(d) { return d.className.substring(0, d.r / 3); });
            });


            // Returns a flattened hierarchy containing all leaf nodes under the root.
            function classes(root) {
                var classes = [];

                function recurse(name, node) {
                    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
                    else classes.push({packageName: name, className: node.name, value: node.size});
                }

                recurse(null, root);
                return {children: classes};
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _bubbles();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3Bubbles.init();
});
