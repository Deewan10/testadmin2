import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const data = {
  labels: ['','Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],
  datasets: [
    {
      label: '',
      data: [200, 180, 300, 250, 400, 369, 450],
      borderColor: 'red',
      backgroundColor: 'lightgrey',
      fill: true,
      pointBackgroundColor: 'red',
      pointRadius: function(context) {
        const index = context.dataIndex;
        const lastIndex = context.dataset.data.length - 1;
        return index === lastIndex ? 5 : 0;
      },
      pointHoverRadius: 6, 
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      
    },
  },
  elements: {
    line: {
      tension: 0.4, 
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
    },
    y: {
      grid: {
        display: false, 
      },
      ticks: {
        display: false,
      },
    },
  },

  animation: {
    duration: 2000, 
    easing: 'linear', 
    animateScale: true,
    animateRotate: true,
  },
};

const MyAreaChart = () => {
  return <Line data={data} options={options} />;
};

export default MyAreaChart;
