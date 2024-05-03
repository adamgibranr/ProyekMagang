import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    {time: 1, uv: 80},
    {time: 2, uv: 20},
    {time: 3, uv: 10},
    {time: 4, uv: 3},
    {time: 5, uv: 3},
    {time: 6, uv: 5},
    {time: 7, uv: 5},
    {time: 8, uv: 5},
    {time: 9, uv: 7},
    {time: 10, uv: 15},
];

class MemoryLineChart extends Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Penggunaan Memory</h3>
        <LineChart width={1500} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" type="number" domain={[1, 30]}/>
            <YAxis type="number" domain={[0, 100]}/>
            <Tooltip />
        </LineChart>
      </div>
    )
  }
}
export default MemoryLineChart