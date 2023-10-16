import React from 'react'
import './Modelling.scss'
import p1 from '../../../img/modeling_gallery/3d-modeling-img.jpg'
import p2 from '../../../img/modeling_gallery/FactoryAutomation.jpg'

export default function Modelling() {
  const data = [
    {
      id: 1,
      img: p2
    },
    {
      id: 2,
      img: p1
    }
  ]
  return (
    <div className="Modeling">
      <h2>3D MODELING & DRAFTING</h2>
      <div className="modeling-container">
        <div className="modeling-content">
          <span>We have experience custom design & reverse-engineering products for different industries and applications. Whether your goal is to develop a cost-saving alternative or equivalent product or to improve efficiency, we demonstrate all of the attributes you need in a source for engineering and design support.</span>

          <h3>Product Development</h3>
          <ul>
            <li>Design concepts based on customer specifications</li>
            <li>Evaluate concepts for assembly & manufacturing (component cost, count, ease of manufacturing, ease of assembly)</li>
            <li>System Level Design</li>
            <li>Evaluate concepts from System Level Design Constraints</li>
          </ul>

          <h3>Detail Design</h3>
          <ul>
            <li>3D Modeling: parts & assembly</li>
            <li>Detail drawings for manufacturing</li>
            <li>Rendering for presentations, catalogues</li>
          </ul>

          <h3>Industry Domains</h3>
          <ul>
            <li>Industrial Automation</li>
            <li>Water Treatment</li>
            <li>Oil & Gas</li>
            <li>Engineering and Construction</li>
            <li>Packaging</li>
          </ul>

          <h3>Computer Aided Design</h3>
          <ul>
            <li>SolidWorks</li>
            <li>Inventor</li>
            <li>AutoCAD</li>
            <li>Cadworx</li>
            <li>Autoplant</li>
          </ul>
        </div>
        <div className="modeling-img">
          {data && data.map((item)=> {
            return <img src={item.img} key={item.id}  alt="" />
          })}
        </div>
      </div>
    </div>
  )
}
