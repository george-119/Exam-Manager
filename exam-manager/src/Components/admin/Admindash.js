import React,{useEffect} from 'react'
import './Admindash.css'
import HomeNav from '../Navbars/HomeNav'
import background  from '../admin/Images/bg4.jpg'

function Admindash(props) {
  useEffect(() => {document.body.style.backgroundImage = `url(${background})`
})
  
  return (
    <>
    <HomeNav/>
    </>
  )
}

export default Admindash