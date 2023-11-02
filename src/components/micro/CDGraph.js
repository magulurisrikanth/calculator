// CDGraph.js
import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

function CDGraph({ data, principal, rate }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: data.years.map((year) => `${year} Years`),
      datasets: [
        {
          data: data.principal,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
        },
      ],
    };

    console.log("calculation for graph data", data, principal, rate);

    const ctx = canvasRef.current;

    if (ctx) {
      // Create the chart
      new Doughnut(ctx, {
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [data, principal, rate]);

  return <h1>result</h1>;

  return <canvas ref={canvasRef} />;
}

export default CDGraph;
