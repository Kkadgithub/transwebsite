import React from 'react'
import './DetailEng.scss'
import p1 from '../../../img/Detail_gallery/TT_DE_03.jpg'
import p2 from '../../../img/Detail_gallery/TT_DE_04.bmp'
import p3 from '../../../img/Detail_gallery/TT_DE_05.bmp'
import p4 from '../../../img/Detail_gallery/sercit01.jpg'
import p5 from '../../../img/Detail_gallery/sercit02.jpg'

export default function DetailEng() {
  const data = [
    {
      id: 1,
      img: p4
    },
    {
      id: 2,
      img: p5
    },
    {
      id: 3,
      img: p1
    },
    {
      id: 4,
      img: p2
    },
    {
      id: 5,
      img: p3
    },
  ]
  return (
    <div className="DetailEng">
      <h2>DETAIL ENGINEERING</h2>
      <div className="details-container">
        <div className="details-content">
          <span >Our multi-disciplinary engineering staff with chemical, mechanical, instrumentation, electrical & civil engineering expertise, enables us to develop client's concept to fruitful completion. Trans Tech has served refinery, power, chemical and pharmaceutical projects all over the world.</span>
          <span className="details-span">We have expertise in Waste Water & Water Treatment Plants, Distillation & Solvent Recovery Systems, Adsorption & Absorption Systems, Pilot Plants, Customized Package Skids, Special Purpose Machines and Residential, Commercial & Industrial Properties.</span>

          <h3>Process</h3>
          <ul>
            <li>Unit Operations Design</li>
            <li>P & IDs, Equipment Layouts, Datasheets</li>
            <li>Utility Sizing and Distribution Diagrams</li>
            <li>Line Sizing, Hydraulic Calculations</li>
            <li>Insulation Calculations with Material Take Off</li>
          </ul>

          <h3>Piping & Mechanical</h3>
          <ul>
            <li>3D Modeling, Piping Layouts (Tools: CADWorx)</li>
            <li>Isometric with Material Take Off (Tools: ISOGEN)</li>
            <li>Stress Analysis using (Tools: CAESAR)</li>
            <li>Pressure Vessel & Heat Exchanger Design (Tools: PVElite)</li>
            <li>Fabrication & Assembly Drawings</li>
          </ul>

          <h3>Civil & Structural</h3>
          <ul>
            <li>Structure Design, Dynamic Analysis (Tools: StaadPro)</li>
            <li>Foundation Load Calculations.</li>
            <li>Detail Fabrication Drawings</li>
          </ul>

          <h3>Instrumentation & Electrical</h3>
          <ul>
            <li>Instrument Specifications</li>
            <li>Instrument Hook-up & Standard Installation Diagrams</li>
            <li>Junction Box and Cable Schedule with Material Take Off</li>
            <li>Control System Design (PLC / SCADA and DCS) & Programming</li>
            <li>Logic Diagrams, Alarms & Safety Interlocks</li>
            <li>Plant Wide Power Distribution Drawings</li>
            <li>Motor Control Center Design</li>
            <li>Plant Lighting Schemes</li>
          </ul>
        </div>
        <div className="details-img">
          {data && data.map((item)=> {
            return <img src={item.img} key={item.id} alt="" />
          })}
        </div>
      </div>
    </div>
  )
}
