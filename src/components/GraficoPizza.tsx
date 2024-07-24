import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

interface InfoGraficoPizza {
  certas: number;
  erradas: number;
}

const GraficoPizza: React.FC<InfoGraficoPizza> = ({ certas, erradas }) => {
  const total = certas + erradas;

  const data = {
    labels: [],
    datasets: [
      {
        data: [certas, erradas],
        backgroundColor: ['#a7c957', 'red'], // Colors for slices
        borderColor: ['#c1c0c5', 'gray'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      datalabels: {
        formatter: (value: number) => {
          return `${((value / total) * 100).toFixed(1)}%`;
        },
        color: 'white',
        font: {
          weight: 'bold' as 'bold' | 'normal' | 'bolder' | 'lighter' | undefined,
        },
      },
    },
  };

  return (
    <div style={{ width: '180px', height: '180px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default GraficoPizza;