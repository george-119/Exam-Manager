import React from 'react'
import './Navbar.css'
import logo from '../Navbars/Logo/logo-black.png'

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-logo'><img src={logo} style={{height:'60px',width:'60px',opacity:'0.8'}}/> Exam Manager</div>
      <ul className='navbar-menu'>
        <button class="option" onClick={()=>{window.location.replace("/")}}>Home</button>
        <div class="dropdown">
        <button class="dropbtn">Login <i class="fa fa-caret-down"></i></button>
        <div class="dropdown-content">
          <a href="/admin">Admin</a>
          <a href="/teacher">Teacher</a>
          <a href="/student">Student</a>
        </div>
        </div>
        <button class="option">About</button>
        <button class="nav-contact">Contact</button>
      </ul>
    </div>
  )
}

export default Navbar