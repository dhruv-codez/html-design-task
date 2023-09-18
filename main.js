/* The code snippet is creating a line chart using the Chart.js library in JavaScript. */
const xValues = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const yValues = [0, 200, 400, 600];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      data: [350, 720, 2500, 5070, 5900, 4100, 2000, 1000, 200, 100],
      borderColor: "#FF6B00",
    }]
  },
  options: {
    plugins: { legend: { display: false } },
  }
});