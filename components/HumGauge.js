import React, { Component } from 'react'
import Chart from 'react-google-charts'
const gaugeData = [
  ['Label', 'Value'],
  ['%', 60],
]
class HumGauge extends Component {
  render() {
    return (
      <div className="container W-100 justify-content-center">
         <Chart
                width={'auto'}
                height={'150px'}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={gaugeData}
                options={{
                    greenFrom:40,
                    greenTo:75,
                  redFrom: 90,
                  redTo: 100,
                  yellowFrom: 75,
                  yellowTo: 90,
                  minorTicks: 5,
                }}
                rootProps={{ 'data-testid': '1' }}
              />
      </div>
    )
  }
}
export default HumGauge;
