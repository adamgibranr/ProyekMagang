import React, { Component } from 'react'
import Chart from 'react-google-charts'
const gaugeData = [
  ['Label', 'Value'],
  ['RAM', 55],
]
class MemoryGauge extends Component {
  render() {
    return (
      <div>
        <h3>Penggunaan Memory Runtime</h3>
         <Chart
                width={300}
                height={300}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={gaugeData}
                options={{
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
export default MemoryGauge