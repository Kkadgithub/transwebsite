import React, { useEffect, useState } from 'react'
import './Banner.scss'
import modeling3d from '../../img/1x/Asset-5.png'
import automationcontrol from '../../img/1x/Asset-1.png'
import detailengineering from '../../img/1x/Asset-3.png'
import modulerskilleddesign from '../../img/1x/Asset-4.png'
import scrubingsystem from '../../img/1x/Asset-6.png'
import softwaredevelopment from '../../img/1x/Asset-2.png'
import { Link, useLocation } from 'react-router-dom'

export default function Banner() {
    const location = useLocation();
    const [heading , setHeading] = useState('')

    const data1 = [
        {
            img: automationcontrol,
            title: 'Industrial \nAutomation',
            link: '/services'
        },
        {
            img: softwaredevelopment,
            title: 'MES & \nSoftware',
            link: '/services/software'
        },
        {
            img: detailengineering,
            title: 'Detail \nEngineering',
            link: '/services/detailengineering'
        },
    ]
    const data2 = [
        {
            img: modulerskilleddesign,
            title: 'Modular Skids \nDesign',
            link: '/services/modular'
        },
        {
            img: modeling3d,
            title: '3D Modeling & \nDrafting',
            link: '/services/modeling'
        },
        {
            img: scrubingsystem,
            title: 'Scrubbing \nSystem',
            link: '/'
        },
    ]

    useEffect(() => {
        if(location.pathname === '/') { 
            setHeading('AUTOMATION \nENGINEERING \nDRAFTING')
        }
        else if (location.pathname === '/showcase') { 
            setHeading('AUTOMATION CONTROL')
        }
        else if (location.pathname === '/services') { 
            setHeading('INDUSTRIAL AUTOMATION')
        }

        else if (location.pathname === '/services/software') { 
            setHeading('MES & \nSOFTWARE')
        }

        else if (location.pathname === '/services/detailengineering') { 
            setHeading('DETAIL \nENGINEERING')
        }

        else if (location.pathname === '/services/modular') { 
            setHeading('MODULAR \nSKIDS DESIGN')
        }

        else if (location.pathname === '/services/modeling') { 
            setHeading('3D MODELING \n& DRAFTING')
        }
    },  [location.pathname])

    return (
        <div className="Banner">
            <div className="left">
                <span>{heading}</span>
            </div>
            <div className="mid">
                <div className="top">
                    {data1.map((box) => {
                        return <div className="box" key={box.title}>
                            <Link to={box.link}>
                                <img src={box.img} alt="" />
                                <span>{box.title}</span>
                            </Link>
                        </div>
                    })}
                </div>
                <div className="bottom">
                    {data2.map((box) => {
                        return <div className="box" key={box.title}>
                            <Link to={box.link}>
                                <img src={box.img} alt="" />
                                <span>{box.title}</span>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
            <div className="right">
            </div>
        </div >
    )
}
