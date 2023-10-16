import React from 'react'
import './ShowModeling.scss'
import p1 from '../../../img/Showcase/modeling3d/p16.jpg'
import p2 from '../../../img/Showcase/modeling3d/p17.jpg'
import p3 from '../../../img/Showcase/modeling3d/p18.jpg'
import p4 from '../../../img/Showcase/modeling3d/p19.jpg'
import p5 from '../../../img/Showcase/modeling3d/p20.jpg'
import p6 from '../../../img/Showcase/modeling3d/p21.jpg'
import p7 from '../../../img/Showcase/modeling3d/p22.jpg'
import p8 from '../../../img/Showcase/modeling3d/p23.jpg'
import p9 from '../../../img/Showcase/modeling3d/p24.jpg'
import p10 from '../../../img/Showcase/modeling3d/p25.jpg'
import p11 from '../../../img/Showcase/modeling3d/p26.jpg'
import p12 from '../../../img/Showcase/modeling3d/p27.jpg'

export default function ShowModeling() {
  const data = [
    {
      id: 1,
      img: p1,
      title: 'Process Plant'
    },
    {
      id: 2,
      img: p2,
      title: 'Utility Piping'
    },
    {
      id: 3,
      img: p3,
      title: 'Desalination Plant'
    },
    {
      id: 4,
      img: p4,
      title: 'Piping Rack & Structure'
    },
    {
      id: 5,
      img: p5,
      title: 'Pipe Supports'
    },
    {
      id: 6,
      img: p6,
      title: 'Piping arrangement'
    },
    {
      id: 7,
      img: p7,
      title: 'Piping Isometrics'
    },
    {
      id: 8,
      img: p8,
      title: 'Piping Spool Drawings'
    },
    {
      id: 9,
      img: p9,
      title: 'Piping Stress Analysis'
    },
    {
      id: 10,
      img: p10,
      title: 'Process Skid'
    },
    {
      id: 11,
      img: p11,
      title: 'Oil & Gas Metering Skid'
    },
    {
      id: 12,
      img: p12,
      title: 'Dry Gas Seal Skid'
    },
  ]

  return (
    <div className="ShowModeling">
        <h2>3D MODELING & PIPING</h2>
        <div className="showmodeling-container">
          {data && data.map((item)=> {
            return <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <span>{item.title}</span>
            </div>
          })}
        </div>
    </div>
  )
}
