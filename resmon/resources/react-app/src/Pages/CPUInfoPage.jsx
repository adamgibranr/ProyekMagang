import React from 'react'
import "../App.css"
import CPUGauge from '../Components/CPUGauge'
import CPULineChart from '../Components/CPULineChart'
import {SidebarData} from '../Components/SidebarData'
import { NavLink } from 'react-router-dom'

function CPUInfoPage() {
  return (
    <div>
        <div className="main_container">
            <div className="info_list">
                <h3>Jumlah Inti CPU : </h3>
                <h3>Jumlah Thread : </h3>
                <h3>Kecepatan Dasar CPU : </h3>
                <h3>Kecepatan Runtime CPU : </h3>
            </div>
            <div className="info_gauge">
                <CPUGauge />
            </div>
        </div>
        <div className="line_chart">
            <CPULineChart />
        </div>
    </div>
  )
// return (
//     <div className="container-fluid p-0">
//       <aside className="Sidebar">
//         <ul className="SidebarList">
//           {SidebarData.map((val, key)=> {
//             return (
//               <li 
//                 key={key} 
//                 className="row"
//                 onClick={() => {
//                   window.location.pathname = val.link;
//                 }}
//               >
//                 <div>
//                   {val.title}
//                 </div>
//                 <NavLink to={val.link}></NavLink>
//               </li>
//             )
//           })}
//         </ul>
//       </aside>
//       <main>
//         <div>
//             <div className="main_container">
//                 <div className="info_list">
//                     <h3>Jumlah Inti CPU : </h3>
//                     <h3>Jumlah Thread : </h3>
//                     <h3>Kecepatan Dasar CPU : </h3>
//                     <h3>Kecepatan Runtime CPU : </h3>
//                 </div>
//                 <div className="info_gauge">
//                     <CPUGauge />
//                 </div>
//             </div>
//             <div className="line_chart">
//                 <CPULineChart />
//             </div>
//         </div>
//       </main>
//     </div>
//   )

}

export default CPUInfoPage