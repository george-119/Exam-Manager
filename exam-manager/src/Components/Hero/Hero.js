import React from 'react'
import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import pause_icon from '../../Assets/pause_icon.png'
import play_icon from '../../Assets/play_icon.png'


function Hero(props) {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{props.heroData.text1}</p>
        <p id='p2'>{props.heroData.text2}</p>
      </div>
      <div className='hero-explore'>
        <p>Let's Get Started</p>
        <a href="/adminreg">
        <img src={arrow_btn} alt=""/></a>
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={()=>{props.setHeroCount(0)}} className={props.heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>{props.setHeroCount(2)}} className={props.heroCount===2?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>{props.setHeroCount(1)}} className={props.heroCount===1?"hero-dot orange":"hero-dot"}></li>
        </ul>
      </div>
      <div className='hero-play'>
        <img onClick={(()=>{props.setPlayStatus(!props.playStatus)})} src={props.playStatus?pause_icon:play_icon} alt=""></img>
        <p>play video</p>
      </div>
    </div>
  )
}

export default Hero