import React, { Component } from 'react'
import Chart from 'react-google-charts'
const gaugeData = [
  ['Label', 'Value'],
  ['Disk', 55],
]
class DiskGauge extends Component {
  render() {
    return (
      <div>
        <h3>Persentase Penggunaan Penyimpanan</h3>
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
export default DiskGauge