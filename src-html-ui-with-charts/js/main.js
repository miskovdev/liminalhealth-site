// Menu mobile
const menuOpen = document.querySelector('.header-menu-open');
const menuContainer = document.querySelector('.header-nav-mobile');

menuOpen.onclick = function (e) {
    e.preventDefault();
    menuContainer.classList.toggle('active');
}

// Bar chart
const ctx = document.getElementById('barChart');

if(ctx) {
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Initiated', 'Negotiation Process', 'IDR Process'],
            datasets: [{
                label: '# of claims',
                data: [30, 25, 20],
                borderWidth: 1,
                backgroundColor: ['#9abed9', '#a7d5d5', '#f5fbe5'],
                datalabels: {
                    color: '#466285',
                    labels: {
                        title: {
                            font: {
                                size: 30,
                                weight: 'bold'
                            }
                        },
                    }
                }
            }],
        },
        plugins: [ChartDataLabels],
        options: {
            responsive: true,
            scales: {
                x: {
                    color: '#fff',
                    ticks: {
                        color: '#e0dac0'
                    },
                    grid: {
                        color: ['#e0dac0', '', '', '', '', '', ''],
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        color: '#e0dac0',
                        stepSize: 50
                    },
                    grid: {
                        color: ['#e0dac0', '', '', '', '', '', ''],
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e0dac0'
                    }
                }
            }
        }
    });
}

// Area chart
const ctx2 = document.getElementById('areaChart');

if(ctx2) {
    let chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['02/2022', '03/2022', '04/2022', '05/2022', '06/2022', '07/2022', '08/2022', '09/2022', '10/2022', '11/2022', '12/2022'],
            datasets: [{
                label: 'Revenue',
                data: [9, 11, 9, -2, -8, 4, 5, 10, 11, 7, 18],
                borderWidth: 8,
                borderColor: 'rgba(119,138,37,0.8)',
                backgroundColor: 'rgba(160,190,25,0.8)',
                fill: true
            }, {
                label: 'Lost',
                data: [15, 14, 5, 4, -5, 15, 14, 5, -4, 5],
                borderWidth: 8,
                borderColor: 'rgba(159,83,165,0.8)',
                backgroundColor: 'rgba(180,100,200,0.8)',
                fill: true
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            scales: {
                x: {
                    color: '#fff',
                    ticks: {
                        color: '#e0dac0'
                    },
                    grid: {
                        color: ['rgba(224,218,192,0.45)'],
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        color: '#e0dac0',
                        stepSize: 10
                    },
                    grid: {
                        color: ['#e0dac0', '', '', '', '', '', ''],
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e0dac0'
                    }
                }
            }
        }
    });
}

// Bar Group chart
const randomArray = (length, max) =>
    Array(length).fill().map(() => Math.round(Math.random() * max)); // random values

// console.log(randomArray(9, 30))

const ctx3 = document.getElementById('barGroupChart');

if(ctx3) {
    let chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['04/2022', '05/2022', '06/2022', '07/2022', '08/2022', '09/2022', '10/2022', '11/2022', '12/2022'],
            datasets: [{
                label: 'Initiated',
                data: randomArray(9, 30),
                borderWidth: 1,
                backgroundColor: ['#9abed9'],
            }, {
                label: 'Negotiation Process',
                data: randomArray(9, 30),
                borderWidth: 1,
                backgroundColor: ['#a7d5d5'],
            }, {
                label: 'IDR Process',
                data: randomArray(9, 30),
                borderWidth: 1,
                backgroundColor: ['#f5fbe5'],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            barPercentage: 0.88,
            categoryPercentage: 0.5,
            scales: {
                x: {
                    color: '#fff',
                    ticks: {
                        color: '#e0dac0'
                    },
                    grid: {
                        color: ['#e0dac0', '', '', '', '', '', '', '', ''],
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        color: '#e0dac0',
                        stepSize: 10
                    },
                    grid: {
                        color: ['#e0dac0', '', '', '', '', '', ''],
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e0dac0'
                    }
                }
            }
        }
    });
}

// Bar Horizontal chart
const ctx4 = document.getElementById('barHorizontalChart');

if(ctx4) {
    let chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['United Health', 'Humana', 'HealthPartner'],
            datasets: [{
                label: 'Revenue',
                data: randomArray(3, 2500000),
                borderWidth: 1,
                backgroundColor: ['#2bc9be'],
            }, {
                label: 'Lost',
                data: randomArray(3, 2500000),
                borderWidth: 1,
                backgroundColor: ['#be8097'],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            barPercentage: 0.8,
            categoryPercentage: 0.7,
            scales: {
                x: {
                    color: '#fff',
                    ticks: {
                        color: '#e0dac0',
                        callback: function(value, index, ticks) {
                            return (value/1000) + 'K';
                        }
                    },
                    grid: {
                        color: ['rgba(224,218,192,0.63)'],
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        color: '#e0dac0',
                        stepSize: 500000,
                    },
                    grid: {
                        color: ['#e0dac0', '', '', '', '', '', ''],
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#e0dac0'
                    }
                }
            }
        }
    });
}
