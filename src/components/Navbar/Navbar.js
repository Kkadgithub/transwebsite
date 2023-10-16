import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import menu from '../../img/menu/menu.png'

export default function Navbar() {
    const [show , setShow] = useState(false)

    const handleShowMenu = (e)=> {
        e.preventDefault();
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
    }
  return (
    <div className="Navbar">
        <div className="logoAndmenu">
            <img src={logo} className="logo" alt="" />
            <img src={menu} onClick={handleShowMenu} className="menu" alt="" />
        </div>
        <ul className={"showul"}>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/">ABOUT</Link>
            </li>
            <li>
                <Link to="/services">SERVICE</Link>
            </li>
            <li>
                <Link to="/">PRODUCTS</Link>
            </li>
            <li>
                <Link to="/">CUSTOMERS</Link>
            </li>
            <li>
                <Link to="/">OFFSHORE MODEL</Link>
            </li>
            <li>
                <Link to="/">CAREERS</Link>
            </li>
            <li>
                <Link to="/">CONTACT US</Link>
            </li>
            <li>
                <Link to="/">WEBMAIL</Link>
            </li>
        </ul>
    </div>
  )
}
