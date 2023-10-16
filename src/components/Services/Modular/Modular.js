import React from 'react'
import './Modular.scss'
import p1 from '../../../img/modularSkids_gallery/Modular_Skid.png'
import p2 from '../../../img/modularSkids_gallery/Process_Skid.JPG'

export default function Modular() {
  const data = [
    {
      id: 1,
      img: p1
    },
    {
      id: 2,
      img: p2
    },
  ]
  return (
    <div className="Modular">
      <h2>MODULAR SKIDS DESIGN</h2>
      <div className="modular-container">
        <div className="modular-content">
          <span>Trans Tech Projects has expertise in designing modular skids such as pilot plants, solvent recovery systems, washing systems , Clean In Place Units, adsorption systems, scrubbing systems, desalination systems, filtration systems</span>
          <span>Trans Tech has successfully provided services for projects with high temperature, high pressure applications. We can help customer in developing the concept to reality using our strength in process design, detail engineering, automation & control. The skids can be designed considering standard container dimensions so that it can be easily shipped across the globe.</span>
          <span>Our process engineers prepares a detail P&I diagram & equipment layout. Based on the same our designers prepares precise 3D model followed by structural steel, piping isometric or spool drawings with weldmets. The same can be viewed as a movie which gives a very good visualization & understanding for fabrication & assembly team.</span>
          <span>Our Automation team design control panel with layouts, wiring schematics and provide PLC/HMI programming as per the customer's requirement. We assist customer in testing of the programs so that so that the skids becomes a plug & play activity at site.</span>
        </div>
        <div className="modular-img">
            {data && data.map((item)=> {
              return <img src={item.img} key={item.id} alt="" />
            })}
        </div>
      </div>
    </div>
  )
}
