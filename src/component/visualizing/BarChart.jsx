import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LOTTO_WEIGHT } from '../theme/random/lottoWeight';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = LOTTO_WEIGHT.map((weight, index) => index);
const datas = LOTTO_WEIGHT.map((weight, index) => weight);

const weightData = LOTTO_WEIGHT;
weightData.sort();

const top5Number = weightData[40];

const top10Numbers = LOTTO_WEIGHT.reduce((acc, curr, index) => {
  if (curr >= top5Number) acc.push(index);
  return acc;
}, []);

const data = {
  labels,
  datasets: [
    {
      label: 'lotto number',
      data: datas,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [233, 4444, 444, 444, 1, 233, 4444, 444, 444, 1],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
export const BarChart = () => {
  return <Bar options={options} data={data} />;
};
