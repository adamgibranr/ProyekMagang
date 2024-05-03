import React from 'react'
import DiskGauge from '../Components/DiskGauge'
import DiskLineChart from '../Components/DiskLineChart'
import {SidebarData} from '../Components/SidebarData'
import { NavLink } from 'react-router-dom'

function DiskInfoPage() {
  return (
    <div>
        <div className="main_container">
            <div className="info_list">
                <h3>Jumlah Penyimpanan Total : </h3>
                <h3>Jumlah Penyimpanan Digunakan : </h3>
                <h3>Jumlah Penyimpanan Tersedia : </h3>

            </div>
            <div className="info_gauge">
                <DiskGauge />
            </div>
        </div>
        <div className="line_chart">
            <DiskLineChart />
        </div>
    </div>
  )
    // return (
    //     <div className="container-fluid p-0">
    //     <aside className="Sidebar">
    //         <ul className="SidebarList">
    //         {SidebarData.map((val, key)=> {
    //             return (
    //             <li 
    //                 key={key} 
    //                 className="row"
    //                 onClick={() => {
    //                 window.location.pathname = val.link;
    //                 }}
    //             >
    //                 <div>
    //                 {val.title}
    //                 </div>
    //                 <NavLink to={val.link}></NavLink>
    //             </li>
    //             )
    //         })}
    //         </ul>
    //     </aside>
    //     <main>
    //         <div>
    //             <div className="main_container">
    //                 <div className="info_list">
    //                     <h3>Jumlah Penyimpanan Total : </h3>
    //                     <h3>Jumlah Penyimpanan Digunakan : </h3>
    //                     <h3>Jumlah Penyimpanan Tersedia : </h3>

    //                 </div>
    //                 <div className="info_gauge">
    //                     <DiskGauge />
    //                 </div>
    //             </div>
    //             <div className="line_chart">
    //                 <DiskLineChart />
    //             </div>
    //         </div>
    //     </main>
    //     </div>
    // )
}

export default DiskInfoPage