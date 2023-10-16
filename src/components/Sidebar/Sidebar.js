import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import logo from '../../img/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const [links, setLinks] = useState([]);
    const [title, setTitle] = useState('')
    const location = useLocation();
    const SHOWCASE = [
        {
            name: 'INDUSTRIAL AUTOMATION',
            link: '',
            id: 1
        },
        {
            name: '3D MODELING & PIPING',
            link: 'showmodeling',
            id: 6
        },
        {
            name: 'DETAIL ENGINEERING',
            link: 'showdetailengineering',
            id: 2
        },
        {
            name: 'CUSTOM DESIGN',
            link: 'showcoustomdesign',
            id: 3
        },
        {
            name: 'SCRUBBING SYSTEM',
            link: 'showscrubbingsystem',
            id: 4
        },
        {
            name: 'COLUMN INTERNALS',
            link: 'showcolumninternals',
            id: 5
        }
    ]
    const HOME = [
        {
            name: 'CONTROL CUSTOM INTEGRATOR',
            link: '/',
            id: 1
        },
        {
            name: 'MODULAR SKIDS MANUFACTURER',
            link: '/',
            id: 2
        },
        {
            name: 'ENGINEERING FIRM',
            link: '/',
            id: 3
        },
        {
            name: 'CHEMICAL MANUFACTURE PLANT',
            link: '/',
            id: 4
        },
        {
            name: 'SCRUBBING SYSTEM',
            link: '/',
            id: 5
        },
        {
            name: 'TESTIMONIALS',
            link: '/',
            id: 6
        }
    ]

    const SERVICES = [
        {
            name: 'INDUSTRIAL AUTOMATION',
            link: '',
            id: 1
        },
        {
            name: 'MES & SOFTWARE',
            link: 'software',
            id: 2
        },
        {
            name: 'DETAIL ENGINEERING',
            link: 'detailengineering',
            id: 3
        },
        {
            name: 'MODULAR SKIDS DESIGN',
            link: 'modular',
            id: 4
        },
        {
            name: '3D MODELING & DRAFTING',
            link: 'modeling',
            id: 5
        },
    ]


    useEffect(() => {
        if (location.pathname === '/') {
            setTitle('SUCCESS STORIES')
            setLinks(HOME)
        }
        else if (location.pathname.split('/')[1] === 'showcase') {
            setTitle('SHOWCASE')
            setLinks(SHOWCASE)
        }
        else if (location.pathname.split('/')[1] === 'services') {
            setTitle('SERVICES')
            setLinks(SERVICES)
        }

        // eslint-disable-next-line
    }, [location.pathname])
    return (
        <div className="Sidebar">
            <h2>{title}</h2>
            <div className="links">
                {links.map((link) => {
                    return <Link to={link.link} key={link.id}><span className="span">{link.name}</span></Link>
                })}

                {/* <a href="/"><span className="span">3D MODELING & PIPING</span></a>
                <a href="/"><span className="span">DETAIL ENGINEERING</span></a>
                <a href="/"><span className="span">CUSTOM DESIGN</span></a>
                <a href="/"><span className="span">SCRUBBING SYSTEM</span></a>
                <a href="/"><span className="span">COLUMN INTERNALS</span></a> */}
            </div>
            {location.pathname.split('/')[1] !== 'showcase' && <div className="showcase">
                <Link to="/showcase">
                    <span>SHOWCASE</span>
                </Link>
            </div>}
            <div className="logo">
                <img src={logo} alt="" />
            </div>
           {location.pathname !== '/'&& <div className="contact-details">
                <h3>ADDRESS</h3>
                <span>Plot No.17, Sr .No.13,
                    Near Bramha Chaitnya Society,
                    Vidnyan Nagar Road,
                    Bavdhan, Pune, Maharashtra - 411021, INDIA.</span>

                <h3>TELEPHONE</h3>
                <span>+ 91-8983002534,</span>
                <span>+ 91-8983008534,</span>
                <span>+ 91-8446008660</span>

                <h3>E-Mail</h3>
                <span>info@transtechprojects.com</span>
            </div>}
        </div>
    )
}
