/* ------------------------------------------------------------------------------
 *
 *  # ECommerce - Customers
 *
 *  Demo JS code for ecommerce_customers.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EcommerceCustomers = function() {


    //
    // Setup module components
    //

    // Chart
    var _componentEcharts = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define elements
        var customers_chart_element = document.getElementById('customers_chart');

        // Weekly statistics chart config
        if (customers_chart_element) {

            // Initialize chart
            var customers_chart = echarts.init(customers_chart_element);


            //
            // Chart config
            //

            // Options
            customers_chart.setOption({

                // Define colors
                color: ['#EF5350', '#03A9F4','#4CAF50'],

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
                    data: ['New customers','Returned customers','Orders'],
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
                    data: ['January','February','March','April','May','June','July','August','September','October','November','December'],
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
                yAxis: [
                    {
                        type: 'value',
                        name: 'Visitors',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#333',
                            formatter: '{value}k'
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
                    },
                    {
                        type: 'value',
                        name: 'Orders',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#333',
                            formatter: '{value}k'
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
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'New customers',
                        type: 'bar',
                        data: [20, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 64, 33]
                    },
                    {
                        name: 'Returned customers',
                        type: 'bar',
                        data: [26, 59, 90, 264, 287, 707, 1756, 1822, 487, 188, 60, 23]
                    },
                    {
                        name: 'Orders',
                        type: 'line',
                        smooth: true,
                        symbolSize: 7,
                        yAxisIndex: 1,
                        data: [20, 22, 33, 45, 63, 102, 203, 234, 230, 165, 120, 62],
                        itemStyle: {
                            normal: {
                                borderWidth: 2
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
            customers_chart_element && customers_chart.resize();
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

    // Datatable
    var _componentDatatable = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.table-customers').DataTable({
            autoWidth: false,
            columnDefs: [
                {
                    targets: 0,
                    width: 400
                },
                { 
                    orderable: false,
                    width: 16,
                    targets: 6
                },
                {
                    className: 'control',
                    orderable: false,
                    targets: -1
                },
            ],
            order: [[ 0, 'asc' ]],
            dom: '<"datatable-header datatable-header-accent"fBl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
            language: {
                search: '<span>Search people:</span> _INPUT_',
                searchPlaceholder: 'Type to filter...',
                lengthMenu: '<span>Show:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            },
            lengthMenu: [ 25, 50, 75, 100 ],
            displayLength: 50,
            responsive: {
                details: {
                    type: 'column',
                    target: -1
                }
            },
            buttons: [
                {
                    extend: 'pdfHtml5',
                    text: 'Export list <i class="icon-file-pdf ml-2"></i>',
                    className: 'btn bg-blue',
                    orientation: 'landscape',
                    exportOptions: {
                        columns: [ 0, 1, 2, 3, 4, 5 ],
                        stripHtml: true
                    },
                    customize: function (doc) {
                        doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }
                }
            ]
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth: true,
            width: 'auto'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentEcharts();
            _componentDatatable();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EcommerceCustomers.init();
});
