/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Pie and Donut charts
 *
 *  Demo JS code for echarts_pies_donuts.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsPiesDonuts = function() {


    //
    // Setup module components
    //

    // Pie and donut charts
    var _piesDonutsExamples = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var pie_basic_element = document.getElementById('pie_basic');
        var pie_donut_element = document.getElementById('pie_donut');
        var pie_nested_element = document.getElementById('pie_nested');
        var pie_infographic_element = document.getElementById('pie_infographic');
        var pie_rose_element = document.getElementById('pie_rose');
        var pie_rose_labels_element = document.getElementById('pie_rose_labels');
        var pie_levels_element = document.getElementById('pie_levels');
        var pie_timeline_element = document.getElementById('pie_timeline');
        var pie_multiples_element = document.getElementById('pie_multiples');


        //
        // Charts configuration
        //

        // Basic pie chart
        if (pie_basic_element) {

            // Initialize chart
            var pie_basic = echarts.init(pie_basic_element);


            //
            // Chart config
            //

            // Options
            pie_basic.setOption({

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
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
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

                // Add series
                series: [{
                    name: 'Browsers',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '57.5%'],
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#fff'
                        }
                    },
                    data: [
                        {value: 335, name: 'IE'},
                        {value: 310, name: 'Opera'},
                        {value: 234, name: 'Safari'},
                        {value: 135, name: 'Firefox'},
                        {value: 1548, name: 'Chrome'}
                    ]
                }]
            });
        }

        // Basic donut chart
        if (pie_donut_element) {

            // Initialize chart
            var pie_donut = echarts.init(pie_donut_element);


            //
            // Chart config
            //

            // Options
            pie_donut.setOption({

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
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
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

                // Add series
                series: [{
                    name: 'Browsers',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '57.5%'],
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#fff'
                        }
                    },
                    data: [
                        {value: 335, name: 'IE'},
                        {value: 310, name: 'Opera'},
                        {value: 234, name: 'Safari'},
                        {value: 135, name: 'Firefox'},
                        {value: 1548, name: 'Chrome'}
                    ]
                }]
            });
        }

        // Nested
        if (pie_nested_element) {

            // Initialize chart
            var pie_nested = echarts.init(pie_nested_element);


            //
            // Chart config
            //

            // Options
            pie_nested.setOption({

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
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['Italy','Spain','Austria','Germany','Poland','Denmark','Hungary','Portugal','France','Netherlands'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [

                    // Inner
                    {
                        name: 'Countries',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '50%'],
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff',
                                label: {
                                    position: 'inner'
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: [
                            {value: 535, name: 'Italy'},
                            {value: 679, name: 'Spain'},
                            {value: 1548, name: 'Austria'}
                        ]
                    },

                    // Outer
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: ['60%', '85%'],
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff'
                            }
                        },
                        data: [
                            {value: 535, name: 'Italy'},
                            {value: 310, name: 'Germany'},
                            {value: 234, name: 'Poland'},
                            {value: 135, name: 'Denmark'},
                            {value: 948, name: 'Hungary'},
                            {value: 251, name: 'Portugal'},
                            {value: 147, name: 'France'},
                            {value: 202, name: 'Netherlands'}
                        ]
                    }
                ]
            });
        }

        // Infographic style
        if (pie_infographic_element) {

            // Initialize chart
            var pie_infographic = echarts.init(pie_infographic_element);


            //
            // Chart config
            //

            // Common styles
            var dataStyle = {
                normal: {
                    borderWidth: 1,
                    borderColor: '#fff',
                    label: {show: false},
                    labelLine: {show: false}
                }
            };
            var placeHolderStyle = {
                normal: {
                    color: 'transparent',
                    borderWidth: 0
                }
            };

            // Options
            pie_infographic.setOption({

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
                    text: 'Are you happy?',
                    subtext: 'Utrecht, Netherlands',
                    left: 'center',
                    top: '45%',
                    textStyle: {
                        color: 'rgba(30,144,255,0.8)',
                        fontSize: 19,
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
                    formatter: function (params) {
                        if(params.color == "transparent")return;
                        return params.percent + '%' + ' - ' + params.seriesName;
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: '5%',
                    left: (pie_infographic_element.offsetWidth / 2) + 20,
                    data: ['60% Definitely yes','30% Could be better','10% Not at the moment'],
                    itemHeight: 8,
                    itemWidth: 8,
                    itemGap: 15
                },

                // Add series
                series: [
                    {
                        name: 'Definitely yes',
                        type: 'pie',
                        cursor: 'default',
                        clockWise: false,
                        radius: ['75%', '90%'],
                        hoverOffset: 0,
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 60,
                                name: '60% Definitely yes'
                            },
                            {
                                value: 40,
                                name: '',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },

                    {
                        name: 'Could be better',
                        type:'pie',
                        cursor: 'default',
                        clockWise: false,
                        radius: ['60%', '75%'],
                        hoverOffset: 0,
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 30, 
                                name: '30% Could be better'
                            },
                            {
                                value: 70,
                                name: 'invisible',
                                silent: false,
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },

                    {
                        name: 'Not at the moment',
                        type: 'pie',
                        cursor: 'default',
                        clockWise: false,
                        radius: ['45%', '60%'],
                        hoverOffset: 0,
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 10, 
                                name: '10% Not at the moment'
                            },
                            {
                                value: 90,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    }
                ]
            });
        }

        // Rose without labels
        if (pie_rose_element) {

            // Initialize chart
            var pie_rose = echarts.init(pie_rose_element);


            //
            // Chart config
            //

            // Options
            pie_rose.setOption({

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
                    text: 'Employee\'s salary review',
                    subtext: 'Senior front end developer',
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
                    formatter: '{a} <br/>{b}: +{c}$ ({d}%)'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Increase (brutto)',
                        type: 'pie',
                        radius: ['15%', '80%'],
                        center: ['50%', '57.5%'],
                        roseType: 'radius',
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff',
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: true
                                }
                            }
                        },
                        data: [
                            {value: 440, name: 'Jan'},
                            {value: 260, name: 'Feb'},
                            {value: 350, name: 'Mar'},
                            {value: 250, name: 'Apr'},
                            {value: 210, name: 'May'},
                            {value: 350, name: 'Jun'},
                            {value: 300, name: 'Jul'},
                            {value: 430, name: 'Aug'},
                            {value: 400, name: 'Sep'},
                            {value: 450, name: 'Oct'},
                            {value: 330, name: 'Nov'},
                            {value: 200, name: 'Dec'}
                        ]
                    }
                ]
            });
        }

        // Rose with labels
        if (pie_rose_labels_element) {

            // Initialize chart
            var pie_rose_labels = echarts.init(pie_rose_labels_element);


            //
            // Chart config
            //

            // Options
            pie_rose_labels.setOption({

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
                    text: 'Employee\'s salary review',
                    subtext: 'Senior front end developer',
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
                    formatter: '{a} <br/>{b}: +{c}$ ({d}%)'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: [
                    {
                        name: 'Increase (brutto)',
                        type: 'pie',
                        radius: ['15%', '80%'],
                        center: ['50%', '57.5%'],
                        roseType: 'radius',
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#fff'
                            }
                        },
                        data: [
                            {value: 440, name: 'Jan'},
                            {value: 260, name: 'Feb'},
                            {value: 350, name: 'Mar'},
                            {value: 250, name: 'Apr'},
                            {value: 210, name: 'May'},
                            {value: 350, name: 'Jun'},
                            {value: 300, name: 'Jul'},
                            {value: 430, name: 'Aug'},
                            {value: 400, name: 'Sep'},
                            {value: 450, name: 'Oct'},
                            {value: 330, name: 'Nov'},
                            {value: 200, name: 'Dec'}
                        ]
                    }
                ]
            });
        }

        // Multiple levels
        if (pie_levels_element) {

            // Initialize chart
            var pie_levels = echarts.init(pie_levels_element);


            //
            // Chart config
            //

            // Options
            pie_levels.setOption({

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
                    text: 'Browser statistics',
                    subtext: 'Based on shared research',
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
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    top: 'center',
                    left: 0,
                    data: ['Chrome','Firefox','Safari','IE9+','IE8-'],
                    itemHeight: 8,
                    itemWidth: 8
                },

                // Add series
                series: (function () {
                    var series = [];
                    for (var i = 0; i < 30; i++) {
                        series.push({
                            name: 'Browser',
                            type: 'pie',
                            hoverOffset: 0,
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    label: {
                                        show: i > 28
                                    },
                                    labelLine: {
                                        show: i > 28,
                                        length: 20
                                    }
                                }
                            },
                            radius: [i * 3.6 + 40, i * 3.6 + 43],
                            center: ['50%', '55%'],
                            data: [
                                {value: i * 128 + 80,  name: 'Chrome'},
                                {value: i * 64  + 160,  name: 'Firefox'},
                                {value: i * 32  + 320,  name: 'Safari'},
                                {value: i * 16  + 640,  name: 'IE9+'},
                                {value: i * 8  + 1280, name: 'IE8-'}
                            ]
                        })
                    }
                    return series;
                })()
            });
        }

        // Timeline
        if (pie_timeline_element) {

            // Initialize chart
            var pie_timeline = echarts.init(pie_timeline_element);


            //
            // Chart config
            //

            var idx = 1;

            // Options
            pie_timeline.setOption({

                // Add timeline
                timeline: {
                    axisType: 'category',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    label: {
                        normal: {
                            fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                            fontSize: 11
                        }
                    },
                    data: [
                        '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01', '2014-05-01',
                        { name:'2014-06-01', symbol: 'emptyStar2', symbolSize: 8 },
                        '2014-07-01', '2014-08-01', '2014-09-01', '2014-10-01', '2014-11-01',
                        { name:'2014-12-01', symbol: 'star2', symbolSize: 8 }
                    ],
                    autoPlay: true,
                    playInterval: 3000
                },

                options: [
                    {

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
                            text: 'Browser statistics',
                            subtext: 'Based on shared research',
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
                            formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },

                        // Add legend
                        legend: {
                            orient: 'vertical',
                            top: 'center',
                            left: 0,
                            data: ['Chrome','Firefox','Safari','IE9+','IE8-'],
                            itemHeight: 8,
                            itemWidth: 8
                        },

                        // Add series
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            center: ['50%', '50%'],
                            radius: '60%',
                            itemStyle: {
                                normal: {
                                    borderWidth: 1,
                                    borderColor: '#fff'
                                }
                            },
                            data: [
                                {value: idx * 128 + 80, name: 'Chrome'},
                                {value: idx * 64 + 160, name: 'Firefox'},
                                {value: idx * 32 + 320, name: 'Safari'},
                                {value: idx * 16 + 640, name: 'IE9+'},
                                {value: idx++ * 8 + 1280, name: 'IE8-'}
                            ]
                        }]
                    },

                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'Chrome'},
                                {value: idx * 64  + 160,  name:'Firefox'},
                                {value: idx * 32  + 320,  name:'Safari'},
                                {value: idx * 16  + 640,  name:'IE9+'},
                                {value: idx++ * 8  + 1280, name:'IE8-'}
                            ]
                        }]
                    }
                ]
            });
        }

        // Donut multiples
        if (pie_multiples_element) {

            // Initialize chart
            var pie_multiples = echarts.init(pie_multiples_element);


            //
            // Chart config
            //

            // Top text label
            var labelTop = {
                show: true,
                position: 'center',
                formatter: '{b}\n',
                fontSize: 15,
                lineHeight: 50,
                rich: {
                    a: {}
                }
            };

            // Background item style
            var backStyle = {
                color: '#eee',
                emphasis: {
                    color: '#eee'
                }
            };

            // Bottom text label
            var labelBottom = {
                color: '#333',
                show: true,
                position: 'center',
                formatter: function (params) {
                    return '\n\n' + (100 - params.value) + '%'
                },
                fontWeight: 500,
                lineHeight: 35,
                rich: {
                    a: {}
                },
                emphasis: {
                    color: '#333'
                }
            };

            // Set inner and outer radius
            var radius = [52, 65];

            // Options
            pie_multiples.setOption({

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
                    text: 'The Application World',
                    subtext: 'from global web index',
                    left: 'center',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },

                // Add legend
                legend: {
                    bottom: 0,
                    left: 'center',
                    data: ['GMaps', 'Facebook', 'Youtube', 'Google+', 'Weixin', 'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'],
                    itemHeight: 8,
                    itemWidth: 8,
                    selectedMode: false
                },

                // Add series
                series: [
                    {
                        type: 'pie',
                        center: ['10%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 46, label: labelBottom, itemStyle: backStyle},
                            {name: 'GMaps', value: 54, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['30%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 56, label: labelBottom, itemStyle: backStyle},
                            {name: 'Facebook', value: 44, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 65, label: labelBottom, itemStyle: backStyle},
                            {name: 'Youtube', value: 35, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['70%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 70, label: labelBottom, itemStyle: backStyle},
                            {name: 'Google+', value: 30, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['90%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 73, label: labelBottom, itemStyle: backStyle},
                            {name: 'Weixin', value: 27, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['10%', '73%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 78, label: labelBottom, itemStyle: backStyle},
                            {name: 'Twitter', value: 22, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['30%', '73%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 78, label: labelBottom, itemStyle: backStyle},
                            {name: 'Skype', value: 22, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '73%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 78, label: labelBottom, itemStyle: backStyle},
                            {name: 'Messenger', value: 22, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['70%', '73%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 83, label: labelBottom, itemStyle: backStyle},
                            {name: 'Whatsapp', value: 17, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['90%', '73%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 89, label: labelBottom, itemStyle: backStyle},
                            {name: 'Instagram', value: 11, label: labelTop}
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
            pie_basic_element && pie_basic.resize();
            pie_donut_element && pie_donut.resize();
            pie_nested_element && pie_nested.resize();
            pie_infographic_element && pie_infographic.resize();
            pie_rose_element && pie_rose.resize();
            pie_rose_labels_element && pie_rose_labels.resize();
            pie_levels_element && pie_levels.resize();
            pie_timeline_element && pie_timeline.resize();
            pie_multiples_element && pie_multiples.resize();
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
            _piesDonutsExamples();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsPiesDonuts.init();
});
