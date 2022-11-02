import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LOTTO_WEIGHT } from '../theme/random/lottoWeight';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '로또번호 별 당첨 횟수',
    },
  },
};

const weightData = [...LOTTO_WEIGHT];
const labels = LOTTO_WEIGHT.map((weight, index) => index + 1);
const top5NumberWeight = weightData.sort()[40];

const top5Numbers = LOTTO_WEIGHT.reduce((acc, curr, index) => {
  if (curr >= top5NumberWeight) acc.push(index);

  return acc;
}, []);

const bgColor = LOTTO_WEIGHT.map((weight, index) =>
  top5Numbers.includes(index)
    ? 'rgba(255, 99, 132, 0.5)'
    : 'rgba(99, 99, 132, 0.5)'
);

const data = {
  labels,
  datasets: [
    {
      label: 'weight',
      data: LOTTO_WEIGHT,
      backgroundColor: bgColor,
    },
  ],
};
export const BarChart = () => {
  return <Bar options={options} data={data} />;
};
