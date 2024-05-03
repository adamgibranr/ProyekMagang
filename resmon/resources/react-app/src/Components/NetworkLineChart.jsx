import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {time: 1, x: 80, y: 10},
    {time: 2, x: 20, y: 10},
    {time: 3, x: 10, y: 80},
    {time: 4, x: 3, y: 55},
    {time: 5, x: 3, y: 70},
    {time: 6, x: 5, y: 40},
    {time: 7, x: 5, y: 25},
    {time: 8, x: 5, y: 2},
    {time: 9, x: 7, y: 8},
    {time: 10, x: 15, y: 20},
];

class NetworkLineChart extends Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Throughput Jaringan</h3>
        <LineChart width={1500} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="x" stroke="#8884d8" />
            <Line type="monotone" dataKey="y" stroke="#8784d9" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" type="number" domain={[1, 30]}/>
            <YAxis type="number" />
            <Tooltip />
        </LineChart>
      </div>
    )
  }
}
export default NetworkLineChart