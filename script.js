const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Views',
      data: [30, 20, 40, 35, 25, 45, 60],
      backgroundColor: 'rgba(8, 177, 136, 0.2)',
      borderColor: '#08b188',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
