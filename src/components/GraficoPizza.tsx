import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface InfoGraficoPizza {
  certas: number;
  erradas: number;
}

const GraficoPizza: React.FC<InfoGraficoPizza> = ({ certas, erradas }) => {
  
  const data = {
    labels: [`Acertos: ${certas}`, `Erros: ${erradas}`],
    datasets: [
      {
        data: [certas, erradas],
        backgroundColor: ['#a7c957', 'red'], // Colors for slices
        borderColor: ['#c1c0c5', 'gray'],
        borderWidth: 0,
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
    },
  };

  return (
    <div style={{ width: '180px', height: '180px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default GraficoPizza;