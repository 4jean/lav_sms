/* ------------------------------------------------------------------------------
 *
 *  # C3.js - chart grid
 *
 *  Demo JS code for c3_grid.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var С3Grid = function() {


    //
    // Setup module components
    //

    // Chart
    var _gridExamples = function() {
        if (typeof c3 == 'undefined') {
            console.warn('Warning - c3.min.js is not loaded.');
            return;
        }

        // Define charts elements
        var grid_lines_element = document.getElementById('c3-grid-lines');
        var grid_lines_x_element = document.getElementById('c3-grid-lines-x');
        var grid_lines_y_element = document.getElementById('c3-grid-lines-y');
        var grid_region_element = document.getElementById('c3-grid-region');
        var grid_region_chart_element = document.getElementById('c3-grid-chart-region');


        // Grid lines
        if(grid_lines_element) {

            // Generate chart
            var grid_lines = c3.generate({
                bindto: grid_lines_element,
                size: { height: 400 },
                color: {
                    pattern: ['#2196F3']
                },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250, 120, 200]
                    ]
                },
                grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_lines.resize();
            });
        }

        // Optional X grid lines
        if(grid_lines_x_element) {

            // Generate chart
            var grid_lines_x = c3.generate({
                bindto: grid_lines_x_element,
                size: { height: 400 },
                color: {
                    pattern: ['#4CAF50']
                },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250]
                    ]
                },
                grid: {
                    x: {
                        lines: [{value: 3, text: 'Label 3'}, {value: 4.5, text: 'Label 4.5'}]
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_lines_x.resize();
            });
        }

        // Optional Y grid lines
        if(grid_lines_y_element) {

            // Generate chart
            var grid_lines_y = c3.generate({
                bindto: grid_lines_y_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['sample', 30, 200, 100, 400, 150, 250],
                        ['sample2', 1300, 1200, 1100, 1400, 1500, 1250],
                    ],
                    axes: {
                        sample2: 'y2'
                    }
                },
                color: {
                    pattern: ['#607D8B', '#FF9800']
                },
                axis: {
                    y2: {
                        show: true
                    }
                },
                grid: {
                    y: {
                        lines: [{value: 50, text: 'Label 50'}, {value: 1300, text: 'Label 1300', axis: 'y2'}]
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_lines_y.resize();
            });
        }

        // Rects on chart
        if(grid_region_element) {

            // Generate chart
            var grid_region = c3.generate({
                bindto: grid_region_element,
                size: { height: 400 },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250, 400],
                        ['data2', 830, 1200, 1100, 1400, 1150, 1250, 1500],
                    ],
                    axes: {
                        data2: 'y2'
                    }
                },
                color: {
                    pattern: ['#607D8B', '#FF9800']
                },
                axis: {
                    y2: {
                        show: true
                    }
                },
                regions: [
                    {axis: 'x', end: 1, class: 'regionX'},
                    {axis: 'x', start: 2, end: 4, class: 'regionX'},
                    {axis: 'x', start: 5, class: 'regionX'},
                    {axis: 'y', end: 50, class: 'regionY'},
                    {axis: 'y', start: 80, end: 140, class: 'regionY'},
                    {axis: 'y', start: 400, class: 'regionY'},
                    {axis: 'y2', end: 900, class: 'regionY2'},
                    {axis: 'y2', start: 1150, end: 1250, class: 'regionY2'},
                    {axis: 'y2', start: 1300, class: 'regionY2'},
                ]
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_region.resize();
            });
        }

        // Data regions
        if(grid_region_chart_element) {

            // Generate chart
            var grid_region_chart = c3.generate({
                bindto: grid_region_chart_element,
                size: { height: 400 },
                color: {
                    pattern: ['#009688', '#9C27B0']
                },
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    regions: {
                        'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
                        'data2': [{'end':3}]
                    }
                }
            });

            // Resize chart on sidebar width change
            $('.sidebar-control').on('click', function() {
                grid_region_chart.resize();
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _gridExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    С3Grid.init();
});
