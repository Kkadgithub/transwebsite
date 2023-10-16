import React from 'react'
import './Automation.scss'
import { Link } from 'react-router-dom'
import p1 from '../../../img/automation_gallery/TT_AUT_02.bmp'
import p2 from '../../../img/automation_gallery/TT_AUT_03.jpg'
import p3 from '../../../img/automation_gallery/p7.jpg'
import p4 from '../../../img/automation_gallery/TT_AUT_04.jpg'

export default function Automation() {
    const automation_showcase = [
        {
            id: 1,
            img: p1
        },
        {
            id: 2,
            img: p2
        },
        {
            id: 3,
            img: p3
        },
        {
            id: 4,
            img: p4
        },
    ]

    return (
        <div className="Automation">
            <h2>INDUSTRIAL AUTOMATION</h2>
            <div className="right-content">
                <div className="content-container">
                    <span>Trans Tech's promoters earlier worked with Tata Honeywell Ltd. (now, Honeywell Automation India Ltd.). Both of them have significant experience on execution of Refinery, Power Plant DCS Projects. Trans Tech's Automation team has expertise on all leading platforms of PLC, HMI & SCADA.</span>
                    <h3>Our Services include:</h3>
                    <ul>
                        <li>System Architecture Selection</li>
                        <li>PLC / DCS Programming using Ladder Logic, Function Blocks, Structured Text</li>
                        <li>Graphic Design for DCS , SCADA and OIT</li>
                        <li>Control Panel / Marshalling Cabinet Design</li>
                        <li>Panel Wiring / Loop Wiring / Interconnection Drawings</li>
                        <li>Preparation of Submittals, O&M, Training Manuals</li>
                    </ul>

                    <h3>Our expertise:</h3>
                    <ul>
                        <li>Allen-Bradley: PLC-5, SLC-500, MicroLogix, CompactLogix and ControlLogix</li>
                        <li>Modicon: Quantum, Momentum, Compact</li>
                        <li>GE Fanuc: Versamax, 90-30 series</li>
                        <li>Automation Direct: Series 05, 06, 305, 405</li>
                        <li>Siemens: TI505, S7-200, S7-300, S7-400</li>
                        <li>B&R: System 2003, 2005, Power Panel</li>
                        <li>Mitsubishi : Fx, AnSH</li>
                        <li>ABB: Advant</li>
                        <li>DCS: Emerson Delta V and Yokogawa CS 3000, Stardom</li>
                    </ul>

                    <h3>Our expertise in SCADA includes following:</h3>
                    <ul>
                        <li>SCADA: RS-View32, Fix 32, iFIX, Wonderware, Cimplicity, WinCC, Citect, Lookout</li>
                        <li>Historian Systems: iHistorian, INSQL, RSSQL</li>
                        <li>Operator Interfaces: Panelview Plus, C-More, Maple, Xycom, Red Lion</li>
                        <li>Alarm Dialer Software: Scadalarm, Scadatech</li>
                    </ul>

                    <h3>Our domain expertise include:</h3>
                    <ul>
                        <li>Oil & Gas</li>
                        <li>Water / Waste Water</li>
                        <li>Chemical & Pharmaceutical</li>
                        <li>Renewable Energy</li>
                        <li>Mixing, batching & blending</li>
                        <li>Material Handling</li>
                        <li>Packaging and assembly lines</li>
                        <li>Machine Vision</li>
                        <li>Servo and positioning</li>
                        <li>Robots</li>
                    </ul>

                    <span>Trans Tech has developed a software application in .Net to view control system's real time data via web using standard browsers. We offer 24 hours on line support using latest tools of Desktop Sharing and Video Conferencing.</span>
                </div>
                <div className="img-container">
                    <Link to="/showcase">SHOWCASE</Link>

                    {automation_showcase && automation_showcase.map((item) => {
                        return <img src={item.img} key={item.id} alt="" />
                    })}
                </div>
            </div>
        </div>
    )
}
