import React from 'react'
import MemoryGauge from '../Components/MemoryGauge'
import MemoryLineChart from '../Components/MemoryLineChart'

function MemoryInfoPage() {
  return (
    <div>
        <div className="main_container">
            <div className="info_list">
                <h3>Jumlah Memori Total : </h3>
                <h3>Jumlah Memori Digunakan : </h3>
                <h3>Jumlah Memori Tersedia : </h3>

            </div>
            <div className="info_gauge">
                <MemoryGauge />
            </div>
        </div>
        <div className="line_chart">
            <MemoryLineChart />
        </div>
    </div>
  )
}

export default MemoryInfoPage