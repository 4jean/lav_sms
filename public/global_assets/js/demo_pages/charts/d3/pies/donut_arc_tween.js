/* ------------------------------------------------------------------------------
 *
 *  # D3.js - arc tween animation
 *
 *  Demo d3.js demonstration of arc tween animation
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3PieDonutTweenAnimation = function() {


    //
    // Setup module components
    //

    // Chart
    var _pieDonutTweenAnimation = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-donut-arc-tween'),
            radius = 120;


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var τ = 2 * Math.PI;


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
                .innerRadius(radius / 1.4)
                .startAngle(0);


            //
            // Append chart elements
            //

            // Add the background arc, from 0 to 100% (τ).
            var background = svg.append("path")
                .datum({endAngle: τ})
                .style("fill", "#eee")
                .attr("d", arc);

            // Add the foreground arc in orange, currently showing 12.7%.
            var foreground = svg.append("path")
                .datum({endAngle: .127 * τ})
                .style("fill", "#7986CB")
                .attr("d", arc);

            // Start a transition to a new random angle
            setInterval(function() {
                foreground.transition()
                    .duration(750)
                    .call(arcTween, Math.random() * τ);
            }, 1500);

            // Creates a tween on the specified transition's "d" attribute, transitioning
            // any selected arcs from their current angle to the specified new angle.
            function arcTween(transition, newAngle) {
                transition.attrTween("d", function(d) {

                    // Interpolate between the two angles
                    var interpolate = d3.interpolate(d.endAngle, newAngle);

                    // Return value of the attrTween
                    return function(t) {

                        // Calculate the current arc angle based on the transition time, t
                        d.endAngle = interpolate(t);

                        // Lastly, compute the arc path given the updated data
                        return arc(d);
                    };
                });
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _pieDonutTweenAnimation();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3PieDonutTweenAnimation.init();
});
