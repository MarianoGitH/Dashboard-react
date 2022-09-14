import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'temp'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
]
const LineChartOptions = {
  hAxis: {
    title: 'Tiempo',
  },
  vAxis: {
    title: '[°C]',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class LineChartLarge extends Component {
  render() {
    return (
      <div className="container w-100">
        <Chart
          width={'auto'}
          height={'300px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default LineChartLarge;