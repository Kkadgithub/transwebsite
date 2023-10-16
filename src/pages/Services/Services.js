import React from 'react'
import './Services.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div className="Services">
        <div className="left">
            <Sidebar />
        </div>
        <div className="right">
           <Outlet />
        </div>
    </div>
  )
}
