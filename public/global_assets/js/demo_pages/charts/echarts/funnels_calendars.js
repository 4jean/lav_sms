/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Funnel and Calendar charts
 *
 *  Demo JS code for echarts_funnels_calendars.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsFunnelsCalendar = function() {


    //
    // Setup module components
    //

    // Funnela nd calendar charts
    var _funnelsCalendarsExamples = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var funnel_basic_element = document.getElementById('funnel_basic');
        var funnel_sorting_element = document.getElementById('funnel_sorting');
        var funnel_right_element = document.getElementById('funnel_right');
        var funnel_left_element = document.getElementById('funnel_left');
        var funnel_multiple_overlay_element = document.getElementById('funnel_multiple_overlay');
        var funnel_multiple_separate_element = document.getElementById('funnel_multiple_separate');

        var calendar_single_element = document.getElementById('calendar_single');
        var calendar_multiple_element = document.getElementById('calendar_multiple');


        //
        // Charts configuration
        //

        // Basic funnel chart
        if (funnel_basic_element) {

            // Initialize chart
            var funnel_basic = echarts.init(funnel_basic_element);


            //
            // Chart config
            //

            // Options
            funnel_basic.setOption({

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: '{a} <br/>{b}: {c}%'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['IE','Opera','Safari','Firefox','Chrome'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Statistics',
                        type: 'funnel',
                        left: '25%',
                        right: '25%',
                        top: '16%',
                        height: '84%',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'right'
                                }
                            }
                        },
                        data: [
                            {value: 60, name: 'Safari'},
                            {value: 40, name: 'Firefox'},
                            {value: 20, name: 'Chrome'},
                            {value: 80, name: 'Opera'},
                            {value: 100, name: 'IE'}
                        ]
                    }
                ]
            });
        }

        // Sorting
        if (funnel_sorting_element) {

            // Initialize chart
            var funnel_sorting = echarts.init(funnel_sorting_element);


            //
            // Chart config
            //

            // Options
            funnel_sorting.setOption({

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: '{a} <br/>{b}: {c}%'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['IE','Opera','Safari','Firefox','Chrome'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Statistics',
                        type: 'funnel',
                        left: '25%',
                        right: '25%',
                        top: '16%',
                        height: '84%',
                        sort: 'ascending',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'right'
                                }
                            }
                        },
                        data: [
                            {value: 60, name: 'Safari'},
                            {value: 40, name: 'Firefox'},
                            {value: 20, name: 'Chrome'},
                            {value: 80, name: 'Opera'},
                            {value: 100, name: 'IE'}
                        ]
                    }
                ]
            });
        }

        // Right funnel alignment
        if (funnel_right_element) {

            // Initialize chart
            var funnel_right = echarts.init(funnel_right_element);


            //
            // Chart config
            //

            // Options
            funnel_right.setOption({

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: '{a} <br/>{b}: {c}%'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    right: 0,
                    data: ['IE','Opera','Safari','Firefox','Chrome'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Statistics',
                        type: 'funnel',
                        left: '25%',
                        right: '25%',
                        top: '16%',
                        height: '84%',
                        funnelAlign: 'right',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'left'
                                }
                            }
                        },
                        data: [
                            {value: 60, name: 'Safari'},
                            {value: 40, name: 'Firefox'},
                            {value: 20, name: 'Chrome'},
                            {value: 80, name: 'Opera'},
                            {value: 100, name: 'IE'}
                        ]
                    }
                ]
            });
        }

        // Left funnel alignment
        if (funnel_left_element) {

            // Initialize chart
            var funnel_left = echarts.init(funnel_left_element);


            //
            // Chart config
            //

            // Options
            funnel_left.setOption({

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: '{a} <br/>{b}: {c}%'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['IE','Opera','Safari','Firefox','Chrome'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Statistics',
                        type: 'funnel',
                        left: '25%',
                        right: '25%',
                        top: '16%',
                        height: '84%',
                        funnelAlign: 'left',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'right'
                                }
                            }
                        },
                        data: [
                            {value: 60, name: 'Safari'},
                            {value: 40, name: 'Firefox'},
                            {value: 20, name: 'Chrome'},
                            {value: 80, name: 'Opera'},
                            {value: 100, name: 'IE'}
                        ]
                    }
                ]
            });
        }

        // Multiple - overlay
        if (funnel_multiple_overlay_element) {

            // Initialize chart
            var funnel_multiple_overlay = echarts.init(funnel_multiple_overlay_element);


            //
            // Chart config
            //

            // Options
            funnel_multiple_overlay.setOption({

                // Colors
                color: [
                    'rgba(255, 69, 0, 0.5)',
                    'rgba(255, 150, 0, 0.5)',
                    'rgba(255, 200, 0, 0.5)',
                    'rgba(155, 200, 50, 0.5)',
                    'rgba(55, 200, 100, 0.5)'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: '{a} <br/>{b}: {c}%'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['Chrome','Opera','Safari','Firefox','IE'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Expected',
                        type: 'funnel',
                        left: '25%',
                        right: '25%',
                        top: '16%',
                        height: '84%',
                        width: '50%',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    formatter: '{b}'
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    position: 'inside',
                                    formatter: '{b}: {c}%'
                                }
                            }
                        },
                        data: [
                            {value: 45, name: 'IE'},
                            {value: 60, name: 'Firefox'},
                            {value: 70, name: 'Safari'},
                            {value: 80, name: 'Opera'},
                            {value: 100, name: 'Chrome'}
                        ]
                    },
                    {
                        name: 'Result',
                        type: 'funnel',
                        left: '25%',
                        right: '25%',
                        top: '16%',
                        height: '84%',
                        width: '50%',
                        maxSize: '80%',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'inside',
                                    formatter: '{c}%',
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            emphasis: {
                                label: {
                                    position: 'inside',
                                    formatter: '{b}: {c}%'
                                }
                            }
                        },
                        data: [
                            {value: 30, name: 'IE'},
                            {value: 48, name: 'Firefox'},
                            {value: 66, name: 'Safari'},
                            {value: 69, name: 'Opera'},
                            {value: 80, name: 'Chrome'}
                        ]
                    }
                ]
            });
        }

        // Multiple - separate
        if (funnel_multiple_separate_element) {

            // Initialize chart
            var funnel_multiple_separate = echarts.init(funnel_multiple_separate_element);


            //
            // Chart config
            //

            // Options
            funnel_multiple_separate.setOption({

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    formatter: '{a} <br/>{b}: {c}%'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['Chrome','Opera','Safari','Firefox','IE','','Android','Windows','OS X','BlackBerry','Others'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Browser',
                        type: 'funnel',
                        left: '30%',
                        top: 0,
                        width: '50%',
                        height: '48%',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'left'
                                }
                            }
                        },
                        data: [
                            {value: 60, name: 'Safari'},
                            {value: 30, name: 'Firefox'},
                            {value: 10, name: 'IE'},
                            {value: 80, name: 'Opera'},
                            {value: 100, name: 'Chrome'}
                        ]
                    },
                    {
                        name: 'Operating system',
                        type: 'funnel',
                        left: '30%',
                        top: '52%',
                        width: '50%',
                        height: '48%',
                        sort: 'ascending',
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    position: 'right'
                                }
                            }
                        },
                        data: [
                            {value: 60, name: 'Android'},
                            {value: 30, name: 'Windows'},
                            {value: 10, name: 'OS X'},
                            {value: 80, name: 'BlackBerry'},
                            {value: 100, name: 'Others'}
                        ]
                    }
                ]
            });
        }


        // Single calendar
        if (calendar_single_element) {

            // Initialize chart
            var calendar_single = echarts.init(calendar_single_element);


            //
            // Chart config
            //

            // Demo data
            function getVirtulData(year) {
                year = year || '2017';
                var date = +echarts.number.parseDate(year + '-01-01');
                var end = +echarts.number.parseDate((+year + 1) + '-01-01');
                var dayTime = 3600 * 24 * 1000;
                var data = [];
                for (var time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return data;
            }

            // Options
            calendar_single.setOption({

                // Add title
                title: {
                    text: 'Github commits',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Visual map
                visualMap: {
                    min: 0,
                    max: 10000,
                    type: 'piecewise',
                    orient: 'horizontal',
                    left: 'center',
                    bottom: 0,
                    textStyle: {
                        fontSize: 12
                    }
                },

                // Calendar
                calendar: {
                    top: 80,
                    left: 30,
                    right: 5,
                    cellSize: ['auto', 25],
                    range: '2016',
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#fff'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#333',
                            width: 2
                        }
                    },
                    yearLabel: {show: false}
                },

                // Add series
                series: [{
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: getVirtulData(2016)
                }]
            });
        }

        // Multiple calendars
        if (calendar_multiple_element) {

            // Initialize chart
            var calendar_multiple = echarts.init(calendar_multiple_element);


            //
            // Chart config
            //

            // Demo data
            function getVirtulData(year) {
                year = year || '2017';
                var date = +echarts.number.parseDate(year + '-01-01');
                var end = +echarts.number.parseDate((+year + 1) + '-01-01');
                var dayTime = 3600 * 24 * 1000;
                var data = [];
                for (var time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return data;
            }

            // Options
            calendar_multiple.setOption({

                // Add title
                title: {
                    text: 'Github commits',
                    subtext: 'Open source information',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Visual map
                visualMap: {
                    min: 0,
                    max: 10000,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    text: ['High', 'Low'],
                    textGap: 20,
                    itemHeight: 280,
                    color: ['#4CAF50', '#E8F5E9'],
                    bottom: 0,
                    textStyle: {
                        fontSize: 12
                    }
                },

                // Calendar
                calendar: [
                    {
                        range: ['2011-01-01', '2011-12-31'],
                        cellSize: ['auto', 22],
                        top: 80,
                        left: 70,
                        right: 5,
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#333',
                                width: 2
                            }
                        },
                        yearLabel: {
                            margin: 50,
                            fontWeight: 500
                        }
                    },
                    {
                        top: 290,
                        range: '2012',
                        cellSize: ['auto', 22],
                        left: 70,
                        right: 5,
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#333',
                                width: 2
                            }
                        },
                        yearLabel: {
                            margin: 50,
                            fontWeight: 500
                        }
                    },
                    {
                        top: 500,
                        range: '2013',
                        cellSize: ['auto', 22],
                        left: 70,
                        right: 5,
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#333',
                                width: 2
                            }
                        },
                        yearLabel: {
                            margin: 50,
                            fontWeight: 500
                        }
                    }
                ],

                // Add series
                series: [{
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    calendarIndex: 0,
                    data: getVirtulData(2011)
                }, {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    calendarIndex: 1,
                    data: getVirtulData(2012)
                }, {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    calendarIndex: 2,
                    data: getVirtulData(2013)
                }]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            funnel_basic_element && funnel_basic.resize();
            funnel_sorting_element && funnel_sorting.resize();
            funnel_right_element && funnel_right.resize();
            funnel_left_element && funnel_left.resize();
            funnel_multiple_overlay_element && funnel_multiple_overlay.resize();
            funnel_multiple_separate_element && funnel_multiple_separate.resize();
            calendar_single_element && calendar_single.resize();
            calendar_multiple_element && calendar_multiple.resize();
        };

        // On sidebar width change
        $(document).on('click', '.sidebar-control', function() {
            setTimeout(function () {
                triggerChartResize();
            }, 0);
        });

        // On window resize
        var resizeCharts;
        window.onresize = function () {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        };
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _funnelsCalendarsExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsFunnelsCalendar.init();
});
