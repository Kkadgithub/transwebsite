import React from 'react'
import './Custom.scss'
import p1 from '../../../img/Showcase/customdesign/p40.jpg'
import p2 from '../../../img/Showcase/customdesign/p41.jpg'
import p3 from '../../../img/Showcase/customdesign/p42.jpg'

export default function Custom() {
    const data = [
        {
            id: 1,
            img: p1,
            title: 'Conveyor'
        },
        {
            id: 2,
            img: p2,
            title: 'Drum Compactor / Washer'
        },
        {
            id: 3,
            img: p3,
            title: 'Part Modeling'
        },
    ]
    return (
        <div className="Custom">
            <h2>CUSTOM DESIGN</h2>
            <div className="custom-container">
                {data && data.map((item) => {
                    return <div className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                    </div>
                })}
            </div>
        </div>
    )
}
