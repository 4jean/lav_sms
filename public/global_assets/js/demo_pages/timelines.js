/* ------------------------------------------------------------------------------
 *
 *  # Timelines
 *
 *  Demo JS code for Timeline pages set
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Timelines = function() {


    //
    // Setup module components
    //

    // Charts
    var _chartsStatistics = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var daily_statistics_element = document.getElementById('daily_statistics');
        var weekly_statistics_element = document.getElementById('weekly_statistics');


        // Daily statistics chart config
        if (daily_statistics_element) {

            // Initialize chart
            var daily_statistics = echarts.init(daily_statistics_element);


            //
            // Chart config
            //

            // Options
            daily_statistics.setOption({

                // Define colors
                color: ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 10,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Clicks','Visits','Sales'],
                    itemHeight: 8,
                    itemGap: 20,
                    textStyle: {
                        padding: [0, 5]
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: 'rgba(0,0,0,0.025)'
                        }
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#eee',
                            type: 'dashed'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    name: 'Visits',
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                },
                {
                    type: 'value',
                    name: 'Clicks',
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Clicks',
                        type: 'bar',
                        data: [20, 150, 270, 340, 400, 700, 1000, 750, 500, 380, 220, 120]
                    },
                    {
                        name: 'Visits',
                        type: 'bar',
                        data: [130, 160, 330, 380, 480, 1100, 1250, 900, 680, 490, 350, 230]
                    },
                    {
                        name: 'Sales',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        yAxisIndex: 1,
                        data: [10, 50, 70, 100, 110, 130, 150, 180, 160, 140, 120, 60],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }

        // Weekly statistics chart config
        if (weekly_statistics_element) {

            // Initialize chart
            var weekly_statistics = echarts.init(weekly_statistics_element);


            //
            // Chart config
            //

            // Options
            weekly_statistics.setOption({

                // Define colors
                color: ['#2ec7c9','#5ab1ef','#b6a2de',],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 10,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Profit', 'Expenses', 'Income'],
                    itemHeight: 8,
                    itemGap: 20,
                    textStyle: {
                        padding: [0, 5]
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: 'rgba(0,0,0,0.025)'
                        }
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#eee',
                            type: 'dashed'
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'category',
                    data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.015)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Profit',
                        type: 'bar',
                        barWidth: 26,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    textStyle: {
                                        fontSize: 12
                                    }
                                }
                            }
                        },
                        data: [200, 170, 240, 244, 200, 220, 210]
                    },
                    {
                        name: 'Income',
                        type: 'bar',
                        stack: 'Total',
                        barWidth: 5,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'right',
                                    textStyle: {
                                        fontSize: 12
                                    }
                                }
                            }
                        },
                        data: [320, 302, 341, 374, 390, 450, 420]
                    },
                    {
                        name: 'Expenses',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'left',
                                    textStyle: {
                                        fontSize: 12
                                    }
                                }
                            }
                        },
                        data: [-120, -132, -101, -134, -190, -230, -210]
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // On sidebar width change
        $('.sidebar-control').on('click', function() {
            daily_statistics.resize();
            weekly_statistics.resize();
        })

        //  On window resizw
        var resizeCharts;
        window.onresize = function () {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                daily_statistics.resize();
                weekly_statistics.resize();
            }, 200);
        };
    };

    // Schedule
    var _componentFullCalendar = function() {
        if (!$().fullCalendar) {
            console.warn('Warning - fullcalendar.min.js is not loaded.');
            return;
        }

        // Add events
        var eventsColors = [
            {
                title: 'Day off',
                start: '2014-11-01',
                color: '#DB7272'
            },
            {
                title: 'University',
                start: '2014-11-07',
                end: '2014-11-10',
                color: '#42A5F5'
            },
            {
                id: 999,
                title: 'Shopping',
                start: '2014-11-09T13:00:00',
                color: '#8D6E63'
            },
            {
                id: 999,
                title: 'Shopping',
                start: '2014-11-15T16:00:00',
                color: '#00BCD4'
            },
            {
                title: 'Conference',
                start: '2014-11-11',
                end: '2014-11-13',
                color: '#26A69A'
            },
            {
                title: 'Meeting',
                start: '2014-11-14T08:30:00',
                end: '2014-11-14T12:30:00',
                color: '#7986CB'
            },
            {
                title: 'Meeting',
                start: '2014-11-11T09:30:00',
                color: '#78909C'
            },
            {
                title: 'Happy Hour',
                start: '2014-11-12T14:30:00',
                color: '#26A69A'
            },
            {
                title: 'Dinner',
                start: '2014-11-13T19:00:00',
                color: '#FF7043'
            },
            {
                title: 'Birthday Party',
                start: '2014-11-13T03:00:00',
                color: '#4CAF50'
            }
        ];

        // Container
        var $element = $('.my-schedule');

        // Initialize with options
        $element.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultView: 'agendaWeek',
            defaultDate: '2014-11-15',
            editable: true,
            events: eventsColors,
            isRTL: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
        });

        // Render if inside hidden element
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $element.fullCalendar('render');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _chartsStatistics();
            _componentFullCalendar();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Timelines.init();
});
