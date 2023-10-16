import React from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Home() {
    return (
        <div className="Home">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <h2>Welcome to Trans Tech Projects Pvt. Ltd.</h2>
                <div className="right-content">
                    <span>Trans Tech Projects Pvt. Ltd. is promoted by US graduates and offers a wide range of services such as Project Management, Detail Engineering, Design & Drafting, Automation & Control with expertise in Skid Mounted Package Units, Industrial and Factory Automation, Manufacturing Execution Systems.</span>
                    <span>We are an ISO 9001 certified company, and have elaborate procedures for project execution, and testing to meet international quality standards. Our team of 120 qualified professionals has a blend of Managers, Engineers, Programmers, CAD Designers in various disciplines. We have executed detail engineering and automation projects in Oil & Gas, Water / Waste Water, Chemical / Pharmaceutical domains.
                        We believe in long-term relationships with our clients where we work as a cost effective satellite office. We consistently thrive to deliver quality output, stick to project schedules, and always offer very competitive rates! Our Offshore Model has proven to be a cost effective for our satisfied clients all around the world! We have served clients in USA, Canada, Europe, Australia, Middle East and South East Asia.</span>
                </div>
            </div>
        </div>
    )
}
