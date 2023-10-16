import React from 'react'
import './Showcase.scss'


import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Showcase() {
 
  return (
    <div className="Showcase">
      <div className="left">
       <Sidebar />

      </div>
      <div className="right">
       <Outlet />
      </div>
    </div>
  )
}
