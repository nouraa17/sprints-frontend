document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('myLineChart').getContext('2d');

  // Create gradient fills
  function createGradient(ctx, color1, color2) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust based on your canvas height
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  }

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: createGradient(ctx, 'rgba(65, 84, 241, 0.3)', 'rgba(65, 84, 241, 0.1)'),
          borderColor: '#4154f1',
          data: [31, 40, 28, 51, 42, 82, 56],
          // fill: true,
          // order: 1,
          tension: 0.1,
          cubicInterpolationMode: 'monotone',
        },
        {
          label: 'Revenue',
          backgroundColor: createGradient(ctx, 'rgba(46, 202, 106, 0.3)', 'rgba(46, 202, 106, 0.1)'),
          borderColor: '#2eca6a',
          data: [11, 32, 45, 32, 34, 52, 41],
          // fill: true,
          // order: 0,
          tension: 0.1,
          cubicInterpolationMode: 'monotone',
        },
        {
          label: 'Customers',
          backgroundColor: createGradient(ctx, 'rgba(255, 119, 29, 0.3)', 'rgba(255, 119, 29, 0.1)'),
          borderColor: '#ff771d',
          data: [15, 11, 32, 18, 9, 24, 11],
          // fill: true,
          // order: 3,
          tension: 0.1,
          cubicInterpolationMode: 'monotone',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          display: true,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw;
            }
          }
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            // display: true,
            // text: 'Hour'
          },
          grid: {
            display: false
          }
        },
        y: {
          display: true,
          title: {
            // display: true,
            // text: 'Value'
          },
          ticks: {
            stepSize: 10 // This sets the interval between ticks
          },
          grid: {
            display: true
          }
        }
      }
    }
  });
});

// Get the context of the canvas element we want to select
const ctx = document.getElementById('myDonutChart').getContext('2d');

// Data for the donut chart
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 80, 150],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)'
        ],
        hoverOffset: 4
    }]
};

// Config for the donut chart
const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Donut Chart Example'
            }
        }
    }
};

// Render the donut chart
const myDonutChart = new Chart(ctx, config);

document.addEventListener("DOMContentLoaded", () => {
  var ctx2 = document.getElementById('myRadarChart').getContext('2d');
  var myRadarChart = new Chart(ctx2, {
      type: 'radar',
      data: {
          labels: ['Sales', 'Administration', 'Information Technology', 'Customer Support', 'Development', 'Marketing'],
          datasets: [{
              label: 'Allocated Budget',
              data: [4200, 3000, 20000, 35000, 50000, 18000],
              backgroundColor: 'rgba(84, 112, 198, 0.2)',
              borderColor: '#5470c6',
              borderWidth: 2,
              fill: false,
          }, {
              label: 'Actual Spending',
              data: [5000, 14000, 28000, 26000, 42000, 21000],
              backgroundColor: 'rgba(145, 204, 117, 0.2)',
              borderColor: '#91cc75',
              borderWidth: 2,
              fill: false,
          }]
      },
      options: {
          scales: {
              r: {
                  ticks: {
                      display:false,
                      stepSize: 10000,
                      beginAtZero: true,
                      maxTicksLimit: 7
                  },
                  pointLabels: {
                      font: {
                          size: 10
                      }
                  },
                  angleLines: {
                      color: 'rgba(0, 0, 0, 0.2)'
                  },
                  grid: {
                      color: 'rgba(0, 0, 0, 0.1)'
                  }
              }
          },
          plugins: {
              legend: {
                  position: 'top',
              },
              // title: {
              //     display: true,
              //     text: 'Budget vs Spending',
              //     font: {
              //         size: 12
              //     }
              // }
          },
          responsive: true,
          maintainAspectRatio: false
      }
  });
});