import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useMediaQuery, useTheme} from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'];

const LineChart = () => {
  const theme= useTheme();
  const screenSize = {
    isSmall: useMediaQuery(theme.breakpoints.down('md')),
    isMedium: useMediaQuery(theme.breakpoints.between('md', 'lg')),
    isLarge: useMediaQuery(theme.breakpoints.up('lg')),
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'RFT Price',
        data: [900, 400, 700, 200, 800, 500, 600],
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: screenSize.isLarge?10:2,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            family: 'Arial',
            size: screenSize.isLarge?18:(screenSize.isMedium?12:8),
            weight: 100
          },
          padding: 20
        },
        grid: {
          color: '#ffffff10 '
        },
        border: {
          display: false
        },
      },
      y: {
        ticks: {
          callback: function(value, index, ticks) {
            return value + ' $';
          },
          stepSize: 250,
          color: 'white',
          font: {
            family: 'Arial',
            size: screenSize.isLarge?18:(screenSize.isMedium?12:8),
          },
          padding: 20
        },
        grid: {
          display: false
        },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line options={options} data={data} />;
};

export default LineChart;