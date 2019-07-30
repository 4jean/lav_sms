/* ------------------------------------------------------------------------------
 *
 *  # D3.js - custom diagram colors
 *
 *  Venn diagram demo with custom color options
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var D3VennColors = function() {


    //
    // Setup module components
    //

    // Chart
    var _vennColors = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('d3-venn-colors');


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Data set
            // ------------------------------

            // Circles
            var sets = [
                {label: 'SE', size: 28},
                {label: 'Treat', size: 35},
                {label: 'Anti-CCP', size: 108},
                {label: 'DAS28', size: 106}
            ];

            // Overlaps
            var overlaps = [
                {sets: [0,1], size: 1},
                {sets: [0,2], size: 1},
                {sets: [0,3], size: 14},
                {sets: [1,2], size: 6},
                {sets: [1,3], size: 0},
                {sets: [2,3], size: 1},
                {sets: [0,2,3], size: 1},
                {sets: [0,1,2], size: 0},
                {sets: [0,1,3], size: 0},
                {sets: [1,2,3], size: 0},
                {sets: [0,1,2,3], size: 0}
            ];


            // Initialize chart
            // ------------------------------

            // Define colors
            var colours = d3.scale.category10();


            // Draw diagram
            var diagram = venn.drawD3Diagram(d3.select(element), venn.venn(sets, overlaps), 350, 350);


            // Style circles
            diagram.circles
                .style("fill-opacity", .7)
                .style("stroke-opacity", 0)
                .style("fill", function(d,i) { return colours(i); })
                .style("stroke", function(d,i) { return colours(i); });


            // Style text
            diagram.text
                .style("fill", "white")
                .style("font-weight", "500");
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _vennColors();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    D3VennColors.init();
});
