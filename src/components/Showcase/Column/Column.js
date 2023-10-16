import React from 'react'
import './Column.scss'
import p1 from '../../../img/Showcase/column/p49.jpg'
import p2 from '../../../img/Showcase/column/p50.jpg'
import p3 from '../../../img/Showcase/column/p51.jpg'
import p4 from '../../../img/Showcase/column/p52.jpg'
import p5 from '../../../img/Showcase/column/p53.jpg'
import p6 from '../../../img/Showcase/column/p54.jpg'
import p7 from '../../../img/Showcase/column/p55.jpg'
import p8 from '../../../img/Showcase/column/p56.jpg'
import p9 from '../../../img/Showcase/column/p57.jpg'
import p10 from '../../../img/Showcase/column/p58.jpg'

export default function Column() {
    const data = [
        {
            id: 1,
            img: p1,
            title: 'Bubble Caps Tray'
        },
        {
            id: 2,
            img: p2,
            title: 'Orifice Distributor'
        },
        {
            id: 3,
            img: p3,
            title: 'Distributor'
        },
        {
            id: 4,
            img: p4,
            title: 'Bed Limiter'
        },
        {
            id: 5,
            img: p5,
            title: 'Chimney Tray'
        },
        {
            id: 6,
            img: p6,
            title: 'Weir Distributor'
        },
        {
            id: 7,
            img: p7,
            title: 'Support Grid'
        },
        {
            id: 8,
            img: p8,
            title: 'Distributors - PTFE'
        },
        {
            id: 9,
            img: p9,
            title: 'Gas Injection Support Plate - Inconel 825'
        },
        {
            id: 10,
            img: p10,
            title: 'Demister Pads - SS316'
        },
    ]

    return (
        <div className='Column'>
            <h2>COLUMN INTERNALS</h2>
            <div className="column-container">
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
