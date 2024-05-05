import React from 'react'
import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'

function Background(props) {
  
  if(props.playStatus){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
      </video>
    )
  }else if(props.heroCount===0){
    return <img src={image1} className='background fade-in' alt=""/>
  }else if(props.heroCount===1){
    return <img src={image2} className='background fade-in' alt=""/>
  }else if(props.heroCount===2){
    return <img src={image3} className='background fade-in' alt=""/>
  }
}

export default Background