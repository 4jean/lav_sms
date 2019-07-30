/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Candlestick and other charts
 *
 *  Demo JS code for echarts_candlesticks_others.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsCandlesticksOthers = function() {


    //
    // Setup module components
    //

    // Candlestick and other charts
    var _candlesticksOthersExamples = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var radar_basic_element = document.getElementById('radar_basic');
        var radar_filled_element = document.getElementById('radar_filled');

        var gauge_basic_element = document.getElementById('gauge_basic');
        var gauge_custom_element = document.getElementById('gauge_custom');

        var candlestick_basic_element = document.getElementById('candlestick_basic');
        var candlestick_line_element = document.getElementById('candlestick_line');
        var candlestick_scatter_element = document.getElementById('candlestick_scatter');


        //
        // Charts configuration
        //

        // Basic radar chart
        if (radar_basic_element) {

            // Initialize chart
            var radar_basic = echarts.init(radar_basic_element);


            //
            // Chart config
            //

            // Options
            radar_basic.setOption({

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
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 0,
                    left: 0,
                    data: ['Allocated Budget','Actual Spending'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Setup polar coordinates
                radar: [{
                    radius: '84%',
                    center:  ['50%', '50%'],
                    name: {
                        color: '#777'
                    },
                    indicator: [
                        {text: 'Sales', max: 6000},
                        {text: 'Administration', max: 16000},
                        {text: 'Information Techology', max: 30000},
                        {text: 'Customer Support', max: 38000},
                        {text: 'Development', max: 52000},
                        {text: 'Marketing', max: 25000}
                    ]
                }],

                // Add series
                series: [{
                    name: 'Budget vs spending',
                    type: 'radar',
                    symbolSize: 7,
                    itemStyle: {
                        normal: {
                            borderWidth: 2
                        }
                    },
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: 'Actual Spending'
                        }
                    ]
                }]
            });
        }

        // Filled radar
        if (radar_filled_element) {

            // Initialize chart
            var radar_filled = echarts.init(radar_filled_element);


            //
            // Chart config
            //

            // Options
            radar_filled.setOption({

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
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 0,
                    left: 0,
                    data: ['Allocated Budget','Actual Spending'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Setup polar coordinates
                radar: [{
                    radius: '84%',
                    center:  ['50%', '50%'],
                    name: {
                        color: '#777'
                    },
                    indicator: [
                        {text: 'Sales', max: 100},
                        {text: 'Administration', max: 100},
                        {text: 'Information Techology', max: 100},
                        {text: 'Customer Support', max: 100},
                        {text: 'Development', max: 100},
                        {text: 'Marketing', max: 100}
                    ],
                }],

                // Add series
                series: [{
                    name: 'Budget vs spending',
                    type: 'radar',
                    symbolSize: 7,
                    itemStyle: {
                        normal: {
                            borderWidth: 1
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    },
                    data: [
                        {
                            value: [97, 68, 88, 94, 90, 86],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [97, 32, 46, 95, 88, 92],
                            name: 'Actual Spending'
                        }
                    ]
                }]
            });
        }


        // Basic gauge
        if (gauge_basic_element) {

            // Initialize chart
            var gauge_basic = echarts.init(gauge_basic_element);


            //
            // Chart config
            //

            // Options
            var gauge_basic_options = {

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Server resources usage',
                    subtext: 'Random demo data',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500,
                        color: '#008acd'
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

                // Add series
                series: [
                    {
                        name: 'Memory usage',
                        type: 'gauge',
                        center: ['50%', '62%'],
                        radius: '90%',
                        detail: {formatter:'{value}%'},
                        axisLine: {
                            lineStyle: {
                                color: [[0.2, '#2ec7c9'], [0.8, '#5ab1ef'], [1, '#d87a80']], 
                                width: 15
                            }
                        },
                        axisTick: {
                            splitNumber: 10,
                            length: 20,
                            lineStyle: {
                                color: 'auto'
                            }
                        },
                        splitLine: {
                            length: 22,
                            lineStyle: {
                                color: 'auto'
                            }
                        },
                        title: {
                            offsetCenter: [0, '60%'],
                            textStyle: {
                                fontSize: 13
                            }
                        },
                        detail: {
                            offsetCenter: [0, '45%'],
                            formatter: '{value}%',
                            textStyle: {
                                fontSize: 27,
                                fontWeight: 500
                            }
                        },
                        pointer: {
                            width: 5
                        },
                        data: [{value: 50, name: 'Memory usage'}]
                    }
                ]
            };

            gauge_basic.setOption(gauge_basic_options);

            // Add random data
            clearInterval(timeTicket);
            var timeTicket = setInterval(function () {
                gauge_basic_options.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                gauge_basic.setOption(gauge_basic_options, true);
            }, 2000);
        }

        // Custom gauge style
        if (gauge_custom_element) {

            // Initialize chart
            var gauge_custom = echarts.init(gauge_custom_element);


            //
            // Chart config
            //

            // Options
            var gauge_custom_options = {

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Add title
                title: {
                    text: 'Server resources usage',
                    subtext: 'Random demo data',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500,
                        color: '#008acd'
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
                    formatter: '{a} <br/>{b} : {c}%'
                },

                // Add series
                series: [
                    {
                        name: 'Memory usage',
                        type: 'gauge',
                        center: ['50%', '57.5%'],
                        radius: '80%',
                        startAngle: 150,
                        endAngle: -150,
                        axisLine: {
                            lineStyle: {
                                color: [[0.2, 'lightgreen'], [0.4, 'orange'], [0.8, 'skyblue'], [1, '#ff4500']], 
                                width: 30
                            }
                        },
                        axisTick: {
                            splitNumber: 5,
                            length: 5,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisLabel: {
                            formatter: function(v) {
                                switch (v+''){
                                    case '10': return 'Idle';
                                    case '30': return 'Low';
                                    case '60': return 'Normal';
                                    case '90': return 'High';
                                    default: return '';
                                }
                            }
                        },
                        splitLine: {
                            length: 35,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        pointer: {
                            width: 5
                        },
                        title: {
                            offsetCenter: ['-81%', -20],
                            textStyle: {
                                fontSize: 13
                            }
                        },
                        detail: {
                            offsetCenter: ['-80%', 10],
                            formatter: '{value}%',
                            textStyle: {
                                fontSize: 25,
                                fontWeight: 500
                            }
                        },
                        data: [{value: 50, name: 'Memory usage'}]
                    }
                ]
            };

            gauge_custom.setOption(gauge_custom_options);

            // Add random data
            clearInterval(timeTicket2);
            var timeTicket2 = setInterval(function () {
                gauge_custom_options.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                gauge_custom.setOption(gauge_custom_options, true);
            }, 2000);
        }


        // Candlestick basic
        if (candlestick_basic_element) {

            // Initialize chart
            var candlestick_basic = echarts.init(candlestick_basic_element);


            //
            // Chart config
            //

            // Options
            candlestick_basic.setOption({

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
                    top: 5,
                    bottom: 60,
                    containLabel: true
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
                    formatter: function (params) {
                        var res = params[0].seriesName + ' &nbsp;&nbsp;' + params[0].name;
                        res += '<br/>  Opening: ' + params[0].value[0] + ' &nbsp;&nbsp; Highest: ' + params[0].value[3];
                        res += '<br/>  Closing: ' + params[0].value[1] + ' &nbsp;&nbsp; Lowest: ' + params[0].value[2];
                        return res;
                    }
                },

                // Enable data zoom
                dataZoom: [
                    {
                        type: 'inside',
                        start: 30,
                        end: 70
                    },
                    {
                        show: true,
                        type: 'slider',
                        realtime: true,
                        start: 30,
                        end: 70,
                        height: 40,
                        bottom: 0,
                        borderColor: '#ccc',
                        fillerColor: 'rgba(0,0,0,0.05)',
                        handleStyle: {
                            color: '#585f63'
                        }
                    }
                ],

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: [
                        "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                        "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
                        "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
                        "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
                        "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
                        "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
                        "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
                        "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
                        "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
                        "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
                        "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
                        "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
                        "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
                        "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
                        "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
                        "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
                        "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
                        "2013/6/6", "2013/6/7", "2013/6/13"
                    ],
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
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    scale: true,
                    boundaryGap: [0.01, 0.01],
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
                series: [{
                    name: 'Composite index',
                    type: 'candlestick',
                    data: [
                        [2320.26,2302.6,2287.3,2362.94],
                        [2300,2291.3,2288.26,2308.38],
                        [2295.35,2346.5,2295.35,2346.92],
                        [2347.22,2358.98,2337.35,2363.8],
                        [2360.75,2382.48,2347.89,2383.76],
                        [2383.43,2385.42,2371.23,2391.82],
                        [2377.41,2419.02,2369.57,2421.15],
                        [2425.92,2428.15,2417.58,2440.38],
                        [2411,2433.13,2403.3,2437.42],
                        [2432.68,2434.48,2427.7,2441.73],
                        [2430.69,2418.53,2394.22,2433.89],
                        [2416.62,2432.4,2414.4,2443.03],
                        [2441.91,2421.56,2415.43,2444.8],
                        [2420.26,2382.91,2373.53,2427.07],
                        [2383.49,2397.18,2370.61,2397.94],
                        [2378.82,2325.95,2309.17,2378.82],
                        [2322.94,2314.16,2308.76,2330.88],
                        [2320.62,2325.82,2315.01,2338.78],
                        [2313.74,2293.34,2289.89,2340.71],
                        [2297.77,2313.22,2292.03,2324.63],
                        [2322.32,2365.59,2308.92,2366.16],
                        [2364.54,2359.51,2330.86,2369.65],
                        [2332.08,2273.4,2259.25,2333.54],
                        [2274.81,2326.31,2270.1,2328.14],
                        [2333.61,2347.18,2321.6,2351.44],
                        [2340.44,2324.29,2304.27,2352.02],
                        [2326.42,2318.61,2314.59,2333.67],
                        [2314.68,2310.59,2296.58,2320.96],
                        [2309.16,2286.6,2264.83,2333.29],
                        [2282.17,2263.97,2253.25,2286.33],
                        [2255.77,2270.28,2253.31,2276.22],
                        [2269.31,2278.4,2250,2312.08],
                        [2267.29,2240.02,2239.21,2276.05],
                        [2244.26,2257.43,2232.02,2261.31],
                        [2257.74,2317.37,2257.42,2317.86],
                        [2318.21,2324.24,2311.6,2330.81],
                        [2321.4,2328.28,2314.97,2332],
                        [2334.74,2326.72,2319.91,2344.89],
                        [2318.58,2297.67,2281.12,2319.99],
                        [2299.38,2301.26,2289,2323.48],
                        [2273.55,2236.3,2232.91,2273.55],
                        [2238.49,2236.62,2228.81,2246.87],
                        [2229.46,2234.4,2227.31,2243.95],
                        [2234.9,2227.74,2220.44,2253.42],
                        [2232.69,2225.29,2217.25,2241.34],
                        [2196.24,2211.59,2180.67,2212.59],
                        [2215.47,2225.77,2215.47,2234.73],
                        [2224.93,2226.13,2212.56,2233.04],
                        [2236.98,2219.55,2217.26,2242.48],
                        [2218.09,2206.78,2204.44,2226.26],
                        [2199.91,2181.94,2177.39,2204.99],
                        [2169.63,2194.85,2165.78,2196.43],
                        [2195.03,2193.8,2178.47,2197.51],
                        [2181.82,2197.6,2175.44,2206.03],
                        [2201.12,2244.64,2200.58,2250.11],
                        [2236.4,2242.17,2232.26,2245.12],
                        [2242.62,2184.54,2182.81,2242.62],
                        [2187.35,2218.32,2184.11,2226.12],
                        [2213.19,2199.31,2191.85,2224.63],
                        [2203.89,2177.91,2173.86,2210.58],
                        [2170.78,2174.12,2161.14,2179.65],
                        [2179.05,2205.5,2179.05,2222.81],
                        [2212.5,2231.17,2212.5,2236.07],
                        [2227.86,2235.57,2219.44,2240.26],
                        [2242.39,2246.3,2235.42,2255.21],
                        [2246.96,2232.97,2221.38,2247.86],
                        [2228.82,2246.83,2225.81,2247.67],
                        [2247.68,2241.92,2231.36,2250.85],
                        [2238.9,2217.01,2205.87,2239.93],
                        [2217.09,2224.8,2213.58,2225.19],
                        [2221.34,2251.81,2210.77,2252.87],
                        [2249.81,2282.87,2248.41,2288.09],
                        [2286.33,2299.99,2281.9,2309.39],
                        [2297.11,2305.11,2290.12,2305.3],
                        [2303.75,2302.4,2292.43,2314.18],
                        [2293.81,2275.67,2274.1,2304.95],
                        [2281.45,2288.53,2270.25,2292.59],
                        [2286.66,2293.08,2283.94,2301.7],
                        [2293.4,2321.32,2281.47,2322.1],
                        [2323.54,2324.02,2321.17,2334.33],
                        [2316.25,2317.75,2310.49,2325.72],
                        [2320.74,2300.59,2299.37,2325.53],
                        [2300.21,2299.25,2294.11,2313.43],
                        [2297.1,2272.42,2264.76,2297.1],
                        [2270.71,2270.93,2260.87,2276.86],
                        [2264.43,2242.11,2240.07,2266.69],
                        [2242.26,2210.9,2205.07,2250.63],
                        [2190.1,2148.35,2126.22,2190.1]
                    ]
                }]
            });
        }

        // Candlestick with line
        if (candlestick_line_element) {

            // Initialize chart
            var candlestick_line = echarts.init(candlestick_line_element);


            //
            // Chart config
            //

            // Options
            candlestick_line.setOption({

                // Define colors
                color: '#66BB6A',

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
                    bottom: 60,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Composite index','Turnover (million)'],
                    itemHeight: 8,
                    itemGap: 20
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
                    formatter: function (params) {
                        var res = params[0].name;
                        for (var i = params.length - 1; i >= 0; i--) {
                            if (params[i].value instanceof Array) {
                                res += '<br/>' + params[i].seriesName;
                                res += '<br/> Opening: ' + params[i].value[0] + ' &nbsp;&nbsp; Highest: ' + params[i].value[3];
                                res += '<br/> CLosing: ' + params[i].value[1] + ' &nbsp;&nbsp; Lowest: ' + params[i].value[2];
                            }
                            else {
                                res += '<br/>' + params[i].seriesName;
                                res += ': ' + params[i].value;
                            }
                        }
                        return res;
                    }
                },

                // Enable data zoom
                dataZoom: [
                    {
                        type: 'inside',
                        start: 30,
                        end: 70
                    },
                    {
                        show: true,
                        type: 'slider',
                        realtime: true,
                        start: 30,
                        end: 70,
                        height: 40,
                        bottom: 0,
                        borderColor: '#ccc',
                        fillerColor: 'rgba(0,0,0,0.05)',
                        handleStyle: {
                            color: '#585f63'
                        }
                    }
                ],

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: [
                        "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                        "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
                        "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
                        "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
                        "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
                        "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
                        "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
                        "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
                        "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
                        "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
                        "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
                        "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
                        "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
                        "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
                        "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
                        "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
                        "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
                        "2013/6/6", "2013/6/7", "2013/6/13"
                    ],
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
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.015)']
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        splitNumber: 5,
                        boundaryGap: [0.01, 0.01],
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
                        }
                    },
                    {
                        type: 'value',
                        scale: true,
                        splitNumber: 5,
                        boundaryGap: [0.05, 0.05],
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
                                color: '#f5f5f5'
                            }
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Turnover (million)',
                        type: 'line',
                        yAxisIndex: 1,
                        smooth: true,
                        symbol: 'none',
                        data: [
                            13560434, 8026738.5, 11691637, 12491697, 12485603, 
                            11620504, 12555496, 15253370, 12709611, 10458354, 
                            10933507, 9896523, 10365702, 10633095, 9722230, 
                            12662783, 8757982, 7764234, 10591719, 8826293, 
                            11591827, 11153111, 14304651, 11672120, 12536480, 
                            12608589, 8843860, 7391994.5, 10063709, 7768895.5, 
                            6921859, 10157810, 8148617.5, 7551207, 11397426, 
                            10478607, 8595132, 8541862, 9181132, 8570842, 
                            10759351, 7335819, 6699753.5, 7759666.5, 6880135.5, 
                            7366616.5, 7313504, 7109021.5, 6213270, 5619688, 
                            5816217.5, 6695584.5, 5998655.5, 6188812.5, 9538301,
                            8224500, 8221751.5, 7897721, 8448324, 6525151, 
                            5987761, 7831570, 8162560.5, 7904092, 8139084.5, 
                            9116529, 8128014, 7919148, 7566047, 6665826.5, 
                            10225527, 11124881, 12884353, 11302521, 11529046, 
                            11105205, 9202153, 9992016, 12035250, 11431155, 
                            10354677, 10070399, 9164861, 9237718, 7114268, 
                            7526158.5, 8105835, 7971452.5
                        ]
                    },
                    {
                        name: 'Composite index',
                        type: 'candlestick',
                        data: [
                            [2320.26,2302.6,2287.3,2362.94],
                            [2300,2291.3,2288.26,2308.38],
                            [2295.35,2346.5,2295.35,2346.92],
                            [2347.22,2358.98,2337.35,2363.8],
                            [2360.75,2382.48,2347.89,2383.76],
                            [2383.43,2385.42,2371.23,2391.82],
                            [2377.41,2419.02,2369.57,2421.15],
                            [2425.92,2428.15,2417.58,2440.38],
                            [2411,2433.13,2403.3,2437.42],
                            [2432.68,2434.48,2427.7,2441.73],
                            [2430.69,2418.53,2394.22,2433.89],
                            [2416.62,2432.4,2414.4,2443.03],
                            [2441.91,2421.56,2415.43,2444.8],
                            [2420.26,2382.91,2373.53,2427.07],
                            [2383.49,2397.18,2370.61,2397.94],
                            [2378.82,2325.95,2309.17,2378.82],
                            [2322.94,2314.16,2308.76,2330.88],
                            [2320.62,2325.82,2315.01,2338.78],
                            [2313.74,2293.34,2289.89,2340.71],
                            [2297.77,2313.22,2292.03,2324.63],
                            [2322.32,2365.59,2308.92,2366.16],
                            [2364.54,2359.51,2330.86,2369.65],
                            [2332.08,2273.4,2259.25,2333.54],
                            [2274.81,2326.31,2270.1,2328.14],
                            [2333.61,2347.18,2321.6,2351.44],
                            [2340.44,2324.29,2304.27,2352.02],
                            [2326.42,2318.61,2314.59,2333.67],
                            [2314.68,2310.59,2296.58,2320.96],
                            [2309.16,2286.6,2264.83,2333.29],
                            [2282.17,2263.97,2253.25,2286.33],
                            [2255.77,2270.28,2253.31,2276.22],
                            [2269.31,2278.4,2250,2312.08],
                            [2267.29,2240.02,2239.21,2276.05],
                            [2244.26,2257.43,2232.02,2261.31],
                            [2257.74,2317.37,2257.42,2317.86],
                            [2318.21,2324.24,2311.6,2330.81],
                            [2321.4,2328.28,2314.97,2332],
                            [2334.74,2326.72,2319.91,2344.89],
                            [2318.58,2297.67,2281.12,2319.99],
                            [2299.38,2301.26,2289,2323.48],
                            [2273.55,2236.3,2232.91,2273.55],
                            [2238.49,2236.62,2228.81,2246.87],
                            [2229.46,2234.4,2227.31,2243.95],
                            [2234.9,2227.74,2220.44,2253.42],
                            [2232.69,2225.29,2217.25,2241.34],
                            [2196.24,2211.59,2180.67,2212.59],
                            [2215.47,2225.77,2215.47,2234.73],
                            [2224.93,2226.13,2212.56,2233.04],
                            [2236.98,2219.55,2217.26,2242.48],
                            [2218.09,2206.78,2204.44,2226.26],
                            [2199.91,2181.94,2177.39,2204.99],
                            [2169.63,2194.85,2165.78,2196.43],
                            [2195.03,2193.8,2178.47,2197.51],
                            [2181.82,2197.6,2175.44,2206.03],
                            [2201.12,2244.64,2200.58,2250.11],
                            [2236.4,2242.17,2232.26,2245.12],
                            [2242.62,2184.54,2182.81,2242.62],
                            [2187.35,2218.32,2184.11,2226.12],
                            [2213.19,2199.31,2191.85,2224.63],
                            [2203.89,2177.91,2173.86,2210.58],
                            [2170.78,2174.12,2161.14,2179.65],
                            [2179.05,2205.5,2179.05,2222.81],
                            [2212.5,2231.17,2212.5,2236.07],
                            [2227.86,2235.57,2219.44,2240.26],
                            [2242.39,2246.3,2235.42,2255.21],
                            [2246.96,2232.97,2221.38,2247.86],
                            [2228.82,2246.83,2225.81,2247.67],
                            [2247.68,2241.92,2231.36,2250.85],
                            [2238.9,2217.01,2205.87,2239.93],
                            [2217.09,2224.8,2213.58,2225.19],
                            [2221.34,2251.81,2210.77,2252.87],
                            [2249.81,2282.87,2248.41,2288.09],
                            [2286.33,2299.99,2281.9,2309.39],
                            [2297.11,2305.11,2290.12,2305.3],
                            [2303.75,2302.4,2292.43,2314.18],
                            [2293.81,2275.67,2274.1,2304.95],
                            [2281.45,2288.53,2270.25,2292.59],
                            [2286.66,2293.08,2283.94,2301.7],
                            [2293.4,2321.32,2281.47,2322.1],
                            [2323.54,2324.02,2321.17,2334.33],
                            [2316.25,2317.75,2310.49,2325.72],
                            [2320.74,2300.59,2299.37,2325.53],
                            [2300.21,2299.25,2294.11,2313.43],
                            [2297.1,2272.42,2264.76,2297.1],
                            [2270.71,2270.93,2260.87,2276.86],
                            [2264.43,2242.11,2240.07,2266.69],
                            [2242.26,2210.9,2205.07,2250.63],
                            [2190.1,2148.35,2126.22,2190.1]
                        ]
                    }
                ]
            });
        }

        // Candlestick with scatter
        if (candlestick_scatter_element) {

            // Initialize chart
            var candlestick_scatter = echarts.init(candlestick_scatter_element);


            //
            // Chart config
            //

            // Options
            candlestick_scatter.setOption({

                // Define colors
                color: ['#b6a2de','#5ab1ef'],

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
                    bottom: 60,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Composite index', 'Random data'],
                    itemHeight: 8,
                    itemGap: 20
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    padding: [10, 15],
                    textStyle: {
                        fontSize: 13,
                        fontFamily: 'Roboto, sans-serif'
                    }
                },

                // Enable data zoom
                dataZoom: [
                    {
                        type: 'inside',
                        start: 30,
                        end: 70
                    },
                    {
                        show: true,
                        type: 'slider',
                        realtime: true,
                        start: 30,
                        end: 70,
                        height: 40,
                        bottom: 0,
                        borderColor: '#ccc',
                        fillerColor: 'rgba(0,0,0,0.05)',
                        handleStyle: {
                            color: '#585f63'
                        }
                    }
                ],

                // Horizontal axis
                xAxis: [
                    {
                        type: 'category',
                        data: [
                            "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                            "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
                            "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
                            "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
                            "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
                            "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
                            "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
                            "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
                            "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
                            "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
                            "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
                            "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
                            "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
                            "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
                            "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
                            "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
                            "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
                            "2013/6/6", "2013/6/7", "2013/6/13"
                        ],
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
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.015)']
                            }
                        }
                    },
                    {
                        type: 'value',
                        max: 100,
                        scale: true,
                        axisLabel: {
                            color: '#333'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        }
                    }
                ],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        splitNumber: 5,
                        boundaryGap: [0.05, 0.05],
                        axisLabel: {
                            color: '#333'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#eee'
                            }
                        }
                    },
                    {
                        type: 'value',
                        splitNumber: 5,
                        scale: true,
                        boundaryGap: [0.05, 0.05],
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
                                color: '#f5f5f5'
                            }
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Composite index',
                        type: 'candlestick',
                        data: [
                            [2320.26,2302.6,2287.3,2362.94],
                            [2300,2291.3,2288.26,2308.38],
                            [2295.35,2346.5,2295.35,2346.92],
                            [2347.22,2358.98,2337.35,2363.8],
                            [2360.75,2382.48,2347.89,2383.76],
                            [2383.43,2385.42,2371.23,2391.82],
                            [2377.41,2419.02,2369.57,2421.15],
                            [2425.92,2428.15,2417.58,2440.38],
                            [2411,2433.13,2403.3,2437.42],
                            [2432.68,2434.48,2427.7,2441.73],
                            [2430.69,2418.53,2394.22,2433.89],
                            [2416.62,2432.4,2414.4,2443.03],
                            [2441.91,2421.56,2415.43,2444.8],
                            [2420.26,2382.91,2373.53,2427.07],
                            [2383.49,2397.18,2370.61,2397.94],
                            [2378.82,2325.95,2309.17,2378.82],
                            [2322.94,2314.16,2308.76,2330.88],
                            [2320.62,2325.82,2315.01,2338.78],
                            [2313.74,2293.34,2289.89,2340.71],
                            [2297.77,2313.22,2292.03,2324.63],
                            [2322.32,2365.59,2308.92,2366.16],
                            [2364.54,2359.51,2330.86,2369.65],
                            [2332.08,2273.4,2259.25,2333.54],
                            [2274.81,2326.31,2270.1,2328.14],
                            [2333.61,2347.18,2321.6,2351.44],
                            [2340.44,2324.29,2304.27,2352.02],
                            [2326.42,2318.61,2314.59,2333.67],
                            [2314.68,2310.59,2296.58,2320.96],
                            [2309.16,2286.6,2264.83,2333.29],
                            [2282.17,2263.97,2253.25,2286.33],
                            [2255.77,2270.28,2253.31,2276.22],
                            [2269.31,2278.4,2250,2312.08],
                            [2267.29,2240.02,2239.21,2276.05],
                            [2244.26,2257.43,2232.02,2261.31],
                            [2257.74,2317.37,2257.42,2317.86],
                            [2318.21,2324.24,2311.6,2330.81],
                            [2321.4,2328.28,2314.97,2332],
                            [2334.74,2326.72,2319.91,2344.89],
                            [2318.58,2297.67,2281.12,2319.99],
                            [2299.38,2301.26,2289,2323.48],
                            [2273.55,2236.3,2232.91,2273.55],
                            [2238.49,2236.62,2228.81,2246.87],
                            [2229.46,2234.4,2227.31,2243.95],
                            [2234.9,2227.74,2220.44,2253.42],
                            [2232.69,2225.29,2217.25,2241.34],
                            [2196.24,2211.59,2180.67,2212.59],
                            [2215.47,2225.77,2215.47,2234.73],
                            [2224.93,2226.13,2212.56,2233.04],
                            [2236.98,2219.55,2217.26,2242.48],
                            [2218.09,2206.78,2204.44,2226.26],
                            [2199.91,2181.94,2177.39,2204.99],
                            [2169.63,2194.85,2165.78,2196.43],
                            [2195.03,2193.8,2178.47,2197.51],
                            [2181.82,2197.6,2175.44,2206.03],
                            [2201.12,2244.64,2200.58,2250.11],
                            [2236.4,2242.17,2232.26,2245.12],
                            [2242.62,2184.54,2182.81,2242.62],
                            [2187.35,2218.32,2184.11,2226.12],
                            [2213.19,2199.31,2191.85,2224.63],
                            [2203.89,2177.91,2173.86,2210.58],
                            [2170.78,2174.12,2161.14,2179.65],
                            [2179.05,2205.5,2179.05,2222.81],
                            [2212.5,2231.17,2212.5,2236.07],
                            [2227.86,2235.57,2219.44,2240.26],
                            [2242.39,2246.3,2235.42,2255.21],
                            [2246.96,2232.97,2221.38,2247.86],
                            [2228.82,2246.83,2225.81,2247.67],
                            [2247.68,2241.92,2231.36,2250.85],
                            [2238.9,2217.01,2205.87,2239.93],
                            [2217.09,2224.8,2213.58,2225.19],
                            [2221.34,2251.81,2210.77,2252.87],
                            [2249.81,2282.87,2248.41,2288.09],
                            [2286.33,2299.99,2281.9,2309.39],
                            [2297.11,2305.11,2290.12,2305.3],
                            [2303.75,2302.4,2292.43,2314.18],
                            [2293.81,2275.67,2274.1,2304.95],
                            [2281.45,2288.53,2270.25,2292.59],
                            [2286.66,2293.08,2283.94,2301.7],
                            [2293.4,2321.32,2281.47,2322.1],
                            [2323.54,2324.02,2321.17,2334.33],
                            [2316.25,2317.75,2310.49,2325.72],
                            [2320.74,2300.59,2299.37,2325.53],
                            [2300.21,2299.25,2294.11,2313.43],
                            [2297.1,2272.42,2264.76,2297.1],
                            [2270.71,2270.93,2260.87,2276.86],
                            [2264.43,2242.11,2240.07,2266.69],
                            [2242.26,2210.9,2205.07,2250.63],
                            [2190.1,2148.35,2126.22,2190.1]
                        ]
                    },
                    {
                        name: 'Random data',
                        type: 'scatter',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                opacity: 0.35
                            }
                        },
                        symbolSize: function (value){
                            return Math.round(value[2] / 2);
                        },
                        data: (function () {
                            var d = [];
                            var len = 100;
                            while (len--) {
                                d.push([
                                    (Math.random()*100).toFixed(2) - 0,
                                    (Math.random()*100).toFixed(2) - 0,
                                    (Math.random()*100).toFixed(2) - 0
                                ]);
                            }
                            return d;
                        })()
                    }
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            radar_basic_element && radar_basic.resize();
            radar_filled_element && radar_filled.resize();
            gauge_basic_element && gauge_basic.resize();
            gauge_custom_element && gauge_custom.resize();
            candlestick_basic_element && candlestick_basic.resize();
            candlestick_line_element && candlestick_line.resize();
            candlestick_scatter_element && candlestick_scatter.resize();
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
            _candlesticksOthersExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsCandlesticksOthers.init();
});
