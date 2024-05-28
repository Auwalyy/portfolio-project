import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closenMenu = () =>{
    menuRef.current.style.right="-350px";
  }


  return (
    <div className='navbar'>
        <img src={logo} alt="logo"   />
        <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
        <ul ref={menuRef} className='nav-menu'>
           <img src={menu_close} onClick={closenMenu} className='nav-mob-close' alt="" />
            <li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt='' /> : <></>}</li>
            <li><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt='' /> : <></>}</li>
            <li><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline} alt='' /> : <></>}</li>
            <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline} alt='' /> : <></>}</li>
            <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt='' /> : <></>}</li>
        </ul>
        <div className='nav-connect'>Connect With Me</div>
     </div>
  )
}

export default Navbar