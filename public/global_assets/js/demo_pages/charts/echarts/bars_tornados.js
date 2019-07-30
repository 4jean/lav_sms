/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Bar and Tornado charts
 *
 *  Demo JS code for echarts_bars_tornados.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsBarsTornados = function() {


    //
    // Setup module components
    //

    // Bar and tornado charts
    var _barsTornadosExamples = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var bars_basic_element = document.getElementById('bars_basic');
        var bars_stacked_element = document.getElementById('bars_stacked');
        var bars_clustered_element = document.getElementById('bars_stacked_clustered');
        var bars_float_element = document.getElementById('bars_float');
        var bars_mix_element = document.getElementById('bars_mix');
        var bars_tornado_negative_element = document.getElementById('bars_tornado_negative');
        var bars_tornado_staggered_element = document.getElementById('bars_tornado_staggered');


        //
        // Charts configuration
        //

        // Basic bar chart
        if (bars_basic_element) {

            // Initialize chart
            var bars_basic = echarts.init(bars_basic_element);


            //
            // Chart config
            //

            // Options
            bars_basic.setOption({

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
                    right: 30,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Year 2013', 'Year 2014'],
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
                    boundaryGap: [0, 0.01],
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
                    data: ['Germany','France','Spain','Netherlands','Belgium'],
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
                        name: 'Year 2013',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#EF5350'
                            }
                        },
                        data: [38203, 73489, 129034, 204970, 331744]
                    },
                    {
                        name: 'Year 2014',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#66BB6A'
                            }
                        },
                        data: [39325, 83438, 131000, 221594, 334141]
                    }
                ]
            });
        }

        // Stacked bar chart
        if (bars_stacked_element) {

            // Initialize chart
            var bars_stacked = echarts.init(bars_stacked_element);


            //
            // Chart config
            //

            // Options
            bars_stacked.setOption({

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
                    right: 30,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Internet Explorer','Opera','Safari','Firefox','Chrome'],
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
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
                        name: 'Internet Explorer',
                        type: 'bar',
                        stack: 'Total',
                        barWidth: 36,
                        itemStyle: {
                            normal: {
                                color: '#42A5F5',
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    padding: [0, 10],
                                    fontSize: 12
                                }
                            }
                        },
                        data:[320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Opera',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#ef5350',
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    padding: [0, 10],
                                    fontSize: 12
                                }
                            }
                        },
                        data:[120, 132, 101, 134, 120, 230, 210]
                    },
                    {
                        name: 'Safari',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#66bb6a',
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    padding: [0, 10],
                                    fontSize: 12
                                }
                            }
                        },
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Firefox',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#ff7043',
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    padding: [0, 10],
                                    fontSize: 12
                                }
                            }
                        },
                        data:[150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Chrome',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#26a69a',
                                label: {
                                    show: true,
                                    position: 'insideRight',
                                    padding: [0, 10],
                                    fontSize: 12
                                }
                            }
                        },
                        data:[820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        }

        // Stacked clustered chart
        if (bars_clustered_element) {

            // Initialize chart
            var bars_clustered = echarts.init(bars_clustered_element);


            //
            // Chart config
            //

            // Options
            bars_clustered.setOption({

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
                    right: 5,
                    top: 55,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: [
                        'Version 1.7 - 2k data','Version 1.7 - 2w data','Version 1.7 - 20w data','',
                        'Version 2.0 - 2k data','Version 2.0 - 2w data','Version 2.0 - 20w data'
                    ],
                    itemHeight: 2,
                    itemGap: 8,
                    textStyle: {
                        padding: [0, 10]
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
                        color: '#333',
                        formatter: '{value} ms'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#eee',
                            type: 'dashed'
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'category',
                        data: ['Line','Bar','Scatter','Pies'],
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
                                color: '#eee'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.015)']
                            }
                        }
                    },
                    {
                        type: 'category',
                        axisLine: {show:false},
                        axisTick: {show:false},
                        axisLabel: {show:false},
                        splitArea: {show:false},
                        splitLine: {show:false},
                        data: ['Line','Bar','Scatter','Pies']
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Version 2.0 - 2k data',
                        type: 'bar',
                        z: 2,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#F44336',
                                label: {
                                    show: true,
                                    padding: 5,
                                    position: 'right',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 11
                                    }
                                }
                            }
                        },
                        data: [247, 187, 95, 175]
                    },
                    {
                        name: 'Version 2.0 - 2w data',
                        type: 'bar',
                        z: 2,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#4CAF50',
                                label: {
                                    show: true,
                                    padding: 5,
                                    position: 'right',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 11
                                    }
                                }
                            }
                        },
                        data: [488, 415, 405, 340]
                    },
                    {
                        name: 'Version 2.0 - 20w data',
                        type: 'bar',
                        z: 2,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#2196F3',
                                label: {
                                    show: true,
                                    padding: 5,
                                    position: 'right',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 11
                                    }
                                }
                            }
                        },
                        data: [906, 911, 908, 778]
                    },
                    {
                        name: 'Version 1.7 - 2k data',
                        type: 'bar',
                        z: 1,
                        itemStyle: {
                            normal: {
                                color: '#E57373',
                                label: {
                                    show: true,
                                    padding: 5,
                                    position: 'right',
                                    textStyle: {
                                        fontSize: 11
                                    }
                                }
                            }
                        },
                        data: [680, 819, 564, 724]
                    },
                    {
                        name: 'Version 1.7 - 2w data',
                        type: 'bar',
                        z: 1,
                        itemStyle: {
                            normal: {
                                color: '#81C784',
                                label: {
                                    show: true,
                                    padding: 5,
                                    position: 'right',
                                    textStyle: {
                                        fontSize: 11
                                    }
                                }
                            }
                        },
                        data: [1212, 2035, 1620, 955]
                    },
                    {
                        name: 'Version 1.7 - 20w data',
                        type: 'bar',
                        z: 1,
                        itemStyle: {
                            normal: {
                                color: '#64B5F6',
                                label: {
                                    show: true,
                                    padding: 5,
                                    position: 'right',
                                    textStyle: {
                                        fontSize: 11
                                    }
                                }
                            }
                        },
                        data: [2200, 3000, 2500, 3000]
                    }
                ]
            });
        }

        // Floating bars
        if (bars_float_element) {

            // Initialize chart
            var bars_float = echarts.init(bars_float_element);


            //
            // Chart config
            //

            // Variables
            var placeHoledStyle = {
                normal: {
                    barBorderColor: 'transparent',
                    color: 'transparent'
                }
            };
            var dataStyle = { 
                normal: {
                    barBorderRadius: 3,
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{c}%',
                        textStyle: {
                            padding: 5
                        }
                    }
                }
            };

            // Options
            bars_float.setOption({

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 5,
                    right: 10,
                    top: 35,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['GML', 'PYP','WTC', 'ZTW'],
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
                    },
                    formatter: '<div class="mb-1">{b}</div>{a0}: {c0}%<br/>{a2}: {c2}%<br/>{a4}: {c4}%<br/>{a6}: {c6}%'
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
                    data: ['Paris', 'Berlin', 'Amsterdam', 'Madrid', 'Munich', 'Budapest'],
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
                            color: '#eee'
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
                        name: 'GML',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: dataStyle,
                        data: [38, 50, 33, 72, 67, 34]
                    },
                    {
                        name: 'GML',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: placeHoledStyle,
                        data: [62, 50, 67, 28, 33, 66]
                    },
                    {
                        name: 'PYP',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: dataStyle,
                        data: [61, 41, 42, 30, 50, 62]
                    },
                    {
                        name: 'PYP',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: placeHoledStyle,
                        data: [39, 59, 58, 70, 50, 38]
                    },
                    {
                        name: 'WTC',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: dataStyle,
                        data: [37, 35, 44, 60, 28, 43]
                    },
                    {
                        name: 'WTC',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: placeHoledStyle,
                        data: [63, 65, 56, 40, 72, 57]
                    },
                    {
                        name: 'ZTW',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: dataStyle,
                        data: [71, 50, 31, 39, 40, 29]
                    },
                    {
                        name: 'ZTW',
                        type: 'bar',
                        stack: 'Total',
                        itemStyle: placeHoledStyle,
                        data: [29, 50, 69, 61, 60, 61]
                    }
                ]
            });
        }

        // Mix bars and line
        if (bars_mix_element) {

            // Initialize chart
            var bars_mix = echarts.init(bars_mix_element);


            //
            // Chart config
            //

            // Options
            bars_mix.setOption({

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
                    right: 30,
                    top: 30,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Customers', 'Returned'],
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
                    data: ['Oct', 'Sep', 'Aug', 'July', 'June', 'May', 'Apr', 'Mar', 'Feb', 'Jan'],
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
                        name: 'Customers',
                        type: 'bar',
                        barCategoryGap: '40%',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#682d19'
                                },
                                position: 'left',
                                show: false,
                                formatter: '{b}'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#6bca6f',
                            }
                        },
                        data: [1900, 1029, 1602, 2004, 1100, 1800, 2800, 1407, 2200, 900]
                    },
                    {
                        name: 'Returned',
                        type: 'line',
                        symbolSize: 7,
                        silent: true,
                        data: [100, 1000, 800, 1070, 900, 300, 1200, 900, 1200, 200],
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

        // Negative stack tornado
        if (bars_tornado_negative_element) {

            // Initialize chart
            var bars_tornado_negative = echarts.init(bars_tornado_negative_element);


            //
            // Chart config
            //

            // Options
            bars_tornado_negative.setOption({

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

        // Tornado with staggered labels
        if (bars_tornado_staggered_element) {

            // Initialize chart
            var bars_tornado_staggered = echarts.init(bars_tornado_staggered_element);


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
            bars_tornado_staggered.setOption({

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 5,
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
                    },
                    formatter: function(params) {
                        return params[0].seriesName + ': ' + params[0].value + ' €';
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'value',
                    position: 'top',
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
                    axisLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
                        name: 'Cost of living',
                        type: 'bar',
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                                color: '#66BB6A',
                                barBorderRadius: 3,
                                label: {
                                    show: true,
                                    position: 'left',
                                    padding: [0, 10],
                                    formatter: '{b}'
                                }
                            }
                        },
                        data: [
                            {value: -680, itemStyle: labelRight},
                            {value: -300, itemStyle: labelRight},
                            690,
                            900,
                            {value: -390, itemStyle: labelRight},
                            600,
                            {value: -120, itemStyle: labelRight},
                            700,
                            {value: -120, itemStyle: labelRight},
                            900,
                            580,
                            {value: -720, itemStyle: labelRight}
                        ]
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            bars_basic_element && bars_basic.resize();
            bars_stacked_element && bars_stacked.resize();
            bars_clustered_element && bars_clustered.resize();
            bars_float_element && bars_float.resize();
            bars_mix_element && bars_mix.resize();
            bars_tornado_negative_element && bars_tornado_negative.resize();
            bars_tornado_staggered_element && bars_tornado_staggered.resize();
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
            _barsTornadosExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsBarsTornados.init();
});
