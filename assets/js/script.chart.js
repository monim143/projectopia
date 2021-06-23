

$(document).ready(function () {
    if ($('#bar-chart-1').length) {
        Highcharts.chart('bar-chart-1', {
            credits: {
                enabled: false
            },
            chart: {
                height: $(window).width() > 576 ? 300 : 200,
                type: 'column'
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                },
                crosshair: true
            },
            yAxis: {
                gridLineDashStyle: 'longdash',
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.35,
                    borderWidth: 0
                },
                series: {
                    borderRadius: 5,
                    color: '#C4CEFE',
                    dashStyle: 'Dash'
                }
            },
            series: [{
                name: '',
                data: [49.9, 71.5, 200.4, 129.2, 144.0, 230.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }]
        });
    }


    if ($('#bar-chart-2').length) {
        Highcharts.chart('bar-chart-2', {
            credits: {
                enabled: false
            },
            chart: {
                height: $(window).width() > 576 ? 300 : 200,
                type: 'column',
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                },
                crosshair: true
            },
            yAxis: {
                gridLineDashStyle: 'longdash',
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.35,
                    borderWidth: 0
                },
                series: {
                    borderRadius: 5,
                    color: '#C4CEFE',
                    dashStyle: 'Dash'
                }
            },
            series: [{
                name: '',
                data: [200, 71.5, 10.4, 149.2, 124.0, 230.0, 135.6, 188.5, 216.4, 194.1, 295.6, 54.4]

            }]
        });
    }


    if ($('#bar-chart-3').length) {
        Highcharts.chart('bar-chart-3', {
            credits: {
                enabled: false
            },
            chart: {
                height: $(window).width() > 576 ? 300 : 200,
                type: 'column'
            },
            legend: false,
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                },
                crosshair: true
            },
            yAxis: {
                gridLineDashStyle: 'longdash',
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#56606D',
                        fontSize: '16px',
                        fontFamily: "Product Sans",
                    }
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.35,
                    borderWidth: 0
                },
                series: {
                    borderRadius: 5,
                    color: '#C4CEFE',
                    dashStyle: 'Dash'
                }
            },
            series: [{
                name: '',
                data: [9.9, 271.5, 200.4, 129.2, 244.0, 230.0, 235.6, 148.5, 216.4, 194.1, 295.6, 154.4]

            }]
        });
    }


});
