import React from 'react'
import NetworkGauge from '../Components/NetworkGauge'
import NetworkLineChart from '../Components/NetworkLineChart'

function NetworkInfoPage() {
  return (
    <div>
        <div className="main_container">
            <div className="info_list">
                <h3>Paket Terkirim : </h3>
                <h3>Paket Diterima : </h3>
                <h3>Byte Terkirim : </h3>
                <h3>Byte Diterima : </h3>

            </div>
            <div className="info_gauge">
                <NetworkGauge />
            </div>
        </div>
        <div className="line_chart">
            <NetworkLineChart />
        </div>
    </div>
  )
}

export default NetworkInfoPage