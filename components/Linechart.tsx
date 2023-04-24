import React, { useState } from 'react';
import {Line}  from 'react-chartjs-2';
import { location } from '../data/location.js';
// import { ChartOptions, InteractionModeMap } from 'chart.js';
// import { InteractionOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartOptions, InteractionModeMap,InteractionOptions,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LocationData {
  Year: number;
  riskRating: number;
}
export const LineChart: React.FC = () => {
  const [userdata, setUserdata] = useState({
    labels: location.map((item) => item.Year),
    datasets: [
      {
        label: 'Business Category',
        data: location.map((item) => item.riskRating),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  const [hoverData, setHoverData] = useState<LocationData | null>(null);
// console.log(hoverData);
  const handleHover = (event: MouseEvent, activeElements: { index: number }[]) => {
    if (activeElements.length) {
      const index = activeElements[0].index;
      const data = location[index];
      setHoverData(data);
    } else {
      setHoverData(null);
    }
  };
// console.log(hoverData);
  const chartOptions: ChartOptions<'line'> = {
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItem: any) => `Year: ${location[tooltipItem[0].dataIndex].Year}`,
          label: (tooltipItem: any) => `Risk Rating: ${tooltipItem.formattedValue}`,
          
        },
        displayColors: false,
      },
    },
  };
  
//   const interaction: InteractionOptions = {
//     mode: 'index',
//     intersect: false,
//     onHover: handleHover,
//   };
  
//   const options = Object.assign({}, chartOptions, { interaction });w
  
  return (
    <div>
      <Line data={userdata}  />
      {hoverData && (
        <div>
          <p>Year: {hoverData.Year}</p>
          <p>Risk Rating: {hoverData.riskRating}</p>
          <p>Business Categor</p>
        </div>
      )}
    </div>
  );
};


