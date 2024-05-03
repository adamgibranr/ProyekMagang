import React, { Component } from 'react'
import Chart from 'react-google-charts'
const gaugeData = [
  ['Label', 'Value'],
  ['Send Through', 55],
  ['Rec Through', 55],
]
class NetworkGauge extends Component {
  render() {
    return (
      <div>
        <h3>Throughput Jaringan Runtime</h3>
         <Chart
                width={600}
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
export default NetworkGauge