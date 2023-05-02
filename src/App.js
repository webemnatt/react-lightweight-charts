import React from 'react';
import './style.scss';
import { createChart } from 'lightweight-charts';

export default function App() {
  const chartOptions = {
    layout: {
      textColor: 'black',
      background: { type: 'solid', color: 'white' },
      // lineColor: '#348344',
      // areaBottomColor: 'red',
      // areaTopColor: 'green',
    },
    width: 500,
    height: 300,
  };
  // const chart = createChart(document.getElementById('container'), chartOptions);
  const chart = createChart(document.body, chartOptions);
  const lineSeries = chart.addLineSeries();
  lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
  ]);
  return (
    <div>
      <div className="grafico-cotacao-container">
        <h1 className="title">Cotação</h1>
        <span className="more-info">Mais info</span>
      </div>
      <div class="button_ld">
        <button disabled="true">Açúcar</button>
        <button disabled="true">Soja</button>
        <button disabled="true">Milho</button>
        <button>Trigo</button>
      </div>
      <div id="container"></div>
    </div>
  );
}
