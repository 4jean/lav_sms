/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - area intervals
 *
 *  Google Visualization area chart with intervals demonstration
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var GoogleAreaIntervals = function() {


    //
    // Setup module components
    //

    // Area intervals
    var _googleAreaIntervals = function() {
        if (typeof google == 'undefined') {
            console.warn('Warning - Google Charts library is not loaded.');
            return;
        }

        // Initialize chart
        google.charts.load('current', {
            callback: function () {

                // Draw chart
                drawAreaIntervals();

                // Resize on sidebar width change
                $(document).on('click', '.sidebar-control', drawAreaIntervals);

                // Resize on window resize
                var resizeAreaIntervals;
                $(window).on('resize', function() {
                    clearTimeout(resizeAreaIntervals);
                    resizeAreaIntervals = setTimeout(function () {
                        drawAreaIntervals();
                    }, 200);
                });
            },
            packages: ['corechart']
        });

        // Chart settings
        function drawAreaIntervals() {

            // Define charts element
            var area_intervals_element = document.getElementById('google-area-intervals');

            // Data
            var data = new google.visualization.DataTable();
                data.addColumn('string', 'x');
                data.addColumn('number', 'values');
                data.addColumn({id:'i0', type:'number', role:'interval'});
                data.addColumn({id:'i1', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});
                data.addColumn({id:'i2', type:'number', role:'interval'});

            data.addRows([
                ['a', 100, 90, 110, 85, 96, 104, 120],
                ['b', 120, 95, 130, 90, 113, 124, 140],
                ['c', 130, 105, 140, 100, 117, 133, 139],
                ['d', 90, 85, 95, 85, 88, 92, 95],
                ['e', 70, 74, 63, 67, 69, 70, 72],
                ['f', 30, 39, 22, 21, 28, 34, 40],
                ['g', 80, 77, 83, 70, 77, 85, 90],
                ['h', 100, 90, 110, 85, 95, 102, 110]]);


            // The intervals data as areas
            var options_area_intervals = {
                fontName: 'Roboto',
                height: 400,
                curveType: 'function',
                fontSize: 12,
                chartArea: {
                    left: '5%',
                    width: '94%',
                    height: 350
                },
                lineWidth: 2,
                tooltip: {
                    textStyle: {
                        fontName: 'Roboto',
                        fontSize: 13
                    }
                },
                series: [{'color': '#43A047'}],
                intervals: { 'style': 'area' }, // Use area intervals.
                pointSize: 5,
                vAxis: {
                    title: 'Number values',
                    titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    },
                    gridlines:{
                        color: '#e5e5e5',
                        count: 10
                    },
                    minValue: 0
                },
                legend: 'none'
            };

            // Draw chart
            var area_intervals = new google.visualization.LineChart(area_intervals_element);
            area_intervals.draw(data, options_area_intervals);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _googleAreaIntervals();
        }
    }
}();


// Initialize module
// ------------------------------

GoogleAreaIntervals.init();
