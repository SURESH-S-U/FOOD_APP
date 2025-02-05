import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu,setMenu] = useState("");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className = 'logo' />
        <div className="navbar_menu">
          <Link to = '/' onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <Link to = '/Menu' onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</Link>
          <Link to = 'Mobile app' onClick={() => setMenu("Mobile app")} className={menu==="Mobile app"?"active":""}>Mobile app</Link>
          <Link to = 'Contact us' onClick={() => setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</Link>
        </div>
        <div className="navbar_right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar_search_icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}
