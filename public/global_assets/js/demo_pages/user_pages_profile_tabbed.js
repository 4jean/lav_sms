/* ------------------------------------------------------------------------------
 *
 *  # User profile - tabbed
 *
 *  Demo JS code for user_pages_profile_tabbed.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var UserProfileTabbed = function() {


    //
    // Setup module components
    //

    // Charts
    var _componentEcharts = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var weekly_statistics_element = document.getElementById('weekly_statistics');
        var balance_statistics_element = document.getElementById('balance_statistics');
        var available_hours_element = document.getElementById('available_hours');

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

        // Balance chart
        if (balance_statistics_element) {

            // Initialize chart
            var balance_statistics = echarts.init(balance_statistics_element);


            //
            // Chart config
            //

            // Common styles
            var labelRight = {
                normal: {
                    color: '#FF7043',
                    label: {
                        position: 'right'
                    }
                }
            };

            // Options
            balance_statistics.setOption({

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
                    top: 30,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Income', 'Outcome'],
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
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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

                // Vertical axis
                yAxis: [{
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

                // Add series
                series: [
                    {
                        name: 'Income',
                        type: 'bar',
                        barCategoryGap: '50%',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#682d19'
                                },
                                position: 'left',
                                show: false,
                                formatter: '{b}',
                                height: 30
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#6bca6f',
                                barBorderRadius: 3
                            }
                        },
                        data: [190, 122, 160, 240, 110, 180, 280]
                    },
                    {
                        name: 'Outcome',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        silent: true,
                        data: [120, 180, 30, 137, 90, 230, 120],
                        itemStyle: {
                            normal: {
                                color: '#2f4553',
                                borderWidth: 2
                            }
                        }
                    }
                ]
            });
        }

        // Basic columns chart
        if (available_hours_element) {

            // Initialize chart
            var available_hours = echarts.init(available_hours_element);


            //
            // Chart config
            //

            // Options
            available_hours.setOption({

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
                    top: 30,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Booked hours', 'Available hours'],
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
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: 'rgba(0,0,0,0.025)'
                        }
                    },
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
                        lineStyle: {
                            color: '#eee'
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
                        name: 'Booked hours',
                        type: 'bar',
                        data: [4, 8, 6, 4, 7, 5, 9],
                        itemStyle: {
                            normal: {
                                color: '#B0BEC5',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        }
                    },
                    {
                        name: 'Available hours',
                        type: 'bar',
                        data: [6, 2, 4, 6, 3, 5, 1],
                        itemStyle: {
                            normal: {
                                color: '#29B6F6',
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        }
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            weekly_statistics_element && weekly_statistics.resize();
            balance_statistics_element && balance_statistics.resize();
            available_hours_element && available_hours.resize();
        };

        // On sidebar width change
        $(document).on('click', '.sidebar-control, .navbar-toggler', function() {
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

        // Resize charts when hidden element becomes visible
        $('.nav-link[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            triggerChartResize();
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-warning'
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
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
            events: eventsColors
        });

        // Render if inside hidden element
        $('.navbar-nav-link[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $element.fullCalendar('render');
            $(window).trigger('resize');
        });
    };

    // Row link
    var _componentRowLink = function() {
        if (!$().rowlink) {
            console.warn('Warning - rowlink.js is not loaded.');
            return;
        }

        // Initialize
        $('tbody.rowlink').rowlink();
    };

    // Inbox table
    var _componentTableInbox = function() {

        // Define variables
        var highlightColorClass = 'alpha-slate';

        // Highlight row when checkbox is checked
        $('.table-inbox').find('tr > td:first-child').find('input[type=checkbox]').on('change', function() {
            if($(this).is(':checked')) {
                $(this).parents('tr').addClass(highlightColorClass);
            }
            else {
                $(this).parents('tr').removeClass(highlightColorClass);
            }
        });

        // Grab first letter and insert to the icon
        $('.table-inbox tr').each(function (i) {

            // Title
            var $title = $(this).find('.letter-icon-title'),
                letter = $title.eq(0).text().charAt(0).toUpperCase();

            // Icon
            var $icon = $(this).find('.letter-icon');
                $icon.eq(0).text(letter);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentEcharts();
            _componentUniform();
            _componentSelect2();
            _componentFullCalendar();
            _componentRowLink();
            _componentTableInbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    UserProfileTabbed.init();
});
