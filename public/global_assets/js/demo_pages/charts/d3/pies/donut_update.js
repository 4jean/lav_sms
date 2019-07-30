/* ------------------------------------------------------------------------------
 *
 *  # D3.js - donut chart update animation
 *
 *  Demo d3.js donut chart setup with .tsv data source and update animation
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3PieDonutUpdateAnimation = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-check-input-styled').uniform();
    };

    // Chart
    var _pieDonutUpdateAnimation = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-donut-update'),
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
                .innerRadius(radius / 1.75);


            // Pie
            var pie = d3.layout.pie()
                .value(function(d) { return d.lemons; })
                .sort(null);


            // Load data
            // ------------------------------

            d3.tsv("../../../../global_assets/demo_data/d3/pies/donuts_update.tsv", function(error, data) {

                // Pull out values
                data.forEach(function(d) {
                    d.lemons = +d.lemons || 0;
                    d.melons = +d.melons || 0;
                });


                //
                // Append chart elements
                //

                // Bind data
                var path = svg.datum(data).selectAll("path")
                    .data(pie)
                    .enter()
                    .append("path")
                        .attr("fill", function(d, i) { return color(i); })
                        .attr("d", arc)
                        .style("stroke", "#fff")
                        .each(function(d) { this._current = d; }); // store the initial angles

                // Apply change event
                d3.selectAll(".donut-radios input").on("change", change);

                // Change values on page load
                var timeout = setTimeout(function() {
                    d3.select("input[value=\"melons\"]").property("checked", true).each(change);
                    $.uniform.update();
                }, 2000);

                // Change values
                function change() {
                    var value = this.value;
                    clearTimeout(timeout);
                    pie.value(function(d) { return d[value]; }); // change the value function
                    path = path.data(pie); // compute the new angles
                    path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
                }
            });


            // Store the displayed angles in _current.
            // Then, interpolate from _current to the new angles.
            // During the transition, _current is updated in-place by d3.interpolate.
            function arcTween(a) {
                var i = d3.interpolate(this._current, a);
                this._current = i(0);
                return function(t) {
                    return arc(i(t));
                };
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _pieDonutUpdateAnimation();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3PieDonutUpdateAnimation.init();
});
