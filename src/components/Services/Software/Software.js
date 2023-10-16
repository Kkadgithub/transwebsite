import React from 'react'
import './Software.scss'
import { Link } from 'react-router-dom'
import p1 from '../../../img/Software_gallery/ManufacturingSystems.jpg'
import p2 from '../../../img/Software_gallery/mes1.jpg'
import p3 from '../../../img/Software_gallery/mes2.png'
import p4 from '../../../img/Software_gallery/mes3.png'

export default function Software() {
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
    <div className="Software">
      <h2>MES & SOFTWARE</h2>
      <div className="software-container">
        <div className="software-content">
          <h3>Manufacturing Execution Systems</h3>
          <ul>
            <li>Production monitoring and reporting</li>
            <li>Downtime monitoring</li>
            <li>Date and time stamping of activities</li>
            <li>Recipe management</li>
            <li>Data acquisition and archival</li>
            <li>Inventory control & tracking systems</li>
            <li>Resource allocation and status</li>
            <li>Operations/detail scheduling</li>
            <li>Document control</li>
            <li>Product tracking and genealogy</li>
            <li>Labor management</li>
            <li>Quality management</li>
            <li>Process management</li>
            <li>Maintenance management</li>
            <li>Performance analysis</li>
          </ul>

          <h3>We offer software development services such as</h3>
          <ul>
            <li>Custom software development</li>
            <li>Smartphone App development</li>
            <li>Software Systems Maintenance and Support</li>
          </ul>

          <span>We provide these services through our associate company, VASP Solutions LLP.</span>

          <span>Please visit <Link target='_blank' to="https://www.vaspsolutions.com/">vaspsolutions.com</Link> to know more about services and offerings.</span>
        </div>
        <div className="software-img">
            {data && data.map((item)=> {
              return <img src={item.img} key={item.id} alt="" />
            })}

            <div className="img">
              <img src={p3} alt="" />
              <img src={p4} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
