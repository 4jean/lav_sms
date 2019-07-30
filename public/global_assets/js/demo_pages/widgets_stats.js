/* ------------------------------------------------------------------------------
 *
 *  # Statistics widgets
 *
 *  Demo JS code for widgets_stats.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var StatisticWidgets = function() {


    //
    // Setup module components
    //

    // Messages area chart
    var _areaChartWidget = function(element, chartHeight, color) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse;


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone');


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Load data
            // ------------------------------

            d3.json("../../../../global_assets/demo_data/dashboard/monthly_sales.json", function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Add area path
                svg.append("path")
                    .datum(data)
                    .attr("class", "d3-area")
                    .style('fill', color)
                    .attr("d", area)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            };
                        });


                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', messagesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', messagesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function messagesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr("width", width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr("width", width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum( data ).attr("d", area);
                }
            });
        }
    };

    // Simple bar charts
    var _barChartWidget = function(element, barQty, height, animate, easing, duration, delay, color, tooltip) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var bardata = [];
            for (var i=0; i < barQty; i++) {
                bardata.push(Math.round(Math.random() * 10) + 10);
            }

            // Main variables
            var d3Container = d3.select(element),
                width = d3Container.node().getBoundingClientRect().width;
            


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .rangeBands([0, width], 0.3);

            // Vertical
            var y = d3.scale.linear()
                .range([0, height]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.range(0, bardata.length));

            // Vertical
            y.domain([0, d3.max(bardata)]);



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g');



            //
            // Append chart elements
            //

            // Bars
            var bars = svg.selectAll('rect')
                .data(bardata)
                .enter()
                .append('rect')
                    .attr('class', 'd3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    })
                    .style('fill', color);



            // Tooltip
            // ------------------------------

            // Initiate
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0]);

            // Show and hide
            if(tooltip == "hours" || tooltip == "goal" || tooltip == "members") {
                bars.call(tip)
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);
            }

            // Daily meetings tooltip content
            if(tooltip == "hours") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "</h6>" +
                            "<span class='font-size-sm'>meetings</span>" +
                            "<div class='font-size-sm'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }

            // Statements tooltip content
            if(tooltip == "goal") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "</h6>" +
                            "<span class='font-size-sm'>statements</span>" +
                            "<div class='font-size-sm'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }

            // Online members tooltip content
            if(tooltip == "members") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "0" + "</h6>" +
                            "<span class='font-size-sm'>members</span>" +
                            "<div class='font-size-sm'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }



            // Bar loading animation
            // ------------------------------

            // Choose between animated or static
            if(animate) {
                withAnimation();
            } else {
                withoutAnimation();
            }

            // Animate on load
            function withAnimation() {
                bars
                    .attr('height', 0)
                    .attr('y', height)
                    .transition()
                        .attr('height', function(d) {
                            return y(d);
                        })
                        .attr('y', function(d) {
                            return height - y(d);
                        })
                        .delay(function(d, i) {
                            return i * delay;
                        })
                        .duration(duration)
                        .ease(easing);
            }

            // Load without animateion
            function withoutAnimation() {
                bars
                    .attr('height', function(d) {
                        return y(d);
                    })
                    .attr('y', function(d) {
                        return height - y(d);
                    });
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', barsResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', barsResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function barsResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width);

                // Width of appended group
                svg.attr("width", width);

                // Horizontal range
                x.rangeBands([0, width], 0.3);


                // Chart elements
                // -------------------------

                // Bars
                svg.selectAll('.d3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    });
            }
        }
    };

    // Simple line chart
    var _lineChartWidget = function(element, chartHeight, lineColor, pathColor, pointerLineColor, pointerBgColor) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var dataset = [
                {
                    "date": "04/13/14",
                    "alpha": "60"
                }, {
                    "date": "04/14/14",
                    "alpha": "35"
                }, {
                    "date": "04/15/14",
                    "alpha": "65"
                }, {
                    "date": "04/16/14",
                    "alpha": "50"
                }, {
                    "date": "04/17/14",
                    "alpha": "65"
                }, {
                    "date": "04/18/14",
                    "alpha": "20"
                }, {
                    "date": "04/19/14",
                    "alpha": "60"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom,
                padding = 20;

            // Format date
            var parseDate = d3.time.format("%m/%d/%y").parse,
                formatDate = d3.time.format("%a, %B %e");


            // Add tooltip
            // ------------------------------

            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'><i class='icon-check2 mr-2'></i>" + formatDate(d.date) + "</div>" + "</li>" +
                        "<li>" + "Sales: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.alpha + "</span>" + "</li>" +
                        "<li>" + "Revenue: &nbsp; " + "<span class='font-weight-semibold float-right'>" + "$" + (d.alpha * 25).toFixed(2) + "</span>" + "</li>" + 
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                        .call(tooltip);


            // Load data
            // ------------------------------

            dataset.forEach(function (d) {
                d.date = parseDate(d.date);
                d.alpha = +d.alpha;
            });


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([padding, width - padding]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(dataset, function (d) {
                return d.date;
            }));

            // Vertical
            y.domain([0, d3.max(dataset, function (d) {
                return Math.max(d.alpha);
            })]);


            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.alpha);
                });


            //
            // Append chart elements
            //

            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr("id", "clip-line-small");

            // Add clip shape
            var clipRect = clip.append("rect")
                .attr('class', 'clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clipRect
                  .transition()
                      .duration(1000)
                      .ease('linear')
                      .attr("width", width);


            // Line
            // ------------------------------

            // Path
            var path = svg.append('path')
                .attr({
                    'd': line(dataset),
                    "clip-path": "url(#clip-line-small)",
                    'class': 'd3-line d3-line-medium'
                })
                .style('stroke', lineColor);

            // Animate path
            svg.select('.line-tickets')
                .transition()
                    .duration(1000)
                    .ease('linear');


            // Add vertical guide lines
            // ------------------------------

            // Bind data
            var guide = svg.append('g')
                .selectAll('.d3-line-guides-group')
                .data(dataset);

            // Append lines
            guide
                .enter()
                .append('line')
                    .attr('class', 'd3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y1', function (d, i) {
                        return height;
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y2', function (d, i) {
                        return height;
                    })
                    .style('stroke', pathColor)
                    .style('stroke-dasharray', '4,2')
                    .style('shape-rendering', 'crispEdges');

            // Animate guide lines
            guide
                .transition()
                    .duration(1000)
                    .delay(function(d, i) { return i * 150; })
                    .attr('y2', function (d, i) {
                        return y(d.alpha);
                    });


            // Alpha app points
            // ------------------------------

            // Add points
            var points = svg.insert('g')
                .selectAll('.d3-line-circle')
                .data(dataset)
                .enter()
                .append('circle')
                    .attr('class', 'd3-line-circle d3-line-circle-medium')
                    .attr("cx", line.x())
                    .attr("cy", line.y())
                    .attr("r", 3)
                    .style({
                        'stroke': pointerLineColor,
                        'fill': pointerBgColor
                    });

            // Animate points on page load
            points
                .style('opacity', 0)
                .transition()
                    .duration(250)
                    .ease('linear')
                    .delay(1000)
                    .style('opacity', 1);

            // Add user interaction
            points
                .on("mouseover", function (d) {
                    tooltip.offset([-10, 0]).show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })

                // Hide tooltip
                .on("mouseout", function (d) {
                    tooltip.hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of first point
            d3.select(points[0][0])
                .on("mouseover", function (d) {
                    tooltip.offset([0, 10]).direction('e').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of last point
            d3.select(points[0][points.size() - 1])
                .on("mouseover", function (d) {
                    tooltip.offset([0, -10]).direction('w').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });


            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', lineChartResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', lineChartResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function lineChartResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([padding, width - padding]);


                // Chart elements
                // -------------------------

                // Mask
                clipRect.attr("width", width);

                // Line path
                svg.selectAll('.d3-line').attr("d", line(dataset));

                // Circles
                svg.selectAll('.d3-line-circle').attr("cx", line.x());

                // Guide lines
                svg.selectAll('.d3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    });
            }
        }
    };

    // Simple sparklines
    var _sparklinesWidget = function(element, chartType, qty, chartHeight, interpolation, duration, interval, color) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom;


            // Generate random data (for demo only)
            var data = [];
            for (var i=0; i < qty; i++) {
                data.push(Math.floor(Math.random() * qty) + 5);
            }


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.linear().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height - 5, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([1, qty - 3]);

            // Vertical
            y.domain([0, qty]);
                

            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .interpolate(interpolation)
                .x(function(d, i) { return x(i); })
                .y(function(d, i) { return y(d); });

            // Area
            var area = d3.svg.area()
                .interpolate(interpolation)
                .x(function(d,i) { 
                    return x(i); 
                })
                .y0(height)
                .y1(function(d) { 
                    return y(d); 
                });


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr('id', function(d, i) { return "load-clip-" + element.substring(1); });

            // Add clip shape
            var clips = clip.append("rect")
                .attr('class', 'load-clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clips
                .transition()
                    .duration(1000)
                    .ease('linear')
                    .attr("width", width);


            //
            // Append chart elements
            //

            // Main path
            var path = svg.append("g")
                .attr("clip-path", function(d, i) { return "url(#load-clip-" + element.substring(1) + ")"; })
                .append("path")
                    .datum(data)
                    .attr("transform", "translate(" + x(0) + ",0)");

            // Add path based on chart type
            if(chartType == "area") {
                path.attr("d", area).attr('class', 'd3-area').style("fill", color); // area
            }
            else {
                path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color); // line
            }

            // Animate path
            path
                .style('opacity', 0)
                .transition()
                    .duration(500)
                    .style('opacity', 1);



            // Set update interval. For demo only
            // ------------------------------

            setInterval(function() {

                // push a new data point onto the back
                data.push(Math.floor(Math.random() * qty) + 5);

                // pop the old data point off the front
                data.shift();

                update();

            }, interval);



            // Update random data. For demo only
            // ------------------------------

            function update() {

                // Redraw the path and slide it to the left
                path
                    .attr("transform", null)
                    .transition()
                        .duration(duration)
                        .ease("linear")
                        .attr("transform", "translate(" + x(0) + ",0)");

                // Update path type
                if(chartType == "area") {
                    path.attr("d", area).attr('class', 'd3-area').style("fill", color);
                }
                else {
                    path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color);
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeSparklines);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeSparklines);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeSparklines() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Clip mask
                clips.attr("width", width);

                // Line
                svg.select(".d3-line").attr("d", line);

                // Area
                svg.select(".d3-area").attr("d", area);
            }
        }
    };

    // Animated progress with icon
    var _progressIcon = function(element, radius, border, backgroundColor, foregroundColor, end, iconClass) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                startPercent = 0,
                iconSize = 32,
                endPercent = end,
                twoPi = Math.PI * 2,
                formatPercent = d3.format('.0%'),
                boxSize = radius * 2;

            // Values count
            var count = Math.abs((endPercent - startPercent) / 0.01);

            // Values step
            var step = endPercent < startPercent ? -0.01 : 0.01;


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', boxSize)
                .attr('height', boxSize)
                .append('g')
                    .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');


            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(radius)
                .outerRadius(radius - border)
                .cornerRadius(20);


            //
            // Append chart elements
            //

            // Paths
            // ------------------------------

            // Background path
            svg.append('path')
                .attr('class', 'd3-progress-background')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', backgroundColor);

            // Foreground path
            var foreground = svg.append('path')
                .attr('class', 'd3-progress-foreground')
                .attr('filter', 'url(#blur)')
                .style({
                    'fill': foregroundColor,
                    'stroke': foregroundColor
                });

            // Front path
            var front = svg.append('path')
                .attr('class', 'd3-progress-front')
                .style({
                    'fill': foregroundColor,
                    'fill-opacity': 1
                });


            // Text
            // ------------------------------

            // Percentage text value
            var numberText = d3.select('.progress-percentage')
                    .attr('class', 'pt-1 mt-2 mb-1');

            // Icon
            d3.select(element)
                .append("i")
                    .attr("class", iconClass + " counter-icon")
                    .style({
                        'color': foregroundColor,
                        'top': ((boxSize - iconSize) / 2) + 'px'
                    });


            // Animation
            // ------------------------------

            // Animate path
            function updateProgress(progress) {
                foreground.attr('d', arc.endAngle(twoPi * progress));
                front.attr('d', arc.endAngle(twoPi * progress));
                numberText.text(formatPercent(progress));
            }

            // Animate text
            var progress = startPercent;
            (function loops() {
                updateProgress(progress);
                if (count > 0) {
                    count--;
                    progress += step;
                    setTimeout(loops, 10);
                }
            })();
        }
    };

    // Animated progress with percentage count
    var _progressPercentage = function(element, radius, border, backgroundColor, foregroundColor, end) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                startPercent = 0,
                fontSize = 22,
                endPercent = end,
                twoPi = Math.PI * 2,
                formatPercent = d3.format('.0%'),
                boxSize = radius * 2;

            // Values count
            var count = Math.abs((endPercent - startPercent) / 0.01);

            // Values step
            var step = endPercent < startPercent ? -0.01 : 0.01;


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', boxSize)
                .attr('height', boxSize)
                .append('g')
                    .attr('transform', 'translate(' + radius + ',' + radius + ')');


            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(radius)
                .outerRadius(radius - border)
                .cornerRadius(20);


            //
            // Append chart elements
            //

            // Paths
            // ------------------------------

            // Background path
            svg.append('path')
                .attr('class', 'd3-progress-background')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', backgroundColor);

            // Foreground path
            var foreground = svg.append('path')
                .attr('class', 'd3-progress-foreground')
                .attr('filter', 'url(#blur)')
                .style({
                    'fill': foregroundColor,
                    'stroke': foregroundColor
                });

            // Front path
            var front = svg.append('path')
                .attr('class', 'd3-progress-front')
                .style({
                    'fill': foregroundColor,
                    'fill-opacity': 1
                });


            // Text
            // ------------------------------

            // Percentage text value
            var numberText = svg
                .append('text')
                    .attr('dx', 0)
                    .attr('dy', (fontSize / 2) - border)
                    .style({
                        'font-size': fontSize + 'px',
                        'line-height': 1,
                        'fill': foregroundColor,
                        'text-anchor': 'middle'
                    });


            // Animation
            // ------------------------------

            // Animate path
            function updateProgress(progress) {
                foreground.attr('d', arc.endAngle(twoPi * progress));
                front.attr('d', arc.endAngle(twoPi * progress));
                numberText.text(formatPercent(progress));
            }

            // Animate text
            var progress = startPercent;
            (function loops() {
                updateProgress(progress);
                if (count > 0) {
                    count--;
                    progress += step;
                    setTimeout(loops, 10);
                }
            })();
        }
    };

    // Simple pie
    var _animatedPie = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "Pending tickets",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 938,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved tickets",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 490,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed tickets",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 789,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })
                .on("mousemove", function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style("top", (d3.event.pageY - 40) + "px")
                        .style("left", (d3.event.pageX + 30) + "px");
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append element
            d3Container
                .append('h2')
                .attr('class', 'pt-1 mt-2 mb-1 font-weight-semibold');

            // Animate counter
            d3Container.select('h2')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });
        }
    };

    // Pie with legend
    var _animatedPieWithLegend = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "New",
                    "value": 578,
                    "color": "#29B6F6"
                }, {
                    "status": "Pending",
                    "value": 983,
                    "color": "#66BB6A"
                }, {
                    "status": "Shipped",
                    "value": 459,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            // Add interactions
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    // Animate legend
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Revert legend animation
                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append element
            d3Container
                .append('h2')
                .attr('class', 'pt-1 mt-2 mb-1 font-weight-semibold');

            // Animate counter
            d3Container.select('h2')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Append legend
            //

            // Add element
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li').data(pie(data))
                .enter().append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: 2px solid ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Add value
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Pie arc with legend
    var _pieArcWithLegend = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Pending",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 720,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 990,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 720,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size / 2)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(-Math.PI / 2)
                .endAngle(Math.PI / 2)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.3);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            //
            // Interactions
            //

            // Mouse
            arcPath
                .on('mouseover', function(d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) {
                        return i * 500;
                    })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append total text
            //

            svg.append('text')
                .attr('class', 'text-muted')
                .attr({
                    'class': 'half-donut-total',
                    'text-anchor': 'middle',
                    'dy': -33
                })
                .style({
                    'font-size': '12px',
                    'fill': '#999'
                })
                .text('Total');


            //
            // Append count
            //

            // Text
            svg
                .append('text')
                .attr('class', 'half-conut-count')
                .attr('text-anchor', 'middle')
                .attr('dy', -5)
                .style({
                    'font-size': '21px',
                    'font-weight': 500
                });

            // Animation
            svg.select('.half-conut-count')
                .transition()
                .duration(1500)
                .ease('linear')
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Legend
            //

            // Add legend list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(data))
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Legend text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Simple donut
    var _animatedDonut = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "Pending tickets",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 567,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved tickets",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 234,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed tickets",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 642,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.5);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })
                .on("mousemove", function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style("top", (d3.event.pageY - 40) + "px")
                        .style("left", (d3.event.pageX + 30) + "px");
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append text
            svg
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', 6)
                .style({
                    'font-size': '17px',
                    'font-weight': 500
                });

            // Animate text
            svg.select('text')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);
                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });
        }
    };

    // Donut with legend
    var _animatedDonutWithLegend = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "New",
                    "value": 790,
                    "color": "#29B6F6"
                }, {
                    "status": "Pending",
                    "value": 850,
                    "color": "#66BB6A"
                }, {
                    "status": "Shipped",
                    "value": 760,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.5);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            // Add interactions
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    // Animate legend
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Revert legend animation
                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) {
                        return i * 500;
                    })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append text
            svg
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', 6)
                .style({
                    'font-size': '17px',
                    'font-weight': 500
                });

            // Animate text
            svg.select('text')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);
                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Append legend
            //

            // Add element
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li').data(pie(data))
                .enter().append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: 2px solid ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Add value
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Donut with details
    var _donutWithDetails = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Pending",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 720,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 990,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 720,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.35);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            //
            // Add interactions
            //

            // Mouse
            arcPath
                .on('mouseover', function(d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                .delay(function(d, i) {
                    return i * 500;
                })
                .duration(500)
                .attrTween("d", function(d) {
                    var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);  
                    }; 
                });


            //
            // Add text
            //

            // Total
            svg.append('text')
                .attr('class', 'text-muted')
                .attr({
                    'class': 'half-donut-total',
                    'text-anchor': 'middle',
                    'dy': -13
                })
                .style({
                    'font-size': '12px',
                    'fill': '#999'
                })
                .text('Total');

            // Count
            svg
                .append('text')
                .attr('class', 'half-donut-count')
                .attr('text-anchor', 'middle')
                .attr('dy', 14)
                .style({
                    'font-size': '21px',
                    'font-weight': 500
                });

            // Animate count
            svg.select('.half-donut-count')
                .transition()
                .duration(1500)
                .ease('linear')
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Add legend
            //

            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(data))
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Append text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Progress arc - single color
    var _progressArcSingle = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Main variables
            var d3Container = d3.select(element),
                radius = size,
                thickness = 20,
                color = '#29B6F6';


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr('width', radius * 2)
                .attr('height', radius + 20)
                .attr('class', 'gauge');


            // Construct chart layout
            // ------------------------------

            // Pie
            var arc = d3.svg.arc()
                .innerRadius(radius - thickness)
                .outerRadius(radius)
                .startAngle(-Math.PI / 2);


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var chart = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + radius + ')');

            // Background
            var background = chart.append('path')
                .datum({
                    endAngle: Math.PI / 2
                })
                .attr({
                    'd': arc,
                    'fill': '#eee'
                });

            // Foreground
            var foreground = chart.append('path')
                .datum({
                    endAngle: -Math.PI / 2
                })
                .style('fill', color)
                .attr('d', arc);

            // Counter value
            var value = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius * 0.9) + ')')
                .append('text')
                .text(0 + '%')
                .attr({
                    'text-anchor': 'middle',
                    'fill': '#555'
                })
                .style({
                    'font-size': 19,
                    'font-weight': 400
                });


            //
            // Min and max text
            //

            // Group
            var scale = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius + 15) + ')')
                .style({
                    'font-size': 12,
                    'fill': '#999'
                });

            // Max
            scale.append('text')
                .text(100)
                .attr({
                    'text-anchor': 'middle',
                    'x': (radius - thickness / 2)
                });

            // Min
            scale.append('text')
                .text(0)
                .attr({
                    'text-anchor': 'middle',
                    'x': -(radius - thickness / 2)
                });


            //
            // Animation
            //

            // Interval
            setInterval(function() {
                update(Math.random() * 100);
            }, 1500);

            // Update
            function update(v) {
                v = d3.format('.0f')(v);
                foreground.transition()
                    .duration(750)
                    .call(arcTween, v);

                value.transition()
                    .duration(750)
                    .call(textTween, v);
            }

            // Arc
            function arcTween(transition, v) {
                var newAngle = v / 100 * Math.PI - Math.PI / 2;
                transition.attrTween('d', function(d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            }

            // Text
            function textTween(transition, v) {
                transition.tween('text', function() {
                    var interpolate = d3.interpolate(this.innerHTML, v),
                        split = (v + '').split('.'),
                        round = (split.length > 1) ? Math.pow(10, split[1].length) : 1;
                    return function(t) {
                        this.innerHTML = d3.format('.0f')(Math.round(interpolate(t) * round) / round) + '<tspan>%</tspan>';
                    };
                });
            }
        }
    };

    // Progress arc - multiple colors
    var _progressArcMulti = function(element, size, goal) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Main variables
            var d3Container = d3.select(element),
                radius = size,
                thickness = 20,
                startColor = '#66BB6A',
                midColor = '#FFA726',
                endColor = '#EF5350';

            // Colors
            var color = d3.scale.linear()
                .domain([0, 70, 100])
                .range([startColor, midColor, endColor]);


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr('width', radius * 2)
                .attr('height', radius + 20);


            // Construct chart layout
            // ------------------------------

            // Pie
            var arc = d3.svg.arc()
                .innerRadius(radius - thickness)
                .outerRadius(radius)
                .startAngle(-Math.PI / 2);


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var chart = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + radius + ')');

            // Background
            var background = chart.append('path')
                .datum({
                    endAngle: Math.PI / 2
                })
                .attr({
                    'd': arc,
                    'fill': '#eee'
                });

            // Foreground
            var foreground = chart.append('path')
                .datum({
                    endAngle: -Math.PI / 2
                })
                .style('fill', startColor)
                .attr('d', arc);

            // Counter value
            var value = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius * 0.9) + ')')
                .append('text')
                .text(0 + '%')
                .attr({
                    'text-anchor': 'middle',
                    'fill': '#555'
                })
                .style({
                    'font-size': 19,
                    'font-weight': 400
                });


            //
            // Min and max text
            //

            // Group
            var scale = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius + 15) + ')')
                .style({
                    'font-size': 12,
                    'fill': '#999'
                });

            // Max
            scale.append('text')
                .text(100)
                .attr({
                    'text-anchor': 'middle',
                    'x': (radius - thickness / 2)
                });

            // Min
            scale.append('text')
                .text(0)
                .attr({
                    'text-anchor': 'middle',
                    'x': -(radius - thickness / 2)
                });


            //
            // Animation
            //

            // Interval
            setInterval(function() {
                update(Math.random() * 100);
            }, 1500);

            // Update
            function update(v) {
                v = d3.format('.0f')(v);
                foreground.transition()
                    .duration(750)
                    .style('fill', function() {
                        return color(v);
                    })
                    .call(arcTween, v);

                value.transition()
                    .duration(750)
                    .call(textTween, v);
            }

            // Arc
            function arcTween(transition, v) {
                var newAngle = v / 100 * Math.PI - Math.PI / 2;
                transition.attrTween('d', function(d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            }

            // Text
            function textTween(transition, v) {
                transition.tween('text', function() {
                    var interpolate = d3.interpolate(this.innerHTML, v),
                        split = (v + '').split('.'),
                        round = (split.length > 1) ? Math.pow(10, split[1].length) : 1;
                    return function(t) {
                        this.innerHTML = d3.format('.0f')(Math.round(interpolate(t) * round) / round) + '<tspan>%</tspan>';
                    };
                });
            }
        }
    };

    // Rounded progress - single arc
    var _roundedProgressSingle = function(element, size, goal, color) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add random data
            var dataset = function () {
                return [
                    {percentage: Math.random() * 100}
                ];
            };

            // Main variables
            var d3Container = d3.select(element),
                padding = 2,
                strokeWidth = 16,
                width = size,
                height = size,
                τ = 2 * Math.PI;


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            // Construct chart layout
            // ------------------------------

            // Foreground arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .endAngle(function (d) {
                    return d.percentage / 100 * τ;
                })
                .innerRadius((size / 2) - strokeWidth)
                .outerRadius((size / 2) - padding)
                .cornerRadius(20);

            // Background arc
            var background = d3.svg.arc()
                .startAngle(0)
                .endAngle(τ)
                .innerRadius((size / 2) - strokeWidth)
                .outerRadius((size / 2) - padding);


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var field = svg.selectAll("g")
                .data(dataset)
                .enter().append("g");

            // Foreground arc
            field
                .append("path")
                .attr("class", "arc-foreground")
                .attr('fill', color);

            // Background arc
            field
                .append("path")
                .attr("d", background)
                .style({
                    "fill": color,
                    "opacity": 0.2
                });


            //
            // Text
            //

            // Goal
            field
                .append("text")
                .text("Out of " + goal)
                .attr("transform", "translate(0,20)")
                .style({
                    'font-size': 11,
                    'fill': '#999',
                    'font-weight': 500,
                    'text-transform': 'uppercase',
                    'text-anchor': 'middle'
                });

            // Count
            field
                .append("text")
                .attr('class', 'arc-goal-completed')
                .attr("transform", "translate(0,0)")
                .style({
                    'font-size': 23,
                    'font-weight': 500,
                    'text-anchor': 'middle'
                });


            //
            // Animate elements
            //

            // Add transition
            d3.transition().duration(2500).each(update);


            // Animation
            function update() {
                field = field
                    .each(function (d) {
                        this._value = d.percentage;
                    })
                    .data(dataset)
                    .each(function (d) {
                        d.previousValue = this._value;
                    });

                // Foreground arc
                field
                    .select(".arc-foreground")
                    .transition()
                    .duration(600)
                    .ease("easeInOut")
                    .attrTween("d", arcTween);
                    
                // Update count text
                field
                    .select(".arc-goal-completed")
                    .text(function (d) {
                        return Math.round(d.percentage /100 * goal);
                    });

                // Animate count text
                svg.select('.arc-goal-completed')
                    .transition()
                    .duration(600)
                    .tween("text", function(d) {
                        var i = d3.interpolate(this.textContent, d.percentage);
                        return function(t) {
                            this.textContent = Math.floor(d.percentage/100 * goal);
                        };
                    });

                // Update every 4 seconds (for demo)
                setTimeout(update, 4000);
            }

            // Arc animation
            function arcTween(d) {
                var i = d3.interpolateNumber(d.previousValue, d.percentage);
                return function (t) {
                    d.percentage = i(t);
                    return arc(d);
                };
            }
        }
    };

    // Rounded progress - multiple arcs
    var _roundedProgressMultiple = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add random data
            var data = [
                    {index: 0, name: 'Memory', percentage: 0},
                    {index: 1, name: 'CPU', percentage: 0},
                    {index: 2, name: 'Sessions', percentage: 0}
                ];

            // Main variables
            var d3Container = d3.select(element),
                padding = 2,
                strokeWidth = 8,
                width = size,
                height = size,
                τ = 2 * Math.PI;

            // Colors
            var colors = ['#78909C', '#F06292', '#4DB6AC'];


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            // Construct chart layout
            // ------------------------------

            // Foreground arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .endAngle(function (d) {
                    return d.percentage / 100 * τ;
                })
                .innerRadius(function (d) {
                    return (size / 2) - d.index * (strokeWidth + padding);
                })
                .outerRadius(function (d) {
                    return ((size / 2) - d.index * (strokeWidth + padding)) - strokeWidth;
                })
                .cornerRadius(20);

            // Background arc
            var background = d3.svg.arc()
                .startAngle(0)
                .endAngle(τ)
                .innerRadius(function (d) {
                    return (size / 2) - d.index * (strokeWidth + padding);
                })
                .outerRadius(function (d) {
                    return ((size / 2) - d.index * (strokeWidth + padding)) - strokeWidth;
                });


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var field = svg.selectAll("g")
                .data(data)
                .enter().append("g");

            // Foreground arcs
            field
                .append("path")
                .attr("class", "arc-foreground")
                .style("fill", function (d, i) {
                    return colors[i];
                });

            // Background arcs
            field
                .append("path")
                .style("fill", function (d, i) {
                    return colors[i];
                })
                .style("opacity", 0.1)
                .attr("d", background);


            //
            // Add legend
            //

            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend text-muted')
                .selectAll('li')
                .data(data)
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + colors[i];
                })
                .text(function(d, i) {
                    return d.name;
                });


            //
            // Animate elements
            //

            // Add transition
            d3.transition().each(update);

            // Animation
            function update() {
                field = field
                    .each(function (d) {
                        this._value = d.percentage;
                    })
                    .data(data)
                    .each(function (d) {
                        d.previousValue = this._value;
                        d.percentage = Math.round(Math.random() * 100) + 1;
                    });

                // Foreground arcs
                field
                    .select("path.arc-foreground")
                    .transition()
                    .duration(750)
                    .ease("easeInOut")
                    .attrTween("d", arcTween);
                    
                // Update every 4 seconds
                setTimeout(update, 4000);
            }

            // Arc animation
            function arcTween(d) {
                var i = d3.interpolateNumber(d.previousValue, d.percentage);
                return function (t) {
                    d.percentage = i(t);
                    return arc(d);
                };
            }
        }
    };

    // Pie with progress bar
    var _pieWithProgress = function(element, size) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Demo dataset
            var dataset = [
                    { name: 'New', count: 639 },
                    { name: 'Pending', count: 255 },
                    { name: 'Shipped', count: 215 }
                ];

            // Main variables
            var d3Container = d3.select(element),
                total = 0,
                width = size,
                height = size,
                progressSpacing = 6,
                progressSize = (progressSpacing + 2),
                arcSize = 20,
                outerRadius = (width / 2),
                innerRadius = (outerRadius - arcSize);

            // Colors
            var color = d3.scale.ordinal()
                .range(['#EF5350', '#29b6f6', '#66BB6A']);


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            // Construct chart layout
            // ------------------------------

            // Add dataset
            dataset.forEach(function(d){
                total+= d.count;
            });

            // Pie layout
            var pie = d3.layout.pie()
                .value(function(d){ return d.count; })
                .sort(null);

            // Inner arc
            var arc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);

            // Line arc
            var arcLine = d3.svg.arc()
                .innerRadius(innerRadius - progressSize)
                .outerRadius(innerRadius - progressSpacing)
                .startAngle(0);


            // Append chart elements
            // ------------------------------

            //
            // Animations
            //
            var arcTween = function(transition, newAngle) {
                transition.attrTween("d", function (d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    var interpolateCount = d3.interpolate(0, dataset[0].count);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        middleCount.text(d3.format(",d")(Math.floor(interpolateCount(t))));
                        return arcLine(d);
                    };
                });
            };


            //
            // Donut paths
            //

            // Donut
            var path = svg.selectAll('path')
                .data(pie(dataset))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', function(d, i) {
                    return color(d.data.name);
                })
                .style({
                    'stroke': '#fff',
                    'stroke-width': 2,
                    'cursor': 'pointer'
                });

            // Animate donut
            path
                .transition()
                .delay(function(d, i) { return i; })
                .duration(600)
                .attrTween("d", function(d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);  
                    }; 
                });


            //
            // Line path 
            //

            // Line
            var pathLine = svg.append('path')
                .datum({endAngle: 0})
                .attr('d', arcLine)
                .style({
                    fill: color('New')
                });

            // Line animation
            pathLine.transition()
                .duration(600)
                .delay(300)
                .call(arcTween, (2 * Math.PI) * (dataset[0].count / total));


            //
            // Add count text
            //

            var middleCount = svg.append('text')
                .datum(0)
                .attr('dy', 6)
                .style({
                    'font-size': '21px',
                    'font-weight': 500,
                    'text-anchor': 'middle'
                })
                .text(function(d){
                    return d;
                });            


            //
            // Add interactions
            //

            // Mouse
            path
                .on('mouseover', function(d, i) {
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {
                    $(element + ' [data-slice]').css('opacity', 1);
                });


            //
            // Add legend
            //

            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(dataset))
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + color(d.data.name);
                })
                .text(function(d, i) {
                    return d.data.name + ': ';
                });

            // Append legend text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.count;
                });
        }
    };

    // Segmented gauge
    var _segmentedGauge = function(element, size, min, max, sliceQty) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Main variables
            var d3Container = d3.select(element),
                width = size,
                height = (size / 2) + 20,
                radius = (size / 2),
                ringInset = 15,
                ringWidth = 20,

                pointerWidth = 10,
                pointerTailLength = 5,
                pointerHeadLengthPercent = 0.75,
                
                minValue = min,
                maxValue = max,
                
                minAngle = -90,
                maxAngle = 90,
                
                slices = sliceQty,
                range = maxAngle - minAngle,
                pointerHeadLength = Math.round(radius * pointerHeadLengthPercent);

            // Colors
            var colors = d3.scale.linear()
                .domain([0, slices - 1])
                .interpolate(d3.interpolateHsl)
                .range(['#66BB6A', '#EF5350']);


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height);


            // Construct chart layout
            // ------------------------------
            
            // Donut  
            var arc = d3.svg.arc()
                .innerRadius(radius - ringWidth - ringInset)
                .outerRadius(radius - ringInset)
                .startAngle(function(d, i) {
                    var ratio = d * i;
                    return deg2rad(minAngle + (ratio * range));
                })
                .endAngle(function(d, i) {
                    var ratio = d * (i + 1);
                    return deg2rad(minAngle + (ratio * range));
                });

            // Linear scale that maps domain values to a percent from 0..1
            var scale = d3.scale.linear()
                .range([0, 1])
                .domain([minValue, maxValue]);
                
            // Ticks
            var ticks = scale.ticks(slices);
            var tickData = d3.range(slices)
                .map(function() {
                    return 1 / slices;
                });

            // Calculate angles
            function deg2rad(deg) {
                return deg * Math.PI / 180;
            }
                
            // Calculate rotation angle
            function newAngle(d) {
                var ratio = scale(d);
                var newAngle = minAngle + (ratio * range);
                return newAngle;
            }


            // Append chart elements
            // ------------------------------

            //
            // Append arc
            //

            // Wrap paths in separate group
            var arcs = svg.append('g')
                .attr('transform', "translate(" + radius + "," + radius + ")")
                .style({
                    'stroke': '#fff',
                    'stroke-width': 2,
                    'shape-rendering': 'crispEdges'
                });

            // Add paths
            arcs.selectAll('path')
                .data(tickData)
                .enter()
                .append('path')
                .attr('fill', function(d, i) {
                    return colors(i);
                })
                .attr('d', arc);


            //
            // Text labels
            //

            // Wrap text in separate group
            var arcLabels = svg.append('g')
                .attr('transform', "translate(" + radius + "," + radius + ")");

            // Add text
            arcLabels.selectAll('text')
                .data(ticks)
                .enter()
                .append('text')
                .attr('transform', function(d) {
                    var ratio = scale(d);
                    var newAngle = minAngle + (ratio * range);
                    return 'rotate(' + newAngle + ') translate(0,' + (10 - radius) + ')';
                })
                .style({
                    'text-anchor': 'middle',
                    'font-size': 11,
                    'fill': '#999'
                })
                .text(function(d) { return d + "%"; });


            //
            // Pointer
            //

            // Line data
            var lineData = [
                [pointerWidth / 2, 0], 
                [0, -pointerHeadLength],
                [-(pointerWidth / 2), 0],
                [0, pointerTailLength],
                [pointerWidth / 2, 0]
            ];

            // Create line
            var pointerLine = d3.svg.line()
                .interpolate('monotone');

            // Wrap all lines in separate group
            var pointerGroup = svg
                .append('g')
                .data([lineData])
                .attr('transform', "translate(" + radius + "," + radius + ")");

            // Paths
            pointer = pointerGroup
                .append('path')
                .attr('d', pointerLine)
                .attr('transform', 'rotate(' + minAngle + ')');


            // Random update
            // ------------------------------

            // Update values
            function update() {
                var ratio = scale(Math.random() * max);
                var newAngle = minAngle + (ratio * range);
                pointer.transition()
                    .duration(2500)
                    .ease('elastic')
                    .attr('transform', 'rotate(' + newAngle + ')');
            }
            update();

            // Update values every 5 seconds
            setInterval(function() {
                update();
            }, 5000);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _areaChartWidget("#chart_area_basic", 50, '#5C6BC0');
            _areaChartWidget("#chart_area_color", 50, 'rgba(255,255,255,0.75)');

            _barChartWidget("#chart_bar_basic", 24, 50, true, "elastic", 1200, 50, "#EF5350", "members");
            _barChartWidget("#chart_bar_color", 24, 50, true, "elastic", 1200, 50, "rgba(255,255,255,0.75)", "members");

            _lineChartWidget('#line_chart_simple', 50, '#2196F3', 'rgba(33,150,243,0.5)', '#2196F3', '#fff');
            _lineChartWidget('#line_chart_color', 50, '#fff', 'rgba(255,255,255,0.5)', '#fff', '#29B6F6');

            _sparklinesWidget("#sparklines_basic", "area", 30, 50, "basis", 750, 2000, "#66BB6A");
            _sparklinesWidget("#sparklines_color", "area", 30, 50, "basis", 750, 2000, "rgba(255,255,255,0.75)");

            _progressIcon('#progress_icon_one', 42, 2.5, "#eee", "#EF5350", 0.68, "icon-heart6");
            _progressIcon('#progress_icon_two', 42, 2.5, "#eee", "#5C6BC0", 0.82, "icon-trophy3");
            _progressIcon('#progress_icon_three', 42, 2.5, "#00897B", "#fff", 0.73, "icon-bag");
            _progressIcon('#progress_icon_four', 42, 2.5, "#673AB7", "#fff", 0.49, "icon-truck");

            _progressPercentage('#progress_percentage_one', 46, 3, "#eee", "#2196F3", 0.79);
            _progressPercentage('#progress_percentage_two', 46, 3, "#eee", "#EF5350", 0.62);
            _progressPercentage('#progress_percentage_three', 46, 3, "#039BE5", "#fff", 0.69);
            _progressPercentage('#progress_percentage_four', 46, 3, "#E53935", "#fff", 0.43);

            _animatedPie("#pie_basic", 120);
            _animatedPieWithLegend("#pie_basic_legend", 120);
            _pieArcWithLegend("#pie_arc_legend", 170);
            _animatedDonut("#donut_basic_stats", 120);
            _animatedDonutWithLegend("#donut_basic_legend", 120);
            _donutWithDetails("#donut_basic_details", 146);
            _progressArcSingle("#arc_single", 78);
            _progressArcMulti("#arc_multi", 78, 700);
            _roundedProgressSingle("#rounded_progress_single", 150, 700, '#EC407A');
            _roundedProgressMultiple("#rounded_progress_multiple", 140);
            _pieWithProgress("#pie_progress_bar", 146);
            _segmentedGauge("#segmented_gauge", 200, 0, 100, 5);
        }
    }
}();


// Initialize module
// ------------------------------

// When content loaded
document.addEventListener('DOMContentLoaded', function() {
    StatisticWidgets.init();
});
