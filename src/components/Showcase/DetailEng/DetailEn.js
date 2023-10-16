import React from 'react'
import './DetailEn.scss'
import p1 from '../../../img/Showcase/detaileng/p28.jpg'
import p2 from '../../../img/Showcase/detaileng/p29.jpg'
import p3 from '../../../img/Showcase/detaileng/p30.jpg'
import p4 from '../../../img/Showcase/detaileng/p31.jpg'
import p5 from '../../../img/Showcase/detaileng/p32.jpg'
import p6 from '../../../img/Showcase/detaileng/p33.jpg'
import p7 from '../../../img/Showcase/detaileng/p34.jpg'
import p8 from '../../../img/Showcase/detaileng/p35.jpg'
import p9 from '../../../img/Showcase/detaileng/p36.jpg'
import p10 from '../../../img/Showcase/detaileng/p37.jpg'
import p11 from '../../../img/Showcase/detaileng/p38.jpg'
import p12 from '../../../img/Showcase/detaileng/p39.jpg'

export default function DetailEn() {
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
        <div className="DetailEn">
            <h2>DETAIL ENGINEERING</h2>
            <div className="detail-img-container">
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
