import React, { useEffect, useState } from 'react'
import './Auto.scss'
import p1 from '../../../thumbs/p1.jpg'
import p2 from '../../../thumbs/p2.jpg'
import p3 from '../../../thumbs/p3.jpg'
import p4 from '../../../thumbs/p4.jpg'
import p5 from '../../../thumbs/p5.jpg'
import p6 from '../../../thumbs/p6.jpg'
import p7 from '../../../thumbs/p7.jpg'
import p8 from '../../../thumbs/p8.jpg'
import p9 from '../../../thumbs/p9.jpg'
import p10 from '../../../thumbs/p10.jpg'
import p11 from '../../../thumbs/p11.jpg'
import p12 from '../../../thumbs/p12.jpg'
import p13 from '../../../thumbs/p13.jpg'
import p14 from '../../../thumbs/p14.jpg'
import p15 from '../../../thumbs/p15.jpg'
import { useLocation } from 'react-router-dom'

export default function Auto() {
  const location = useLocation();
  const [showcase , setShowcase] = useState([]);

  const automation_showcase = [
    {
      img: p1,
      title: 'Water Treatment Overview'
    },
    {
      img: p2,
      title: 'Waste Water Treatment Plant'
    },
    {
      img: p3,
      title: 'Desalination'
    },
    {
      img: p4,
      title: 'Oil & Gas'
    },
    {
      img: p5,
      title: 'Chemical'
    },
    {
      img: p6,
      title: 'Airport Baggage Handling'
    },
    {
      img: p7,
      title: 'PLC Panel'
    },
    {
      img: p8,
      title: 'Motor Control Center'
    },
    {
      img: p9,
      title: 'Control Panel'
    },
    {
      img: p10,
      title: 'Panel Layout'
    },
    {
      img: p11,
      title: 'Wiring Schematics'
    },
    {
      img: p12,
      title: 'Interconnection Drawings'
    },
    {
      img: p13,
      title: 'RS Logix Ladder'
    },
    {
      img: p14,
      title: 'GE Versapro Ladder'
    },
    {
      img: p15,
      title: 'C, Ladder & Automation Basic - B&R PLC'
    },
  ]


  useEffect(()=> {
    if(location.pathname.split('/')[1] === 'showcase'){
      setShowcase(automation_showcase);
    }
    console.log(location.pathname.split('/')[1])
    // eslint-disable-next-line
  },  [location.pathname])
  return (
    <div className="Auto">
      <h2>INDUSTRIAL AUTOMATION</h2>
      <div className="img-container">
        {showcase.map((img) => {
          return <div className="box" key={img.title}>
            <img src={img.img} alt="" />
            <span>{img.title}</span>
          </div>
        })}
      </div>
    </div>
  )
}
