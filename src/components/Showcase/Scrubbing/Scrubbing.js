import React from 'react'
import './Scrubbing.scss'
import p1 from '../../../img/Showcase/scrubbingsystem/p43.jpg'
import p2 from '../../../img/Showcase/scrubbingsystem/p44.jpg'
import p3 from '../../../img/Showcase/scrubbingsystem/p45.jpg'
import p4 from '../../../img/Showcase/scrubbingsystem/p46.jpg'
import p5 from '../../../img/Showcase/scrubbingsystem/p47.jpg'
import p6 from '../../../img/Showcase/scrubbingsystem/p48.jpg'

export default function Scrubbing() {
    const data = [
        {
            id: 1,
            img: p1,
            title: 'Scrubbing System'
        },
        {
            id: 2,
            img: p2,
            title: 'Scrubber'
        },
        {
            id: 3,
            img: p3,
            title: 'Venturi with Tank'
        },
        {
            id: 4,
            img: p4,
            title: 'Pumps & Tank'
        },
        {
            id: 5,
            img: p5,
            title: 'Control Panel'
        },
        {
            id: 6,
            img: p6,
            title: 'Operator Interface'
        },
    ]
    return (
        <div className="Scrubbing">
            <h2>SCRUBBING SYSTEM</h2>
            <div className="scrubbing-container">
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
