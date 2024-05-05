import React, { useEffect, useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebars/SidebarData';
import './HomeNav.css'
import { IconContext } from 'react-icons';
import SubMenu from '../Sidebars/SubMenu';
import profile from '../admin/Images/profile.png'
import logo from '../Navbars/Logo/logo-white.png'

function HomeNav() {

    let user = localStorage.getItem("user")
    let email = localStorage.getItem("email")


    const [sidebar,setSidebar] = useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <div className='navbar-logo'><img src={logo} style={{width:'50px',height:'50px'}}/> Exam Manager</div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ui className="nav-menu-items">
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </Link>
                </li>
                <div className='nav-profile' style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <img src={profile} style={{width:'150px', height:'150px',marginTop:'10px'}}/>
                </div>
                <h3 style={{textAlign:'center', color:'white',marginTop:'20px'}}>{user}</h3>
                <hr class="solid" style={{color:'white'}}/>
                {SidebarData.map((item,index)=>{
                    return(
                        <SubMenu item={item} key={index}/>
                    );
                })}
            </ui>
        </div>
        <div className='navbar-profile'>
        <p style={{color:'white'}}>{email}</p>
        <img src={profile} style={{width:'40px', height:'40px'}}/>
        </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default HomeNav